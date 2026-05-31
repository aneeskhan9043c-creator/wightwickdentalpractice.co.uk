import React from "react";
import { User } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

interface TeamCardProps {
  slug: string;
  title: string;
  name: string;
  qualifications: string;
  gdc: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  slug,
  title,
  name,
  qualifications,
  gdc,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden min-w-[280px] md:min-w-0 group hover:shadow-lg premium-card-hover gpu-accelerated flex flex-col h-full w-full block"
    >
      <Link to={`/team/${slug}`} className="flex flex-col h-full">
        {/* Image Placeholder */}
        <div className="bg-gray-100 w-full aspect-video flex flex-col items-center justify-center text-gray-400 group-hover:bg-gray-200 transition-colors duration-300">
          <User className="w-10 h-10 mb-2 opacity-50" />
          <span className="text-[10px] font-medium tracking-widest uppercase opacity-70">
            Photo Coming Soon
          </span>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h4 className="text-[10px] sm:text-[11px] font-bold text-[#00a86b] uppercase tracking-wider mb-2 font-['Lato']">
            {title}
          </h4>
          <h3 className="font-['Playfair_Display'] font-bold text-xl text-gray-900 mb-2 group-[.hover]:text-[#1b4332] transition-colors leading-tight">
            {name}
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm font-['Lato'] flex-grow mb-4 leading-relaxed line-clamp-2">
            {qualifications}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
            <span className="text-[11px] font-bold text-gray-600 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
              GDC: {gdc}
            </span>
            <span className="text-[#00a86b] text-[13px] font-bold group-hover:underline transition-all">
              Read Full Bio &rarr;
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
