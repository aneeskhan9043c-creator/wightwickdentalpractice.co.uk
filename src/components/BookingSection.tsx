import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { CheckCircle2, Phone, Mail, MapPin, Check } from "lucide-react";

export const BookingSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 4 seconds
      setTimeout(() => setIsSuccess(false), 4500);
    }, 1500);
  };

  return (
    <section id="booking-section" className="py-24 bg-[#F9F9F9] scroll-mt-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Information Panel (1/3 size) */}
          <motion.div 
            className="lg:col-span-1 bg-[#1B4332] text-white p-8 lg:p-10 rounded-2xl shadow-xl flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="font-['Playfair_Display'] text-2xl lg:text-3xl font-bold mb-4">
                  Why Choose Us?
                </h3>
                <p className="font-['Lato'] text-green-100/80 text-sm leading-relaxed mb-6">
                  Wightwick Dental Clinic stands for clinical excellence, state-of-the-art dental services, and unparalleled patient comfort.
                </p>
                <ul className="font-['Lato'] space-y-4">
                  {[
                    "Specialist Expertise in Maxillofacial Surgery and Implants",
                    "Advanced sedation techniques for anxious patients",
                    "State-of-the-art diagnostic facilities",
                    "Over 30 years of combined clinical excellence"
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="p-1 rounded-full bg-white/10 text-[#00a86b] shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-[#00a86b] stroke-[3px]" />
                      </span>
                      <span className="text-sm leading-relaxed text-gray-100">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 space-y-5">
              <h4 className="font-['Playfair_Display'] text-lg font-bold text-green-100">
                Contact Details
              </h4>
              <div className="flex items-center space-x-3.5 text-sm">
                <div className="bg-white/10 p-2.5 rounded-lg text-white">
                  <Phone className="w-5 h-5 text-green-300" />
                </div>
                <div>
                  <p className="text-xs text-green-200/60 font-['Lato']">Call Us</p>
                  <p className="font-semibold text-white">01902 424 079</p>
                </div>
              </div>
              <div className="flex items-center space-x-3.5 text-sm">
                <div className="bg-white/10 p-2.5 rounded-lg text-white">
                  <Mail className="w-5 h-5 text-green-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-green-200/60 font-['Lato']">Email Us</p>
                  <p className="font-semibold text-white truncate">reception@wightwickdental.co.uk</p>
                </div>
              </div>
              <div className="flex items-center space-x-3.5 text-sm">
                <div className="bg-white/10 p-2.5 rounded-lg text-white">
                  <MapPin className="w-5 h-5 text-green-300" />
                </div>
                <div>
                  <p className="text-xs text-green-200/60 font-['Lato'] font-medium">Location</p>
                  <p className="font-semibold text-white">Wolverhampton, WV6</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Form (2/3 size) */}
          <motion.div 
            className="lg:col-span-2 bg-white p-8 lg:p-12 rounded-2xl shadow-xl shadow-green-900/5 border border-gray-100 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center py-20 text-center space-y-5">
                <CheckCircle2 className="w-20 h-20 text-[#00a86b]" />
                <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#2d2d2d]">
                  Request Received
                </h3>
                <p className="font-['Lato'] text-gray-600 max-w-md mx-auto text-lg leading-relaxed">
                  Thank you! Our dedicated reception team will contact you shortly to confirm your booking and coordinate your visit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-2 leading-tight">
                    Request an Appointment
                  </h2>
                  <p className="font-['Lato'] text-[#666] text-base">
                    Start your journey to a healthier, brighter smile.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 text-sm font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      required
                      placeholder="John Doe"
                      className="h-12 border-gray-200 rounded-lg focus-visible:ring-[#00a86b] px-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 text-sm font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="07123 456789"
                      className="h-12 border-gray-200 rounded-lg focus-visible:ring-[#00a86b] px-4"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 text-sm font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="h-12 border-gray-200 rounded-lg focus-visible:ring-[#00a86b] px-4"
                    />
                  </div>

                  <div className="space-y-2 border-0">
                    <Label htmlFor="treatment" className="text-gray-700 text-sm font-medium">
                      Treatment Interest
                    </Label>
                    <Select required>
                      <SelectTrigger className="w-full h-12 border-gray-200 rounded-lg focus:ring-[#00a86b] px-4">
                        <SelectValue placeholder="Select a treatment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="implant">Dental Implants</SelectItem>
                        <SelectItem value="surgery">Oral Surgery</SelectItem>
                        <SelectItem value="general">General Dentistry</SelectItem>
                        <SelectItem value="cosmetic">Cosmetic / Whitening</SelectItem>
                        <SelectItem value="other">Other / Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 text-sm font-medium">
                    Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Briefly describe your needs or any specific concerns..."
                    className="h-28 resize-none border-gray-200 rounded-lg focus-visible:ring-[#00a86b] p-4"
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1B4332] hover:bg-[#122e22] text-white h-14 text-base font-bold tracking-wide rounded-xl transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-emerald-950/20 hover:shadow-lg hover:shadow-emerald-950/30 select-none flex items-center justify-center cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting Request..." : "Request Appointment"}
                  </Button>
                  <p className="text-xs text-center text-gray-400 mt-4 font-['Lato']">
                    By submitting this form, you agree to our privacy policy and data security standards.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

