import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";

interface PricingItem {
  treatment: string;
  price: string;
}

interface TreatmentCardProps {
  image: string;
  tags?: string[];
  rating?: number;
  title: string;
  duration?: string;
  category?: string;
  description: string;
  priceLabel: string;
  pricingList: PricingItem[];
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({
  image,
  tags = [],
  rating,
  title,
  duration,
  category,
  description,
  priceLabel,
  pricingList,
}) => {
  return (
    <Dialog>
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl premium-card-hover gpu-accelerated overflow-hidden border border-gray-100 flex flex-col h-full cursor-pointer"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <motion.img
            src={image}
            className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            alt={title}
          />

          {/* Tags */}
          {tags.length > 0 && (
            <div className="absolute top-3 left-3 flex gap-2 z-10 font-['Lato']">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/90 backdrop-blur-sm text-gray-800 text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full shadow-sm uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-['Playfair_Display'] font-bold text-xl text-gray-900 group-hover:text-[#00a86b] transition-colors">
              {title}
            </h3>
            {rating && (
              <div className="flex items-center gap-1 text-[13px] font-bold bg-[#f6fcf8] text-[#00a86b] px-2 py-1 rounded-md">
                <Star className="w-3.5 h-3.5 fill-[#00a86b] text-[#00a86b]" />
                {rating.toFixed(1)}
              </div>
            )}
          </div>

          {(category || duration) && (
            <div className="flex justify-between items-center text-[13px] text-[#666] mb-3 font-['Lato'] tracking-wide">
              {category && (
                <span className="font-medium text-[#00a86b] uppercase text-[10px] tracking-wider">
                  {category}
                </span>
              )}
              {duration && (
                <span className="font-semibold text-gray-700 bg-gray-50 px-2 py-0.5 rounded text-[11px]">
                  {duration}
                </span>
              )}
            </div>
          )}

          <p className="text-gray-500 text-sm my-4 flex-grow font-['Lato'] leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col gap-3 items-stretch sm:flex-row sm:justify-between sm:items-center pt-3 pb-4 border-t border-gray-100 mt-auto">
            <div className="flex flex-col text-left w-full sm:w-auto">
              <span className="text-[18px] md:text-[20px] font-black text-[#009A5A] font-['Playfair_Display'] tracking-wider text-left uppercase">
                {priceLabel}
              </span>
            </div>
            <DialogTrigger asChild>
              <button className="w-full sm:w-auto text-center bg-white hover:bg-[#00a86b] text-gray-900 hover:text-white border border-gray-200 hover:border-[#00a86b] px-4 py-2.5 rounded-[8px] text-[13px] font-bold transition-all duration-300 shadow-sm cursor-pointer hover:scale-105 active:scale-95">
                View Details
              </button>
            </DialogTrigger>
          </div>
        </div>
      </motion.div>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title} - Fee Guide</DialogTitle>
        </DialogHeader>
        <div className="p-6 overflow-y-auto font-['Lato']">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-[#1b4332] pb-3 text-[#1b4332] font-bold text-sm tracking-wide uppercase">
                  Treatment
                </th>
                <th className="border-b-2 border-[#1b4332] pb-3 text-[#1b4332] font-bold text-sm tracking-wide uppercase text-right">
                  Fee
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingList.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 pr-2 text-sm text-gray-700">
                    {item.treatment}
                  </td>
                  <td className="py-3 pl-2 text-sm font-semibold text-gray-900 text-right whitespace-nowrap">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 pt-0 flex justify-end">
          <DialogClose asChild>
            <button className="w-full md:w-auto flex items-center justify-center gap-2 border border-gray-200 bg-white text-gray-700 px-6 py-2.5 rounded-lg text-sm font-semibold hover:border-[#1B4332] hover:text-[#1B4332] transition-colors duration-200 font-['Lato']">
              <span>&larr;</span> Back to Treatments
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
