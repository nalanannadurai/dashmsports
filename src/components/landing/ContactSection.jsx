import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', organization: '', email: '', role: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold">Thank you for reaching out.</h3>
            <p className="mt-3 text-muted-foreground">We'll review your inquiry and be in touch within 24–48 hours.</p>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left info */}
          <AnimatedSection>
            <span className="text-xs text-primary tracking-[0.2em] uppercase font-semibold">Contact</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight leading-[1.1]">
              Let's start a conversation.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Whether you're exploring options or ready to engage, we'd welcome the opportunity 
              to learn about your organization and discuss how APEX can help.
            </p>
            <div className="mt-8 space-y-4">
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</div>
                <div className="text-foreground font-medium">info@apexsportsconsulting.com</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Response Time</div>
                <div className="text-foreground font-medium">Within 24–48 hours</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right form */}
          <AnimatedSection delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">Name *</label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-card border border-border/60 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">Organization *</label>
                  <input
                    name="organization"
                    required
                    value={form.organization}
                    onChange={handleChange}
                    className="w-full bg-card border border-border/60 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all"
                    placeholder="Team or department"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-card border border-border/60 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all"
                    placeholder="you@organization.com"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">Role</label>
                  <input
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full bg-card border border-border/60 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all"
                    placeholder="Your title or role"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-card border border-border/60 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all resize-none"
                  placeholder="Tell us briefly about your organization and what you're looking for."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 disabled:opacity-60"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    Send Inquiry
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}