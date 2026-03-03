import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategories } from "@/data/mockProducts";

const concerns = [
  { label: "Diabetes Care", categories: ["Jaggery", "Atta"] },
  { label: "Gut Health", categories: ["Atta", "Spices"] },
  { label: "Immunity", categories: ["Immunity", "Spices"] },
  { label: "Weight Loss", categories: ["Atta", "Oils"] },
];

const ShopByConcern: React.FC = () => {
  const [active, setActive] = useState(0);
  const products = getProductsByCategories(concerns[active].categories, 4);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="relative mb-8">
        <div
          className="absolute inset-0 -top-4 rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(15 60% 90%), hsl(25 70% 88%), hsl(15 50% 92%))",
            height: "80px",
          }}
        >
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 40" preserveAspectRatio="none">
            <path d="M0,20 Q300,40 600,20 Q900,0 1200,20 L1200,40 L0,40 Z" fill="hsl(42 30% 97%)" />
          </svg>
        </div>
        <div className="relative pt-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Shop By C<span className="text-brand-amber">❤</span>ncern
          </h2>
        </div>
      </div>

      <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide pb-1">
        {concerns.map((c, i) => (
          <button
            key={c.label}
            onClick={() => setActive(i)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
              active === i
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">No products found.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ShopByConcern;
