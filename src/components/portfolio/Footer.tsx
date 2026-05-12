import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

const quickLinks = [
  { href: "/#about", label: "About" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#corporate", label: "Corporate" },
  { href: "/#packages", label: "Packages" },
  { href: "/#contact", label: "Contact" },
];

const services = ["Wedding Photography", "Birthday Celebrations", "Baby Showers", "Corporate Events", "Brand Portraits"];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-6xl">Mehfill</span>
              <span className="font-display text-5xl italic text-primary">Moments</span>
            </div>
            <p className="mt-5 max-w-sm text-background/70 text-pretty">
              An independent photographer crafting heirloom imagery for Indian
              weddings, families, and brands. Available across India and worldwide.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {[Instagram, Facebook, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid place-items-center h-10 w-10 rounded-full border border-background/20 hover:bg-primary hover:border-primary transition-colors duration-500"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-background/50">Explore</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline text-background/85">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-background/50">Services</h4>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s} className="text-background/85">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/55">
          <p>© {new Date().getFullYear()} Mehfill Moments Photography. Crafted with care in udaipur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       .</p>
          <p className="font-display italic text-background/70">Made to be remembered.</p>
        </div>
      </div>
    </footer>
  );
};
