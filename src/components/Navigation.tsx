const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/80">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-serif-cn text-lg tracking-widest text-foreground">
          艺术性
        </span>
        <div className="flex gap-8 items-center">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            关于
          </a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            项目
          </a>
          <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            作品
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            联系
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
