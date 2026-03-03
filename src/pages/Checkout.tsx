import React, { useState } from "react";
import { useStore } from "@/context/StoreContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, Mail, CreditCard } from "lucide-react";

const Checkout: React.FC = () => {
  const { cart, cartTotal, removeFromCart } = useStore();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center gap-6">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-4xl">🌿</span>
        </div>
        <h2 className="font-display text-3xl font-bold text-foreground">Order Placed!</h2>
        <p className="text-muted-foreground max-w-sm">
          Thank you for your order. Our team will contact you shortly to confirm and arrange payment.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Shopping
        </button>

        <h1 className="font-display text-3xl font-bold text-foreground mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="bg-card rounded-xl border border-border p-5">
              <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Delivery Details
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Full Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block flex items-center gap-1">
                      <Phone className="w-3 h-3" /> Phone
                    </label>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="+91 ..."
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block flex items-center gap-1">
                      <Mail className="w-3 h-3" /> Email
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Address</label>
                  <textarea
                    required
                    rows={2}
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                    placeholder="Street address, apartment..."
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">City</label>
                    <input
                      required
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">Pincode</label>
                    <input
                      required
                      value={form.pincode}
                      onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="400001"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">State</label>
                    <input
                      required
                      value={form.state}
                      onChange={(e) => setForm({ ...form, state: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="Maharashtra"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-5">
              <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-primary" /> Payment
              </h2>
              <div className="bg-muted/50 rounded-lg px-4 py-3 text-sm text-muted-foreground border border-dashed border-border">
                💳 Payment gateway will be available soon. Our team will contact you to complete payment.
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-primary text-primary-foreground rounded-full font-bold text-sm hover:opacity-90 transition"
            >
              Place Order →
            </button>
          </form>

          {/* Order summary */}
          <div className="bg-card rounded-xl border border-border p-5 h-fit">
            <h2 className="font-semibold text-foreground mb-4">Order Summary</h2>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {cart.map((item) => (
                <div
                  key={`${item.productId}-${item.quantityLabel}`}
                  className="flex gap-3 items-start"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover bg-secondary shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground line-clamp-1">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.quantityLabel} × {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-foreground shrink-0">
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-border mt-4 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Subtotal</span>
                <span>₹{cartTotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Delivery</span>
                <span className={cartTotal >= 999 ? "text-primary font-medium" : ""}>
                  {cartTotal >= 999 ? "FREE" : "₹99"}
                </span>
              </div>
              <div className="flex justify-between font-bold text-foreground text-base pt-2 border-t border-border">
                <span>Total</span>
                <span>₹{(cartTotal + (cartTotal >= 999 ? 0 : 99)).toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
