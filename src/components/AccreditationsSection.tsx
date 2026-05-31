import React from "react";
import { motion } from "motion/react";
import accreditationsBannerImg from "../assets/images/accreditations_banner_1780177879074.png";

export const AccreditationsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100 overflow-hidden" id="accreditations">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 text-center">
        {/* Section Header */}
        <motion.p 
          className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Our Accreditations & Partnerships
        </motion.p>

        {/* Dynamic high-fidelity logos image block */}
        <motion.div 
          className="flex justify-center items-center py-6 bg-white/50 rounded-2xl overflow-hidden px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={accreditationsBannerImg}
            alt="Clinic Accreditations and Trust Badges"
            className="w-full max-w-[1200px] h-auto min-h-[50px] md:min-h-[100px] object-contain premium-btn hover:scale-[1.01]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};
