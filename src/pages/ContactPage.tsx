import Navigation from "@/components/Navigation";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4">CONTACT</p>
          <h1 className="font-serif-cn text-4xl md:text-5xl font-light text-foreground mb-8">
            Get in Touch
          </h1>
          <div className="w-16 h-[1px] bg-primary mb-8" />

          <p className="text-muted-foreground leading-relaxed mb-12">
            I'm always open to new collaborations, freelance opportunities, or just a good
            conversation over tea. Feel free to reach out through any of the channels below.
          </p>

          <div className="space-y-6">
            {[
              { label: "Email", value: "hello@irischen.com", href: "mailto:hello@irischen.com" },
              { label: "Instagram", value: "@irischen", href: "#" },
              { label: "LinkedIn", value: "Iris Chen", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between border border-border rounded-lg p-5 hover:border-primary/30 transition-all duration-300 group"
              >
                <span className="text-sm text-muted-foreground tracking-wide">{item.label}</span>
                <span className="text-foreground group-hover:text-primary transition-colors">{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
