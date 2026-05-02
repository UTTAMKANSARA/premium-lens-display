## Photography Portfolio — Build Plan

A premium, cinematic single-page portfolio for an Indian event photographer (weddings, birthdays, baby showers, corporate). Heavy focus on motion design, elegant spacing, and visual storytelling.

### Design system

- **Palette (charcoal + peach + cream)**
  - Background: cream `#f5f0e8`
  - Foreground / ink: charcoal `#1a1a1a`
  - Primary accent: copper `#c9805c`
  - Secondary accent: muted peach `#e8b8a0`
  - Soft surfaces, warm shadows, no harsh blacks
- **Typography**: Cormorant (display serif) for headlines + Karla (sans) for body — cinematic, romantic, wedding-friendly. Loaded via Google Fonts.
- **Motion language**: slow ease-out (600–900ms), staggered reveals, parallax depth, image masks, soft floating elements. Respects `prefers-reduced-motion`.
- **Imagery**: curated Unsplash photography (weddings, candids, corporate, decor) used as placeholders, easy to swap later.

### Sections

**1. Sticky navbar**
- Transparent over hero, fades to cream/blur on scroll
- Logo wordmark + links (About, Portfolio, Services, Contact) with animated underline
- Mobile: slide-in sheet menu

**2. Hero — Bento showcase**
- Asymmetric bento grid of 5–6 photos (wedding, baby, corporate, candid) with subtle parallax on each tile (different speeds)
- Large serif headline with word-by-word reveal: *"Stories told in light."*
- Sub: "Professional Indian event photography — weddings, birthdays, baby showers & corporate."
- Two CTAs: **View Portfolio** (solid copper) and **Contact Now** (ghost)
- Floating decorative elements (small framed thumbnails, soft blurred peach orbs)

**3. About**
- Two-column: portrait image (with peach offset frame) + copy
- Animated reveal of name, tagline, 2-paragraph intro
- 3 stat counters that animate on scroll: **8+ Years**, **400+ Events**, **350+ Happy Clients**
- Subtle parallax on portrait

**4. Portfolio categories**
- 4 large cards: Wedding, Birthday, Baby Shower, Corporate
- Hover: image zooms, dark warm overlay fades in, category name + "View Gallery" slides up
- Staggered fade-in on scroll
- Asymmetric heights for visual rhythm

**5. Corporate photography (dedicated)**
- Cleaner, more refined layout — split section with editorial copy on left and 4-image masonry on right
- Sub-categories listed with icons: Office Events · Brand · Functions · Team Portraits · Meetings
- Logo strip ("Trusted by") with marquee animation

**6. Packages / Services**
- 3 elegant cards: **Basic**, **Standard** (highlighted/elevated), **Premium**
- Each card: duration, edited photos count, delivery time, feature list, **Inquire** button
- Hover: card lifts, copper border glow
- Pricing kept as "Starting at ₹XX,XXX" placeholders

**7. Testimonials**
- 3-up card layout with circular client avatars, 5-star, italic serif quote
- Soft shadow, cream surface
- Gentle fade + slide-in on scroll; on mobile becomes a swipeable carousel

**8. Contact**
- Two-column: contact form (name, email, phone, event type select, message) on left; contact details on right
- Prominent **WhatsApp** button (green accent), phone, email, studio location
- Form submission shows toast (no backend wired — placeholder handler)

**9. Footer**
- Brand wordmark + short tagline
- Quick links, services, contact details
- Social icons (Instagram, Facebook, YouTube, Pinterest) with hover lift
- Copyright line

### Animation inventory

- Parallax: hero bento tiles, about portrait, section background accents
- Scroll reveals: fade-up, mask-reveal for images, word-stagger for headlines (Intersection Observer)
- Hover: image zoom + overlay, button shine, animated underlines, card lift
- Floating: subtle Y-axis loop on hero decorative elements
- Counters: easing number animation on stats
- Marquee: corporate logo strip
- Smooth scroll for in-page nav links

### Technical details

- Single-page app on existing `/` route (`src/pages/Index.tsx`)
- Components split under `src/components/portfolio/`: `Navbar`, `Hero`, `About`, `Portfolio`, `Corporate`, `Packages`, `Testimonials`, `Contact`, `Footer`, plus shared `Reveal`, `Parallax`, `Counter`
- Design tokens added to `src/index.css` (HSL vars: background, foreground, primary=copper, secondary=peach, accent, muted, plus custom shadows) and Tailwind extended with the new keyframes (fade-in, fade-up, scale-in, slide-in, float, shimmer, marquee) + font families
- Google Fonts (Cormorant + Karla) added in `index.html`
- Use existing shadcn `button`, `card`, `input`, `textarea`, `select`, `sonner` for toasts
- Lucide icons for UI; no new heavy deps
- Images: Unsplash URLs (lazy-loaded, `loading="lazy"`, proper alt text)
- Reduced-motion media query disables parallax/float

### Out of scope (can add later)

- Real backend for contact form (would need Lovable Cloud)
- Individual portfolio gallery sub-pages
- CMS for swapping photos
- Blog / Instagram feed embed
