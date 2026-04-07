import Navigation from "@/components/Navigation";
import TeaCeremony from "@/components/TeaCeremony";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="font-serif-cn text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.15em] text-foreground">
          艺术性
        </h1>
        <div className="mt-6 flex gap-3 items-center">
          <div className="w-12 h-[1px] bg-morandi-green" />
          <p className="text-sm text-muted-foreground tracking-widest">ARTISTRY</p>
          <div className="w-12 h-[1px] bg-morandi-pink" />
        </div>
        <p className="mt-8 text-muted-foreground text-sm tracking-wide max-w-md text-center leading-relaxed">
          在安静中发现美，在细节中感受艺术
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs text-muted-foreground tracking-widest">SCROLL</span>
          <div className="w-[1px] h-8 bg-muted-foreground animate-pulse" />
        </div>
      </section>

      {/* Tea ceremony section */}
      <section className="min-h-screen px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground tracking-widest mb-2">一杯茶的时间</p>
            <h2 className="font-serif-cn text-2xl md:text-3xl text-foreground font-light">
              泡一杯茶，慢慢探索
            </h2>
          </div>
          <TeaCeremony />
        </div>
      </section>

      {/* Placeholder sections */}
      <section id="projects" className="min-h-[50vh] px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif-cn text-3xl text-foreground font-light mb-12">项目</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[4/3] rounded-lg bg-muted border border-border flex items-center justify-center">
                <span className="text-muted-foreground text-sm">项目 {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="min-h-[50vh] px-6 py-20 bg-morandi-beige/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif-cn text-3xl text-foreground font-light mb-12">作品</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square rounded-lg bg-muted border border-border flex items-center justify-center">
                <span className="text-muted-foreground text-sm">作品 {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="px-6 py-16 border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-serif-cn text-lg tracking-widest text-foreground">艺术性</span>
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
