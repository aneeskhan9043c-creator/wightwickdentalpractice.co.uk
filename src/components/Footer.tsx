import React from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F9F9F9] pt-24 pb-12 px-4 md:px-6 lg:px-12 border-t border-gray-100 relative overflow-hidden">
      {/* Decorative gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1B4332]/15 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Main Floating Footer Card with taped corners */}
        <motion.div 
          className="relative bg-white rounded-3xl border border-gray-100 p-10 md:p-12 lg:p-14 shadow-2xl shadow-gray-200/40 mb-12" 
          id="footer-main-card"
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          
          {/* Top-Left Corner Tape SVG */}
          <div className="absolute -top-4 -left-4 w-32 md:w-36 h-10 md:h-11 select-none pointer-events-none transform -rotate-12 transform-gpu drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]" id="footer-tape-left">
            <svg
              viewBox="0 0 140 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M10,4 L4,8 L11,12 L5,16 L12,20 L6,24 L12,28 L5,32 L11,36 L130,36 L135,32 L129,28 L134,24 L128,20 L135,16 L129,12 L136,8 L130,4 Z"
                fill="#1B4332"
                fillOpacity="0.95"
              />
              <path
                d="M12,6 L128,6"
                stroke="#ffffff"
                strokeWidth="1"
                strokeOpacity="0.25"
                strokeDasharray="4,4"
              />
            </svg>
          </div>

          {/* Top-Right Corner Tape SVG */}
          <div className="absolute -top-4 -right-4 w-32 md:w-36 h-10 md:h-11 select-none pointer-events-none transform rotate-12 transform-gpu drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]" id="footer-tape-right">
            <svg
              viewBox="0 0 140 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M10,4 L4,8 L11,12 L5,16 L12,20 L6,24 L12,28 L5,32 L11,36 L130,36 L135,32 L129,28 L134,24 L128,20 L135,16 L129,12 L136,8 L130,4 Z"
                fill="#1B4332"
                fillOpacity="0.95"
              />
              <path
                d="M12,6 L128,6"
                stroke="#ffffff"
                strokeWidth="1"
                strokeOpacity="0.25"
                strokeDasharray="4,4"
              />
            </svg>
          </div>

          {/* Main Footer 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 items-start text-left">
            
            {/* Column 1: Brand & Location */}
            <div className="flex flex-col space-y-4" id="footer-col-brand">
              <div className="flex flex-col">
                <span className="font-['Playfair_Display',Georgia,serif] font-bold text-2xl text-[#1B4332] tracking-tight leading-normal">
                  Wightwick Dental
                </span>
                <span className="font-sans font-extrabold text-[9px] text-[#1B4332]/60 uppercase tracking-[0.35em] mt-0.5">
                  ESTABLISHED PRACTICE
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Excellence in dentistry for over 30 years.
              </p>
              <div className="flex items-start gap-2.5 text-gray-500 text-sm pt-1">
                <MapPin size={16} className="text-[#1B4332] shrink-0 mt-0.5" />
                <span>Wightwick, Wolverhampton, WV6 8EN, UK</span>
              </div>
            </div>

            {/* Column 2: Treatments */}
            <div className="flex flex-col space-y-4" id="footer-col-treatments">
              <p className="text-xs font-bold tracking-[0.2em] text-[#1B4332] uppercase border-b border-[#1B4332]/10 pb-2">
                TREATMENTS
              </p>
              <ul className="space-y-2.5">
                {[
                  { label: "General Dentistry", href: "#treatments" },
                  { label: "Cosmetic Dentistry", href: "#treatments" },
                  { label: "Dental Implants", href: "#treatments" },
                  { label: "Invisalign", href: "#treatments" },
                  { label: "Teeth Whitening", href: "#treatments" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-[#1B4332] text-sm font-medium transition-colors duration-250 flex items-center group"
                    >
                      <span className="h-1 w-0 bg-[#1B4332] rounded-full mr-0 group-hover:w-1.5 group-hover:mr-2 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Patient Care */}
            <div className="flex flex-col space-y-4" id="footer-col-patient-care">
              <p className="text-xs font-bold tracking-[0.2em] text-[#1B4332] uppercase border-b border-[#1B4332]/10 pb-2">
                PATIENT CARE
              </p>
              <ul className="space-y-2.5">
                {[
                  { label: "New Patients", href: "#booking-section" },
                  { label: "Fee Guide", href: "#fees" },
                  { label: "Membership Plan", href: "#fees" },
                  { label: "FAQs", href: "#patient-faqs" },
                  { label: "Contact Us", href: "#location-section" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-[#1B4332] text-sm font-medium transition-colors duration-250 flex items-center group"
                    >
                      <span className="h-1 w-0 bg-[#1B4332] rounded-full mr-0 group-hover:w-1.5 group-hover:mr-2 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Hours & Contact */}
            <div className="flex flex-col space-y-4" id="footer-col-hours-contact">
              <p className="text-xs font-bold tracking-[0.2em] text-[#1B4332] uppercase border-b border-[#1B4332]/10 pb-2">
                HOURS & CONTACT
              </p>
              <div className="flex flex-col space-y-1.5 text-gray-500 text-sm">
                <p className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span className="font-semibold text-gray-750">8:30 AM - 5:30 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Weekend:</span>
                  <span className="font-semibold text-gray-750">Closed</span>
                </p>
              </div>
              
              <div className="flex flex-col space-y-2.5 pt-3 border-t border-gray-100">
                <a
                  href="tel:01902424079"
                  className="flex items-center gap-2.5 text-gray-500 hover:text-[#1B4332] text-sm transition-colors duration-200"
                >
                  <Phone size={14} className="text-[#1B4332]" />
                  <span className="font-semibold">01902 424 079</span>
                </a>
                <a
                  href="mailto:reception@wightwickdental.co.uk"
                  className="flex items-center gap-2.5 text-gray-500 hover:text-[#1B4332] text-sm transition-colors duration-200"
                >
                  <Mail size={14} className="text-[#1B4332]" />
                  <span className="font-semibold break-all text-[13px] md:text-sm">reception@wightwickdental.co.uk</span>
                </a>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Bottom Bar (Sub-footer) */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-200 text-center lg:text-left" id="footer-sub-bar">
          
          {/* Sub-footer Left */}
          <div className="text-sm text-gray-400 font-medium" id="footer-copy-text">
            © 2026 Wightwick Dental Practice. All rights reserved.
          </div>

          {/* Sub-footer Right / Links + Socials */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6" id="footer-sub-links-socials">
            <div className="flex items-center gap-4 text-sm font-medium text-gray-400">
              <a href="#privacy-policy" className="hover:text-[#1B4332] transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#terms" className="hover:text-[#1B4332] transition-colors">
                Terms & Conditions
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5" id="footer-socials">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1B4332] hover:border-[#1B4332] transition-all duration-200"
              >
                <Facebook size={14} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1B4332] hover:border-[#1B4332] transition-all duration-200"
              >
                <Instagram size={14} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1B4332] hover:border-[#1B4332] transition-all duration-200"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
