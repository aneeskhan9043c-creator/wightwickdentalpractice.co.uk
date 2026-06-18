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
          className="relative w-full py-10 rounded-2xl overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-full overflow-hidden">
            <motion.div
              className="flex items-center w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 24 }}
            >
              <div className="flex items-center shrink-0">
                {[...Array(4)].map((_, i) => (
                  <div key={`set1-${i}`} className="flex shrink-0 px-10 md:px-20 items-center">
                    <img
                      src={accreditationsBannerImg}
                      alt="Clinic Accreditations and Trust Badges"
                      className="w-auto h-[120px] md:h-[180px] lg:h-[220px] object-contain opacity-95 transition-opacity"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center shrink-0">
                {[...Array(4)].map((_, i) => (
                  <div key={`set2-${i}`} className="flex shrink-0 px-10 md:px-20 items-center">
                    <img
                      src={accreditationsBannerImg}
                      alt="Clinic Accreditations and Trust Badges"
                      className="w-auto h-[120px] md:h-[180px] lg:h-[220px] object-contain opacity-95 transition-opacity"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
