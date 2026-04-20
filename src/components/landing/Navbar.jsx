import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const solutionLinks = [
  { label: 'Finance Solutions', href: '/solutions#finance', desc: 'Auditing, cost analysis, budgeting' },
  { label: 'Operations Solutions', href: '/solutions#operations', desc: 'Logistics, workflow, human capital' },
  { label: 'Technology Solutions', href: '/solutions#technology', desc: 'AI tools, analytics, performance systems' },
];

const navLinks = [
  { label: 'About', sectionId: 'about' },
  { label: 'Process', sectionId: 'process' },
];

const SOCIAL = {
  instagram: 'https://instagram.com/yourhandle',
  linkedin: 'https://linkedin.com/company/yourcompany',
};

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar({ onBookConsultation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const solutionsRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (!solutionsRef.current?.contains(e.target)) setSolutionsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileOpen(false);
    setSolutionsOpen(false);
    if (isHome) {
      scrollToSection(sectionId);
    } else {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 350);
    }
  };

  const handleBookConsultation = () => {
    setMobileOpen(false);
    if (onBookConsultation) onBookConsultation();
  };

  const navBg = scrolled || !isHome
    ? 'bg-background/95 backdrop-blur-md border-b border-border/60 shadow-sm'
    : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo — uses uploaded logo image */}
          <Link to="/" className="flex items-center group">
            <img
              src="https://media.base44.com/images/public/69c076b33901b62244261ce8/abc656e77_image.png"
              alt="Dashm Sports"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
            >
              Home
            </Link>

            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.sectionId)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </button>
            ))}

            {/* Who We Serve */}
            <Link
              to="/who-we-serve"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
            >
              Who We Serve
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative" ref={solutionsRef}>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
              >
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full right-0 mt-3 w-72 bg-card border border-border rounded-lg shadow-xl overflow-hidden"
                  >
                    {solutionLinks.map((s) => (
                      <Link
                        key={s.href}
                        to={s.href}
                        onClick={() => setSolutionsOpen(false)}
                        className="block px-5 py-4 hover:bg-secondary/60 transition-colors border-b border-border/30 last:border-0"
                      >
                        <div className="text-sm font-medium text-foreground">{s.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{s.desc}</div>
                      </Link>
                    ))}
                    <Link
                      to="/solutions"
                      onClick={() => setSolutionsOpen(false)}
                      className="block px-5 py-3.5 bg-secondary/40 hover:bg-secondary/70 transition-colors text-xs font-semibold text-foreground/70 tracking-wider uppercase"
                    >
                      View All Solutions →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 border-l border-border/50 pl-6">
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={handleBookConsultation}
              className="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2.5 rounded-sm hover:bg-primary/90 transition-all duration-300"
            >
              Start with Dash AI
            </button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground p-1">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <Link to="/" onClick={() => setMobileOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              {navLinks.map((link) => (
                <button key={link.label} onClick={() => handleNavClick(link.sectionId)}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors w-full text-left">
                  {link.label}
                </button>
              ))}
              <Link to="/who-we-serve" onClick={() => setMobileOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Who We Serve
              </Link>

              <div className="pt-2 border-t border-border/30">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Solutions</div>
                {solutionLinks.map((s) => (
                  <Link key={s.href} to={s.href} onClick={() => setMobileOpen(false)}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5">
                    {s.label}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2 border-t border-border/30">
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
                <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>

              <button onClick={handleBookConsultation}
                className="w-full text-sm font-semibold bg-primary text-primary-foreground px-5 py-3 rounded-sm">
                Start with Dash AI
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}