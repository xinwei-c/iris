import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { articles, categories } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = articles.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 text-center">
          <p className="text-muted-foreground">Article not found.</p>
        </div>
      </div>
    );
  }

  const cat = categories.find((c) => c.id === article.tag);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-8 px-6">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <button
            onClick={() => navigate("/articles")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to Articles
          </button>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] tracking-wider px-3 py-1 rounded-full border border-border text-muted-foreground">
              {cat?.label || article.tag}
            </span>
            <span className="text-xs text-muted-foreground">
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <h1 className="font-serif-cn text-3xl md:text-5xl font-light mb-6">
            {article.title}
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-8">
            {article.excerpt}
          </p>

          <div className="w-12 h-[1px] bg-primary mb-10" />

          {article.content ? (
            <article className="prose prose-neutral max-w-none prose-headings:font-serif-cn prose-headings:font-light prose-headings:text-[hsl(var(--heading-secondary))] prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5 prose-p:text-foreground/70 prose-p:leading-[1.9] prose-p:text-base prose-li:text-foreground/70 prose-li:leading-[1.8] prose-strong:text-foreground prose-a:text-primary prose-ol:mt-4 prose-ul:mt-2 prose-ul:ml-4 prose-ol:ml-4 prose-blockquote:border-l-primary/30 prose-blockquote:text-muted-foreground prose-blockquote:italic">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </article>
          ) : (
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-base italic">
                Full article coming soon...
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticleDetailPage;
