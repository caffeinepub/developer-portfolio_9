const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Git',
  'SQL',
  'REST APIs',
  'Tailwind CSS',
  'Next.js',
  'Linux',
];

export function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-border">
      <div className="section-max">
        <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-10">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
