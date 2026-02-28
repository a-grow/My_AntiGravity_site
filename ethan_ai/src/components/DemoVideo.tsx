import { Play, Pause } from 'lucide-react';
import { useState } from 'react';
import { useInView } from '@/hooks/useInView';

const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding" ref={ref}>
      <div className={`container mx-auto max-w-4xl transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="font-oswald text-3xl md:text-4xl font-bold text-center mb-4 glow-text-silver tracking-wide">
          SEE IT IN ACTION
        </h2>
        <p className="text-center text-muted-foreground font-rajdhani mb-10">
          Watch Ethan respond, remember, and assist in real time.
        </p>

        {/* Video Container */}
        <div
          className="relative aspect-video rounded-xl border-2 border-primary/20 overflow-hidden group cursor-pointer transition-all duration-500 glow-box-blue hover-glow-blue"
          style={{ background: 'hsl(var(--card) / 0.6)' }}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {/* Placeholder content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="grid grid-cols-3 gap-px opacity-10 absolute inset-0">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border border-primary/20" />
              ))}
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4">
              <button className="p-5 rounded-full border-2 border-primary/40 transition-all duration-300 group-hover:scale-110 group-hover:border-primary/60 glow-box-blue">
                {isPlaying ? (
                  <Pause className="w-10 h-10 text-primary" />
                ) : (
                  <Play className="w-10 h-10 text-primary ml-1" />
                )}
              </button>
              <span className="font-orbitron text-xs text-primary/60 tracking-[0.3em] uppercase">
                {isPlaying ? 'Playing…' : 'Demo Video'}
              </span>
            </div>
          </div>

          {/* Scanline effect */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--glow-blue) / 0.1) 2px, hsl(var(--glow-blue) / 0.1) 4px)',
            }}
          />
        </div>

        <p className="text-center text-muted-foreground/50 font-rajdhani text-xs mt-4 tracking-wider">
          // Video placeholder — replace with YouTube embed
        </p>
      </div>
    </section>
  );
};

export default DemoVideo;