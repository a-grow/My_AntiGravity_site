import { useState, useEffect, useCallback } from 'react';

const words = [
  "SUPERHERO",
  "SUPERVILLAIN",
  "BILLIONAIRE",
  "CEO",
  "MAD SCIENTIST",
  "PHILANTHROPIST",
  "INVENTOR",
  "SECRET AGENT",
  "DOUBLE AGENT",
  "CYBORG",
];

const AnimatedTitle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'visible' | 'glitch-out' | 'hidden' | 'glitch-in'>('visible');

  const cycle = useCallback(() => {
    // Phase 1: glitch out
    setPhase('glitch-out');
    
    setTimeout(() => {
      // Phase 2: hidden, switch word
      setPhase('hidden');
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        // Phase 3: glitch in
        setPhase('glitch-in');
        setTimeout(() => {
          setPhase('visible');
        }, 400);
      }, 150);
    }, 400);
  }, []);

  useEffect(() => {
    const timer = setInterval(cycle, 3200);
    return () => clearInterval(timer);
  }, [cycle]);

  const getAnimClass = () => {
    switch (phase) {
      case 'glitch-out':
        return 'animate-glitch-out';
      case 'hidden':
        return 'opacity-0 scale-75';
      case 'glitch-in':
        return 'animate-glitch-in';
      case 'visible':
      default:
        return 'opacity-100 scale-100';
    }
  };

  return (
    <div className="text-center mb-8">
      <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.15em] uppercase mb-6 glow-text-orange">
        YOU ARE A
      </h1>
      <div className="h-16 sm:h-20 md:h-28 flex items-center justify-center overflow-visible px-4">
        <span
          className={`font-orbitron text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-wider
            transition-none whitespace-nowrap ${getAnimClass()}`}
          style={{
            color: 'hsl(var(--glow-blue))',
            textShadow: `
              0 0 15px hsl(var(--glow-blue)),
              0 0 40px hsl(var(--glow-blue) / 0.6),
              0 0 80px hsl(var(--glow-blue) / 0.3),
              0 0 120px hsl(var(--glow-blue) / 0.15)
            `,
          }}
        >
          {words[currentIndex]}
        </span>
      </div>
    </div>
  );
};

export default AnimatedTitle;
