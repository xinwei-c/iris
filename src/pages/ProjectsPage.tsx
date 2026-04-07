import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categories, projects } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Newspaper, Megaphone, BarChart3, Brain, Camera } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  journalism: <Newspaper size={18} />,
  marketing: <Megaphone size={18} />,
  analytics: <BarChart3 size={18} />,
  ai: <Brain size={18} />,
  photography: <Camera size={18} />,
};

const ProjectsPage = () => {
  const { tag } = useParams<{ tag: string }>();
  const navigate = useNavigate();
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [tag]);

  const currentCategory = categories.find((c) => c.id === tag);
  const filteredProjects = tag
    ? projects.filter((p) => p.tags.includes(tag))
    : projects;

  const isPhotography = tag === "photography";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Category title & intro */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {currentCategory && (
            <>
              <p className="text-sm tracking-[0.3em] text-muted-foreground mb-5 flex items-center justify-center gap-2">
                {categoryIcons[currentCategory.id]}
                {currentCategory.teaType.toUpperCase()}
              </p>
              <h1 className="font-serif-cn text-5xl md:text-6xl font-light text-foreground mb-8">
                {currentCategory.label}
              </h1>
              <div className="w-12 h-[1px] bg-primary mx-auto mb-8" />
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {currentCategory.intro}
              </p>

              {/* Tea culture quote */}
              <div className="mt-10 px-10 py-8 border-l-2 border-primary/30 text-left max-w-2xl mx-auto">
                <p className="text-base text-muted-foreground leading-[1.9] italic">
                  "{currentCategory.teaStory}"
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Category tabs */}
      <div className="px-6 border-b border-border">
        <div className="max-w-5xl mx-auto flex gap-6 overflow-x-auto py-4 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/projects/${cat.id}`)}
              className={`text-sm transition-all duration-300 tracking-wide whitespace-nowrap pb-2 ${
                cat.id === tag
                  ? "text-foreground border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {isPhotography ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredProjects.map((project, i) => (
                <div
                  key={project.id}
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="break-inside-avoid group cursor-pointer overflow-hidden rounded-lg animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="bg-muted flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ height: `${200 + (i % 3) * 80}px` }}
                  >
                    <span className="text-muted-foreground text-sm">{project.title}</span>
                  </div>
                  <div className="py-3">
                    <h3 className="text-sm text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, i) => (
                <div
                  key={project.id}
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="group border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300 bg-card animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="aspect-[16/10] rounded-md bg-muted mb-5 flex items-center justify-center overflow-hidden">
                    <span className="text-muted-foreground text-sm">{project.title}</span>
                  </div>
                  <h3 className="text-lg text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {project.tags.map((t) => {
                      const cat = categories.find((c) => c.id === t);
                      return (
                        <span
                          key={t}
                          className="text-[10px] tracking-wider px-2 py-1 rounded-full border border-border text-muted-foreground"
                        >
                          {cat?.label || t}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
