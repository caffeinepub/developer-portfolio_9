export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="section-padding min-h-[calc(100vh-3.5rem)] flex flex-col justify-center"
    >
      <div className="section-max">
        <p className="text-sm text-accent font-medium tracking-widest uppercase mb-6">
          Available for work
        </p>
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-foreground leading-tight mb-4">
          Your Name
        </h1>
        <p className="text-2xl sm:text-3xl font-light text-muted-foreground mb-8">
          Developer
        </p>
        <p className="text-base text-muted-foreground leading-relaxed max-w-xl mb-12">
          I build clean, thoughtful software — from web apps to developer tools.
          Focused on simplicity, performance, and craft.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => handleScroll('#projects')}
            className="px-5 py-2.5 text-sm font-medium bg-foreground text-background rounded-sm
                       transition-colors duration-200 hover:bg-foreground/80"
          >
            View Projects
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="px-5 py-2.5 text-sm font-medium border border-border text-foreground rounded-sm
                       transition-colors duration-200 hover:border-foreground/50"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
