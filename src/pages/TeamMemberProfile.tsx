import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { User, ArrowLeft } from "lucide-react";
import { teamMembers } from "../data";

export const TeamMemberProfile: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const doctor = teamMembers.find((member) => member.slug === slug);

  if (!doctor) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-[#f9fafb] font-sans pb-24">
      {/* Top Navbar Simple Area */}
      <header className="bg-white shadow-sm h-[70px] flex items-center px-4 md:px-8 shrink-0 relative z-20">
        <Link
          to="/"
          className="inline-flex items-center text-[#2d2d2d] hover:text-[#00a86b] font-semibold text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Team
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 md:px-8 pt-8">
        {/* Large 16:9 Image Placeholder */}
        <div className="w-full aspect-video bg-gray-200 rounded-2xl overflow-hidden mb-12 flex items-center justify-center flex-col relative shadow-md">
          <User className="w-24 h-24 mb-4 text-gray-400 opacity-50" />
          <span className="text-gray-500 font-medium tracking-widest uppercase text-sm">
            Professional Portrait
          </span>
        </div>

        {/* Doctor Info Header */}
        <div className="mb-10 text-center md:text-left">
          <h4 className="text-sm font-bold text-[#00a86b] uppercase tracking-widest mb-3 font-['Lato']">
            {doctor.title}
          </h4>
          <h1 className="font-['Playfair_Display'] font-bold text-4xl md:text-5xl text-[#2d2d2d] mb-4 leading-tight">
            {doctor.name}
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-gray-600 font-['Lato']">
            <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
              <span className="font-bold text-xs uppercase tracking-wider text-gray-400 block mb-1">
                Qualifications
              </span>
              <span className="text-sm font-semibold text-gray-800">
                {doctor.qualifications}
              </span>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
              <span className="font-bold text-xs uppercase tracking-wider text-gray-400 block mb-1">
                Registration
              </span>
              <span className="text-sm font-semibold text-gray-800">
                GDC: {doctor.gdc}
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Biography */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-['Playfair_Display']">
            About {doctor.name.split(" ")[0]}
          </h2>
          <div className="prose prose-lg text-gray-600 max-w-none font-['Lato'] leading-relaxed whitespace-pre-line">
            {doctor.fullBio}
          </div>
        </div>
      </main>
    </div>
  );
};
