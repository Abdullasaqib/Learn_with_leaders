
import React, { useState } from 'react';
import { 
  Award, 
  Search, 
  ChevronDown, 
  LayoutGrid, 
  List, 
  Eye, 
  Download, 
  Plus, 
  MoreHorizontal, 
  Linkedin, 
  Twitter, 
  Share2, 
  CheckCircle2, 
  ShieldCheck, 
  Trophy,
  ArrowRight,
  Users
} from 'lucide-react';

export const Certificates: React.FC = () => {
  const certificates = [
    {
      id: '1',
      title: 'Business Leadership',
      subtitle: 'Foundations Program',
      fullTitle: 'Business Leadership Foundations',
      institution: 'Harvard Business School',
      date: 'March 15, 2024',
      grade: 'A+',
      icon: <Award className="w-8 h-8 text-blue-600" />,
      iconBg: 'bg-blue-50',
      logo: 'https://picsum.photos/id/101/40/40',
      premium: true
    },
    {
      id: '2',
      title: 'Digital Innovation',
      subtitle: '& Technology Leadership',
      fullTitle: 'Digital Innovation & Tech Leadership',
      institution: 'Stanford University',
      date: 'January 28, 2024',
      grade: 'A',
      icon: <LayoutGrid className="w-8 h-8 text-green-600" />,
      iconBg: 'bg-green-50',
      logo: 'https://picsum.photos/id/102/40/40',
      premium: true
    },
    {
      id: '3',
      title: 'Financial Strategy',
      subtitle: 'for Executives',
      fullTitle: 'Financial Strategy for Executives',
      institution: 'MIT Sloan School',
      date: 'November 12, 2023',
      grade: 'A+',
      icon: <Award className="w-8 h-8 text-purple-600" />,
      iconBg: 'bg-purple-50',
      logo: 'https://picsum.photos/id/103/40/40',
      premium: true
    },
    {
      id: '4',
      title: 'Global Team',
      subtitle: 'Management',
      fullTitle: 'Global Team Management',
      institution: 'Wharton Executive Education',
      date: 'August 20, 2023',
      grade: 'A',
      icon: <Users className="w-8 h-8 text-orange-600" />,
      iconBg: 'bg-orange-50',
      logo: 'https://picsum.photos/id/104/40/40',
      premium: true
    }
  ];

  const timeline = [
    { title: 'Business Leadership Foundations', org: 'Harvard Business School', date: 'March 2024', side: 'left', color: 'bg-amber-400' },
    { title: 'Digital Innovation & Tech Leadership', org: 'Stanford University', date: 'January 2024', side: 'right', color: 'bg-green-500' },
    { title: 'Financial Strategy for Executives', org: 'MIT Sloan', date: 'November 2023', side: 'left', color: 'bg-purple-500' },
    { title: 'Global Team Management', org: 'Wharton Executive Education', date: 'August 2023', side: 'right', color: 'bg-red-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-20 animate-in fade-in duration-700">
      {/* Hero Section */}
      <div className="bg-[#FFF9E1] rounded-[40px] py-16 px-12 text-center relative overflow-hidden border border-amber-100">
        <div className="relative z-10 space-y-8">
          <div className="w-20 h-20 bg-[#FFCC4D] rounded-3xl flex items-center justify-center mx-auto shadow-xl shadow-amber-500/20 text-gray-900">
            <Trophy className="w-10 h-10" />
          </div>
          <div className="space-y-4">
            <h1 className="text-[52px] font-black text-gray-900 tracking-tight leading-none">Your Certificates</h1>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto text-lg opacity-80">
              Celebrate your milestones and share your achievements with the world.
            </p>
          </div>
          <div className="flex justify-center items-center gap-2 pt-4">
            <span className="text-5xl font-black text-gray-900">4</span>
            <div className="flex flex-col items-start">
               <span className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-green-500" /> Certificates Earned
               </span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-200/20 rounded-full -ml-32 -mb-32 blur-2xl"></div>
      </div>

      {/* Filter & Sort Bar */}
      <div className="bg-white rounded-[40px] border border-gray-100 p-8 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="text-sm font-black text-gray-900">Filter & Sort</span>
          <div className="flex gap-3">
            {['All Years', 'All Institutions', 'All Programs'].map(f => (
              <button key={f} className="bg-white border border-gray-100 px-6 py-2.5 rounded-xl font-bold text-[13px] text-gray-600 flex items-center gap-3 hover:bg-gray-50">
                {f} <ChevronDown className="w-4 h-4 text-gray-300" />
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-6 py-2.5 font-bold text-[13px] text-gray-600 min-w-[200px] justify-between">
            Sort by: Date Earned <ChevronDown className="w-4 h-4 text-gray-300" />
          </div>
          <div className="flex bg-gray-50 p-1.5 rounded-xl">
            <button className="p-2 bg-white rounded-lg shadow-sm text-gray-900"><LayoutGrid className="w-4 h-4" /></button>
            <button className="p-2 text-gray-400"><List className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-3 gap-8">
        {certificates.map((cert) => (
          <div key={cert.id} className="bg-white rounded-[40px] border border-gray-100 p-8 space-y-8 hover:shadow-2xl hover:shadow-gray-200 transition-all group flex flex-col">
            <div className="relative bg-gray-50 rounded-[32px] p-10 flex flex-col items-center text-center space-y-6 overflow-hidden aspect-[4/3] justify-center">
              {cert.premium && (
                <span className="absolute top-4 right-4 bg-[#FFCC4D] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider text-gray-900">Premium</span>
              )}
              <div className={`${cert.iconBg} w-20 h-20 rounded-[28px] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                {cert.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-2xl font-black text-gray-900">{cert.title}</h4>
                <p className="text-sm font-bold text-gray-400">{cert.subtitle}</p>
                <p className="text-[11px] font-bold text-gray-300 uppercase tracking-widest pt-2">{cert.institution}</p>
                <p className="text-[10px] font-medium text-gray-400 italic">Certificate of Completion</p>
              </div>
            </div>
            
            <div className="space-y-6 flex-1 flex flex-col">
              <div className="flex items-start gap-4">
                <img src={cert.logo} className="w-10 h-10 rounded-full border border-gray-100 shadow-sm" alt={cert.institution} />
                <div className="space-y-0.5">
                  <h5 className="text-[15px] font-black text-gray-900 leading-tight">{cert.fullTitle}</h5>
                  <p className="text-[12px] font-bold text-gray-400">{cert.institution}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest">
                <div className="space-y-1">
                  <span className="text-gray-300 block">Completed:</span>
                  <span className="text-gray-900">{cert.date}</span>
                </div>
                <div className="space-y-1 text-right">
                  <span className="text-gray-300 block">Grade:</span>
                  <span className="text-green-500">{cert.grade}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 mt-auto">
                <button className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-900 font-black py-4 rounded-2xl text-[13px] transition-all">
                  <Eye className="w-4 h-4" /> View
                </button>
                <button className="flex items-center justify-center gap-2 bg-[#FFCC4D] hover:bg-[#FFB800] text-gray-900 font-black py-4 rounded-2xl text-[13px] shadow-lg shadow-amber-500/10 transition-all">
                  <Download className="w-4 h-4" /> Download
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Next Achievement Slot */}
        <div className="bg-white rounded-[40px] border-2 border-dashed border-gray-100 p-10 flex flex-col items-center justify-center text-center space-y-6 hover:border-amber-200 transition-all">
           <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-300">
              <Plus className="w-8 h-8" />
           </div>
           <div className="space-y-2">
              <h4 className="font-black text-gray-900">Next Achievement Slot</h4>
              <p className="text-xs text-gray-400 font-medium px-4">Complete your next program to unlock another certificate</p>
           </div>
           <button className="bg-gray-900 text-white font-black px-8 py-3.5 rounded-2xl text-[13px] hover:bg-black transition-all">
              Explore Programs
           </button>
        </div>

        {/* Load More Slot */}
        <div className="bg-white rounded-[40px] border border-gray-50 p-10 flex flex-col items-center justify-center text-center space-y-6 hover:shadow-lg transition-all">
           <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-300">
              <MoreHorizontal className="w-8 h-8" />
           </div>
           <div className="space-y-2">
              <h4 className="font-black text-gray-900">Load More</h4>
              <p className="text-xs text-gray-400 font-medium px-4">View additional certificates from your archive</p>
           </div>
           <button className="text-blue-600 font-black text-[13px] hover:underline">
              View All
           </button>
        </div>
      </div>

      {/* Your Learning Journey Timeline */}
      <div className="space-y-12 py-12">
        <h2 className="text-[32px] font-black text-gray-900 text-center tracking-tight">Your Learning Journey</h2>
        <div className="max-w-4xl mx-auto relative px-4">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2"></div>
          
          <div className="space-y-24">
            {timeline.map((item, i) => (
              <div key={i} className={`flex items-center w-full ${item.side === 'left' ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2"></div>
                <div className="relative z-10 w-12 h-12 flex items-center justify-center">
                  <div className={`w-4 h-4 rounded-full ${item.color} border-4 border-white shadow-lg`}></div>
                </div>
                <div className={`w-1/2 ${item.side === 'left' ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-white border border-gray-100 p-6 rounded-[32px] shadow-sm hover:shadow-md transition-all inline-block max-w-[320px]">
                    <h4 className="font-black text-gray-900 text-[15px] leading-snug">{item.title}</h4>
                    <p className="text-[12px] font-bold text-gray-400 mt-1">{item.org}</p>
                    <p className="text-[10px] font-black text-blue-500 uppercase mt-2">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Share Your Success */}
      <div className="space-y-8 bg-blue-50/50 rounded-[50px] p-16 border border-blue-100/50">
        <div className="text-center space-y-3">
          <h2 className="text-[32px] font-black text-gray-900 tracking-tight">Share Your Success</h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            Let the world know about your achievements. Share your certificates on social media and professional networks.
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-8">
          {[
            { id: 'linkedin', label: 'LinkedIn', icon: <Linkedin className="w-6 h-6" />, color: 'bg-[#0A66C2]', desc: 'Add certificates to your professional profile', btn: 'Share on LinkedIn' },
            { id: 'twitter', label: 'Twitter', icon: <Twitter className="w-6 h-6" />, color: 'bg-[#1DA1F2]', desc: 'Tweet about your learning milestones', btn: 'Tweet Achievement' },
            { id: 'portfolio', label: 'Download Portfolio', icon: <Download className="w-6 h-6" />, color: 'bg-[#10B981]', desc: 'Get all certificates in a single PDF', btn: 'Download All' }
          ].map(social => (
            <div key={social.id} className="bg-white rounded-[40px] p-10 flex flex-col items-center text-center space-y-6 shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-blue-100">
               <div className={`${social.color} w-16 h-16 rounded-[24px] flex items-center justify-center text-white shadow-xl shadow-gray-200`}>
                  {social.icon}
               </div>
               <div className="space-y-1">
                  <h4 className="text-lg font-black text-gray-900">{social.label}</h4>
                  <p className="text-[13px] text-gray-500 font-medium px-4">{social.desc}</p>
               </div>
               <button className={`${
                 social.id === 'linkedin' ? 'bg-[#FFCC4D] hover:bg-[#FFB800] text-gray-900' : 
                 social.id === 'twitter' ? 'bg-[#3B82F6] hover:bg-[#2563EB] text-white' : 
                 'bg-green-600 hover:bg-green-700 text-white'
               } w-full font-black py-4 rounded-[20px] text-[13px] transition-all`}>
                 {social.btn}
               </button>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Verification */}
      <div className="space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-[32px] font-black text-gray-900 tracking-tight">Certificate Verification</h2>
          <p className="text-sm font-medium text-gray-400 max-w-2xl mx-auto">
            All certificates are blockchain-verified and can be independently authenticated by employers and institutions.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-5 bg-white rounded-[40px] border border-gray-100 p-12 space-y-10">
            <h3 className="text-xl font-black text-gray-900">How Verification Works</h3>
            <div className="space-y-10">
              {[
                { n: 1, t: 'Unique Certificate ID', d: 'Each certificate gets a unique blockchain ID', color: 'bg-blue-100 text-blue-600' },
                { n: 2, t: 'Institution Signature', d: 'Digitally signed by issuing institution', color: 'bg-green-100 text-green-600' },
                { n: 3, t: 'Instant Verification', d: 'Anyone can verify authenticity in seconds', color: 'bg-purple-100 text-purple-600' }
              ].map(step => (
                <div key={step.n} className="flex gap-6">
                  <div className={`${step.color} w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0`}>
                    {step.n}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-gray-900 text-[15px]">{step.t}</h4>
                    <p className="text-xs text-gray-400 font-medium">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-7 bg-white rounded-[40px] border border-gray-100 p-12 space-y-8 flex flex-col">
            <h3 className="text-xl font-black text-gray-900">Verify a Certificate</h3>
            <div className="space-y-4">
              <label className="text-[13px] font-bold text-gray-400 block">Certificate ID</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Enter certificate ID (e.g., LWL-2024-HBS-001234)" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 text-[15px] font-medium focus:outline-none focus:ring-4 focus:ring-amber-500/5 focus:border-amber-200 transition-all"
                />
              </div>
              <button className="w-full bg-[#FFCC4D] hover:bg-[#FFB800] text-gray-900 font-black py-4 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-amber-500/10">
                 <Search className="w-5 h-5" /> Verify Certificate
              </button>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-[32px] p-8 mt-auto flex items-start gap-4">
               <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
               <div className="space-y-1">
                 <p className="text-[14px] font-black text-green-900">Your certificates are verified and secure</p>
                 <p className="text-[13px] text-green-700 font-medium opacity-80">
                   All 4 certificates have been successfully verified on blockchain. Last verified: Just now.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-[50px] p-20 text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110"></div>
        <div className="relative z-10 space-y-10">
          <h3 className="text-[44px] font-black text-white tracking-tight leading-tight">Ready for Your Next Challenge?</h3>
          <p className="text-white/80 font-bold text-[20px] max-w-2xl mx-auto">
            Continue your learning journey with advanced programs from world-class institutions.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-white text-blue-600 font-black px-12 py-5 rounded-[24px] shadow-2xl flex items-center gap-3 hover:scale-105 transition-all text-lg">
              <Search className="w-6 h-6" /> Explore Programs
            </button>
            <button className="border-2 border-white text-white font-black px-12 py-5 rounded-[24px] flex items-center gap-3 hover:bg-white/10 transition-all text-lg">
              <Users className="w-6 h-6" /> Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
