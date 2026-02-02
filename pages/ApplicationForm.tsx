
import React, { useState } from 'react';
import { 
  ChevronRight, 
  UserCircle, 
  Users, 
  School, 
  ClipboardList, 
  HelpCircle, 
  Mail, 
  Phone, 
  ArrowRight,
  Briefcase,
  ChevronDown
} from 'lucide-react';

interface ApplicationFormProps {
  onSubmit: () => void;
  onClear: () => void;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ onSubmit, onClear }) => {
  const [grade, setGrade] = useState('11th Grade');
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'Sarah Elizabeth Johnson',
    email: 'sarah.johnson@student.edu',
    phone: '+1 (555) 234-5678',
    state: 'California',
    country: 'United States',
    schoolName: 'Riverside High School'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20 animate-in fade-in duration-700">
      <div className="bg-[#FFF9E1] rounded-[40px] p-12 relative overflow-hidden border border-amber-100">
        <div className="relative z-10 space-y-6">
          <div className="space-y-2">
            <h1 className="text-[32px] font-black text-black tracking-tight">Program Application Form</h1>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-2xl border border-amber-200/50 shadow-sm text-sm font-bold text-black w-fit">
              <div className="w-8 h-8 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600"><Briefcase className="w-4 h-4" /></div>
              GreenVan Corporate Internship
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-gray-400">Starts 17th August 2025</span>
            </div>
          </div>
          <p className="text-gray-500 font-medium text-sm">Please complete all sections below. Fields marked with * are required.</p>
        </div>
      </div>

      <div className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-sm space-y-10">
        <div className="flex gap-6">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 shadow-sm"><UserCircle className="w-7 h-7" /></div>
          <div className="space-y-1">
            <h2 className="text-xl font-black text-black">Student Information</h2>
            <p className="text-sm font-medium text-gray-400">Your personal details</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-2 space-y-2">
            <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest px-1">Full Name *</label>
            <input 
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              type="text" 
              placeholder="Enter your full name" 
              className="w-full bg-white border border-gray-100 rounded-2xl p-4 text-[15px] font-bold text-black focus:border-amber-400 outline-none transition-all shadow-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest px-1">Student Email Address *</label>
            <input 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email" 
              placeholder="student@example.com" 
              className="w-full bg-white border border-gray-100 rounded-2xl p-4 text-[15px] font-bold text-black focus:border-amber-400 outline-none transition-all shadow-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest px-1">Student Mobile Number *</label>
            <input 
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              type="text" 
              placeholder="+1 (555) 000-0000" 
              className="w-full bg-white border border-gray-100 rounded-2xl p-4 text-[15px] font-bold text-black focus:border-amber-400 outline-none transition-all shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[40px] border border-gray-100 p-8 shadow-xl flex items-center justify-between">
        <div className="flex items-center gap-3 text-blue-600 px-2">
          <HelpCircle className="w-5 h-5 opacity-60" />
          <span className="text-sm font-bold opacity-80">Please review all information before submitting</span>
        </div>
        <div className="flex items-center gap-10">
          <button onClick={onClear} className="text-[14px] font-bold text-gray-400 hover:text-black transition-colors px-4">Clear Form</button>
          <button onClick={onSubmit} className="bg-[#FFCC4D] hover:bg-[#FFB800] text-gray-900 font-black px-12 py-4 rounded-[20px] shadow-xl flex items-center gap-3 transition-all">Submit and Proceed <ArrowRight className="w-5 h-5" /></button>
        </div>
      </div>
    </div>
  );
};
