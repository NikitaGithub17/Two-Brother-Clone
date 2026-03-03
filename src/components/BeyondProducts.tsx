import React from "react";
import farmersBanner from "@/assets/farmers-banner.jpg";

const BeyondProducts: React.FC = () => {
  return (
    <section className="py-12 px-4" style={{ backgroundColor: "hsl(42 50% 95%)" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left text */}
        <div className="w-full md:w-1/3">
          <h2 className="font-display text-4xl font-bold text-foreground leading-tight">
            Beyond<br />our Products
          </h2>
        </div>

        {/* Right: Farmer Stories card */}
        <div className="w-full md:w-2/3 relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src={farmersBanner}
            alt="Farmer Stories"
            className="w-full h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 py-4 px-6" style={{ backgroundColor: "hsl(var(--brand-brown))" }}>
            <h3 className="text-2xl font-bold text-white">
              <span className="font-sans uppercase tracking-wider">FARMER</span>{" "}
              <span className="font-display italic">Stories</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondProducts;
