import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Zap } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const ONBOARDING = [
  { key: 'name', question: "Hi — I'm Dash AI, your sports business intelligence assistant. I help organizations across the full sports ecosystem identify and build custom solutions. To get started, what's your name?" },
  { key: 'email', question: (name) => `Great to meet you, ${name}. What email address should I use for your profile?` },
  { key: 'role', question: "What's your current role? (e.g. Athletic Director, Head Coach, GM, Owner, Athlete, Facility Manager...)" },
  { key: 'org', question: "And what organization or entity are you with?" },
];

const DIAGNOSTIC = [
  "Thanks for that. Now let's figure out exactly what you need.\n\nDash works across three solution areas: **Finance**, **Operations**, and **Technology**. Which of these feels closest to your challenge — or are you unsure yet?",
  null,
];

const TIER_FOLLOW_UPS = {
  finance: "Got it. What's the core financial challenge you're dealing with? (e.g. budget management, cost reduction, revenue gaps, financial reporting, funding...)",
  operations: "Understood. What's the primary operational issue? (e.g. staffing, logistics, workflow bottlenecks, organizational structure, compliance...)",
  technology: "Perfect. What technology challenge are you facing? (e.g. lack of analytics, outdated tools, AI integration, data management, performance tracking...)",
  unsure: "No problem — that's exactly what I'm here to help with. Describe your situation in your own words and I'll help identify the right solution area.",
};

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
        <Zap className="w-3.5 h-3.5 text-primary" />
      </div>
      <div className="bg-card border border-border/50 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
        {[0, 0.2, 0.4].map((d, i) => (
          <motion.div key={i} className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
            animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, delay: d, repeat: Infinity }} />
        ))}
      </div>
    </div>
  );
}

function BotMessage({ content }) {
  return (
    <div className="flex items-end gap-2">
      <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
        <Zap className="w-3.5 h-3.5 text-primary" />
      </div>
      <div className="bg-card border border-border/50 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
        <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
      </div>
    </div>
  );
}

function UserMessage({ content }) {
  return (
    <div className="flex justify-end">
      <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%]">
        <p className="text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

export default function DashAIChat({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [phase, setPhase] = useState('onboarding'); // onboarding | diagnostic | freeform
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [userData, setUserData] = useState({ name: '', email: '', role: '', org: '' });
  const [diagnosticStep, setDiagnosticStep] = useState(0);
  const [tier, setTier] = useState(null);
  const [leadSaved, setLeadSaved] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setMessages([]);
      setInput('');
      setPhase('onboarding');
      setOnboardingStep(0);
      setUserData({ name: '', email: '', role: '', org: '' });
      setDiagnosticStep(0);
      setTier(null);
      setLeadSaved(false);
      setTimeout(() => pushBot(ONBOARDING[0].question), 600);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  function pushBot(text, delay = 0) {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { role: 'bot', content: text }]);
    }, delay + 900);
  }

  async function saveLead(data, tierName = '', challenge = '') {
    if (leadSaved) return;
    setLeadSaved(true);
    base44.entities.DashAILead.create({
      name: data.name,
      email: data.email,
      role: data.role,
      organization: data.org,
      tier: tierName,
      challenge,
    }).catch(() => {});
  }

  function handleSend() {
    const text = input.trim();
    if (!text) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: text }]);

    if (phase === 'onboarding') {
      const step = onboardingStep;
      const key = ONBOARDING[step].key;
      const newData = { ...userData, [key]: text };
      setUserData(newData);

      const nextStep = step + 1;
      if (nextStep < ONBOARDING.length) {
        setOnboardingStep(nextStep);
        const q = ONBOARDING[nextStep].question;
        pushBot(typeof q === 'function' ? q(newData.name) : q);
      } else {
        // Onboarding complete — transition to diagnostic
        setPhase('diagnostic');
        setDiagnosticStep(0);
        pushBot(`Perfect — you're all set, ${newData.name}.\n\n${DIAGNOSTIC[0]}`, 200);
      }
    } else if (phase === 'diagnostic' && diagnosticStep === 0) {
      const lower = text.toLowerCase();
      let detectedTier = 'unsure';
      if (lower.includes('finance') || lower.includes('financial') || lower.includes('budget') || lower.includes('cost') || lower.includes('revenue') || lower.includes('audit')) detectedTier = 'finance';
      else if (lower.includes('operation') || lower.includes('logistics') || lower.includes('workflow') || lower.includes('staff') || lower.includes('human capital')) detectedTier = 'operations';
      else if (lower.includes('tech') || lower.includes('data') || lower.includes('analytics') || lower.includes('ai') || lower.includes('software') || lower.includes('platform')) detectedTier = 'technology';

      setTier(detectedTier);
      setDiagnosticStep(1);
      pushBot(TIER_FOLLOW_UPS[detectedTier]);
    } else if (phase === 'diagnostic' && diagnosticStep === 1) {
      setPhase('freeform');
      saveLead(userData, tier, text);
      pushBot(`That's really helpful context. Based on what you've shared, here's what I'm seeing:\n\nYou're operating at the **${tier === 'unsure' ? 'custom' : tier}** level and the core challenge centers around: **"${text}"**\n\nI'm flagging this for our team now. A Dash strategist will review your profile and reach out within 24 hours with a tailored recommendation.\n\nIn the meantime — is there anything else you'd like to add or clarify?`);
    } else {
      // Freeform continuation
      pushBot(`Noted. I've added that to your profile. Our team will take everything you've shared into account when building your custom solution.\n\nIs there anything else on your mind?`);
    }
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative z-10 w-full sm:max-w-lg h-[92vh] sm:h-[620px] bg-background border border-border rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border/50 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">Dash AI</div>
                  <div className="text-[10px] text-primary tracking-[0.15em] uppercase">Dash Athletic Intelligence</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-muted-foreground">Active</span>
                </div>
                <button onClick={onClose} className="p-1.5 rounded-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
              {messages.map((m, i) =>
                m.role === 'bot'
                  ? <BotMessage key={i} content={m.content} />
                  : <UserMessage key={i} content={m.content} />
              )}
              {typing && <TypingIndicator />}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-4 pb-5 pt-3 border-t border-border/50 shrink-0">
              <div className="flex items-end gap-2 bg-card border border-border/60 rounded-xl px-4 py-3">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Type your response..."
                  rows={1}
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 outline-none resize-none max-h-32"
                  style={{ lineHeight: '1.5' }}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0 disabled:opacity-40 hover:bg-primary/90 transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-primary-foreground" />
                </button>
              </div>
              <p className="text-[10px] text-muted-foreground/50 text-center mt-2">Powered by Dash Athletic Intelligence</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}