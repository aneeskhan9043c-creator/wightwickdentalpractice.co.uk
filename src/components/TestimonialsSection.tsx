import React, { useState } from "react";
import { motion } from "motion/react";
import { Star, ChevronRight, Check } from "lucide-react";

// =========================================================================
// TO ADD OR REMOVE REVIEWS, JUST EDIT THIS DATA ARRAY AND THE LOOP
// DUPLICATE CONTENT LOGIC BELOW.
// =========================================================================
interface Review {
  id: number;
  name: string;
  role?: string;
  rating: number;
  timeAgo: string;
  text: string;
  initials: string;
  bgColor: string; // Avatar background color (using Wightwick brand-aligned colors)
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Amanraj Sidhu",
    rating: 5,
    timeAgo: "1 year ago",
    text: "I recently visited Wightwick Dental Practice in Wolverhampton and had a fantastic experience. From the moment I walked in, the staff was incredibly friendly and welcoming. The clinic itself is spotless and has a modern, well-equipped setup.",
    initials: "AS",
    bgColor: "bg-[#1B4332]", // Deep brand green
  },
  {
    id: 2,
    name: "Laura Harris",
    rating: 5,
    timeAgo: "10 months ago",
    text: "How do you give 100/10?! Kam, Harj and the team go above and beyond. Most important thing is that we have found a family dentist we trust: that will always do what's best (and at the best cost). Genuinely grateful for them and highly recommended.",
    initials: "LH",
    bgColor: "bg-[#00A669]", // Vibrant green
  },
  {
    id: 3,
    name: "Andrew Lee",
    rating: 5,
    timeAgo: "2 years ago",
    text: "I used this dental practice recently to take advantage of a service not provided by my regular dentist. I was very impressed with the friendliness and professionalism of the staff and the service they provided for me was second to none.",
    initials: "AL",
    bgColor: "bg-emerald-600",
  },
  {
    id: 4,
    name: "Stacey Sweet",
    role: "Local Guide",
    rating: 5,
    timeAgo: "2 years ago",
    text: "I've been terrified of the dentist for as long as I can remember, the NHS used to be ok but has just gotten worse over time, I'm barely in the chair 2 minutes and I'm back out the door. I started to become more conscious about my teeth and found this amazing private practice. They treated me with extreme patience and gentle care, transforming my entire outlook on dental visits.",
    initials: "SS",
    bgColor: "bg-[#1B4332]",
  },
  {
    id: 5,
    name: "Bally Mattu",
    rating: 5,
    timeAgo: "5 years ago",
    text: "1st time to this beautiful extremely clean Dental Practice. Used this Dental Practice as my current one could not give me appointment during the covid19 Pandemic. I found this Dental Practice from word of mouth and I can actually highly recommend them.",
    initials: "BM",
    bgColor: "bg-[#00A669]",
  },
];

