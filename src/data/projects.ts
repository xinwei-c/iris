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

const baseUrl = import.meta.env.BASE_URL;

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
    intro: "Stories that bring truth to light.",
    teaStory: "Like green tea, good journalism is pure and unadorned.",
  },
  {
    id: "marketing",
    label: "Marketing",
    hsl: "345, 18%, 72%",
    teaType: "White Tea",
    teaTypeCn: "白茶",
    intro: "Creatives that connect products to people",
    teaStory: "White tea is subtle and elegant, much like great marketing.",
  },
  {
    id: "analytics",
    label: "Analytics",
    hsl: "210, 14%, 65%",
    teaType: "Oolong Tea",
    teaTypeCn: "青茶",
    intro: "Insights that turn data into possibilities.",
    teaStory: "Oolong reveals hidden dimensions with each steeping.",
  },
  {
    id: "ai",
    label: "AI",
    hsl: "50, 16%, 65%",
    teaType: "Yellow Tea",
    teaTypeCn: "黃茶",
    intro: "AI tools that augment human sides",
    teaStory: "Yellow tea transforms slowly, revealing depth over time.",
  },
  {
    id: "design",
    label: "Design",
    hsl: "20, 12%, 50%",
    teaType: "Dark Tea",
    teaTypeCn: "黑茶",
    intro: "Designs that shape experiences",
    teaStory: "Dark tea matures with age, gaining richness and complexity.",
  },
  {
    id: "photography",
    label: "Photography",
    hsl: "0, 18%, 68%",
    teaType: "Red Tea",
    teaTypeCn: "紅茶",
    intro: "Moments that catch live beauty",
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

// Articles have been moved to `src/data/articles.ts` (Markdown-backed) for scalability.

export const projects: Project[] = [
  {
    id: "11",
    title: "Food Insecurity & Grocery Access in Wisconsin",
    description: "Data-driven analysis of grocery store accessibility changes across Wisconsin counties from 2010 to 2015, revealing disparities in food access.",
    tags: ["journalism", "analytics"],
    role: "Data Journalist",
    year: "2025",
    tools: ["R", "Tableau"],
    content: `![Main Visualization](${baseUrl}images/food1.png)

## Introduction

**Research Question:** To what extent do counties influence changes in grocery store accessibility from 2010 to 2015?

Food accessibility varies across countries and disproportionately affects certain communities. Limited access to grocery stores can contribute to food insecurity and broader public health concerns, especially in lower-income or rural areas.

Using data from the USDA Food Environment Atlas, this study explores changes in food access across Wisconsin counties between 2010 and 2015. We examine how factors like county population size, urban vs. rural classification, and racial demographics relate to low grocery access.

For clarity and consistency in interpreting the data, the following definitions were used:
- **Low access** refers to individuals living more than 1 mile from a grocery store in urban areas or more than 10 miles in rural areas.
- All demographic variables were calculated as percentages within each group at the county level.

This analysis focused specifically on counties within Wisconsin, using data from the USDA Food Environment Atlas.

![Team Photo](${baseUrl}images/food2.jpeg)

Together with my teammates Salma Gadelhak, Hanvin Moon and Chloe Siegel, we showed how grocery store access in Wisconsin counties changed between 2010 and 2015. Using R and Tableau, we visualized these disparities and uncovered patterns that often go unnoticed.
`,
  },
  {
    id: "12",
    title: "Creative Campaign: Campbell Soup",
    description:
      "This is part of my work in JOURN 445. Our campaign is focused on showing consumers that Campbell’s soup is a reliable choice because it is affordable, easy to make, and genuinely delicious.",
    tags: ["marketing"],
    role: "Campaign Strategist",
    year: "2025",
    tools: ["Marketing Strategy", "Campaign Design"],
    content: `![Campaign Visual](${baseUrl}images/campbell.png)

## Introduction

This is part of my work in JOURN 445.

We want to highlight the idea that a warm, satisfying meal does not have to cost a lot of money or take much time to prepare. By reinforcing that soup is a practical choice that fits into busy, everyday life, we want our consumers to feel confident that Campbell's is the right option when they need something quick, warm, and reliable.

Overall, our message encourages people to think, *"Why overcomplicate meals when soup just makes sense?"*

## Final slides (PDF)

[Open the deck](${baseUrl}pdfs/campbell.pdf)
`,
  },
  {
    id: "13",
    title: "Creative Campaign: Cinnamon Toast Crunch",
    description:
      "This project was created for the JOURN 345 campaign course and presents a fully integrated strategic communication campaign for Cinnamon Toast Crunch. It includes situation analysis, campaign strategy, PR, media and social plans, and a final creative execution brought together in a campaign book.",
    tags: ["marketing"],
    role: "Design Director",
    year: "2025",
    tools: ["Strategic Communication", "Campaign Design"],
    content: `![Campaign Photo](${baseUrl}images/cinn_pic.jpg)

## Introduction

This campaign was developed as part of JOURN 345 and follows a strategic planning process. Our work begins with a situation analysis, where we examined the client’s background, industry landscape, target audiences, and key challenges to establish an understanding of the problem space.

Building on these insights, we developed a campaign strategy that defines the campaign objectives, core messages, and positioning. From this strategic foundation, we created integrated execution plans across multiple channels, including a PR plan, media plan, and social media plan.

To support implementation, we assembled a media kit to ensure clear and professional communication with external stakeholders. Finally, the creative plan outlines the visual and messaging approach that brings the strategy to life and ensures cohesion across all campaign elements.

## My contribution

As the Design Director, I led the majority of the design work, with a primary focus on the final campaign book. In addition, I took on a substantial portion of the media plan responsibilities, including data collection, organization, and refinement.

## Final slides (PDF)

[Open the deck](${baseUrl}pdfs/cinn_deck.pdf)

## Campaign book (PDF)

[Open the campaign book](${baseUrl}pdfs/campaign%20book1.pdf)
`,
  },
  {
    id: "14",
    title: "Women’s Labor and Media Bias in the Pandemic",
    description:
      "My work aims to showcase gendered labor inequalities depicted by media that became especially visible during the COVID-19 pandemic.",
    tags: ["journalism", "design"],
    content: `![Poster Design](${baseUrl}images/1.webp)

## About

This poster was created for the **International Talent Leadership Competition** when I studied in Communication University of China. The competition invites students to explore global challenges through creative, research driven, and socially engaged projects. It asks participants to demonstrate leadership through original work that reflects critical thinking, international awareness, and the ability to communicate complex social issues to diverse audiences.

My submission, which received an Excellent Prize, examines the gendered labor inequalities depicted by media that became especially visible during the COVID-19 pandemic. Although women formed the majority of frontline medical workers in mainland China, their contributions were underrepresented in mainstream media coverage. The project uses visual storytelling to highlight the discrepancy between women’s essential labor and the limited visibility granted to them in public narratives. The poster therefore functions as both a critique of media framing and a call to acknowledge the structural conditions that obscure women’s work despite their central role in public health and community care.
`,
  },
  {
    id: "15",
    title: "Cuisine Explorer",
    description:
      "An interactive Shiny app exploring how nutritional values differ across countries and ingredients, and how online recipe publishing changes over time.",
    tags: ["analytics"],
    role: "Data Visualization",
    tools: ["R", "Shiny"],
    content: `![Main visualization](${baseUrl}images/food-explorer.png)

## Objectives

The visualization aims to explore how nutritional values differ across countries and ingredient types, and how the number of recipes published online has changed over time. This app targets general audiences like cooks and foodies curious about recipes data. With countries and ingredients selected, audiences can explore what is most relevant to them. The app prioritizes intuitive exploration so audiences can play around the functions.

The app uses controls for personalized exploration. With the first single ingredient dropdown, users can select the ingredient they are most interested in. The country selector allows multiple choices so that audiences can filter a set of countries. Variable selectors for the scatter plot make the same display serve multiple analytical purposes. Brushing works across the scatter and histogram, so one action reflects on several spaces. The year bar chart updates automatically with the filters.

## Data Processing

Before visualization, I cleaned the datasets to remove rows with missing data and ensure valid time. I created new columns to decide whether a recipe included key ingredients such as flour, milk, butter, chicken and beef. I grouped the calorie variable into broad ranges (0-500, 500-1000, >1000) to distinguish energy density. The publication date was converted into a date format to analyze recipe trends by year.

## Insights

When using the app, I found something unexpected by selecting and brushing through the data. For Argentinian recipes, dishes with more fat usually get lower ratings. But for Thai food, dishes with more fat get higher ratings, and the average calories rise. This kind of insight is easier to see with multiple variable selection.

## Link

[Launch Cuisine Explorer App](https://xinwei.shinyapps.io/cuisine_explorer/)
`,
  },
  {
    id: "16",
    title: "Sheboygan Foster Care",
    description: "My course project at JOURN 445, where I work with client Sheboygan Foster Care.",
    tags: ["journalism", "design"],
    year: "2025",
    content: `![My time with the class](${baseUrl}images/allsheboygan.jpg)

## Introduction

The work has been featured by SJMC website.

[Check out the report](https://sjmc.wisc.edu/news/in-sheboygan-students-learn-the-power-of-storytelling/)

## Creative productions

### Posters

![Sheboygan Poster A](${baseUrl}images/she_2.png)

![Sheboygan Poster B](${baseUrl}images/she_1.png)

### Business cards — Dark Series

![Dark Front](${baseUrl}images/dark_card2.png)

![Dark Back](${baseUrl}images/dark_card1.png)

### Business cards — Light Series

![Light Front](${baseUrl}images/light_card1.png)

![Light Back](${baseUrl}images/light_card2.png)

## Final slides (PDF)

[Open the deck](${baseUrl}pdfs/sheboygan_deck.pdf)
`,
  },
  {
    id: "17",
    title: "Evolving Liberal Arts Education",
    description:
      "My individual story explores the evolving liberal arts education. Through interviews with graduate, advisor and student, I try to find answers about its meaning in a changing world.",
    tags: ["journalism"],
    year: "2025",
    content: `![Project preview](${baseUrl}images/liberal-art.png)

## See my work

[Evolving Liberal Arts Education](https://declineliberalarts.wordpress.com/)

## Introduction

The story explores the evolving liberal arts education. Through interviews with graduate, advisor and student, I try to find answers about its meaning in a changing world. Their perspectives offer insights into the challenges and possibilities of pursuing liberal arts degrees in our world today.
`,
  },
  {
    id: "18",
    title: "Wisconsin Air Quality Dashboard in 2023",
    description:
      "An interactive Shiny dashboard making key OpenAir package functionality accessible to non-technical audiences through interpretable air-quality visualizations.",
    tags: ["analytics"],
    tools: ["R", "Shiny", "openair"],
    content: `![Main Site](${baseUrl}images/polar-graph.png)

## Introduction

The project aims to make key functionality of the OpenAir package accessible to non-technical audiences through an interactive interface. We built a Shiny App containing four interactive plots: a pollution map (Wisconsin), a polar plot, a seasonality plot, an influence plot, and a pollution rose. Across all graphs, users can select the pollutant of interest, the meteorological variable of influence, and a time period.

## Link

[Launch Wisconsin Air Quality App](https://xinwei.shinyapps.io/Stat436_Project/)

## Visualizations

![Wisconsin State Map](${baseUrl}images/state1.png)

![Seasonality Plot](${baseUrl}images/seasonality.png)

![Polar Plot](${baseUrl}images/polar.png)

![Pollution Rose](${baseUrl}images/rose.png)

![Influence Plot](${baseUrl}images/influence.png)

## Group members

This is a group project and the members are Xinwei (Iris) Chen, Emma Clift, and Jonathan Morris.
`,
  },
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

![Key axes have been masked for data security](${baseUrl}images/abm.png)


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
];
