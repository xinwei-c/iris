export interface Project {
  id: string;
  title: string;
  titleCn: string;
  description: string;
  tags: string[];
  image?: string;
}

export interface TeaBagCategory {
  id: string;
  label: string;
  labelCn: string;
  hsl: string; // direct HSL color string
  teaType: string;
  teaTypeCn: string;
}
  teaType: string;
  teaTypeCn: string;
}

export const categories: TeaBagCategory[] = [
  {
    id: "news",
    label: "News",
    labelCn: "新闻",
    color: "var(--morandi-green)",
    teaType: "Green Tea",
    teaTypeCn: "绿茶",
  },
  {
    id: "marketing",
    label: "Marketing",
    labelCn: "市场",
    color: "var(--morandi-pink)",
    teaType: "Rose Tea",
    teaTypeCn: "玫瑰花茶",
  },
  {
    id: "data",
    label: "Data Analysis",
    labelCn: "数据分析",
    color: "var(--morandi-blue)",
    teaType: "Blue Tea",
    teaTypeCn: "蝶豆花茶",
  },
  {
    id: "ai",
    label: "AI",
    labelCn: "人工智能",
    color: "var(--morandi-sage)",
    teaType: "Oolong Tea",
    teaTypeCn: "乌龙茶",
  },
  {
    id: "design",
    label: "Design",
    labelCn: "设计",
    color: "var(--morandi-warm)",
    teaType: "Chai Tea",
    teaTypeCn: "奶茶",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "News Analytics Dashboard",
    titleCn: "新闻分析平台",
    description: "A real-time dashboard for tracking news trends and sentiment analysis.",
    tags: ["news", "data", "ai"],
  },
  {
    id: "2",
    title: "Brand Campaign Strategy",
    titleCn: "品牌营销策略",
    description: "Comprehensive marketing campaign for emerging tech brands.",
    tags: ["marketing"],
  },
  {
    id: "3",
    title: "AI Content Generator",
    titleCn: "AI 内容生成器",
    description: "Machine learning powered content creation and optimization tool.",
    tags: ["ai", "marketing"],
  },
  {
    id: "4",
    title: "Data Visualization Platform",
    titleCn: "数据可视化平台",
    description: "Interactive data storytelling with beautiful chart components.",
    tags: ["data", "design"],
  },
  {
    id: "5",
    title: "Editorial Design System",
    titleCn: "编辑设计系统",
    description: "A cohesive design system for digital news publications.",
    tags: ["design", "news"],
  },
  {
    id: "6",
    title: "Predictive Market Analysis",
    titleCn: "市场预测分析",
    description: "AI-driven market trend prediction and consumer behavior analysis.",
    tags: ["ai", "data", "marketing"],
  },
];
