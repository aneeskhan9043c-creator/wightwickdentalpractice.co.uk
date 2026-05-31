import React, { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import logoImg from "../assets/images/regenerated_image_1780089320182.png";
import oralSurgeryImg from "../assets/images/regenerated_image_1780150746369.jpg";
import cosmeticDentistryImg from "../assets/images/regenerated_image_1780150945019.jpg";
import { TreatmentCard } from "../components/TreatmentCard";
import { TeamSlider } from "../components/TeamSlider";
import { BookingSection } from "../components/BookingSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { LocationSection } from "../components/LocationSection";
import { AccreditationsSection } from "../components/AccreditationsSection";
import { Footer } from "../components/Footer";
import { MobileMenu } from "../components/MobileMenu";
import { teamMembers } from "../data";

const WhatsAppIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const treatments = [
  {
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    title: "Implant Treatments",
    description:
      "Permanent, natural-looking solutions for missing teeth, from single implants to full arches.",
    priceLabel: "Comprehensive Pricing",
    pricingList: [
      { treatment: "Consultation", price: "£75" },
      { treatment: "Implant placement - from", price: "£1300" },
      { treatment: "Crown & abutment - from", price: "£1300" },
      { treatment: "Single fully restored implant - from", price: "£2600" },
      { treatment: "2 implants with 3 unit bridge - from", price: "£6000" },
      {
        treatment: "Implant retained (denture on 4 implants) - from",
        price: "£6000",
      },
      { treatment: "Bone grafting - from", price: "£100" },
      { treatment: "Sinus lift - from", price: "£690" },
    ],
  },
  {
    image: oralSurgeryImg,
    title: "Oral Surgery",
    description:
      "Expert surgical procedures including complex wisdom tooth removal and apicectomy.",
    priceLabel: "View Fee Guide",
    pricingList: [
      { treatment: "Assessment", price: "£65" },
      { treatment: "Wisdom tooth removal from", price: "£250" },
      { treatment: "Enucleation of cysts", price: "TBA" },
      { treatment: "Apicectomy - from", price: "£500" },
      { treatment: "Extraction of difficult teeth - from", price: "£200" },
      { treatment: "Extraction of retained roots - from", price: "£200" },
      {
        treatment: "Removal of superficial salivary gland duct stones",
        price: "£600",
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    title: "X-Rays & 3D Scans",
    description:
      "State-of-the-art 3D CBCT imaging for precise implant planning and complex diagnostics.",
    priceLabel: "Scan Pricing",
    pricingList: [
      { treatment: "Panoral", price: "£59" },
      { treatment: "3D small from", price: "£75" },
      { treatment: "3D full jaw", price: "£125" },
      { treatment: "3D both jaws", price: "£199" },
    ],
  },
];

export function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Treatments", "Fees", "Contact Us"];

  return (
    <div className="min-h-[200vh] bg-[#f9fafb] font-sans text-[#2d2d2d]">
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden md:flex justify-between items-center bg-[#6abf4b] text-white py-2 px-6 lg:px-12 text-sm font-medium">
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <a
            href="tel:01902763200"
            className="hover:underline transition-colors hover:text-white/80"
          >
            01902 763 200
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <a
            href="mailto:office@wightwickdentalpractice.co.uk"
            className="hover:underline transition-colors hover:text-white/80"
          >
            office@wightwickdentalpractice.co.uk
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`animate-header sticky top-0 z-[100] bg-white transition-all duration-300 ${isScrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-0 md:py-2" : "shadow-[0_2px_10px_rgba(0,0,0,0.03)] py-0 md:py-4"} h-[55px] md:h-auto flex items-center`}
      >
        <div className="px-4 md:px-6 lg:px-12 flex items-center w-full max-w-[1400px] mx-auto">
          {/* Logo Section */}
          <div className="flex items-center gap-[12px]">
            <div className="overflow-hidden flex-shrink-0 h-[40px] md:h-[70px]">
              <img
                src={logoImg}
                alt="Wightwick Dental Practice"
                className="h-[40px] md:h-[70px] w-auto max-w-none object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-start min-w-max">
              <span className="font-['Playfair_Display'] font-[700] text-[#2d2d2d] leading-none whitespace-nowrap text-[20px] mb-1">
                Wightwick Dental
              </span>
              <span className="font-['Lato'] font-[500] text-[#666666] uppercase whitespace-nowrap text-[9px] tracking-[0.3em]">
                PRACTICE
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium ml-auto">
            {navLinks.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className={`relative group py-2 transition-colors ${index === 0 ? "text-[#6abf4b]" : "text-[#2d2d2d] hover:text-[#6abf4b]"}`}
              >
                {item}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-[#6abf4b] transition-all duration-300 ${index === 0 ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden ml-auto flex-shrink-0 text-[#2d2d2d] focus:outline-none p-1.5 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Premium Mobile Navigation Drawer Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Content */}
        <motion.div 
          className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 w-full max-w-[1400px] mx-auto pt-[55px] md:pt-0"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          <motion.h1 
            className="font-['Playfair_Display'] font-extrabold text-[36px] md:text-[48px] text-white leading-tight mb-4 max-w-4xl drop-shadow-xl [text-shadow:_0_4px_8px_rgb(0_0_0_/_40%)]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <span className="text-[#1B4332] bg-white/95 px-4 py-0.5 rounded-2xl inline-block mr-2 shadow-md [text-shadow:none]">Deluxe</span> Dental Care in Wolverhampton
          </motion.h1>
          <motion.p 
            className="font-['Lato'] text-[18px] text-gray-100 font-medium tracking-wider mb-10 max-w-2xl px-2 drop-shadow-md"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            State-of-the-art diagnostics. Purpose-built facility. Unmatched
            comfort.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-8 items-center justify-center w-full"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <a
              href="#booking-section"
              className="bg-[#009A5A] text-white px-8 py-3.5 rounded-full font-bold inline-flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-green-600 shadow-lg w-full sm:w-auto text-[16px] tracking-wide select-none"
            >
              Book Consultation
            </a>
            <button
              className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-full font-bold inline-flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-green-700 hover:scale-105 w-full sm:w-auto text-[16px] tracking-wide select-none"
            >
              Explore Our Clinic
            </button>
          </motion.div>
        </motion.div>
      </main>

      {/* Premium Treatments Section */}
      <section className="py-24 bg-[#FAFAFA] overflow-hidden" id="treatments">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-[#2d2d2d] mb-4">
              Our Premium Treatments
            </h2>
            <p className="font-['Lato'] text-[#666] max-w-2xl mx-auto text-lg leading-relaxed">
              Experience world-class dental care with our specialized treatment
              options tailored for your brilliant smile.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                <TreatmentCard {...treatment} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-24 bg-white" id="meet-the-team">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12">
          <TeamSlider />
        </div>
      </section>

      {/* Booking Section */}
      <BookingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Location Section */}
      <LocationSection />

      {/* Accreditations Section */}
      <AccreditationsSection />

      {/* Premium Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/message/XPZ4B2LMGSWJH1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-3.5 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 z-50 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 md:w-8 md:h-8" />
      </a>
    </div>
  );
}
