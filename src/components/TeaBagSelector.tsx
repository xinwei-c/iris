import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories, type TeaBagCategory } from "@/data/projects";

const teaBagPaths: Record<string, { body: string; accent: string }> = {
  journalism: {
    body: "M15 35 L15 75 Q15 78, 18 78 L42 78 Q45 78, 45 75 L45 35 Q45 32, 42 32 L18 32 Q15 32, 15 35Z",
    accent: "M22 42 L38 42 M22 52 L38 52 M22 62 L35 62",
  },
  marketing: {
    body: "M14 34 Q14 30, 18 30 L42 30 Q46 30, 46 34 L46 72 Q46 78, 40 78 L20 78 Q14 78, 14 72Z",
    accent: "M24 44 L36 44 M20 54 L40 54 M26 64 L34 64",
  },
  analytics: {
    body: "M16 33 L16 74 Q16 78, 20 78 L40 78 Q44 78, 44 74 L44 33 Q44 30, 40 30 L20 30 Q16 30, 16 33Z",
    accent: "M22 40 L22 68 M30 45 L30 68 M38 50 L38 68",
  },
  ai: {
    body: "M15 32 Q15 28, 20 28 L40 28 Q45 28, 45 32 L45 75 Q45 78, 40 78 L20 78 Q15 78, 15 75Z",
    accent: "M24 40 Q30 48, 36 40 M24 55 Q30 63, 36 55 M28 68 L32 68",
  },
  design: {
    body: "M14 33 Q14 29, 19 29 L41 29 Q46 29, 46 33 L46 74 Q46 78, 41 78 L19 78 Q14 78, 14 74Z",
    accent: "M20 42 L40 42 L40 62 L20 62 Z M24 50 L36 54",
  },
  photography: {
    body: "M14 35 L14 73 Q14 78, 19 78 L41 78 Q46 78, 46 73 L46 35 Q46 30, 41 30 L19 30 Q14 30, 14 35Z",
    accent: "M22 42 L38 50 M22 50 L38 58 M22 58 L38 66",
  },
};

type AnimPhase = "idle" | "dropping" | "steaming" | "pouring" | "done";

interface TeaBagProps {
  category: TeaBagCategory;
  index: number;
  onSelect: (category: TeaBagCategory) => void;
  isAnimating: boolean;
}

const TeaBag = ({ category, index, onSelect, isAnimating }: TeaBagProps) => {
  const paths = teaBagPaths[category.id];
  const delay = index * 0.15;

  return (
    <div
      className={`flex flex-col items-center cursor-pointer group ${isAnimating ? "pointer-events-none opacity-40" : ""}`}
      onClick={() => onSelect(category)}
      style={{ animation: `float 3s ease-in-out ${delay}s infinite` }}
    >
      <svg
        width="80"
        height="140"
        viewBox="0 0 60 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2"
      >
        <line x1="30" y1="0" x2="30" y2="30" stroke={`hsl(${category.hsl})`} strokeWidth="1" opacity="0.6" />
        <rect x="22" y="0" width="16" height="10" rx="2" stroke={`hsl(${category.hsl})`} strokeWidth="1" fill="none" opacity="0.8" />
        <path d={paths.body} stroke={`hsl(${category.hsl})`} strokeWidth="1.5" fill={`hsl(${category.hsl} / 0.08)`} />
        <path d={paths.accent} stroke={`hsl(${category.hsl})`} strokeWidth="0.8" opacity="0.4" fill="none" />
      </svg>
      <div className="mt-3 text-center transition-opacity duration-300 opacity-70 group-hover:opacity-100">
        <p className="text-[10px] text-muted-foreground tracking-wider mt-0.5">{category.teaTypeCn}</p>
        <p className="text-[9px] text-muted-foreground/70 tracking-wide">{category.teaType}</p>
        <p className="text-xs text-foreground font-medium mt-0.5">{category.label}</p>
      </div>
    </div>
  );
};

