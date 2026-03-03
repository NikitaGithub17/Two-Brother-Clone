import React from "react";
import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { useNavigate } from "react-router-dom";

const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateCartQty, cartTotal } = useStore();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md z-[101] bg-background shadow-2xl flex flex-col animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="font-display text-lg font-bold text-foreground">
              Your Cart ({cart.reduce((s, c) => s + c.quantity, 0)} items)
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-16 h-16 text-muted-foreground opacity-30" />
              <p className="text-muted-foreground font-medium">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.productId}-${item.quantityLabel}`}
                className="flex gap-3 bg-card rounded-xl p-3 border border-border"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg bg-secondary shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop";
                  }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground line-clamp-2 leading-snug">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.quantityLabel}</p>
                  <p className="text-sm font-bold text-foreground mt-1">
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item.productId, item.quantityLabel)}
                    className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-1 border border-border rounded-full overflow-hidden">
                    <button
                      onClick={() => updateCartQty(item.productId, item.quantityLabel, item.quantity - 1)}
                      className="p-1.5 hover:bg-muted transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-2 text-sm font-semibold min-w-[20px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateCartQty(item.productId, item.quantityLabel, item.quantity + 1)}
                      className="p-1.5 hover:bg-muted transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-5 py-4 border-t border-border space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground font-medium">Subtotal</span>
              <span className="text-lg font-bold text-foreground">
                ₹{cartTotal.toLocaleString("en-IN")}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Shipping calculated at checkout. Free delivery above ₹999.
            </p>
            <button
              onClick={() => {
                setIsCartOpen(false);
                navigate("/checkout");
              }}
              className="w-full py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:opacity-90 transition"
            >
              Proceed to Checkout →
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
