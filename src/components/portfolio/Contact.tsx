import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, Send, Instagram } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";


const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  eventType: z.string().min(1, "Choose an event type"),
  message: z.string().trim().min(10, "Tell us a little more (10+ chars)").max(800),
});

const PHONE = "+91 9549111596";
const PHONE_HREF = "+919549111596";
const EMAIL = "studio@mehfillmoments.in";
const STUDIO = "Udaipur · Available across India";

export const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    const data = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      eventType: String(form.get("eventType") || ""),
      message: String(form.get("message") || ""),
    };
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    setSubmitting(true);

    // Add Web3Forms access key
    form.append("access_key", "99d3a489-7c36-43e7-9559-b2dc5863797a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Success! Your message has been sent.");
        formElement.reset();
      } else {
        toast.error("Error: " + result.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-peach/40 blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: pitch + form */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.32em] text-primary">Let's create</span>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-5 font-display text-5xl md:text-6xl leading-[1.02] tracking-tight max-w-xl">
                Tell me about your <em className="italic text-primary">moment</em>.
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-5 text-muted-foreground max-w-md">
                Share a few details and I'll respond personally within 24 hours
                with availability and a tailored quote.
              </p>
            </Reveal>

            <Reveal delay={360}>
              <form onSubmit={onSubmit} className="mt-10 grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Your name</span>
                  <input name="name" required maxLength={80} className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors" placeholder="Priya Sharma" />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Email</span>
                  <input name="email" type="email" required maxLength={160} className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3" placeholder="you@email.com" />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Phone</span>
                  <input name="phone" required maxLength={20} className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3" placeholder="+91 9XXXX XXXXX" />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Event type</span>
                  <select name="eventType" required defaultValue="" className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground">
                    <option value="" disabled>Select event</option>
                    <option>Wedding</option>
                    <option>Birthday Celebration</option>
                    <option>Baby Shower</option>
                    <option>Corporate</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Tell me about it</span>
                  <textarea name="message" required maxLength={800} rows={4} className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 resize-none" placeholder="Date, city, vibe, anything you'd like me to know…" />
                </label>
                <div className="sm:col-span-2 flex flex-wrap items-center gap-4 mt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-3 rounded-full bg-foreground text-background px-6 py-3 text-sm tracking-wide hover:bg-primary transition-colors duration-500 disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : "Send inquiry"}
                    <Send size={16} />
                  </button>
                  <a
                    href={`https://wa.me/${PHONE_HREF.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm tracking-wide hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle size={16} /> WhatsApp now
                  </a>
                </div>
              </form>
            </Reveal>
          </div>

          {/* Right: details card */}
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <div className="rounded-3xl bg-foreground text-background p-8 md:p-10 shadow-warm h-full flex flex-col">
                <span className="text-xs uppercase tracking-[0.32em] text-secondary">Studio</span>
                <h3 className="font-display text-3xl mt-4">Aarav Kapoor Photography</h3>
                <p className="mt-3 text-background/70 text-sm">
                  Booking dates 3–6 months in advance for the 2026 wedding season.
                </p>

                <ul className="mt-10 space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="grid place-items-center h-10 w-10 rounded-full bg-background/10 text-secondary"><Phone size={16} /></span>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-background/50">Phone</div>
                      <a href={`tel:${PHONE_HREF}`} className="link-underline mt-1 block">{PHONE}</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid place-items-center h-10 w-10 rounded-full bg-background/10 text-secondary"><Mail size={16} /></span>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-background/50">Email</div>
                      <a href={`mailto:${EMAIL}`} className="link-underline mt-1 block">{EMAIL}</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid place-items-center h-10 w-10 rounded-full bg-background/10 text-secondary"><MapPin size={16} /></span>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-background/50">Studio</div>
                      <p className="mt-1 text-sm">{STUDIO}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid place-items-center h-10 w-10 rounded-full bg-background/10 text-secondary"><Instagram size={16} /></span>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-background/50">Instagram</div>
                      <a href="#" className="link-underline mt-1 block">@aarav.kapoor</a>
                    </div>
                  </li>
                </ul>

                <div className="mt-auto pt-10 border-t border-background/15">
                  <p className="font-display italic text-xl text-background/80">
                    "The best moments are the ones you almost missed."
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
