import { Instagram, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="px-6 py-16 border-t border-border">
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
      <span className="text-xl tracking-wide text-[hsl(340,60%,70%)]" style={{ fontFamily: "'Dancing Script', cursive" }}>Iris Chen</span>
      <div className="flex gap-5 items-center">
        <a href="https://www.instagram.com/xinwei.owo/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
          <Instagram size={18} />
        </a>
        <a href="https://github.com/xinwei-c" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/iris-xinwei-chen-63b246272/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href="mailto:cxwxinwei@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
