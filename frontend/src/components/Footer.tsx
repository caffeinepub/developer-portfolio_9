import { Heart } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'developer-portfolio'
  );

  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          © {year} Your Name. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground flex items-center gap-1.5">
          Built with{' '}
          <Heart
            size={12}
            className="text-accent fill-accent"
          />{' '}
          using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-200"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
