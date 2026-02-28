import { useInView } from '@/hooks/useInView';

const acronym = [
  { letter: 'E', word: 'Even' },
  { letter: 'T', word: 'This' },
  { letter: 'H', word: 'Has' },
  { letter: 'A', word: 'A' },
  { letter: 'N', word: 'Name' },
];

const StorySection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-oswald text-3xl md:text-5xl font-bold text-center mb-16 glow-text-silver tracking-wide">
          THE ORIGIN STORY
        </h2>

        {/* Acronym reveal */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-baseline gap-1 md:gap-2 mb-8">
            {acronym.map((item, index) => (
              <div
                key={item.letter}
                className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <span className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black glow-text-blue block">
                  {item.letter}
                </span>
                <span className="font-rajdhani text-xs md:text-sm text-muted-foreground tracking-wider">
                  {item.word}
                </span>
              </div>
            ))}
          </div>

          <p className={`text-center font-rajdhani text-lg md:text-xl text-foreground/70 max-w-md transition-all duration-700 delay-[1200ms] ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            "Even This Has A Name." — because every great ally deserves one.
          </p>
        </div>

        {/* Story narrative */}
        <div className={`space-y-8 max-w-2xl mx-auto transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="p-6 rounded-xl border border-border/30" style={{ background: 'hsl(var(--card) / 0.3)' }}>
            <h3 className="font-oswald text-xl font-bold glow-text-orange mb-3">
              Your Name, Your Assistant
            </h3>
            <p className="font-rajdhani text-foreground/70 leading-relaxed">
              When you first launch Ethan, you pick a name for your assistant — and a name for yourself.
              Ethan will call you by your name. You can call your assistant whatever you want.
              Change either name at any time from the settings.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border/30" style={{ background: 'hsl(var(--card) / 0.3)' }}>
            <h3 className="font-oswald text-xl font-bold glow-text-blue mb-3">
              Built for Real Life
            </h3>
            <p className="font-rajdhani text-foreground/70 leading-relaxed">
              Ethan isn't a chatbot that answers trivia. It's an AI built to be useful — to remember
              things you tell it, schedule your reminders, walk you through recipes step by step,
              and be there even when your signal isn't. It works on <em>your</em> terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;