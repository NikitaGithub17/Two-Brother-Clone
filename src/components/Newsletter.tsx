import React, { useState } from "react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-primary py-12 px-4 text-center">
      <p className="text-brand-amber text-xs font-semibold uppercase tracking-widest mb-2">
        Join The Movement
      </p>
      <h2 className="font-display text-3xl font-bold text-primary-foreground mb-2">
        Subscribe for Special Offers
      </h2>
      <p className="text-primary-foreground/70 text-sm mb-6 max-w-md mx-auto">
        Get newsletters, farm stories, and become a part of our organic movement.
      </p>
      {submitted ? (
        <p className="text-brand-amber font-semibold">Thank you! We'll be in touch 🌾</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your e-mail"
            required
            className="flex-1 px-4 py-2.5 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-amber text-sm"
          />
          <button
            type="submit"
            className="px-7 py-2.5 bg-brand-amber text-white rounded-full font-semibold text-sm hover:opacity-90 transition"
          >
            Connect
          </button>
        </form>
      )}
    </section>
  );
};

export default Newsletter;
