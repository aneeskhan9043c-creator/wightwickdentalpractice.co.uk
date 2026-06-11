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
      <main className="max-w-5xl mx-auto px-4 md:px-8 pt-8">
        {/* Elite Split Grid Layout instead of massive stretched banner */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start mt-4">
          
          {/* Column 1: Portrait Cover Photo */}
          <div className="md:col-span-4 md:sticky md:top-24 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
            {doctor.image ? (
              <div className="w-full aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden relative shadow-inner">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
            ) : (
              <div className="w-full aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center flex-col relative shadow-inner">
                <User className="w-16 h-16 mb-4 text-gray-400 opacity-50" />
                <span className="text-gray-500 font-medium tracking-widest uppercase text-xs">
                  Professional Portrait
                </span>
              </div>
            )}
            
            {/* Direct Registration/GDC Badge */}
            <div className="mt-4">
              <div className="bg-gray-50 px-3.5 py-2.5 rounded-lg border border-gray-100 text-center">
                <span className="font-bold text-[10px] uppercase tracking-wider text-gray-400 block mb-0.5">
                  General Dental Council
                </span>
                <span className="text-sm font-extrabold text-gray-800">
                  GDC No. {doctor.gdc}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Credentials and Full Bio */}
          <div className="md:col-span-8">
            <div className="mb-8 text-center md:text-left">
              <h4 className="text-xs sm:text-sm font-bold text-[#00a86b] uppercase tracking-widest mb-3 font-['Lato']">
                {doctor.title}
              </h4>
              <h1 className="font-['Playfair_Display'] font-extrabold text-4xl md:text-5xl text-[#2d2d2d] mb-4 leading-tight">
                {doctor.name}
              </h1>
              
              <div className="bg-[#1b4332]/5 border-l-4 border-[#1b4332] px-4 py-3 rounded-r-lg mt-4 max-w-2xl text-left">
                <span className="font-bold text-[10px] uppercase tracking-wider text-emerald-800 block mb-0.5">
                  Qualifications
                </span>
                <span className="text-sm sm:text-base font-bold text-[#1b4332]">
                  {doctor.qualifications}
                </span>
              </div>
            </div>

            {/* Detailed Biography Content */}
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 font-['Playfair_Display'] border-b border-gray-100 pb-3">
                Professional Overview & Background
              </h2>
              <div className="prose prose-emerald text-gray-600 max-w-none font-['Lato'] leading-relaxed whitespace-pre-line text-sm sm:text-base">
                {doctor.fullBio}
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
};
