export interface Article {
  /** Stable URL segment derived from filename (e.g. 2025-11-3) */
  slug: string;
  title: string;
  excerpt: string;
  author?: string;
  /** ISO date string (YYYY-MM-DD) */
  published: string;
  topics: string[];
  content: string;
}

type RawArticle = {
  title?: string;
  excerpt?: string;
  author?: string;
  published?: string;
  topics?: string[];
  content: string;
};

const parseFrontmatter = (raw: string): RawArticle => {
  const text = raw.replace(/^\uFEFF/, ""); // strip BOM if any
  if (!text.startsWith("---")) return { content: text };

  const end = text.indexOf("\n---", 3);
  if (end === -1) return { content: text };

  const fmBlock = text.slice(3, end).trim();
  const content = text.slice(end + "\n---".length).replace(/^\s*\n/, "");

  const out: Omit<RawArticle, "content"> = {};

  for (const line of fmBlock.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf(":");
    if (idx === -1) continue;

    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();

    // strip wrapping quotes
    value = value.replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");

    if (key === "topics") {
      // topics: [A, B]
      const m = value.match(/^\[(.*)\]$/);
      if (m) {
        out.topics = m[1]
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);
      } else if (value) {
        out.topics = value.split(",").map((s) => s.trim()).filter(Boolean);
      }
      continue;
    }

    if (key === "title") out.title = value;
    if (key === "excerpt") out.excerpt = value;
    if (key === "author") out.author = value;
    if (key === "published") out.published = value;
  }

  return { ...out, content };
};

const articleModules = import.meta.glob("../content/articles/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const toSlug = (path: string) => {
  const file = path.split("/").pop() || path;
  return file.replace(/\.md$/, "");
};

export const articles: Article[] = Object.entries(articleModules)
  .map(([path, raw]) => {
    const slug = toSlug(path);
    const parsed = parseFrontmatter(raw);

    return {
      slug,
      title: parsed.title || slug,
      excerpt: parsed.excerpt || "",
      author: parsed.author,
      published: parsed.published || "1970-01-01",
      topics: parsed.topics || [],
      content: parsed.content,
    } satisfies Article;
  })
  .sort((a, b) => (a.published < b.published ? 1 : -1));

export const getArticleBySlug = (slug: string | undefined) =>
  articles.find((a) => a.slug === slug);

