import { Mic, WifiOff, Brain, Bell, KeyRound } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const highlights = [
  {
    icon: Mic,
    tagline: 'Talk. Listen. Act.',
    description: 'Voice-based interaction that feels natural.',
    glowClass: 'glow-text-blue',
    iconColor: 'text-primary',
    boxClass: 'glow-box-blue',
  },
  {
    icon: WifiOff,
    tagline: 'No signal? No problem.',
    description: 'Core features work fully offline.',
    glowClass: 'glow-text-red',
    iconColor: 'text-secondary',
    boxClass: 'glow-box-red',
  },
  {
    icon: Brain,
    tagline: 'Your past, remembered.',
    description: 'Long-term memory with "Remember…" commands.',
    glowClass: 'glow-text-orange',
    iconColor: 'text-accent',
    boxClass: 'glow-box-orange',
  },
  {
    icon: Bell,
    tagline: 'Just say it. It\'s scheduled.',
    description: 'Creates reminders through iOS Reminders.',
    glowClass: 'glow-text-blue',
    iconColor: 'text-primary',
    boxClass: 'glow-box-blue',
  },
  {
    icon: KeyRound,
    tagline: 'No signups. No strings.',
    description: 'No account or login ever required.',
    glowClass: 'glow-text-red',
    iconColor: 'text-secondary',
    boxClass: 'glow-box-red',
  },
];

const QuickHighlights = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-oswald text-3xl md:text-4xl font-bold text-center mb-16 glow-text-silver tracking-wide">
          QUICK INTEL
        </h2>
        <div className="space-y-6 md:space-y-8">
          {highlights.map((item, index) => (
            <div
              key={item.tagline}
              className={`flex items-center gap-5 md:gap-8 p-5 md:p-6 rounded-xl border border-border/40 transition-all duration-700 hover-glow-blue
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{
                transitionDelay: `${index * 120}ms`,
                background: 'hsl(var(--card) / 0.4)',
              }}
            >
              <div className={`shrink-0 p-3 rounded-lg border border-border/30 ${item.boxClass}`}>
                <item.icon className={`w-7 h-7 md:w-8 md:h-8 ${item.iconColor} animate-glow-pulse`} style={{ animationDelay: `${index * 400}ms` }} />
              </div>
              <div>
                <h3 className={`font-oswald text-xl md:text-2xl font-bold ${item.glowClass} mb-1`}>
                  {item.tagline}
                </h3>
                <p className="font-rajdhani text-sm md:text-base text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickHighlights;