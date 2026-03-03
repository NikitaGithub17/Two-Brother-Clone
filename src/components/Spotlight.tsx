import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { products } from "@/data/mockProducts";

const spotlightProducts = products.slice(0, 10);

const reviews = [
  { name: "Truemato Ketchup", review: "Absolutely love this! Not just ketchup - a real food upgrade. Honest ingredients, no shortcuts.", reviewer: "Anand M" },
  { name: "Chyawanprash", review: "I must have tried 15 different Chyawanprash brands and this one is the king and queen of them all.", reviewer: "Maya Madne" },
  { name: "A2 Bilona Ghee", review: "The aroma is incredible. You can tell this is real ghee made with love and tradition.", reviewer: "Priya S" },
  { name: "Khapli Wheat Atta", review: "My blood sugar levels improved within weeks of switching to this atta. Life changing!", reviewer: "Ramesh K" },
  { name: "Lakadong Turmeric", review: "The color and potency is unmatched. Best turmeric I've ever used in my cooking.", reviewer: "Sanjana D" },
];

// Interleave products and reviews
const spotlightItems = spotlightProducts.flatMap((p, i) => {
  const items: Array<{ type: "product"; product: typeof p } | { type: "review"; review: typeof reviews[0] }> = [
    { type: "product", product: p },
  ];
  if (i < reviews.length) {
    items.push({ type: "review", review: reviews[i] });
  }
  return items;
});

const Spotlight: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-3xl font-bold text-foreground flex items-center gap-2">
          Spotlight
          <span className="text-brand-amber">✦ ★</span>
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
      >
        {spotlightItems.map((item, i) =>
          item.type === "product" ? (
            <div
              key={`p-${i}`}
              className="flex-shrink-0 w-56 rounded-2xl overflow-hidden shadow-md snap-start"
            >
              <img
                src={item.product.image_url}
                alt={item.product.name}
                className="w-full h-72 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop";
                }}
              />
              <div className="p-3 bg-card">
                <p className="text-sm font-semibold text-foreground truncate">{item.product.name}</p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-3 h-3 ${
                        j < Math.floor(item.product.rating)
                          ? "fill-brand-amber text-brand-amber"
                          : "text-border fill-border"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">{item.product.rating}</span>
                </div>
                <p className="text-sm font-bold text-foreground mt-1">₹{item.product.price}</p>
              </div>
            </div>
          ) : (
            <div
              key={`r-${i}`}
              className="flex-shrink-0 w-56 rounded-2xl p-5 flex flex-col justify-between snap-start"
              style={{ backgroundColor: "hsl(var(--accent))" }}
            >
              <div>
                <h3 className="font-display text-base font-bold text-accent-foreground mb-2">
                  {item.review.name}
                </h3>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-accent-foreground text-accent-foreground" />
                  ))}
                </div>
                <p className="text-accent-foreground/90 text-sm leading-relaxed">
                  "{item.review.review}"
                </p>
              </div>
              <p className="text-accent-foreground font-semibold text-sm mt-4">
                — {item.review.reviewer}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Spotlight;
