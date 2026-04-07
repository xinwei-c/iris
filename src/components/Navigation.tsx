const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/70">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-serif-cn text-lg tracking-widest text-foreground hover:opacity-70 transition-opacity">
          Iris Chen
        </a>
        <div className="flex gap-8 items-center">
          <a href="/#tea" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            作品集
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            关于
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            联系
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
