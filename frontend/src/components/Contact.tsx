import { Mail } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="section-max">
        <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-10">
          Contact
        </h2>
        <div className="grid sm:grid-cols-[2fr_1fr] gap-12 items-start">
          <div>
            <p className="text-base text-foreground leading-[1.8] mb-8">
              I'm open to new opportunities, collaborations, and interesting conversations.
              If you have a project in mind or just want to say hello, my inbox is always open.
            </p>
            <a
              href="mailto:your.email@example.com"
              className="contact-link text-base font-medium text-foreground hover:text-accent transition-colors duration-200"
            >
              <Mail size={18} />
              your.email@example.com
            </a>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-5">
              Elsewhere
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <SiGithub size={16} />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <SiLinkedin size={16} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
