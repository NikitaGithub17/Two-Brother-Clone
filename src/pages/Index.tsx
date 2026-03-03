import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import ShopByConcern from "@/components/ShopByConcern";
import FarmersSection from "@/components/FarmersSection";
import Spotlight from "@/components/Spotlight";
import FeaturedIn from "@/components/FeaturedIn";
import Testimonials from "@/components/Testimonials";
import BeyondProducts from "@/components/BeyondProducts";
import CartDrawer from "@/components/CartDrawer";
import Notifications from "@/components/Notifications";

const NewsletterInline = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  if (submitted) return <p className="text-brand-amber font-semibold text-sm">Thank you! We'll be in touch 🌾</p>;

  return (
    <form onSubmit={handleSubmit} className="flex items-center border-b border-border max-w-sm mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your e-mail"
        required
        className="flex-1 px-2 py-2 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-sm"
      />
      <button
        type="submit"
        className="px-3 py-2 text-foreground hover:text-primary transition"
      >
        →
      </button>
    </form>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <ShopByConcern />
        <Spotlight />
        <FeaturedIn />
        <Testimonials />
        <BeyondProducts />
        <FarmersSection />

        {/* Footer */}
        <footer className="relative overflow-hidden">
          {/* Farm illustration background */}
          <div
            className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
            style={{
              background: "linear-gradient(to top, hsl(120 30% 35% / 0.15), transparent)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{ height: "120px" }}
          >
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,60 Q200,20 400,50 Q600,80 800,40 Q1000,10 1200,50 Q1300,70 1440,45 L1440,120 L0,120 Z" fill="hsl(120 35% 30% / 0.2)" />
              <path d="M0,80 Q300,50 600,75 Q900,100 1200,65 Q1350,55 1440,70 L1440,120 L0,120 Z" fill="hsl(120 35% 28% / 0.15)" />
            </svg>
          </div>

          {/* Sun decoration */}
          <div className="absolute top-8 right-[15%] pointer-events-none">
            <div className="w-10 h-10 rounded-full bg-brand-amber opacity-80" />
            <svg className="absolute -left-4 top-3 w-6 h-6 text-brand-amber opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3,12 Q8,8 13,12" />
            </svg>
          </div>

          <div className="relative z-10 pt-14 pb-8 px-4">
            <div className="max-w-6xl mx-auto">
              {/* Top: Logo + Newsletter + Contact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-10">
                <div className="flex flex-col items-start gap-1">
                  <div className="font-display text-3xl font-bold text-foreground leading-tight">
                    TWO<span className="align-super text-xs">®</span><br />BROTHERS
                  </div>
                  <div className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">ORGANIC FARMS</div>
                </div>

                <div className="text-center">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">THE ORGANIC WAY OF LIFE</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Subscribe for special offers, newsletters and become a part of our movement
                  </p>
                  <NewsletterInline />
                </div>

                <div className="text-muted-foreground space-y-2 md:text-right">
                  <p className="font-semibold text-foreground text-sm">TBOF FOODS PRIVATE LIMITED (Two Brothers Organic Farms India)</p>
                  <p className="text-xs text-brand-amber">(CIN): U01110PN2019TC182942</p>
                  <p className="text-xs">11th FLOOR, N-1104, JASMINIUM BUILDING,<br />MAGARPATTA CITY, HADAPSAR, Pune,<br />Maharashtra, 411028</p>
                  <p className="text-xs">Email: <a href="mailto:info@twobrothersindia.com" className="text-primary hover:underline">info@twobrothersindia.com</a></p>
                  <p className="text-xs">Tel: 7406753753</p>
                  <p className="text-xs">Grievances: 7406753753</p>
                </div>
              </div>

              {/* Categories / General / Connect - dropdown style */}
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 border-t border-border pt-8">
                {[
                  { title: "CATEGORIES", links: ["Ghee", "Atta", "Oils", "Jaggery", "Spices", "Immunity"] },
                  { title: "GENERAL", links: ["Our Story", "Blog", "Lab Reports", "Careers", "FAQs"] },
                  { title: "CONNECT", links: ["Contact Us", "Track Order", "Returns", "Shipping Policy"] },
                ].map((col) => (
                  <details key={col.title} className="group text-center">
                    <summary className="cursor-pointer font-semibold text-xs tracking-widest text-foreground mb-2 list-none flex items-center gap-1 justify-center select-none">
                      {col.title}
                      <ChevronDownIcon />
                    </summary>
                    <ul className="space-y-1 mt-2">
                      {col.links.map((link) => (
                        <li key={link}>
                          <button className="text-muted-foreground hover:text-primary text-xs transition-colors">{link}</button>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>

              {/* Social icons */}
              <div className="flex justify-center gap-5 mb-6">
                {[
                  { label: "Facebook", d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                  { label: "Instagram", d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5 17.51 6.5" },
                  { label: "YouTube", d: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" },
                  { label: "LinkedIn", d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d={s.d} />
                    </svg>
                  </a>
                ))}
              </div>

              <div className="text-center text-xs text-muted-foreground border-t border-border pt-4">
                © 2024 Two Brothers Organic Farms. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </main>

      <CartDrawer />
      <Notifications />
    </div>
  );
};

const ChevronDownIcon = () => (
  <svg className="w-3 h-3 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default Index;
