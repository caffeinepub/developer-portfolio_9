import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    title: 'Devlog',
    description:
      'A lightweight personal logging tool for developers. Track daily progress, link commits, and review your work over time. Built with React and a local-first storage approach.',
    tags: ['React', 'TypeScript', 'IndexedDB'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Forma',
    description:
      'An open-source form builder with a clean drag-and-drop interface. Exports to JSON schema or embeddable HTML. Designed for developers who want full control over their forms.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Pulse CLI',
    description:
      'A terminal dashboard for monitoring server health metrics in real time. Connects to any server via SSH and displays CPU, memory, and disk usage in a clean TUI.',
    tags: ['Node.js', 'SSH', 'CLI'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="section-max">
        <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-10">
          Projects
        </h2>
        <div className="grid gap-4">
          {projects.map((project) => (
            <article key={project.title} className="project-card group">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-base font-medium text-foreground">{project.title}</h3>
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live site`}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-secondary text-muted-foreground rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
