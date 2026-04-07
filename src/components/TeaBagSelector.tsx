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
  photography: {
    body: "M14 35 L14 73 Q14 78, 19 78 L41 78 Q46 78, 46 73 L46 35 Q46 30, 41 30 L19 30 Q14 30, 14 35Z",
    accent: "M22 42 L38 50 M22 50 L38 58 M22 58 L38 66",
  },
};

interface TeaBagProps {
  category: TeaBagCategory;
  index: number;
}

const TeaBag = ({ category, index }: TeaBagProps) => {
  const navigate = useNavigate();
  const paths = teaBagPaths[category.id];
  const delay = index * 0.15;

  return (
    <div
      className="flex flex-col items-center cursor-pointer group"
      onClick={() => navigate(`/projects/${category.id}`)}
      style={{ animation: `float 3s ease-in-out ${delay}s infinite` }}
    >
      <svg
        width="60"
        height="110"
        viewBox="0 0 60 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2"
      >
        {/* String */}
        <line x1="30" y1="0" x2="30" y2="30" stroke={`hsl(${category.hsl})`} strokeWidth="1" opacity="0.6" />
        {/* Tag */}
        <rect x="22" y="0" width="16" height="10" rx="2" stroke={`hsl(${category.hsl})`} strokeWidth="1" fill="none" opacity="0.8" />
        {/* Tea bag body */}
        <path d={paths.body} stroke={`hsl(${category.hsl})`} strokeWidth="1.5" fill={`hsl(${category.hsl} / 0.08)`} />
        {/* Inner pattern */}
        <path d={paths.accent} stroke={`hsl(${category.hsl})`} strokeWidth="0.8" opacity="0.4" fill="none" />
      </svg>
      {/* Label */}
      <div className="mt-3 text-center transition-opacity duration-300 opacity-70 group-hover:opacity-100">
        <p className="text-[10px] text-muted-foreground tracking-wider mt-0.5">{category.teaType}</p>
        <p className="text-xs text-foreground font-medium mt-0.5">{category.label}</p>
      </div>
    </div>
  );
};

const TeaBagSelector = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 px-4">
      {categories.map((cat, i) => (
        <TeaBag key={cat.id} category={cat} index={i} />
      ))}
    </div>
  );
};

export default TeaBagSelector;
