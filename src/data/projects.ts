export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  /** Markdown content for the detail page */
  content?: string;
  details?: string;
  role?: string;
  year?: string;
  tools?: string[];
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
    hsl: "155, 14%, 58%",
    teaType: "Green Tea",
    intro: "Stories that matter — investigative reports, editorial writing, and digital media projects that bring truth to light.",
    teaStory: "Like green tea, good journalism is pure and unadorned. It requires patience in the steeping, clarity in the pour, and a respect for the raw material. Each story brews slowly until it reveals its honest flavor.",
  },
  {
    id: "marketing",
    label: "Marketing",
    hsl: "345, 18%, 72%",
    teaType: "Rose Tea",
    intro: "Brand strategy, campaign design, and creative storytelling that connects products to people through emotion and narrative.",
    teaStory: "Rose tea is crafted for delight — its petals unfold to release fragrance and color. Marketing, at its best, does the same: it transforms something ordinary into an experience worth savoring.",
  },
  {
    id: "analytics",
    label: "Analytics",
    hsl: "210, 14%, 65%",
    teaType: "Blue Tea",
    intro: "Data-driven insights, visualization, and predictive modeling that turn numbers into narratives and patterns into possibilities.",
    teaStory: "Butterfly pea flower tea changes color with a drop of citrus — revealing hidden dimensions. Data analytics works the same way: a shift in perspective can transform raw information into vivid insight.",
  },
  {
    id: "ai",
    label: "AI",
    hsl: "150, 10%, 62%",
    teaType: "Oolong Tea",
    intro: "Machine learning, natural language processing, and AI-powered tools that augment human creativity and decision-making.",
    teaStory: "Oolong sits between green and black tea — a balance of tradition and transformation. AI lives in a similar space: neither fully human nor purely mechanical, it finds meaning in the gradient between.",
  },
  {
    id: "photography",
    label: "Photography",
    hsl: "25, 16%, 76%",
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
    description: "A real-time dashboard for tracking news trends and sentiment analysis across major outlets.",
    tags: ["journalism", "analytics", "ai"],
    role: "Lead Analyst & Developer",
    year: "2026",
    tools: ["Python", "D3.js", "NLP"],
    details: "Built a comprehensive dashboard that tracks breaking news across 50+ outlets in real time. Integrated sentiment analysis powered by a fine-tuned BERT model to surface emotional tone shifts in coverage. The tool helped editors identify emerging stories 3 hours faster on average.",
  },
  {
    id: "2",
    title: "Brand Campaign: Lumina",
    description: "Full-cycle brand campaign for a sustainable lighting startup, from strategy to execution.",
    tags: ["marketing"],
    role: "Campaign Strategist",
    year: "2025",
    tools: ["Figma", "Google Ads", "Meta Business"],
    details: "Developed brand positioning, visual identity, and a multi-channel campaign for Lumina, a sustainable home lighting company. The campaign spanned social media, programmatic ads, and influencer partnerships, resulting in a 240% increase in brand awareness within the target demographic.",
  },
  {
    id: "3",
    title: "AI Content Optimizer",
    description: "Machine learning tool that analyzes and optimizes editorial content for engagement and clarity.",
    tags: ["ai", "marketing"],
    role: "ML Engineer",
    year: "2026",
    tools: ["PyTorch", "FastAPI", "React"],
    details: "Designed and trained a transformer-based model that scores editorial drafts on readability, engagement potential, and SEO alignment. Integrated into a web app used by 15+ content teams, reducing revision cycles by 40%.",
  },
  {
    id: "4",
    title: "Urban Data Stories",
    description: "Interactive data visualization exploring urban mobility patterns and public transit equity.",
    tags: ["analytics", "journalism"],
    role: "Data Journalist",
    year: "2025",
    tools: ["R", "Observable", "Mapbox"],
    details: "An investigative data project mapping transit accessibility gaps across three major cities. Combined census data, ridership records, and GIS analysis to reveal that low-income neighborhoods had 60% fewer transit options. Published as an interactive scrollytelling piece.",
  },
  {
    id: "5",
    title: "Quiet Hours — Photo Essay",
    description: "A documentary photography series capturing the stillness of cities between 4 and 6 AM.",
    tags: ["photography"],
    role: "Photographer",
    year: "2025",
    tools: ["Sony A7IV", "Lightroom", "Capture One"],
    details: "Shot over six months across Tokyo, Taipei, and Vancouver, this series documents the liminal space of early morning — empty streets, first light on buildings, solitary figures. Exhibited at the Yaletown Gallery and published in Monocle.",
  },
  {
    id: "6",
    title: "Predictive Market Trends",
    description: "AI-driven market trend prediction combining social signals with economic indicators.",
    tags: ["ai", "analytics", "marketing"],
    role: "Data Scientist",
    year: "2026",
    tools: ["TensorFlow", "Snowflake", "Tableau"],
    details: "Built a predictive pipeline that fuses social media sentiment, search trends, and macroeconomic data to forecast consumer behavior shifts. The model achieved 82% directional accuracy on quarterly trend predictions for three product categories.",
  },
  {
    id: "7",
    title: "Investigative Series: Water Rights",
    description: "A long-form investigative report on water privatization and its impact on rural communities.",
    tags: ["journalism"],
    role: "Investigative Reporter",
    year: "2025",
    tools: ["FOIA Requests", "SQL", "Adobe InDesign"],
    details: "A six-part series examining how corporate water acquisitions affect small farming communities in the western United States. Involved 200+ interviews, public records analysis, and field reporting. The series was a finalist for the Livingston Award.",
  },
  {
    id: "8",
    title: "Seasons in Kyoto",
    description: "A year-long photography project documenting the changing seasons through Kyoto's gardens and temples.",
    tags: ["photography"],
    role: "Photographer & Writer",
    year: "2024",
    tools: ["Fujifilm X-T5", "Lightroom"],
    details: "Visited Kyoto across four seasons to capture the subtle transitions in light, foliage, and atmosphere within temple gardens. The project pairs photographs with short reflective essays on impermanence and wabi-sabi aesthetics.",
  },
  {
    id: "9",
    title: "Social Listening Platform",
    description: "Real-time brand monitoring tool that tracks sentiment across social media and news.",
    tags: ["marketing", "analytics"],
    role: "Product Lead",
    year: "2026",
    tools: ["Kafka", "Elasticsearch", "React"],
    details: "Designed and launched a SaaS platform that aggregates mentions across Twitter, Reddit, and 30+ news sources. Natural language processing classifies sentiment and detects crisis signals, enabling brands to respond 5x faster to reputation threats.",
  },
  {
    id: "10",
    title: "GPT-Assisted Research Tool",
    description: "An AI copilot for academic researchers that summarizes papers and identifies knowledge gaps.",
    tags: ["ai"],
    role: "AI Engineer",
    year: "2026",
    tools: ["OpenAI API", "LangChain", "Next.js"],
    details: "Built a research assistant that ingests PDF papers, generates structured summaries, and maps citation networks to surface under-explored connections. Used by 500+ researchers at two universities during the beta period.",
  },
];
