import React, { useState } from "react";
import { Heart, Star } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { getQuantityOptions, type Product, type QuantityOption } from "@/data/mockProducts";

interface ProductCardProps {
  product: Product;
}

const badgeColors: Record<string, string> = {
  Trending: "bg-brand-amber text-white",
  "Must Try": "bg-primary text-primary-foreground",
  "Hot Deals": "bg-brand-red text-white",
  "Winter Special": "bg-blue-700 text-white",
  "Best Seller": "bg-brand-amber text-white",
  "New Launch": "bg-purple-600 text-white",
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const options = getQuantityOptions(product.id);
  const [selectedOption, setSelectedOption] = useState<QuantityOption>(options[0]);
  const [hovered, setHovered] = useState(false);
  const { addToCart, toggleFavorite, isFavorite } = useStore();

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      image: product.image_url,
      quantity: 1,
      quantityLabel: selectedOption.label,
      price: selectedOption.price,
    });
  };

  const displayPrice = selectedOption.price;
  const fav = isFavorite(product.id);

  return (
    <div
      className="bg-card rounded-xl overflow-hidden flex flex-col group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-secondary">
        <img
          src={hovered && product.image_url_2 ? product.image_url_2 : product.image_url}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop";
          }}
        />
        {product.badge && (
          <span
            className={`absolute top-3 left-0 text-[11px] font-bold px-3 py-1 rounded-r-full ${
              badgeColors[product.badge] || "bg-muted text-foreground"
            }`}
          >
            {product.badge}
          </span>
        )}
        <button
          onClick={() => toggleFavorite(product.id, product.name)}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              fav ? "fill-brand-red text-brand-red" : "text-primary"
            }`}
          />
        </button>
      </div>

      <div className="p-4 flex flex-col gap-1.5 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 flex-1">
            {product.name}
          </h3>
          <span className="text-base font-bold text-foreground whitespace-nowrap">
            ₹{displayPrice.toLocaleString("en-IN")}
          </span>
        </div>

        {product.tagline && (
          <p className="text-xs text-muted-foreground line-clamp-1">{product.tagline}</p>
        )}

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.floor(product.rating)
                  ? "fill-brand-amber text-brand-amber"
                  : "text-border fill-border"
              }`}
            />
          ))}
          <span className="text-xs font-medium text-foreground ml-1">{product.rating}</span>
          <span className="text-xs text-muted-foreground">
            | {product.review_count >= 1000
              ? `${Math.floor(product.review_count / 1000)}k+`
              : product.review_count}{" "}
            Reviews
          </span>
        </div>

        {options.length > 0 && (
          <select
            value={selectedOption.id}
            onChange={(e) => {
              const opt = options.find((o) => o.id === e.target.value);
              if (opt) setSelectedOption(opt);
            }}
            className="mt-1 text-sm border border-border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
          >
            {options.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        )}

        <button
          onClick={handleAddToCart}
          className="mt-auto w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide hover:opacity-90 active:scale-95 transition-all"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
