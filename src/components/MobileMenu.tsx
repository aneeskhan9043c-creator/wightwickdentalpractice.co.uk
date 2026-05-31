import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection = "home"
}) => {
  const [isTreatmentsExpanded, setIsTreatmentsExpanded] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#meet-the-team", id: "about" },
    { label: "Treatments", href: "#treatments", id: "treatments", hasSubmenu: true },
    { label: "Fees", href: "#booking-section", id: "fees" },
    { label: "Contact Us", href: "#location-section", id: "contact" }
  ];

  const subMenuLinks = [
    { label: "Implants", href: "#treatments" },
    { label: "Cosmetics", href: "#treatments" },
    { label: "General Dentistry", href: "#treatments" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    
    // Smooth scroll to target
    const targetElement = document.querySelector(href);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300); // Wait for transition out
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Full Screen Overlay Drawer Panel with absolute top level z-[9999] */}
          <motion.aside
            className="fixed inset-0 w-screen h-screen bg-white z-[9999] flex flex-col md:hidden overflow-hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 220 }}
          >
            {/* Header Area */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white">
              <div className="flex flex-col items-start select-none">
                <span className="font-['Playfair_Display',Georgia,serif] font-extrabold text-[#1B4332] text-xl tracking-tight leading-none mb-1">
                  Wightwick Dental
                </span>
                <span className="font-sans font-extrabold text-[8px] text-gray-400 uppercase tracking-[0.35em]">
                  PRACTICE
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 -mr-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <X size={22} className="stroke-[2.5]" />
              </button>
            </div>

            {/* Navigation Links and Sub-menu */}
            <div className="flex-1 overflow-y-auto py-6 px-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id || (link.id === "home" && activeSection === "");
                
                if (link.hasSubmenu) {
                  return (
                    <div key={link.id} className="space-y-1 block">
                      <button
                        onClick={() => setIsTreatmentsExpanded(!isTreatmentsExpanded)}
                        className={`w-full flex items-center justify-between py-3.5 px-4 rounded-xl font-semibold text-[15px] select-none text-left focus:outline-none transition-all duration-300 ease-out transform active:scale-[0.98] ${
                          isTreatmentsExpanded 
                            ? "bg-gray-50 text-[#1B4332]" 
                            : "text-gray-800 hover:bg-gray-50/70 hover:text-[#1B4332]"
                        }`}
                      >
                        <span>{link.label}</span>
                        <motion.div
                          animate={{ rotate: isTreatmentsExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <ChevronDown size={18} className="text-[#1B4332]" />
                        </motion.div>
                      </button>

                      {/* Expandable Sub-menu using Framer Motion */}
                      <AnimatePresence initial={false}>
                        {isTreatmentsExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden pl-4 pr-2"
                          >
                            <div className="py-1.5 space-y-1.5 border-l-2 border-[#1B4332]/10 pl-4 my-1">
                              {subMenuLinks.map((subLink, subIdx) => (
                                <a
                                  key={subIdx}
                                  href={subLink.href}
                                  onClick={(e) => handleLinkClick(e, subLink.href)}
                                  className="block py-2 text-sm font-medium text-gray-600 hover:text-[#1B4332] active:text-[#1B4332] transition-colors select-none"
                                >
                                  {subLink.label}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // Regular Link style with specific active styling for "Home"
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block py-3.5 px-4 rounded-xl font-semibold text-[15px] select-none transition-all duration-300 ease-out transform active:scale-[0.98] ${
                      isActive
                        ? "bg-[#00A669]/10 text-[#00A669] shadow-sm shadow-[#00A669]/5 font-bold"
                        : "text-gray-800 hover:bg-gray-50 hover:text-[#1B4332]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Bottom Utility and CTA button Area */}
            <div className="bg-gray-50/80 border-t border-gray-100 p-6 space-y-6">
              
              {/* Quick Contact Info */}
              <div className="space-y-3.5 text-xs text-gray-500 font-medium pl-1">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Quick Contact
                </p>
                <a 
                  href="tel:01902424079" 
                  className="flex items-center gap-3.5 hover:text-[#1B4332] transition-colors py-1"
                >
                  <Phone size={14} className="text-[#1B4332]" />
                  <span className="text-gray-700 font-semibold text-sm">01902 424 079</span>
                </a>
                <a 
                  href="mailto:office@wightwickdentalpractice.co.uk" 
                  className="flex items-center gap-3.5 hover:text-[#1B4332] transition-colors py-1"
                >
                  <Mail size={14} className="text-[#1B4332] shrink-0" />
                  <span className="text-gray-700 font-semibold text-sm truncate">office@wightwickdentalpractice.co.uk</span>
                </a>
                <div className="flex items-center gap-3.5 py-1">
                  <MapPin size={14} className="text-[#1B4332] shrink-0" />
                  <span className="text-gray-700 font-semibold">WV6 8EN, Wolverhampton</span>
                </div>
              </div>

              {/* Call to Action Button */}
              <a
                href="#booking-section"
                onClick={(e) => handleLinkClick(e, "#booking-section")}
                className="block w-full text-center bg-[#00A669] hover:bg-[#00955d] text-white h-14 flex items-center justify-center px-6 rounded-xl font-bold text-base transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-emerald-900/15 hover:shadow-lg hover:shadow-emerald-900/25 select-none"
              >
                Book Consultation
              </a>
            </div>

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
