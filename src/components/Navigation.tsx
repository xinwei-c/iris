import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { to: "/#tea", label: "Work" },
    { to: "/articles", label: "Articles" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-[hsl(340,60%,95%)]/80">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl tracking-wide text-[hsl(340,60%,70%)] hover:opacity-70 transition-opacity" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Iris Chen
        </Link>
        <div className="flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm tracking-wide transition-colors ${
                location.pathname === link.to
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
