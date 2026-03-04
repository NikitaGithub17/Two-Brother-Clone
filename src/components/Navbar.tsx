import { useStore } from "@/context/StoreContext";
import { products } from "@/data/mockProducts";
import { ChevronDown, Heart, Menu, Search, ShoppingCart, X } from "lucide-react";
import React, { useMemo, useState } from "react";
import FavoritesDrawer from "@/components/FavoritesDrawer";

const categories = [
  "Ghee", "Oil", "Atta", "Jaggery", "Immunity", "Rice", "Breakfast & Snacks", "Grains & Pulses", "Spices"
];

const Navbar: React.FC = () => {
  const { cartCount, favorites, setIsCartOpen } = useStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [favOpen, setFavOpen] = useState(false);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [searchQuery]);

  const SearchBar = ({ autoFocus = false, className = "" }: { autoFocus?: boolean; className?: string }) => (
    <div className={`relative ${className}`}>
      <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2 border border-border focus-within:border-primary transition-colors">
        <Search className="w-4 h-4 text-muted-foreground" />
        <input
          className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => { setSearchQuery(e.target.value); setShowResults(true); }}
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          autoFocus={autoFocus}
        />
        {searchQuery && (
          <button onClick={() => { setSearchQuery(""); setShowResults(false); }} className="text-muted-foreground hover:text-foreground">
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      {showResults && searchQuery.trim() && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden">
          {searchResults.length === 0 ? (
            <div className="p-4 text-sm text-muted-foreground text-center">No products found</div>
          ) : (
            searchResults.map((p) => (
              <button
                key={p.id}
                className="flex items-center gap-3 w-full px-4 py-2.5 hover:bg-secondary transition-colors text-left"
                onMouseDown={(e) => e.preventDefault()}
              >
                <img src={p.image_url} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{p.name}</p>
                  <p className="text-xs text-muted-foreground">{p.category} · ₹{p.price}</p>
                </div>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground text-xs text-center py-2 px-4 font-medium tracking-wide overflow-hidden">
        <div className="flex gap-12 animate-none whitespace-nowrap justify-center">
          🌿 100% Organic &amp; Natural &nbsp;|&nbsp; 🚚 Free Delivery above ₹999 &nbsp;|&nbsp; 🌾 Straight from the Farm
        </div>
      </div>

      {/* Category strip - centered above header */}
      <div className="bg-secondary border-b border-border overflow-x-auto scrollbar-hide">
        <div className="flex items-center justify-center gap-0 max-w-7xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 text-xs font-medium text-foreground hover:text-primary hover:bg-primary/10 whitespace-nowrap transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main navbar */}
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Search */}
          <SearchBar className="hidden md:block flex-1 max-w-xs" />

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <button
            className="flex items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="/logo.avif"
              alt="Two Brothers Logo"
              className="h-10 w-auto"
            />
          </button>

          {/* Nav links - desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {["SHOP ALL", "MEMBERSHIP", "SHOP BY CONCERN", "FARM LIFE", "CUSTOMERS"].map((link) => (
              <button
                key={link}
                className="flex items-center gap-1 px-3 py-2 text-xs font-semibold text-foreground hover:text-primary transition-colors tracking-wide"
              >
                {link}
                {["SHOP BY CONCERN", "FARM LIFE", "CUSTOMERS"].includes(link) && (
                  <ChevronDown className="w-3 h-3" />
                )}
              </button>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-2"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="w-5 h-5 text-foreground" />
            </button>

            <button className="relative p-2 hover:text-primary transition-colors" onClick={() => setFavOpen(true)}>
              <Heart className="w-5 h-5 text-foreground" />
              {favorites.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-brand-red text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {favorites.length}
                </span>
              )}
            </button>

            <button
              className="relative p-2 hover:text-primary transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-brand-red text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        {searchOpen && (
          <div className="md:hidden px-4 pb-3">
            <SearchBar autoFocus />
          </div>
        )}
      </header>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background pt-32">
          <nav className="flex flex-col px-6 gap-1">
            {["SHOP ALL", "MEMBERSHIP", "SHOP BY CONCERN", "FARM LIFE", "CUSTOMERS"].map((link) => (
              <button
                key={link}
                className="text-left py-3 text-sm font-semibold border-b border-border text-foreground hover:text-primary tracking-wide"
              >
                {link}
              </button>
            ))}
          </nav>
        </div>
      )}
      <FavoritesDrawer open={favOpen} onOpenChange={setFavOpen} />
    </>
  );
};

export default Navbar;
