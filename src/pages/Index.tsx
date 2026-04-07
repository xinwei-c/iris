import Navigation from "@/components/Navigation";
import TeaBagSelector from "@/components/TeaBagSelector";
import { Instagram, Github, Linkedin, Mail } from "lucide-react";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const handleScrollToTea = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("tea");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Mountain landscape ink wash painting"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        </div>

        <div className="relative z-10 text-center px-6">
          <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4 animate-fade-in">
            PORTFOLIO
          </p>
          <h1 className="font-serif-cn text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.1em] text-foreground animate-fade-in" style={{ animationDelay: "0.15s" }}>
            Iris Chen
          </h1>
        </div>

        <button
          onClick={handleScrollToTea}
          className="absolute bottom-12 flex flex-col items-center gap-2 opacity-50 z-10 hover:opacity-80 transition-opacity"
        >
          <span className="text-xs text-muted-foreground tracking-[0.2em]">SCROLL</span>
          <div className="w-[1px] h-8 bg-muted-foreground animate-pulse" />
        </button>
      </section>

      {/* Tea bag selection */}
      <section id="tea" className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 scroll-mt-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm text-muted-foreground tracking-[0.2em] mb-3">
            Pick a tea, start exploring
          </p>
          <h2 className="font-serif-cn text-3xl md:text-4xl text-foreground font-light">
            Choose Your Tea
          </h2>
          <p className="text-sm text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
            Each tea represents a discipline — click a tea bag to explore the corresponding projects and work
          </p>
        </div>

        <TeaBagSelector />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
