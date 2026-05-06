import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, Camera, Sparkles } from "lucide-react";
import { Reveal } from "@/components/portfolio/Reveal";
import { Parallax } from "@/components/portfolio/Parallax";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { IMG } from "@/components/portfolio/images";

const gallery = [
  { src: IMG.corp1, alt: "Corporate keynote", aspect: "aspect-[4/5]" },
  { src: IMG.corp2, alt: "Team workshop", aspect: "aspect-square" },
  { src: IMG.corp3, alt: "Brand portrait", aspect: "aspect-[3/4]" },
  { src: IMG.corp4, alt: "Office candid", aspect: "aspect-[4/5]" },
  { src: IMG.heroCorporate, alt: "Conference stage", aspect: "aspect-square" },
  { src: IMG.catCorporate, alt: "Corporate event", aspect: "aspect-[3/4]" },
];

const highlights = [
  { icon: Briefcase, label: "140+ brands served" },
  { icon: Camera, label: "Polished, on-brand visuals" },
  { icon: Sparkles, label: "Same-day delivery available" },
];

const CorporatePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
        <img src={IMG.catCorporate} alt="Corporate photography hero" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="container relative z-10 pb-16 md:pb-20 text-background">
          <Reveal>
            <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-background/80 hover:text-background transition-colors mb-6">
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.95] tracking-tight max-w-3xl">
              Corporate <em className="italic text-primary">Photography</em>
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-5 max-w-lg text-background/75 text-pretty text-lg">
              A refined, deadline-friendly approach to corporate imagery — from annual conferences and product launches to leadership portraits.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 border-b border-border/60 bg-cream-deep/50">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 100}>
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center h-10 w-10 rounded-full bg-primary/10 text-primary"><h.icon size={18} /></span>
                  <span className="text-sm tracking-wide text-muted-foreground">{h.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container">
          <Reveal>
            <div className="mb-12">
              <span className="text-xs uppercase tracking-[0.32em] text-primary">Gallery</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">Professional, polished, powerful.</h2>
            </div>
          </Reveal>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5">
            {gallery.map((img, i) => (
              <Reveal key={img.src} variant="mask" delay={i * 70}>
                <Parallax speed={i % 2 === 0 ? 0.04 : -0.04}>
                  <div className="group relative overflow-hidden rounded-2xl shadow-card break-inside-avoid">
                    <img src={img.src} alt={img.alt} loading="lazy" className={`w-full ${img.aspect} object-cover img-zoom`} />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-700" />
                  </div>
                </Parallax>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-foreground text-background">
        <div className="container text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight">Elevate your <em className="italic text-primary">brand image</em>?</h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-5 text-background/70 max-w-md mx-auto">From conferences to team portraits — polished visuals that reflect your brand's identity.</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/#contact" className="inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm tracking-wide hover:bg-secondary hover:text-foreground transition-colors duration-500">Request corporate quote</a>
              <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-background/25 px-7 py-3.5 text-sm tracking-wide hover:bg-background/10 transition-colors duration-500"><ArrowLeft size={14} /> Back to Home</Link>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CorporatePage;
