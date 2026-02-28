import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const ContactCTA = () => {
  const { ref, isInView } = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className={`container mx-auto max-w-xl transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="font-oswald text-3xl md:text-4xl font-bold text-center mb-4 glow-text-silver tracking-wide">
          GET IN TOUCH
        </h2>
        <p className="text-center text-muted-foreground font-rajdhani mb-12">
          Questions, feedback, or just want to say hello.
        </p>

        {submitted ? (
          <div className="text-center p-10 rounded-xl border border-primary/20 glow-box-blue" style={{ background: 'hsl(var(--card) / 0.4)' }}>
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-oswald text-2xl font-bold glow-text-blue mb-2">Message Received</h3>
            <p className="text-muted-foreground font-rajdhani">We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-rajdhani text-sm font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">
                Name
              </label>
              <input
                id="name"
                type="text"
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border/40 bg-input/50 text-foreground font-rajdhani placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-rajdhani text-sm font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">
                Email
              </label>
              <input
                id="email"
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border/40 bg-input/50 text-foreground font-rajdhani placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-rajdhani text-sm font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border/40 bg-input/50 text-foreground font-rajdhani placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                placeholder="What's on your mind?"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg font-oswald text-lg font-semibold uppercase tracking-wider border border-primary/40 text-primary-foreground transition-all duration-300 hover-glow-blue"
              style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.7))' }}
            >
              <Send className="w-5 h-5" />
              Transmit
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactCTA;