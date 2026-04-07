import { useState, useRef } from "react";
import { photoSeries } from "@/data/photoSeries";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Search, Camera } from "lucide-react";

const PhotographyPage = () => {
  const [search, setSearch] = useState("");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const filtered = photoSeries.filter(
    (s) =>
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase()) ||
      (s.location?.toLowerCase() || "").includes(search.toLowerCase())
  );

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Generate deterministic heights for masonry placeholders
  const getPhotoHeight = (seriesIdx: number, photoIdx: number) => {
    const heights = [220, 280, 200, 320, 240, 300, 260, 180, 340, 210];
    return heights[(seriesIdx * 3 + photoIdx) % heights.length];
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <p className="text-sm tracking-[0.3em] text-muted-foreground mb-5 flex items-center justify-center gap-2">
            <Camera size={18} />
            CHAI TEA
          </p>
          <h1 className="font-serif-cn text-5xl md:text-6xl font-light mb-8">
            Photography
          </h1>
          <div className="w-12 h-[1px] bg-primary mx-auto mb-6" />
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Documentary, editorial, and fine art photography — capturing fleeting
            moments and the quiet beauty of everyday life.
          </p>
        </div>
      </section>

      {/* Menu + Search */}
      <div className="sticky top-16 z-20 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center gap-4">
          {/* Series nav */}
          <div className="flex gap-4 overflow-x-auto flex-1">
            {photoSeries.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap tracking-wide"
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search series..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-muted/50 border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Series blocks */}
      <div className="max-w-6xl mx-auto px-6">
        {filtered.map((series, si) => (
          <section
            key={series.id}
            ref={(el) => { sectionRefs.current[series.id] = el; }}
            className="py-16 border-b border-border last:border-b-0 scroll-mt-32"
          >
            {/* Series header */}
            <div className="mb-10 max-w-2xl">
              <p className="text-xs tracking-[0.2em] text-muted-foreground mb-2">
                {series.year} {series.location && `· ${series.location}`}
              </p>
              <h2 className="font-serif-cn text-3xl md:text-4xl font-light mb-2">
                {series.title}
              </h2>
              {series.subtitle && (
                <p className="text-sm text-muted-foreground italic mb-4">
                  {series.subtitle}
                </p>
              )}
              <p className="text-base text-muted-foreground leading-relaxed">
                {series.description}
              </p>
            </div>

            {/* Masonry grid */}
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {Array.from({ length: series.photoCount }).map((_, pi) => (
                <div
                  key={pi}
                  className="break-inside-avoid rounded-lg bg-muted overflow-hidden group cursor-pointer animate-fade-in"
                  style={{
                    height: `${getPhotoHeight(si, pi)}px`,
                    animationDelay: `${pi * 0.05}s`,
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
                    <span className="text-muted-foreground text-xs">
                      {series.title} — {pi + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No series found.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default PhotographyPage;
