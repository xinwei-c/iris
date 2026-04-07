import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutPage = () => {
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

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Journalism", desc: "Editorial writing, investigative stories, and digital media." },
              { title: "Analytics & AI", desc: "Data-driven insights, machine learning, and predictive modeling." },
              { title: "Photography", desc: "Documentary, editorial, and fine art photography." },
            ].map((item) => (
              <div key={item.title} className="border border-border rounded-lg p-6">
                <h3 className="text-foreground font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
  );
};

export default AboutPage;
