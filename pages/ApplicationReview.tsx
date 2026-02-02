
import React, { useState } from 'react';
import { 
  Edit3, 
  UserCircle, 
  Users, 
  School, 
  ClipboardList, 
  Video, 
  CloudUpload, 
  CheckCircle2, 
  HelpCircle, 
  Mail, 
  Phone, 
  ChevronRight, 
  Lock,
  ArrowRight,
  Briefcase,
  Clock
} from 'lucide-react';

interface ApplicationReviewProps {
  onSubmit: () => void;
  onBack: () => void;
}

export const ApplicationReview: React.FC<ApplicationReviewProps> = ({ onSubmit, onBack }) => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20 animate-in fade-in duration-700">
      <div className="bg-[#FFF9E1] rounded-[40px] p-12 relative overflow-hidden border border-amber-100">
        <div className="relative z-10 space-y-6">
          <div className="space-y-2">
            <h1 className="text-[32px] font-black text-black tracking-tight">Review Your Application Details</h1>
            <p className="text-gray-500 font-medium">We've pre-filled your information for faster checkout. Update only if needed.</p>
          </div>
          
          <div className="flex flex-wrap gap-6 pt-2">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-2xl border border-amber-200/50 shadow-sm text-sm font-bold text-black">
              <div className="w-8 h-8 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                <Briefcase className="w-4 h-4" />
              </div>
              GreenVan Corporate Internship
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-gray-400">Starts 17th August 2025</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-black text-gray-400 uppercase tracking-widest px-2">
              <Clock className="w-4 h-4" /> Last Updated: March 15, 2025 at 2:30 PM
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-[11px] font-black text-gray-300 uppercase tracking-[0.2em] px-4">
        <button onClick={onBack} className="hover:text-black">Programs</button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-amber-500">Application Form</span>
      </div>

      <div className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-sm space-y-10 group hover:shadow-md transition-all text-black">
        <div className="flex justify-between items-start">
          <div className="flex gap-6">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 shadow-sm"><UserCircle className="w-7 h-7" /></div>
            <div className="space-y-1">
              <h2 className="text-xl font-black">Student Information</h2>
              <p className="text-sm font-medium text-gray-400">Your personal details</p>
            </div>
          </div>
          <button className="p-3 text-gray-300 hover:text-blue-500 hover:bg-blue-50 rounded-xl transition-all opacity-0 group-hover:opacity-100"><Edit3 className="w-5 h-5" /></button>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-2 space-y-2">
            <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Full Name</label>
            <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-4 text-[15px] font-bold text-black">Sarah Elizabeth Johnson</div>
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Student Email Address</label>
            <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-4 text-[15px] font-bold text-blue-600">sarah.johnson@student.edu</div>
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Student Mobile Number</label>
            <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-4 text-[15px] font-bold text-black">+1 (555) 234-5678</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[40px] border border-gray-100 p-12 shadow-xl flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-xl font-black text-black">Ready to Proceed?</h3>
          <p className="text-sm font-medium text-gray-400">Review your information one last time before payment</p>
        </div>
        <div className="flex items-center gap-10">
          <div className="text-right">
            <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Application Fee</p>
            <p className="text-[32px] font-black text-black">$299.00</p>
          </div>
          <div className="flex gap-4">
            <button onClick={onBack} className="bg-gray-50 hover:bg-gray-100 text-black font-black px-10 py-5 rounded-[24px] flex items-center gap-3 transition-all">Edit Details</button>
            <button onClick={onSubmit} className="bg-[#FFCC4D] hover:bg-[#FFB800] text-gray-900 font-black px-12 py-5 rounded-[24px] shadow-xl flex items-center gap-3 transition-all">Submit and Proceed <ArrowRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};
