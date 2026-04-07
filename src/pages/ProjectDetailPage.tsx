import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { projects, categories } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 text-center">
          <p className="text-muted-foreground">Project not found.</p>
        </div>
      </div>
    );
  }

  const primaryTag = project.tags[0];
  const cat = categories.find((c) => c.id === primaryTag);
  const normalizedContent = project.content?.trimStart();
  const firstImageMatch = normalizedContent?.match(/^\s*!\[[^\]]*\]\(([^)]+)\)/m);
  const markdownHeroImage = firstImageMatch ? firstImageMatch[1] : null;
  const heroImage = markdownHeroImage || project.image;
  const contentWithoutHero = normalizedContent
    ? normalizedContent.replace(/^\s*!\[[^\]]*\]\([^)]+\)\s*\n*/m, '')
    : normalizedContent;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-8 px-6">
        <div className="max-w-3xl mx-auto animate-fade-in">
          {/* Back link */}
          <button
            onClick={() => navigate(`/projects/${primaryTag}`)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to {cat?.label || "Projects"}
          </button>

          {/* Tags */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {project.tags.map((t) => {
              const c = categories.find((cat) => cat.id === t);
              return (
                <span
                  key={t}
                  className="text-[10px] tracking-wider px-3 py-1 rounded-full border border-border text-muted-foreground"
                >
                  {c?.label || t}
                </span>
              );
            })}
            {project.year && (
              <span className="text-[10px] tracking-wider px-3 py-1 rounded-full border border-border text-muted-foreground">
                {project.year}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-serif-cn text-3xl md:text-5xl font-light mb-4">
            {project.title}
          </h1>

          {project.role && (
            <p className="text-sm text-muted-foreground tracking-wide mb-8">
              {project.role}
            </p>
          )}

          <div className="w-12 h-[1px] bg-primary mb-10" />

          {/* Hero image */}
          {heroImage ? (
            <div className="aspect-[16/9] rounded-lg overflow-hidden mb-12">
              <img src={heroImage} alt={project.title} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="aspect-[16/9] rounded-lg bg-muted mb-12 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Project Image</span>
            </div>
          )}

          {/* Markdown content */}
          {project.content ? (
            <article className="prose prose-neutral max-w-none prose-headings:font-serif-cn prose-headings:font-light prose-headings:text-[hsl(210,60%,72%)] prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5 prose-p:text-foreground/70 prose-p:leading-[1.9] prose-p:text-base prose-li:text-foreground/70 prose-li:leading-[1.8] prose-strong:text-foreground prose-a:text-primary prose-ol:mt-4 prose-ul:mt-2 prose-ul:ml-4 prose-ol:ml-4">
              <ReactMarkdown>{contentWithoutHero || ""}</ReactMarkdown>
            </article>
          ) : (
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-base">
                {project.details || project.description}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
