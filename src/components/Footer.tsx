import React from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";

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
        <div className="mt-16 pt-8 border-t border-[#e5e7eb] flex flex-col md:flex-row items-center justify-between gap-6" id="footer-sub-bar">
          
          {/* Sub-footer Left: Copyright & Registration */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left font-sans" id="footer-copy-text">
            <p className="text-sm text-black font-bold animate-pulse hover:scale-105 transition-transform duration-300 cursor-default">
              © 2026 Wightwick Dental Practice. All rights reserved.
            </p>
            <p className="text-xs text-black font-bold mt-1 animate-pulse hover:scale-105 transition-transform duration-300 cursor-default" style={{ animationDelay: '0.5s' }}>
              Registered in the UK | GDC Registration No. [Placeholder]
            </p>
          </div>

          {/* Sub-footer Center: Legal Links */}
          <div className="flex items-center gap-6 font-sans" id="footer-sub-links">
            <a href="#privacy-policy" className="text-sm text-gray-500 font-medium hover:text-[#1B4332] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-gray-500 font-medium hover:text-[#1B4332] transition-colors">
              Terms & Conditions
            </a>
          </div>

          {/* Sub-footer Right: Social Icons */}
          <div className="flex items-center gap-4" id="footer-socials">
              <a
                href="#"
                aria-label="Facebook"
                className="group w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center hover:-translate-y-1.5 hover:scale-110 hover:shadow-[0_10px_20px_-10px_rgba(24,119,242,0.5)] hover:border-[#1877F2]/20 transition-all duration-300"
              >
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#1877F2" className="w-[22px] h-[22px] transform group-hover:rotate-[8deg] group-hover:scale-110 transition-all duration-300">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="group w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center hover:-translate-y-1.5 hover:scale-110 hover:shadow-[0_10px_20px_-10px_rgba(225,48,108,0.5)] hover:border-[#E1306C]/20 transition-all duration-300"
              >
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="url(#ig-grad)" className="w-[22px] h-[22px] transform group-hover:-rotate-[8deg] group-hover:scale-110 transition-all duration-300">
                  <defs>
                    <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f09433"/>
                      <stop offset="0.25" stopColor="#e6683c"/>
                      <stop offset="0.5" stopColor="#dc2743"/>
                      <stop offset="0.75" stopColor="#cc2366"/>
                      <stop offset="1" stopColor="#bc1888"/>
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.181a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
              <a
                href="https://wa.me/441902763200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center hover:-translate-y-1.5 hover:scale-110 hover:shadow-[0_10px_20px_-10px_rgba(37,211,102,0.5)] hover:border-[#25D366]/20 transition-all duration-300"
              >
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#25D366" className="w-[22px] h-[22px] transform group-hover:rotate-[8deg] group-hover:scale-110 transition-all duration-300">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
        </div>

      </div>
    </footer>
  );
};
