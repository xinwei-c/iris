export const extractFirstMarkdownImage = (content?: string) => {
  const normalizedContent = content?.trimStart();
  const firstImageMatch = normalizedContent?.match(/^\s*!\[[^\]]*\]\(([^)]+)\)/m);

  return firstImageMatch ? firstImageMatch[1] : null;
};

export const stripFirstMarkdownImage = (content?: string) => {
  const normalizedContent = content?.trimStart();

  return normalizedContent
    ? normalizedContent.replace(/^\s*!\[[^\]]*\]\([^)]+\)\s*\n*/m, "")
    : normalizedContent;
};