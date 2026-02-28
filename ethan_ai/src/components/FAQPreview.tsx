import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';

const faqs = [
  {
    question: 'Can I use Siri voices?',
    answer: 'No. Ethan uses Apple system voices only — not Siri voices. You can choose from Enhanced and Premium system voices like Jamie, Ava, Isha, and Evan.',
  },
  {
    question: 'How do I back up my memories?',
    answer: 'Go to the Memories tab and use Export to save all memories to a file. Use Import to restore them on any device.',
  },
  {
    question: 'Does Ethan require an account?',
    answer: 'No. Ethan requires zero accounts, zero sign-ups, and zero personal information. Everything stays on your device.',
  },
];

const FAQPreview = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-oswald text-3xl md:text-4xl font-bold text-center mb-16 glow-text-silver tracking-wide">
          FREQUENTLY ASKED
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`group p-5 md:p-6 rounded-xl border border-border/30 transition-all duration-700 hover-glow-blue cursor-default
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
              style={{
                transitionDelay: `${index * 150}ms`,
                background: 'hsl(var(--card) / 0.35)',
              }}
            >
              <h3 className="font-oswald text-lg md:text-xl font-bold text-foreground mb-2 group-hover:glow-text-blue transition-all duration-300">
                {faq.question}
              </h3>
              <p className="font-rajdhani text-sm md:text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 font-rajdhani text-sm font-semibold uppercase tracking-[0.15em] text-primary hover:text-accent transition-colors duration-300 group"
          >
            See all FAQs
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;