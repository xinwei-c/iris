import Navigation from "@/components/Navigation";
import TeaBagSelector from "@/components/TeaBagSelector";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero with ink wash background */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Mountain landscape ink wash painting"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-background/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4 animate-fade-in">
            PORTFOLIO
          </p>
          <h1 className="font-serif-cn text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.1em] text-foreground">
            Iris Chen
          </h1>
          <div className="mt-6 flex gap-3 items-center justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-12 h-[1px] bg-morandi-green" />
            <p className="font-serif-cn text-lg text-muted-foreground tracking-[0.2em]">
              艺术性
            </p>
            <div className="w-12 h-[1px] bg-morandi-pink" />
          </div>
          <p className="mt-6 text-muted-foreground text-sm tracking-wide max-w-md mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            在安静中发现美，在细节中感受艺术
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-50 z-10">
          <span className="text-xs text-muted-foreground tracking-[0.2em]">SCROLL</span>
          <div className="w-[1px] h-8 bg-muted-foreground animate-pulse" />
        </div>
      </section>

      {/* Tea bag selection section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground tracking-[0.2em] mb-3">
            选一杯茶，开始探索
          </p>
          <h2 className="font-serif-cn text-3xl md:text-4xl text-foreground font-light">
            Choose Your Tea
          </h2>
          <p className="text-sm text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
            每一种茶代表一个领域，点击茶包探索对应的项目与作品
          </p>
        </div>

        <TeaBagSelector />
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-serif-cn text-lg tracking-widest text-foreground">Iris Chen</span>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Email</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
