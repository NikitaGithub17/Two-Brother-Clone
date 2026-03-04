import React from "react";
import { useStore } from "@/context/StoreContext";
import { products } from "@/data/mockProducts";
import { Heart, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface FavoritesDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({ open, onOpenChange }) => {
  const { favorites, toggleFavorite } = useStore();

  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full max-w-md p-0">
        <SheetHeader className="px-5 pt-5 pb-3 border-b border-border">
          <SheetTitle className="flex items-center gap-2 text-lg font-bold">
            <Heart className="w-5 h-5 fill-brand-red text-brand-red" />
            My Favorites ({favorites.length})
          </SheetTitle>
        </SheetHeader>

        <div className="overflow-y-auto h-[calc(100vh-80px)] px-5 py-4">
          {favoriteProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <Heart className="w-12 h-12 text-muted-foreground mb-3" />
              <p className="text-muted-foreground text-sm">No favorites yet</p>
              <p className="text-muted-foreground text-xs mt-1">Tap the heart on any product to save it here</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {favoriteProducts.map((p) => (
                <div key={p.id} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border">
                  <img
                    src={p.image_url}
                    alt={p.name}
                    className="w-16 h-16 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-foreground truncate">{p.name}</h4>
                    <p className="text-xs text-muted-foreground">{p.category}</p>
                    <p className="text-sm font-bold text-foreground mt-0.5">₹{p.price.toLocaleString("en-IN")}</p>
                  </div>
                  <button
                    onClick={() => toggleFavorite(p.id, p.name)}
                    className="p-1.5 rounded-full hover:bg-destructive/10 transition-colors shrink-0"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FavoritesDrawer;
