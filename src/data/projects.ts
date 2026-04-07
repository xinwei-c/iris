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
  teaTypeCn: string;
  intro: string;
  teaStory: string;
}

export const categories: TeaBagCategory[] = [
  {
    id: "journalism",
    label: "Journalism",
    hsl: "155, 14%, 58%",
    teaType: "Green Tea",
    teaTypeCn: "綠茶",
    intro: "Stories that matter — investigative reports, editorial writing, and digital media projects that bring truth to light.",
    teaStory: "Like green tea, good journalism is pure and unadorned.",
  },
  {
    id: "marketing",
    label: "Marketing",
    hsl: "345, 18%, 72%",
    teaType: "White Tea",
    teaTypeCn: "白茶",
    intro: "Brand strategy, campaign design, and creative storytelling that connects products to people through emotion and narrative.",
    teaStory: "White tea is subtle and elegant, much like great marketing.",
  },
  {
    id: "analytics",
    label: "Analytics",
    hsl: "210, 14%, 65%",
    teaType: "Oolong Tea",
    teaTypeCn: "青茶",
    intro: "Data insights, visualization, and predictive modeling that turn numbers into narratives and patterns into possibilities.",
    teaStory: "Oolong reveals hidden dimensions with each steeping.",
  },
  {
    id: "ai",
    label: "AI",
    hsl: "50, 16%, 65%",
    teaType: "Yellow Tea",
    teaTypeCn: "黃茶",
    intro: "Machine learning, natural language processing, and AI-powered tools that augment human creativity and decision-making.",
    teaStory: "Yellow tea transforms slowly, revealing depth over time.",
  },
  {
    id: "design",
    label: "Design",
    hsl: "20, 12%, 50%",
    teaType: "Dark Tea",
    teaTypeCn: "黑茶",
    intro: "UX/UI design, visual identity, and creative direction — shaping experiences through form, function, and aesthetic intention.",
    teaStory: "Dark tea matures with age, gaining richness and complexity.",
  },
  {
    id: "photography",
    label: "Photography",
    hsl: "0, 18%, 68%",
    teaType: "Red Tea",
    teaTypeCn: "紅茶",
    intro: "Documentary, editorial, and fine art photography — capturing fleeting moments and the quiet beauty of everyday life.",
    teaStory: "Red tea is warm and full-bodied, like a photograph that lingers.",
  },
];

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  content?: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Campaign Efficacy and Engagement Analysis",
    excerpt: "How visualization transforms raw numbers into compelling narratives that drive decisions and inspire action.",
    date: "2026-03-15",
    tag: "analytics",
    content: `## Introduction Text

During my internship at Smartly as a Growth Marketing Intern, I volunteered to take on marketing analytics work to deepen my understanding of data-driven strategy. I analyzed internal campaign datasets to assess performance and audience engagement, providing timely reports and insights that supported the team’s optimization efforts. The data was processed in RStudio and visualized in Tableau, transforming campaign metrics into clear findings for strategies. The data is from 6Sense. To protect information security, the key axes have been masked.

![ABM](/images/abm.png)

## Basic steps in processing data

1. **Segment**: categorized campaigns based on their names:
   - Audience Type: Hot / Warm / Unknown
   - Focus Area: Flashtalking, GetDemo, etc.

2. **Visualize**
   - Focused on key performance metrics: Spend and CTR
   - Segmented results into account-based vs. general

3. **Insights**
    `,
  },



  {
    id: "2",
    title: "AI and the Future of Journalism",
    excerpt: "Exploring how machine learning tools are reshaping newsrooms without replacing the human voice.",
    date: "2026-02-28",
    tag: "ai",
    content: `
    
    ## Introduction
    During my internship at Smartly as a Growth Marketing Intern, I volunteered to take on marketing analytics work to deepen my 
    understanding of data-driven strategy. 
    I analyzed internal campaign datasets to assess performance and audience engagement, providing timely reports and insights that supported the team’s 
    optimization efforts. The data was processed in RStudio and visualized in Tableau, transforming campaign metrics into clear findings for strategies. The data is from 6Sense. 
    To protect information security, the key axes have been masked.
    
    `,
  },
  
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Campaign Efficacy and Engagement Analysis",
    description: "During my Growth Marketing internship at Smartly, I volunteered to take on marketing analytics work to deepen my understanding of data-driven strategy.",
    tags: ["analytics", "marketing"],
    year: "2025",
    tools: ["Tableau", "R"],
    content: ` 

    ## Introduction Text
During my internship at Smartly as a Growth Marketing Intern, I volunteered to take on marketing analytics work to deepen my understanding of data-driven strategy. I analyzed internal campaign datasets to assess performance and audience engagement, providing timely reports and insights that supported the team’s optimization efforts. The data was processed in RStudio and visualized in Tableau, transforming campaign metrics into clear findings for strategies. The data is from 6Sense. To protect information security, the key axes have been masked.

![ABM](/iris/images/abm.png)


## Basic steps in processing data

1. **Segment**: categorized campaigns based on their names:
   - Audience Type: Hot / Warm / Unknown
   - Focus Area: Flashtalking, GetDemo, etc.

2. **Visualize**
   - Focused on key performance metrics: Spend and CTR
   - Segmented results into account-based vs. general

3. **Insights**
    `
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
