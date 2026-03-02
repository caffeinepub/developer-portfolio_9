export function About() {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="section-max">
        <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-10">
          About
        </h2>
        <div className="grid sm:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <div className="w-20 h-20 rounded-sm bg-secondary border border-border flex items-center justify-center">
              <span className="text-2xl font-semibold text-muted-foreground">YN</span>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-base text-foreground leading-[1.8]">
              Hi, I'm a full-stack developer with a passion for building products that are both
              functional and a pleasure to use. I care deeply about the details — clean code,
              thoughtful UX, and systems that scale.
            </p>
            <p className="text-base text-muted-foreground leading-[1.8]">
              I've spent the last few years working across the stack — from designing REST APIs
              and database schemas to crafting responsive interfaces in React. I enjoy the full
              picture: understanding the problem, architecting a solution, and shipping it.
            </p>
            <p className="text-base text-muted-foreground leading-[1.8]">
              When I'm not coding, I'm reading about distributed systems, contributing to open
              source, or exploring new tools that make developers' lives easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
