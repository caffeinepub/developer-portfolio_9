import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const { isDark, toggle } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="text-sm font-medium tracking-tight text-foreground hover:text-accent transition-colors duration-200"
        >
          YN.
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="p-1.5 rounded-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-border bg-background">
          <div className="max-w-3xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
