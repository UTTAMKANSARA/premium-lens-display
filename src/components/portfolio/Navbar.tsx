import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#corporate", label: "Corporate" },
  { href: "/#packages", label: "Packages" },
  { href: "/#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-cream/85 backdrop-blur-md border-b border-border/60 py-3"
        : "bg-transparent py-6"
        }`}
    >

      <div className="container flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display text-4xl font-semibold tracking-tight text-foreground">Mehfill</span>
          <span className="font-display text-3xl font-semibold text-primary italic">Moments</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-muted-foreground ml-2">Photography</span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline text-sm tracking-wide text-foreground/80 hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm tracking-wide hover:bg-primary transition-colors duration-500"
        >
          Book a session
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="container flex flex-col gap-4 py-6 border-t border-border/60 mt-3 bg-cream/95 backdrop-blur">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-3 text-sm"
          >
            Book a session
          </a>
        </nav>
      </div>
    </header>
  );
};
