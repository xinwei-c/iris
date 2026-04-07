import { useParams, useNavigate, Link } from "react-router-dom";
import { categories, projects } from "@/data/projects";
import Navigation from "@/components/Navigation";

const ProjectsPage = () => {
  const { tag } = useParams<{ tag: string }>();
  const navigate = useNavigate();

  const currentCategory = categories.find((c) => c.id === tag);
  const filteredProjects = tag
    ? projects.filter((p) => p.tags.includes(tag))
    : projects;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Category tabs */}
      <div className="pt-20 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto flex gap-6 overflow-x-auto py-4">
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

      {/* Category title */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {currentCategory && (
            <div className="mb-16 text-center">
              <p className="text-sm tracking-widest text-muted-foreground mb-3">
                {currentCategory.teaType}
              </p>
              <h1 className="font-serif-cn text-4xl md:text-5xl font-light text-foreground">
                {currentCategory.label}
              </h1>
            </div>
          )}

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300 bg-card"
              >
                <div className="aspect-[16/10] rounded-md bg-muted mb-5 flex items-center justify-center overflow-hidden">
                  <span className="text-muted-foreground text-sm">
                    {project.title}
                  </span>
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
