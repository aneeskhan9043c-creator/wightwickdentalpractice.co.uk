import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TeamMemberProfile } from "./pages/TeamMemberProfile";
import { CookieConsentModal } from "./components/CookieConsentModal";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <CookieConsentModal />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team/:slug" element={<TeamMemberProfile />} />
      </Routes>
    </>
  );
}
