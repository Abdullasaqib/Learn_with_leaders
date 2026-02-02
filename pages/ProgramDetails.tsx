
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  Calendar, 
  Globe, 
  Award, 
  CheckCircle2, 
  Bookmark, 
  Users, 
  PlayCircle, 
  ChevronDown, 
  ChevronUp,
  Info,
  Linkedin,
  Twitter,
  CreditCard
} from 'lucide-react';

interface ProgramDetailsProps {
  onBack: () => void;
  onApply?: () => void;
}

export const ProgramDetails: React.FC<ProgramDetailsProps> = ({ onBack, onApply }) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const learningOutcomes = [
    "Master innovation frameworks",
    "Entrepreneurial thinking",
    "Build business models",
    "Startup ecosystems"
  ];

  const skills = ["Leadership", "Innovation", "Strategy", "Problem Solving"];

  return (
    <div className="max-w-7xl mx-auto space-y-6 sm:space-y-12 pb-20 animate-in fade-in duration-700">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold text-xs sm:text-sm transition-colors group px-2"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back
      </button>

      {/* Main Content & Sidebar Grid */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
        {/* Left Col */}
        <div className="flex-1 space-y-6 sm:space-y-8 px-2 w-full">
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-600 text-white text-[9px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">Featured</span>
            <span className="bg-amber-400 text-gray-900 text-[9px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center gap-1.5 shrink-0">
              <Clock className="w-3 h-3" /> Filling Fast
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-[32px] sm:text-[48px] font-black text-gray-900 leading-tight">Innovation & Entrepreneurship</h1>
            <p className="text-lg sm:text-xl font-bold text-gray-400">MIT Sloan School of Management</p>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-500">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              </div>
              <span className="text-sm font-black text-gray-900">4.9</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 font-bold text-xs sm:text-sm">
              <Users className="w-4 h-4 text-gray-300 shrink-0" /> 450+ students
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-2">
            {[
              { icon: Clock, text: '8 Weeks', color: 'text-amber-500' },
              { icon: Calendar, text: 'Nov 15', color: 'text-amber-500' },
              { icon: Globe, text: 'Online', color: 'text-amber-500' },
              { icon: Award, text: 'Certified', color: 'text-green-500' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-700">
                <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color} shrink-0`} /> {item.text}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={onApply}
              className="w-full sm:w-auto bg-[#FFCC4D] hover:bg-[#FFB800] text-gray-900 font-black px-8 py-4 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
            >
              <PlayCircle className="w-5 h-5" /> Apply Now
            </button>
            <button className="w-full sm:w-auto border-2 border-gray-100 bg-white text-gray-900 font-black px-8 py-4 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all active:scale-95">
              <Bookmark className="w-5 h-5" /> Save
            </button>
          </div>
        </div>

        {/* Pricing Card (Sidebar on desktop) */}
        <div className="w-full lg:w-[380px] shrink-0 lg:sticky lg:top-28 px-2">
          <div className="bg-white rounded-[32px] sm:rounded-[40px] border border-gray-100 p-8 sm:p-10 shadow-2xl shadow-gray-200/50 space-y-6 sm:space-y-8">
            <div className="flex items-baseline gap-2">
              <span className="text-[28px] sm:text-[32px] font-black text-gray-900">$2,495</span>
              <span className="text-[10px] font-black text-green-500 bg-green-50 px-2 py-1 rounded-md">Save $500</span>
            </div>

            <ul className="space-y-4">
              {[
                "16 live sessions",
                "1:1 mentorship",
                "MIT certificate",
                "Lifetime access"
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-[13px] font-bold text-gray-600">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 shrink-0" /> {item}
                </li>
              ))}
            </ul>

            <button 
              onClick={onApply}
              className="w-full bg-[#FFCC4D] hover:bg-[#FFB800] text-gray-900 font-black py-4 sm:py-5 rounded-xl sm:rounded-[24px] shadow-lg active:scale-95 transition-all"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Details Sections */}
      <div className="bg-white rounded-[32px] sm:rounded-[40px] border border-gray-50 p-6 sm:p-12 space-y-10 shadow-sm mx-2">
        <div className="space-y-6">
          <h2 className="text-[24px] sm:text-[32px] font-black text-gray-900">About Program</h2>
          <p className="text-sm sm:text-lg text-gray-500 leading-relaxed font-medium italic opacity-80">
            Discover innovation fundamentals in this comprehensive program designed by MIT Sloan. Learn to drive growth through proven frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <div className="space-y-6">
            <h3 className="text-lg font-black text-gray-900">What You'll Learn</h3>
            <div className="space-y-4">
              {learningOutcomes.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[14px] font-bold text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-black text-gray-900">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span key={skill} className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-[12px] font-bold border border-blue-100/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
