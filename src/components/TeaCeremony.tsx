import { useState } from "react";

type Phase = "idle" | "dropping" | "steaming" | "pouring" | "filling" | "done";

const TeaCeremony = () => {
  const [phase, setPhase] = useState<Phase>("idle");

  const startCeremony = () => {
    if (phase !== "idle") return;
    setPhase("dropping");
    setTimeout(() => setPhase("steaming"), 1200);
    setTimeout(() => setPhase("pouring"), 2800);
    setTimeout(() => setPhase("filling"), 4200);
    setTimeout(() => setPhase("done"), 5400);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[70vh] select-none">
      {/* Tea bag - clickable */}
      <div
        className={`absolute top-8 right-[15%] md:right-[20%] cursor-pointer transition-all duration-300 ${
          phase === "idle" ? "animate-float hover:scale-110" : ""
        }`}
        onClick={startCeremony}
        style={{
          animation:
            phase === "dropping"
              ? "teabag-drop 1.2s ease-out forwards"
              : phase !== "idle"
              ? "none"
              : undefined,
          opacity: phase !== "idle" && phase !== "dropping" ? 0 : 1,
          transition: "opacity 0.5s",
        }}
      >
        {/* Simple teabag line art */}
        <svg width="60" height="120" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="30" y1="0" x2="30" y2="35" stroke="hsl(155, 14%, 58%)" strokeWidth="1.5" />
          <rect x="15" y="35" width="30" height="40" rx="3" stroke="hsl(155, 14%, 58%)" strokeWidth="1.5" fill="none" />
          <line x1="20" y1="45" x2="40" y2="45" stroke="hsl(155, 14%, 58%)" strokeWidth="0.8" opacity="0.5" />
          <line x1="20" y1="55" x2="40" y2="55" stroke="hsl(155, 14%, 58%)" strokeWidth="0.8" opacity="0.5" />
          <line x1="20" y1="65" x2="40" y2="65" stroke="hsl(155, 14%, 58%)" strokeWidth="0.8" opacity="0.5" />
          {/* Tag */}
          <rect x="22" y="0" width="16" height="12" rx="2" stroke="hsl(350, 22%, 78%)" strokeWidth="1.2" fill="none" />
        </svg>
        {phase === "idle" && (
          <p className="text-xs text-muted-foreground mt-2 text-center opacity-70">点击茶包</p>
        )}
      </div>

      {/* Teapot */}
      <div
        className="relative mt-20"
        style={{
          animation: phase === "pouring" ? "pour-tea 2s ease-in-out" : "none",
          transformOrigin: "right bottom",
        }}
      >
        <svg width="180" height="140" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Body */}
          <ellipse cx="90" cy="95" rx="55" ry="40" stroke="hsl(210, 16%, 68%)" strokeWidth="1.5" fill="none" />
          {/* Lid */}
          <ellipse cx="90" cy="58" rx="35" ry="8" stroke="hsl(210, 16%, 68%)" strokeWidth="1.5" fill="none" />
          <line x1="90" y1="42" x2="90" y2="50" stroke="hsl(210, 16%, 68%)" strokeWidth="1.5" />
          <circle cx="90" cy="40" r="4" stroke="hsl(210, 16%, 68%)" strokeWidth="1.5" fill="none" />
          {/* Spout */}
          <path d="M145 85 Q165 75, 170 60" stroke="hsl(210, 16%, 68%)" strokeWidth="1.5" fill="none" />
          {/* Handle */}
          <path d="M35 75 Q10 85, 15 105 Q20 120, 40 110" stroke="hsl(210, 16%, 68%)" strokeWidth="1.5" fill="none" />
        </svg>

        {/* Steam */}
        {(phase === "steaming" || phase === "pouring") && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1 h-6 rounded-full bg-morandi-blue opacity-0"
                style={{
                  animation: `steam-rise 1.5s ease-out ${i * 0.3}s infinite`,
                }}
              />
            ))}
          </div>
        )}

        {/* Pour stream */}
        {phase === "pouring" && (
          <div
            className="absolute right-0 top-[42px] w-[2px] h-16 bg-morandi-green rounded-full opacity-60"
            style={{ transform: "rotate(25deg)", transformOrigin: "top" }}
          />
        )}
      </div>

      {/* Cup */}
      <div className="relative mt-6">
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cup body */}
          <path d="M15 10 L20 50 Q40 58, 60 50 L65 10" stroke="hsl(350, 22%, 78%)" strokeWidth="1.5" fill="none" />
          {/* Cup top rim */}
          <ellipse cx="40" cy="10" rx="25" ry="5" stroke="hsl(350, 22%, 78%)" strokeWidth="1.5" fill="none" />
          {/* Handle */}
          <path d="M65 18 Q80 22, 78 35 Q76 45, 65 42" stroke="hsl(350, 22%, 78%)" strokeWidth="1.5" fill="none" />
        </svg>

        {/* Tea filling */}
        {(phase === "filling" || phase === "done") && (
          <div
            className="absolute bottom-[12px] left-[22px] right-[22px] bg-morandi-green rounded-b-lg overflow-hidden"
            style={{
              animation: "fill-cup 1.2s ease-out forwards",
              opacity: 0.3,
              maxHeight: "30px",
            }}
          >
            <div className="w-full h-[30px]" />
          </div>
        )}
      </div>

      {/* Reveal text */}
      {phase === "done" && (
        <div
          className="mt-12 text-center"
          style={{ animation: "text-reveal 0.8s ease-out forwards" }}
        >
          <p className="font-serif-cn text-lg md:text-xl text-foreground tracking-wide">
            点击探索我的项目、资讯与作品
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Click to explore my projects, news, and work.
          </p>
          <div className="flex gap-6 mt-8 justify-center">
            <a href="#projects" className="text-morandi-green hover:opacity-70 transition-opacity font-serif-cn text-sm border-b border-current pb-0.5">
              项目
            </a>
            <a href="#news" className="text-morandi-blue hover:opacity-70 transition-opacity font-serif-cn text-sm border-b border-current pb-0.5">
              资讯
            </a>
            <a href="#work" className="text-morandi-pink hover:opacity-70 transition-opacity font-serif-cn text-sm border-b border-current pb-0.5">
              作品
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeaCeremony;