const TeaBagSelector = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<AnimPhase>("idle");
  const [selectedCat, setSelectedCat] = useState<TeaBagCategory | null>(null);

  const handleSelect = (category: TeaBagCategory) => {
    if (phase !== "idle") return;
    setSelectedCat(category);
    setPhase("dropping");
    setTimeout(() => setPhase("steaming"), 1000);
    setTimeout(() => setPhase("pouring"), 2200);
    setTimeout(() => {
      setPhase("done");
      navigate(`/projects/${category.id}`);
    }, 3800);
  };

  const color = selectedCat ? `hsl(${selectedCat.hsl})` : "hsl(var(--muted-foreground))";

  return (
    <div className="flex flex-col items-center gap-12">
      {/* Tea bags */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 px-4">
        {categories.map((cat, i) => (
          <TeaBag key={cat.id} category={cat} index={i} onSelect={handleSelect} isAnimating={phase !== "idle"} />
        ))}
      </div>

      {/* Tea ceremony animation area */}
      {phase !== "idle" && (
        <div className="relative flex flex-col items-center justify-center h-[380px] w-full max-w-md animate-fade-in">
          {/* Falling tea bag */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2"
            style={{
              animation: phase === "dropping" ? "teabag-drop 1s ease-out forwards" : "none",
              opacity: phase === "dropping" ? 1 : 0,
              transition: "opacity 0.3s",
            }}
          >
            <svg width="60" height="100" viewBox="0 0 60 110" fill="none">
              <line x1="30" y1="0" x2="30" y2="30" stroke={color} strokeWidth="1.5" />
              <rect x="15" y="30" width="30" height="40" rx="3" stroke={color} strokeWidth="1.5" fill="none" />
            </svg>
          </div>

          {/* Teapot */}
          <div
            className="absolute top-[40px] left-1/2 -translate-x-1/2"
            style={{
              animation: phase === "pouring" ? "pour-tea 1.6s ease-in-out" : "none",
              transformOrigin: "right bottom",
            }}
          >
            <svg width="180" height="130" viewBox="0 0 180 140" fill="none">
              <ellipse cx="90" cy="95" rx="55" ry="40" stroke={color} strokeWidth="1.5" fill="none" />
              <ellipse cx="90" cy="58" rx="35" ry="8" stroke={color} strokeWidth="1.5" fill="none" />
              <line x1="90" y1="42" x2="90" y2="50" stroke={color} strokeWidth="1.5" />
              <circle cx="90" cy="40" r="4" stroke={color} strokeWidth="1.5" fill="none" />
              <path d="M145 85 Q165 75, 170 60" stroke={color} strokeWidth="1.5" fill="none" />
              <path d="M35 75 Q10 85, 15 105 Q20 120, 40 110" stroke={color} strokeWidth="1.5" fill="none" />
            </svg>

            {/* Steam */}
            {(phase === "steaming" || phase === "pouring") && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-0.5 h-5 rounded-full opacity-0"
                    style={{
                      backgroundColor: color,
                      animation: `steam-rise 1.5s ease-out ${i * 0.3}s infinite`,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Pour stream */}
            {phase === "pouring" && (
              <div
                className="absolute right-0 top-[28px] w-[2px] h-12 rounded-full opacity-50"
                style={{ backgroundColor: color, transform: "rotate(25deg)", transformOrigin: "top" }}
              />
            )}
          </div>

          {/* Cup */}
          <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2">
            <svg width="60" height="45" viewBox="0 0 80 60" fill="none">
              <path d="M15 10 L20 50 Q40 58, 60 50 L65 10" stroke={color} strokeWidth="1.5" fill="none" />
              <ellipse cx="40" cy="10" rx="25" ry="5" stroke={color} strokeWidth="1.5" fill="none" />
              <path d="M65 18 Q80 22, 78 35 Q76 45, 65 42" stroke={color} strokeWidth="1.5" fill="none" />
            </svg>
          </div>

          {/* Loading text */}
          <p className="absolute bottom-0 text-xs text-muted-foreground tracking-widest animate-pulse">
            Brewing...
          </p>
        </div>
      )}
    </div>
  );
};

export default TeaBagSelector;
