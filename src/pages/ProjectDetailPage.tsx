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

          {/* Hero image placeholder */}
          <div className="aspect-[16/9] rounded-lg bg-muted mb-12 flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Project Image</span>
          </div>

          {/* Markdown content */}
          {project.content ? (
            <article className="prose prose-neutral max-w-none prose-headings:font-serif-cn prose-headings:font-light prose-h1:text-3xl prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary">
              <ReactMarkdown>{project.content}</ReactMarkdown>
            </article>
          ) : (
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-base">
                {project.details || project.description}
              </p>
            </div>
          )}

          {/* Tools */}
          {project.tools && project.tools.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="font-serif-cn text-lg mb-4">Tools & Technologies</h2>
              <div className="flex gap-2 flex-wrap">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
