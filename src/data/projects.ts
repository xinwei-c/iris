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
  intro: string;
  teaStory: string;
}

export const categories: TeaBagCategory[] = [
  {
    id: "journalism",
    label: "Journalism",
    hsl: "155 14% 58%",
    teaType: "Green Tea",
    intro: "Stories that matter — investigative reports, editorial writing, and digital media projects that bring truth to light.",
    teaStory: "Like green tea, good journalism is pure and unadorned. It requires patience in the steeping, clarity in the pour, and a respect for the raw material. Each story brews slowly until it reveals its honest flavor.",
  },
  {
    id: "marketing",
    label: "Marketing",
    hsl: "345 18% 72%",
    teaType: "Rose Tea",
    intro: "Brand strategy, campaign design, and creative storytelling that connects products to people through emotion and narrative.",
    teaStory: "Rose tea is crafted for delight — its petals unfold to release fragrance and color. Marketing, at its best, does the same: it transforms something ordinary into an experience worth savoring.",
  },
  {
    id: "analytics",
    label: "Analytics",
    hsl: "210 14% 65%",
    teaType: "Blue Tea",
    intro: "Data-driven insights, visualization, and predictive modeling that turn numbers into narratives and patterns into possibilities.",
    teaStory: "Butterfly pea flower tea changes color with a drop of citrus — revealing hidden dimensions. Data analytics works the same way: a shift in perspective can transform raw information into vivid insight.",
  },
  {
    id: "ai",
    label: "AI",
    hsl: "150 10% 62%",
    teaType: "Oolong Tea",
    intro: "Machine learning, natural language processing, and AI-powered tools that augment human creativity and decision-making.",
    teaStory: "Oolong sits between green and black tea — a balance of tradition and transformation. AI lives in a similar space: neither fully human nor purely mechanical, it finds meaning in the gradient between.",
  },
  {
    id: "photography",
    label: "Photography",
    hsl: "25 16% 76%",
    teaType: "Chai Tea",
    intro: "Documentary, editorial, and fine art photography — capturing fleeting moments and the quiet beauty of everyday life.",
    teaStory: "Chai is a blend of spices, each contributing its own warmth. Photography, too, layers light, shadow, timing, and emotion into a single frame — a composition of many elements into one still moment.",
  },
];

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "The Art of Data Storytelling",
    excerpt: "How visualization transforms raw numbers into compelling narratives that drive decisions and inspire action.",
    date: "2026-03-15",
    tag: "analytics",
  },
  {
    id: "2",
    title: "AI and the Future of Journalism",
    excerpt: "Exploring how machine learning tools are reshaping newsrooms without replacing the human voice.",
    date: "2026-02-28",
    tag: "ai",
  },
  {
    id: "3",
    title: "Building Brands in the Age of Authenticity",
    excerpt: "Why consumers now demand transparency, and how marketing can adapt without losing its creative edge.",
    date: "2026-01-20",
    tag: "marketing",
  },
  {
    id: "4",
    title: "Finding Light: A Photo Essay",
    excerpt: "A visual meditation on how natural light transforms urban spaces throughout the day.",
    date: "2025-12-10",
    tag: "photography",
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
