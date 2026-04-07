export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

export interface TeaBagCategory {
  id: string;
  label: string;
  hsl: string;
  teaType: string;
}

export const categories: TeaBagCategory[] = [
  {
    id: "journalism",
    label: "Journalism",
    hsl: "155, 14%, 58%",
    teaType: "Green Tea",
  },
  {
    id: "marketing",
    label: "Marketing",
    hsl: "350, 22%, 78%",
    teaType: "Rose Tea",
  },
  {
    id: "analytics",
    label: "Analytics",
    hsl: "210, 16%, 68%",
    teaType: "Blue Tea",
  },
  {
    id: "ai",
    label: "AI",
    hsl: "140, 10%, 65%",
    teaType: "Oolong Tea",
  },
  {
    id: "photography",
    label: "Photography",
    hsl: "25, 20%, 82%",
    teaType: "Chai Tea",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "News Analytics Dashboard",
    description: "A real-time dashboard for tracking news trends and sentiment analysis.",
    tags: ["journalism", "analytics", "ai"],
  },
  {
    id: "2",
    title: "Brand Campaign Strategy",
    description: "Comprehensive marketing campaign for emerging tech brands.",
    tags: ["marketing"],
  },
  {
    id: "3",
    title: "AI Content Generator",
    description: "Machine learning powered content creation and optimization tool.",
    tags: ["ai", "marketing"],
  },
  {
    id: "4",
    title: "Data Visualization Platform",
    description: "Interactive data storytelling with beautiful chart components.",
    tags: ["analytics", "photography"],
  },
  {
    id: "5",
    title: "Editorial Photography Series",
    description: "A visual storytelling project capturing urban life and culture.",
    tags: ["photography", "journalism"],
  },
  {
    id: "6",
    title: "Predictive Market Analysis",
    description: "AI-driven market trend prediction and consumer behavior analysis.",
    tags: ["ai", "analytics", "marketing"],
  },
];
