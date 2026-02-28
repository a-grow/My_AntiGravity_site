import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border/20 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-orbitron text-lg font-bold glow-text-blue tracking-wider">ETHAN</span>
            <p className="font-rajdhani text-xs text-muted-foreground mt-1">Your AI Ally. Always ready.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="font-rajdhani text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#features" className="font-rajdhani text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#about" className="font-rajdhani text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <Link to="/faq" className="font-rajdhani text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </Link>
            <a href="#contact" className="font-rajdhani text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/10 text-center">
          <p className="font-rajdhani text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Ethan AI Assistant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;