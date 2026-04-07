import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { articles, categories } from "@/data/projects";

const ArticlesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-8 px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4">WRITING</p>
          <h1 className="font-serif-cn text-4xl md:text-5xl font-light text-foreground mb-6">
            Articles
          </h1>
          <div className="w-12 h-[1px] bg-primary mx-auto mb-6" />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Reflections on data, design, technology, and the spaces between —
            written with the same care as brewing a good cup of tea.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-2xl mx-auto space-y-0">
          {articles.map((article, i) => {
            const cat = categories.find((c) => c.id === article.tag);
            return (
              <article
                key={article.id}
                className="group border-b border-border py-8 first:pt-0 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-wider px-2 py-1 rounded-full border border-border text-muted-foreground">
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
                <h2 className="font-serif-cn text-xl text-foreground group-hover:text-primary transition-colors mb-2">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
              </article>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ArticlesPage;
