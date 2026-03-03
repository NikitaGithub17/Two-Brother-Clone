import React from "react";

const VIDEO_ID = "9Le2MnFiXsY";
const THUMBNAIL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const YT_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;

const FarmersSection: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-brand-amber font-semibold text-xs uppercase tracking-widest mb-2">
          From The Soil Of India
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          We Are Farmers, Growing Honest Food With Love &amp; Care
        </h2>
        <p className="text-muted-foreground text-sm mb-6">
          A brand film by Two Brothers Organic Farms. #DontEatLies
        </p>

        {/* YouTube Thumbnail */}
        <a
          href={YT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block rounded-2xl overflow-hidden shadow-lg max-w-2xl mx-auto"
        >
          <img
            src={THUMBNAIL}
            alt="Watch on YouTube – Two Brothers Organic Farms"
            className="w-full object-cover aspect-video group-hover:scale-105 transition-transform duration-300"
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 group-hover:bg-foreground/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
              <svg className="w-7 h-7 text-brand-red ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default FarmersSection;
