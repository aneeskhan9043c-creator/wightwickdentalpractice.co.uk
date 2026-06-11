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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.16,
                  delayChildren: 0.05,
                }
              }
            }}
            className="flex flex-col items-center"
          >
            {/* Grand Google SVG logo in the center with custom 3D spring scale entrance */}
            <motion.div
              variants={{
                hidden: { scale: 0, opacity: 0, rotate: -20 },
                visible: { 
                  scale: 1, 
                  opacity: 1, 
                  rotate: 0,
                  transition: { 
                    type: "spring", 
                    stiffness: 240, 
                    damping: 18 
                  } 
                }
              }}
              className="w-16 h-16 bg-white border border-gray-150 shadow-lg rounded-2xl flex items-center justify-center mb-6 hover:scale-105 active:scale-95 transition-all duration-300"
            >
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
            </motion.div>

            {/* Score Heading with slide up and ease */}
            <motion.h2
              variants={{
                hidden: { y: 25, opacity: 0 },
                visible: { 
                  y: 0, 
                  opacity: 1, 
                  transition: { type: "spring", stiffness: 120, damping: 16 } 
                }
              }}
              className="font-['Playfair_Display'] text-4xl md:text-5xl font-extrabold text-[#1B4332] mb-3"
            >
              4.9 out of 5 Stars
            </motion.h2>

            {/* 5 gold stars popping up one by one sequentially with custom delays */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  }
                }
              }}
              className="flex items-center gap-1.5 mb-5 select-none"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { scale: 0, rotate: -35, opacity: 0 },
                    visible: { 
                      scale: 1, 
                      rotate: 0, 
                      opacity: 1,
                      transition: { type: "spring", stiffness: 220, damping: 12 } 
                    }
                  }}
                >
                  <Star size={28} className="fill-amber-400 text-amber-400 drop-shadow-sm select-none" />
                </motion.div>
               ))}
            </motion.div>

            {/* Badge statement */}
            <motion.p
              variants={{
                hidden: { y: 15, opacity: 0 },
                visible: { 
                  y: 0, 
                  opacity: 1, 
                  transition: { type: "spring", stiffness: 100, damping: 15 } 
                }
              }}
              className="font-['Lato'] text-[#555] text-lg font-semibold tracking-wide"
            >
              Based on 43 Verified Google Reviews
            </motion.p>
          </motion.div>
        </div>

        {/* =========================================================================
            UNIFIED RESPONISVE SLAB VIEW (Autonomous infinite slow scrolling rightwards on all devices)
            ========================================================================= */}
        <div className="relative w-full group py-4 overflow-hidden">

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
        <div className="flex items-start justify-between mb-5">
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
                {/* Hyper-realistic blue verified seal based on reference image - styled slightly larger */}
                <svg className="w-5.5 h-5.5 shrink-0 select-none drop-shadow-[0_1.5px_2px_rgba(29,161,242,0.2)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M22.25 12c0-1.43-.88-2.67-2.15-3.19.15-.38.23-.8.23-1.24 0-1.95-1.58-3.53-3.53-3.53-.44 0-.86.08-1.24.23C15.04 3.02 13.62 2 12 2c-1.62 0-3.04 1.02-3.56 2.27-.38-.15-.8-.23-1.24-.23-1.95 0-3.53 1.58-3.53 3.53 0 .44.08.86.23 1.24C2.63 9.33 1.75 10.57 1.75 12c0 1.43.88 2.67 2.15 3.19-.15.38-.23.8-.23 1.24 0 1.95 1.58 3.53 3.53 3.53.44 0 .86-.08 1.24-.23.52 1.25 1.94 2.27 3.56 2.27 1.62 0 3.04-1.02 3.56-2.27.38.15.8.23 1.24.23 1.95 0 3.53-1.58 3.53-3.53 0-.44-.08-.86-.23-1.24 1.27-.52 2.15-1.76 2.15-3.19z" 
                    fill="#1da1f2" 
                  />
                  <path 
                    d="M10.75 15.38l-3.63-3.62 1.06-1.06 2.57 2.56 5.69-5.69 1.06 1.06-6.75 6.75z" 
                    fill="#fff" 
                  />
                </svg>
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
 
          {/* Authentic, realistic full-color Google G logo on the top right - shifted slightly upward */}
          <div className="w-8.5 h-8.5 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center select-none transform hover:scale-110 active:scale-95 hover:shadow-md transition-all duration-300 shrink-0 -mt-1 mr-0.5">
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
