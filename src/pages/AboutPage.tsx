import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface NewsItem {
  date: string;
  text: string;
  link?: { label: string; url: string };
}

const recentNews: NewsItem[] = [
  {
    date: "July 15, 2025",
    text: "Worked as New York Asian Film Festival Volunteer.",
  },
  {
    date: "June 2, 2025",
    text: "Started my summer internship at Smartly, working under the guidance of Alicia Mickelsen, VP of Growth Marketing and Strategy.",
    link: { label: "Smartly", url: "https://www.smartly.io" },
  },
];

const earlierNews: NewsItem[] = [
  {
    date: "December 2024",
    text: "Completed my individual journalistic work exploring the evolution of liberal arts education at UW-Madison.",
  },
];

const NewsCard = ({ item }: { item: NewsItem }) => (
  <div className="border-l-4 border-[hsl(340,60%,80%)] bg-[hsl(35,40%,94%)] rounded-r-lg p-5">
    <p className="font-bold text-foreground text-sm mb-1">{item.date}</p>
    <p className="text-foreground text-sm leading-relaxed">
      {item.link
        ? item.text.split(item.link.label).map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <a
                  href={item.link!.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(340,60%,70%)] underline hover:opacity-70"
                >
                  {item.link!.label}
                </a>
              </span>
            ) : (
              part
            )
          )
        : item.text}
    </p>
  </div>
);

const AboutPage = () => {
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4">ABOUT</p>
          <h1 className="font-serif-cn text-4xl md:text-5xl font-light text-foreground mb-8">
            Iris Chen
          </h1>
          <div className="w-16 h-[1px] bg-primary mb-8" />

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a multidisciplinary creative working at the intersection of journalism,
              marketing, data analytics, AI, and photography. My work is driven by curiosity
              and a passion for storytelling across different mediums.
            </p>
            <p>
              With a background spanning editorial writing, brand strategy, and visual arts,
              I bring a unique perspective to every project — finding the story hidden in data,
              the emotion behind a brand, and the decisive moment in a photograph.
            </p>
            <p>
              When I'm not working, you'll find me exploring tea culture, wandering through
              galleries, or experimenting with new ways to blend technology and art.
            </p>
          </div>

          {/* News Section */}
          <div className="mt-16">
            <h2 className="font-serif-cn text-2xl text-foreground font-light mb-8">News</h2>
            <div className="space-y-4">
              {recentNews.map((item, i) => (
                <NewsCard key={i} item={item} />
              ))}
            </div>

            {earlierNews.length > 0 && (
              <div className="mt-8">
                <button
                  onClick={() => setShowEarlier(!showEarlier)}
                  className="text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
                >
                  {showEarlier ? "▲" : "▼"} Show earlier news (before 2025)
                </button>
                {showEarlier && (
                  <div className="space-y-4 mt-4 animate-fade-in">
                    {earlierNews.map((item, i) => (
                      <NewsCard key={i} item={item} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
