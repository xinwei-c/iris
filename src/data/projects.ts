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
  content?: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "The Art of Data Storytelling",
    excerpt: "How visualization transforms raw numbers into compelling narratives that drive decisions and inspire action.",
    date: "2026-03-15",
    tag: "analytics",
    content: `Data without narrative is noise. The best visualizations don't just display information — they guide the viewer through a story with a beginning, middle, and end.

## Why Stories Matter in Data

Humans are wired for narrative. When we see a chart, we instinctively look for a plot: *What changed? Why? What happens next?* The role of a data storyteller is to make those answers effortless to find.

## The Three Layers

1. **Foundation** — Clean, accurate data that earns trust
2. **Structure** — A visual hierarchy that guides the eye
3. **Emotion** — Color, annotation, and pacing that create meaning

## A Practical Framework

- Start with the insight, not the data
- Remove everything that doesn't serve the story
- Use annotation to bridge the gap between seeing and understanding

> "The greatest value of a picture is when it forces us to notice what we never expected to see." — John Tukey

## Reflection

The best dashboards I've built weren't the most complex — they were the ones where someone looked at the screen and immediately said, *"Now I understand."*`,
  },
  {
    id: "2",
    title: "AI and the Future of Journalism",
    excerpt: "Exploring how machine learning tools are reshaping newsrooms without replacing the human voice.",
    date: "2026-02-28",
    tag: "ai",
    content: `The newsroom of 2026 looks nothing like 2020, but not in the way most people predicted. AI didn't replace journalists — it gave them superpowers.

## What AI Actually Does in Newsrooms

- **Transcription & translation** at near-real-time speed
- **Pattern detection** across thousands of public records
- **Draft generation** for routine reports (earnings, weather, sports scores)

## The Human Edge

What AI can't do is just as important: it can't cultivate a source over coffee, feel the weight of a community's grief, or decide which story *matters* when everything is technically newsworthy.

## Finding the Balance

The journalists I admire most treat AI like a research assistant — tireless, fast, and literal. They ask better questions because the machine handles the grunt work.

> "Technology is a useful servant but a dangerous master." — Christian Lous Lange

## What's Next

The next frontier isn't AI writing stories. It's AI helping journalists find stories that would otherwise stay hidden in data no human could process alone.`,
  },
  {
    id: "3",
    title: "Building Brands in the Age of Authenticity",
    excerpt: "Why consumers now demand transparency, and how marketing can adapt without losing its creative edge.",
    date: "2026-01-20",
    tag: "marketing",
    content: `The era of polished perfection is over. Today's consumers don't want to be *marketed to* — they want to be *understood*.

## The Authenticity Paradox

Here's the uncomfortable truth: authenticity can't be manufactured. The moment a brand tries to "be authentic," it often becomes the opposite. So how do you navigate this?

## Three Principles That Work

1. **Show the process, not just the product** — Behind-the-scenes content outperforms polished ads 3:1 in engagement
2. **Admit what you're not** — Brands that acknowledge limitations earn more trust than those claiming to do everything
3. **Let customers tell the story** — User-generated content feels real because it *is* real

## Case Study: Lumina

When we launched the Lumina campaign, we deliberately included prototype failures in the brand video. The response was overwhelming — people connected with the struggle, not just the success.

## The Creative Opportunity

Authenticity doesn't mean boring. It means finding the genuine drama in your brand's story and telling it with craft and care.`,
  },
  {
    id: "4",
    title: "Finding Light: A Photo Essay",
    excerpt: "A visual meditation on how natural light transforms urban spaces throughout the day.",
    date: "2025-12-10",
    tag: "photography",
    content: `Every city has two lives: the one we see in daylight, and the one that emerges in the hours between.

## The Golden Hour Myth

Photographers obsess over golden hour, but the most interesting light happens at times no one talks about — the flat grey of an overcast noon, the neon-soaked blue of 9 PM, the amber pools beneath street lamps at midnight.

## What I Learned

- **Light reveals character.** The same building at dawn and dusk tells two completely different stories.
- **Shadows are subjects too.** Sometimes the absence of light is more expressive than its presence.
- **Weather is a collaborator.** Rain, fog, and haze don't ruin a shot — they transform it.

## On Patience

The best photographs I've taken came from waiting. Not for the perfect light, but for the moment when light and life aligned — a figure stepping into a beam, a curtain catching wind, a puddle reflecting sky.

> "Photography is the story I fail to put into words." — Destin Sparks`,
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
    content: `Built a comprehensive dashboard that tracks breaking news across 50+ outlets in real time.

## The Challenge

News editors needed to identify emerging stories faster. Traditional monitoring meant manually scanning dozens of sources — a process that was slow and prone to blind spots.

## Approach

Integrated sentiment analysis powered by a fine-tuned **BERT model** to surface emotional tone shifts in coverage. The pipeline ingests articles via RSS and API feeds, processes them through NLP layers, and renders interactive visualizations.

## Key Results

- Editors identified emerging stories **3 hours faster** on average
- Covered 50+ outlets across 4 languages
- Sentiment accuracy reached **91%** on validation set

## Reflection

This project taught me how to bridge the gap between data science and editorial instinct. The best dashboards don't replace judgment — they sharpen it.`,
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
