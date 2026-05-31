import React from "react";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export const LocationSection: React.FC = () => {
  // Real directions link for a professional integration
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Wightwick+Wolverhampton+WV6+8EN";

  return (
    <section id="location" className="relative w-full h-[550px] md:h-[650px] bg-[#F3F4F6] overflow-hidden">
      {/* High-Fidelity Google Maps Live Interactive Embed */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.341355416041!2d-2.189569!3d52.5855018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487090b8fbc01bfd%3A0xe7a5cdaaa73562bb!2sWightwick%20Dental%20Practice!5e0!3m2!1sen!2suk!4v1717106653120!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Wightwick Dental Practice Google Map"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Floating Location Card Overlay */}
      <motion.div 
        className="absolute left-4 md:left-12 bottom-8 md:bottom-12 bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] max-w-sm w-[calc(100%-32px)] sm:w-full flex flex-col items-center text-center space-y-5 border border-gray-100 pointer-events-auto"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Map Pin Icon at the top (centered) */}
        <div className="flex items-center justify-center w-12 h-12 bg-red-50 text-red-500 rounded-full">
          <MapPin className="w-6 h-6 stroke-[2.5px]" />
        </div>

        <div className="space-y-2">
          <h3 className="font-['Playfair_Display'] text-2xl font-bold text-gray-900 tracking-tight">
            Wightwick Dental Practice
          </h3>
          <p className="font-sans text-gray-500 text-sm md:text-base leading-relaxed">
            Wightwick, Wolverhampton, WV6 8EN, UK
          </p>
        </div>

        <a 
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-8 py-4 rounded-lg font-bold w-full uppercase tracking-wider hover:bg-gray-800 transition-colors text-center inline-block"
        >
          GET DIRECTIONS
        </a>
      </motion.div>
    </section>
  );
};
