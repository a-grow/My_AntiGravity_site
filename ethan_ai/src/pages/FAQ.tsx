import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const allFaqs = [
  {
    question: 'Can I use Siri voices with Ethan?',
    answer: 'No. Ethan uses Apple system voices only — not Siri voices. You can choose from Enhanced and Premium system voices like Jamie, Ava, Isha, and Evan.',
  },
  {
    question: 'How do I back up my memories?',
    answer: 'Go to the Memories tab and tap Export to save all memories to a file. To restore them, use Import on any device.',
  },
  {
    question: 'Does Ethan require an account?',
    answer: 'No. Ethan requires zero accounts, zero sign-ups, and zero personal information. Everything stays on your device.',
  },
  {
    question: 'Does Ethan work offline?',
    answer: 'Yes. All core features including conversations, memory, and reminders work completely offline. Only weather requires an internet connection.',
  },
  {
    question: 'What permissions does Ethan need?',
    answer: 'Microphone and Speech Recognition are required. Location (for weather) and Reminders (for scheduling) are optional.',
  },
  {
    question: 'Can I change my assistant\'s name?',
    answer: 'Yes. You can change both your assistant\'s name and your own name at any time from the Settings screen.',
  },
  {
    question: 'How does the memory system work?',
    answer: 'Say "Remember…" followed by what you want stored. Ethan saves it permanently. Ask "What do you remember?" to recall stored memories. Export or delete memories anytime from the Memories tab.',
  },
  {
    question: 'What voices are available?',
    answer: 'Ethan offers a range of Apple system voices including standard, Enhanced, and Premium tiers. Popular options include Jamie, Ava, Isha, and Evan. Browse and preview all available voices in Settings.',
  },
  {
    question: 'Is my data sent to any servers?',
    answer: 'No. All processing happens on-device. Your conversations, memories, and personal data never leave your phone.',
  },
  {
    question: 'How do step-by-step instructions work?',
    answer: 'When Ethan detects a multi-step task (recipe, workout, tutorial), it presents each step one at a time. Say "next" to advance, "repeat" to hear the current step again, or "stop" to exit.',
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen pt-8 pb-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-rajdhani text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <h1 className="font-oswald text-4xl md:text-5xl font-bold mb-4 glow-text-silver tracking-wide">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="text-muted-foreground font-rajdhani mb-12">
          Everything you need to know about Ethan.
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {allFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-border/30 rounded-xl px-5 md:px-6 transition-all duration-300 hover-glow-blue data-[state=open]:glow-box-blue"
              style={{ background: 'hsl(var(--card) / 0.35)' }}
            >
              <AccordionTrigger className="font-oswald text-base md:text-lg font-semibold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-rajdhani text-sm md:text-base text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;