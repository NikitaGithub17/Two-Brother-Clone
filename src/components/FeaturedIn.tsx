import React from "react";

const mediaLogos = [
  { name: "The Hindu", style: "font-serif font-bold text-lg" },
  { name: "Untold Story", style: "font-bold text-base" },
  { name: "VOGUE", style: "font-serif font-bold text-2xl tracking-widest" },
  { name: "YourStory", style: "font-bold text-lg" },
  { name: "The Better India", style: "font-bold text-base" },
  { name: "The Economic Times", style: "font-serif text-base" },
  { name: "GQ", style: "font-serif font-bold text-3xl" },
  { name: "Hindustan Times", style: "font-bold text-base" },
];

const FeaturedIn: React.FC = () => {
  return (
    <section className="py-8 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-10 overflow-x-auto scrollbar-hide">
          {mediaLogos.map((logo) => (
            <span
              key={logo.name}
              className={`text-muted-foreground whitespace-nowrap ${logo.style}`}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
