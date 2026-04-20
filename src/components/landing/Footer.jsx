import { Linkedin } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Dash', href: '#why-dash' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/40 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-black text-xs tracking-tight">D</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-foreground font-bold text-sm tracking-wide">DASH</span>
                <span className="text-muted-foreground text-[9px] tracking-[0.15em] uppercase">Sports Solutions</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI-driven sports consulting for programs, teams, and individual athletes. Diagnose. Design. Deliver.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Navigation</h4>
            <nav className="space-y-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleClick(link.href)}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Get in Touch</h4>
            <div className="space-y-2.5 text-sm text-muted-foreground">
              <div>info@dashsportssolutions.com</div>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dash Sports Solutions. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/50">
            Confidential. For informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}