export const TestimonialsSection: React.FC = () => {
  // Keep track of which reviews are expanded to read more
  const [expandedReviews, setExpandedReviews] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (id: string) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section 
      className="py-24 bg-gradient-to-b from-[#F9F9F9] to-white border-t border-gray-100 overflow-hidden relative" 
      id="testimonials"
    >
      {/* Decorative Brand Accent Line at the top for brand green (#1B4332) visual separation */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1B4332] via-[#00A669] to-[#1B4332]" />
      
      {/* CSS Animation Blocks for Infinite Autonomous Slow Scrolling Rightwards */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infiniteScrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .infinite-scroll-track {
          display: flex;
          flex-direction: row;
          width: max-content;
          animation: infiniteScrollRight 50s linear infinite;
        }
        .infinite-scroll-track:hover {
          animation-play-state: paused !important;
        }
      `}} />

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        
        {/* Centered High-Impact Premium Google Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Grand Google SVG logo in the center */}
            <div className="w-16 h-16 bg-white border border-gray-150 shadow-md rounded-2xl flex items-center justify-center mb-6 hover:scale-105 transition-transform duration-300">
              <svg className="w-9 h-9" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-extrabold text-[#1B4332] mb-3">
              4.9 out of 5 Stars
            </h2>

            {/* 5 large gold stars */}
            <div className="flex items-center gap-1.5 mb-5 select-none hover:scale-102 transition-transform duration-300">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} className="fill-amber-400 text-amber-400 drop-shadow-sm" />
              ))}
            </div>

            <p className="font-['Lato'] text-[#555] text-lg font-semibold tracking-wide">
              Based on 43 Verified Google Reviews
            </p>
          </motion.div>
        </div>

        {/* =========================================================================
            DESKTOP SLAB VIEW (Autonomous infinite slow scrolling rightwards)
            ========================================================================= */}
        <div className="hidden md:block relative w-full group py-4 overflow-hidden">
          {/* Subtle horizontal side feathering gradients for ultimate premium depth */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F9F9F9] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling continuous flex track */}
          <div className="infinite-scroll-track">
            {/* First sequence of the slab */}
            <div className="flex gap-6 pr-6 shrink-0">
              {reviews.map((review) => (
                <ReviewCard
                  key={`normal-${review.id}`}
                  review={review}
                  uniqueId={`desktop-normal-${review.id}`}
                  isExpanded={!!expandedReviews[`desktop-normal-${review.id}`]}
                  onToggleExpand={() => toggleExpand(`desktop-normal-${review.id}`)}
                />
              ))}
            </div>
            
            {/* Duplicate sequence of the slab for the seamless infinite loop */}
            <div className="flex gap-6 pr-6 shrink-0">
              {reviews.map((review) => (
                <ReviewCard
                  key={`dup-${review.id}`}
                  review={review}
                  uniqueId={`desktop-dup-${review.id}`}
                  isExpanded={!!expandedReviews[`desktop-dup-${review.id}`]}
                  onToggleExpand={() => toggleExpand(`desktop-dup-${review.id}`)}
                />
              ))}
            </div>
          </div>

          {/* Authoritative right-facing progression arrow indication */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none select-none bg-white/95 p-3.5 rounded-full shadow-xl border border-gray-100 flex items-center justify-center text-[#1B4332] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </div>
        </div>

        {/* =========================================================================
            MOBILE/TABLET SWIPE VIEW (Manual swiping scroll snaps)
            ========================================================================= */}
        <div className="block md:hidden">
          <div className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-none">
            {reviews.map((review) => (
              <ReviewCard
                key={`mobile-${review.id}`}
                review={review}
                uniqueId={`mobile-${review.id}`}
                isExpanded={!!expandedReviews[`mobile-${review.id}`]}
                onToggleExpand={() => toggleExpand(`mobile-${review.id}`)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// =========================================================================
// REUSABLE SUB-COMPONENT FOR ACCURATE STYLING & MODULARITY
// =========================================================================
interface ReviewCardProps {
  review: Review;
  uniqueId: string;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  review,
  uniqueId,
  isExpanded,
  onToggleExpand,
}) => {
  const isLong = review.text.length > 180;

  return (
    <div
      className="flex-shrink-0 w-[85vw] md:w-[400px] snap-start bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group select-text relative"
    >
      <div>
        {/* Header Profile Row */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            {/* Initial teal/green circle avatar */}
            <div className={`w-11 h-11 ${review.bgColor} rounded-full flex items-center justify-center text-white font-extrabold text-sm tracking-wide shadow-sm transform group-hover:scale-105 transition-transform duration-300`}>
              {review.initials}
            </div>
            
            {/* Name + Verified badges + metadata */}
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-bold text-[#2d2d2d] text-base group-hover:text-[#1B4332] transition-colors leading-tight">
                  {review.name}
                </h4>
                {/* Custom circular blue verified check badge */}
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 text-white shadow-xs shrink-0 select-none">
                  <svg className="w-2.5 h-2.5 stroke-[4.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[11px] font-semibold text-gray-500">
                  {review.role || "Patient"}
                </span>
                <span className="text-gray-300 text-[10px] select-none">•</span>
                <span className="text-[11px] text-gray-400">
                  {review.timeAgo}
                </span>
              </div>
            </div>
          </div>

          {/* Gray Google Logo in grey circle on the top right */}
          <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 select-none">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.579-7.859-8s3.53-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 6.254 1 1.42 5.835 1.42 11.82s4.834 10.82 10.82 10.82c6.253 0 10.402-4.377 10.402-10.582 0-.715-.078-1.259-.172-1.773H12.24z"
              />
            </svg>
          </div>
        </div>

        {/* 5 solid gold stars */}
        <div className="flex items-center gap-0.5 mb-4 select-none">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quoted Review text body with brand serif/sans-serif typography */}
        <div className="text-gray-600 text-[13.5px] leading-relaxed font-sans pr-1">
          <p className={isExpanded ? "" : "line-clamp-4"}>
            "{review.text}"
          </p>
          
          {/* Detailed Read story link in brand color #1B4332 */}
          {isLong && (
            <button
              onClick={onToggleExpand}
              className="mt-2 text-[#1B4332] hover:text-[#00A669] font-bold text-xs tracking-wider focus:outline-none uppercase inline-flex items-center gap-1 select-none cursor-pointer"
            >
              {isExpanded ? "Collapse Review" : "READ FULL STORY"}
            </button>
          )}
        </div>
      </div>

      {/* Footer dual-badges */}
      <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-500 font-semibold gap-2">
        <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full select-none shrink-0">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
          Verified Google Reviewer
        </div>
        <div className="flex items-center gap-1.5 bg-gray-50 text-gray-700 px-2.5 py-1 rounded-full border border-gray-100 select-none shrink-0">
          <Check size={12} className="text-green-600 stroke-[3]" />
          <span>Real Review</span>
        </div>
      </div>
    </div>
  );
};
