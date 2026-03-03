import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/data/mockProducts";

const categories = ["All", "Ghee", "Atta", "Oils", "Jaggery", "Immunity", "Spices"];

const ProductGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const products = getProducts(activeCategory);

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
        <div className="relative pt-4 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">Farm Fresh</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Most Loved</h2>
          </div>
          <button className="px-5 py-2 border-2 border-primary text-primary rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
            Shop More →
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">No products found in this category.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
