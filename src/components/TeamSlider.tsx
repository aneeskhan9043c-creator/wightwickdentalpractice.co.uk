import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { teamMembers } from "../data";
import { TeamCard } from "./TeamCard";

export const TeamSlider: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;

      if (maxScroll <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress = (scrollLeft / maxScroll) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Header & Controls */}
      <motion.div 
        className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-center md:text-left">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-[#2d2d2d] mb-4">
            Meet the Team
          </h2>
          <p className="font-['Lato'] text-[#666] max-w-2xl text-lg leading-relaxed">
            Our highly qualified specialists and dedicated practitioners are
            here to provide you with exceptional care.
          </p>
        </div>

        {/* Desktop Navigation Arrows */}
        <div className="hidden md:flex items-center gap-3 shrink-0 ml-8 mb-2">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-[#00a86b] hover:border-[#00a86b] hover:bg-green-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20"
            aria-label="Previous team members"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-[#00a86b] hover:border-[#00a86b] hover:bg-green-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20"
            aria-label="Next team members"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Slider Container with Cascade Scroll Trigger */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto gap-6 scroll-smooth snap-x snap-mandatory scrollbar-none pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="snap-start min-w-[280px] md:min-w-[320px] w-full shrink-0 h-auto flex"
          >
            <TeamCard {...member} />
          </div>
        ))}
      </motion.div>

      {/* Progress Track */}
      <div className="w-32 h-[3px] bg-gray-200 mx-auto rounded-full mt-6 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-[#00a86b] rounded-full transition-transform duration-100 ease-out"
          style={{
            width: "40px",
            // w-32 is 128px, minus 40px width = 88px of sliding room
            transform: `translateX(calc(${scrollProgress / 100} * 88px))`,
          }}
        />
      </div>
    </div>
  );
};
