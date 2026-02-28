import { Mic, WifiOff, Brain, ListOrdered, Shield, AudioLines, HardDrive, CloudOff } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const features = [
  {
    icon: Mic,
    title: 'Voice-First Design',
    description: 'Ethan is built around your voice. Speak naturally — ask questions, give commands, have a conversation. No typing required.',
    detail: 'Powered by Apple Speech Recognition for seamless real-time voice interaction.',
    accent: 'blue' as const,
  },
  {
    icon: WifiOff,
    title: 'Offline Core',
    description: 'Core features — memory, reminders, conversations — work without any internet connection.',
    detail: 'Weather is the only feature requiring connectivity. Everything else stays local and fast.',
    accent: 'red' as const,
  },
  {
    icon: Brain,
    title: 'Memory System',
    description: 'Say "Remember that we went to Copper Town Tavern last Friday" and Ethan stores it permanently.',
    detail: 'Memories persist across sessions. Ask "What do you remember?" to recall stored memories anytime.',
    accent: 'orange' as const,
  },
  {
    icon: ListOrdered,
    title: 'Step-by-Step Instructions',
    description: 'Recipes, workouts, tutorials — Ethan reads each step aloud and waits for you to say "next."',
    detail: 'Hands-free guided walkthroughs for any multi-step process.',
    accent: 'blue' as const,
  },
  {
    icon: Shield,
    title: 'Minimal Permissions',
    description: 'Only microphone and speech recognition are required. Location and reminders are optional.',
    detail: 'Microphone for listening, Speech Recognition for understanding, Location for weather, Reminders for scheduling.',
    accent: 'red' as const,
  },
  {
    icon: AudioLines,
    title: 'Voice Selection',
    description: 'Choose from Apple system voices including Enhanced and Premium options.',
    detail: 'Popular picks: Jamie, Ava, Isha, Evan. Each with distinct personality. Swap anytime in settings.',
    accent: 'orange' as const,
  },
  {
    icon: HardDrive,
    title: 'Backup & Export',
    description: 'Export all your memories to a file. Import them on a new device or restore from backup.',
    detail: 'Full control over your data. Export, import, or clear — all from the Memories tab.',
    accent: 'blue' as const,
  },
  {
    icon: CloudOff,
    title: 'Privacy First',
    description: 'No account required. No data sent to servers. No tracking. Ethan lives on your device.',
    detail: 'Your conversations and memories never leave your phone.',
    accent: 'red' as const,
  },
];

const accentMap = {
  blue: { box: 'glow-box-blue', text: 'glow-text-blue', icon: 'text-primary', border: 'border-primary/20', hover: 'hover-glow-blue' },
  red: { box: 'glow-box-red', text: 'glow-text-red', icon: 'text-secondary', border: 'border-secondary/20', hover: 'hover-glow-blue' },
  orange: { box: 'glow-box-orange', text: 'glow-text-orange', icon: 'text-accent', border: 'border-accent/20', hover: 'hover-glow-orange' },
};

const FeatureDeepDive = () => {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="features" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-oswald text-3xl md:text-5xl font-bold text-center mb-4 glow-text-silver tracking-wide">
          FEATURE DEEP DIVE
        </h2>
        <p className="text-center text-muted-foreground font-rajdhani mb-16 max-w-lg mx-auto">
          Every capability engineered for the extraordinary.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const a = accentMap[feature.accent];
            return (
              <div
                key={feature.title}
                className={`p-6 md:p-8 rounded-xl border ${a.border} transition-all duration-700 ${a.hover}
                  ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{
                  transitionDelay: `${index * 80}ms`,
                  background: 'hsl(var(--card) / 0.35)',
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`shrink-0 p-2.5 rounded-lg border border-border/30 ${a.box}`}>
                    <feature.icon className={`w-6 h-6 ${a.icon}`} />
                  </div>
                  <h3 className={`font-oswald text-xl md:text-2xl font-bold ${a.text} pt-1`}>
                    {feature.title}
                  </h3>
                </div>
                <p className="text-foreground/80 font-rajdhani text-sm md:text-base leading-relaxed mb-3">
                  {feature.description}
                </p>
                <p className="text-muted-foreground font-rajdhani text-xs md:text-sm leading-relaxed border-t border-border/20 pt-3">
                  {feature.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureDeepDive;