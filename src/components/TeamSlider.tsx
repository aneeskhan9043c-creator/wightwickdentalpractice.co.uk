import React from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { teamMembers } from "../data";
import { TeamCard } from "./TeamCard";

export const TeamSlider: React.FC = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false, stopOnMouseEnter: true, direction: "backward" })]
  );

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Header text with premium styling */}
      <motion.div 
        className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-center md:text-left">
          <span className="text-[11px] font-bold text-[#00a86b] uppercase tracking-[0.25em] block mb-3 font-['Lato']">
            Expert Practitioners
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-extrabold text-[#2d2d2d] mb-4">
            Meet Our Elite Team
          </h2>
          <p className="font-['Lato'] text-[#555] max-w-2xl text-base md:text-lg leading-relaxed">
            Our highly qualified specialists and dedicated clinicians are here to provide you with exceptional, personalized care. Hover or swipe to explore.
          </p>
        </div>

        {/* Dynamic Badge pointing out the continuous flow */}
        <div className="hidden md:flex items-center gap-2 bg-[#1b4332]/5 text-[#1b4332] border border-[#1b4332]/10 px-4 py-2 rounded-full cursor-default select-none transition-all duration-300 hover:bg-[#1b4332]/10">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-extrabold tracking-wide uppercase font-['Lato']">
            Interactive Slideshow Active
          </span>
        </div>
      </motion.div>

      {/* Outer Wrapper for continuous loop display */}
      <div className="relative w-full group">
        
        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          {/* Embla Container */}
          <div className="flex touch-pan-y">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="flex-[0_0_auto] w-[280px] md:w-[320px] min-w-0 mr-6"
              >
                <TeamCard {...member} />
              </div>
            ))}
          </div>
        </div>

        {/* Authoritative right-facing indicator arrow (fades in on hover) */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none select-none bg-white/95 p-3.5 rounded-full shadow-2xl border border-gray-100 flex items-center justify-center text-[#1b4332] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </div>
      </div>
    </div>
  );
};

