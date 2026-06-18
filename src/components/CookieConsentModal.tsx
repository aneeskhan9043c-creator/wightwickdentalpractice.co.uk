import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function CookieConsentModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("dentalCookieConsent");
      if (!consent) {
        setIsVisible(true);
      }
    } catch (e) {
      // In case localStorage is blocked by iframe constraints, just show it
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("dentalCookieConsent", "true");
    } catch (e) {
      // Ignore
    }
    setIsVisible(false);
  };

  const handleReject = () => {
    try {
      localStorage.setItem("dentalCookieConsent", "rejected");
    } catch (e) {
      // Ignore
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-[99999] w-full max-w-[380px] bg-white p-6 rounded-2xl shadow-xl border border-gray-100 font-sans"
        >
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-gray-900 font-semibold text-lg mb-1 tracking-tight">Your Privacy</h4>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                We use cookies to improve your experience and analyze site traffic to deliver better ongoing care. By accepting, you agree to our{" "}
                <a href="/privacy-policy" className="text-[#00A669] underline hover:text-[#008956] font-medium transition-colors">Privacy Policy</a>.
              </p>
            </div>
            <div className="flex gap-3 mt-1">
              <button 
                onClick={handleReject} 
                className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                Decline
              </button>
              <button 
                onClick={handleAccept} 
                className="flex-1 px-4 py-2.5 text-sm font-medium bg-[#1B4332] text-white rounded-xl hover:bg-[#133024] transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-[#1B4332] focus:ring-offset-2"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
