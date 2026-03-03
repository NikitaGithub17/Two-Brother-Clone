import heroBanner from "@/assets/hero-banner.webp";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full">
      <img
        src={heroBanner}
        alt="Two Brothers Organic Farms – Farm to Table"
        className="w-full object-cover max-h-[420px]"
      />
    </section>
  );
};

export default Hero;
