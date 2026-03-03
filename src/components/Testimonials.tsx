import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "NITHIN KAMATH",
    title: "Founder, Rainmatter",
    quote:
      "At Rainmatter Health, we care deeply about what we eat. Two Brothers Organic Farms stood out—clean food, deep purpose, and a clear mission to support farmer livelihoods. We're investors, but also proud customers.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "ANAND S AHUJA",
    title: "Founder Bhaane",
    quote:
      "Pure love, pure taste, pure intention. Every product from Two Brothers feels authentic and full of heart—from how it's grown to how it tastes. It inspires mindful consumption.",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "MIRA KAPOOR",
    title: "India",
    quote:
      "One of the few brands that makes ghee the traditional way—from dahi, not malai. That alone won me over. Delicious, wholesome, and always a repeat buy.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-6 relative"
              style={{ backgroundColor: "hsl(var(--accent))" }}
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
                <div className="ml-auto text-right">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/50 ml-auto"
                  />
                </div>
              </div>
              <div className="mb-3">
                <h4 className="font-bold text-sm text-accent-foreground tracking-wide">
                  {t.name}
                </h4>
                <p className="text-accent-foreground/70 text-xs">{t.title}</p>
              </div>
              <p className="text-accent-foreground/90 text-sm leading-relaxed">
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
