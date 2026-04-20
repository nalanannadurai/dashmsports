import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

const SERVICES = [
  'Front Office Evaluation',
  'Athletic Department Strategy',
  'Performance & Operations Audit',
  'Data & Analytics Advisory',
  'Organizational Alignment Review',
  'Recruiting, Roster & Talent Strategy',
];

const EMPTY_FORM = { name: '', organization: '', role: '', email: '', phone: '', service: '', message: '' };

export default function ConsultationModal({ isOpen, onClose, defaultService = '' }) {
  const [form, setForm] = useState({ ...EMPTY_FORM, service: defaultService });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setForm({ ...EMPTY_FORM, service: defaultService });
      setSubmitted(false);
    }
  }, [isOpen, defaultService]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative z-10 w-full max-w-xl bg-card border border-border rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 pb-4 border-b border-border/50">
              <div>
                <div className="text-xs text-primary tracking-[0.2em] uppercase font-semibold mb-1">Dash Sports Solutions — Powered by Dash AI</div>
                <h2 className="text-xl font-bold text-foreground">Get Your Custom Diagnosis</h2>
                <p className="text-sm text-muted-foreground mt-1">Tell us about your program, team, or athlete. Dash AI will identify the right solution — or build one from scratch.</p>
              </div>
              <button
                onClick={onClose}
                className="ml-4 p-1.5 rounded-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground">Inquiry Received</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed max-w-sm mx-auto">
                    Thank you. Your consultation request has been received. Our team will be in touch shortly.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-6 py-2.5 border border-border/60 text-sm text-muted-foreground hover:text-foreground hover:border-border rounded-sm transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name *" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                    <Field label="Organization *" name="organization" value={form.organization} onChange={handleChange} placeholder="Team or department" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Role / Title" name="role" value={form.role} onChange={handleChange} placeholder="Your title" />
                    <Field label="Email *" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@org.com" required />
                  </div>
                  <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (000) 000-0000" />

                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">Service of Interest</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-card border border-border/60 rounded-sm px-4 py-3 text-sm text-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all appearance-none"
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">What challenge are you facing? *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your situation or goals."
                      className="w-full bg-card border border-border/60 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all resize-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 disabled:opacity-60"
                    >
                      {loading ? (
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      ) : 'Submit Inquiry'}
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-3 border border-border/60 text-sm text-muted-foreground hover:text-foreground hover:border-border rounded-sm transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, name, value, onChange, placeholder, type = 'text', required }) {
  return (
    <div>
      <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-card border border-border/60 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all"
      />
    </div>
  );
}