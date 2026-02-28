import { Brain, Volume2, VolumeX, Download } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';
import EthanInterface from './EthanInterface';
import { useAmbientSound } from '@/hooks/useAmbientSound';

const HeroSection = () => {
  const { isPlaying, toggle } = useAmbientSound();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-16 section-padding overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(var(--glow-blue)) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(var(--glow-red)) 0%, transparent 70%)' }} />

      {/* Animated Title */}
      <AnimatedTitle />

      {/* Ethan Interface */}
      <EthanInterface />

      {/* Footnote */}
      <p className="font-rajdhani text-[10px] sm:text-xs text-muted-foreground/60 text-center mt-2 mb-4 italic tracking-wide">
        (Ethan not currently listening. This is for demo purposes only.)
      </p>

      {/* Sound Toggle */}
      <button
        onClick={toggle}
        className="relative group mb-8 p-3 rounded-full border border-primary/30 transition-all duration-300 hover-glow-blue"
        style={{ background: 'hsl(var(--card) / 0.5)' }}
        aria-label={isPlaying ? 'Mute ambient sound' : 'Unmute ambient sound'}
      >
        <Brain className="w-6 h-6 text-primary" />
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
          {isPlaying ? (
            <Volume2 className="w-3.5 h-3.5 text-accent animate-glow-pulse" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-muted-foreground" />
          )}
        </div>
      </button>

      {/* Slogan */}
      <h2 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-4xl mb-10 leading-tight px-4 uppercase tracking-wide">
        <span className="text-foreground">You don't need a boring chatbot…</span>
        <br />
        <span className="glow-text-orange mt-2 block">You need an Ally.</span>
      </h2>

      {/* App Store Badge */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <a
          href="#"
          className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border/60 transition-all duration-300 hover-glow-blue group"
          style={{ background: 'hsl(var(--card) / 0.6)' }}
        >
          <Download className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
          <div className="text-left">
            <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-rajdhani">Download on the</span>
            <span className="block text-lg font-oswald font-semibold text-foreground -mt-0.5 uppercase">App Store</span>
          </div>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-rajdhani">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
