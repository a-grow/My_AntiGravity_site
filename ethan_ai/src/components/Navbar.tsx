import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#') && location.pathname === '/') {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30" style={{ background: 'hsl(var(--background) / 0.85)', backdropFilter: 'blur(16px)' }}>
      <div className="container mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
        <a href="#hero" onClick={() => handleClick('#hero')} className="font-orbitron text-lg md:text-xl font-bold glow-text-blue tracking-wider">
          ETHAN
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith('/') ? (
              <Link
                key={link.label}
                to={link.href}
                className="font-rajdhani text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className="font-rajdhani text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground p-1">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-b border-border/30 py-4 px-4 space-y-3" style={{ background: 'hsl(var(--background) / 0.95)' }}>
          {navLinks.map((link) =>
            link.href.startsWith('/') ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block font-rajdhani text-base font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className="block font-rajdhani text-base font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;