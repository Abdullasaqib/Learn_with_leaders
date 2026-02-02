
import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  Settings, 
  Maximize2, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp,
  Star, 
  Clock, 
  Users, 
  Calendar,
  CheckCircle2,
  PlayCircle,
  Video,
  BookOpen,
  ArrowRight,
  Info,
  Check,
  Award,
  Circle,
  Mail,
  HelpCircle,
  MessageCircle,
  LayoutDashboard,
  UserCircle,
  Compass,
  Briefcase
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const featuredPrograms = [
    {
      title: "Global Leadership Summit",
      university: "Harvard University",
      desc: "future global leaders through hands-on projects and mentorship",
      tags: ["HYBRID", "4 WEEKS", "LEADERSHIP"],
      badges: ["FEATURED", "FILLING FAST"],
      date: "Jun 15, 2024",
      seats: "45 seats",
      rating: "4.9",
      students: "2.3K",
      price: "$2,499",
      promo: "Early Bird 10% OFF",
      image: "https://images.unsplash.com/photo-1523050335392-9bef867a0010?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Innovation & Startup Accelerator",
      university: "Stanford University",
      desc: "Launch your startup idea with guidance from Silicon Valley entrepreneurs",
      tags: ["ON CAMPUS", "ENTREPRENEURSHIP"],
      badges: ["FEATURED", "FILLING FAST"],
      date: "Jun 15, 2024",
      seats: "45 seats",
      rating: "4.9",
      students: "2.3K",
      price: "$3,499",
      promo: "Only 5 Spots Left!",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "AI & Machine Learning Bootcamp",
      university: "MIT",
      desc: "future global leaders through hands-on projects and mentorship",
      tags: ["ONLINE", "8 WEEKS", "TECH"],
      badges: ["FEATURED", "TOP RATED"],
      date: "Jun 15, 2024",
      seats: "45 seats",
      rating: "4.9",
      students: "2.3K",
      price: "$1,899",
      promo: "Scholarship Available",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const trendingPrograms = [
    {
      title: "Business Leadership Foundations",
      university: "Harvard Business School",
      desc: "Master the fundamentals of business leadership through case studies, simulations, and real-world applications with industry experts.",
      tags: ["Leadership", "Grades 11-12"],
      badge: "Featured",
      date: "Nov 15, 2024",
      seats: "24 spots",
      rating: "4.9",
      students: "1,247 students",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Innovation & Entrepreneurship",
      university: "MIT Sloan School of Management",
      desc: "Learn to identify opportunities, develop innovative solutions, and build scalable businesses from MIT's renowned faculty.",
      tags: ["Entrepreneurship", "Grades 10-12"],
      badge: "Direct",
      duration: "6 weeks",
      date: "Nov 15, 2024",
      seats: "24 spots",
      rating: "4.9",
      students: "1,247 students",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Sustainable Leadership",
      university: "Stanford Graduate School of Business",
      desc: "Explore how leaders can drive positive environmental and social impact while building successful organizations.",
      tags: ["Sustainability", "Grades 9-11"],
      badge: "Free",
      duration: "4 weeks",
      date: "Nov 15, 2024",
      seats: "24 spots",
      rating: "4.9",
      students: "1,247 students",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const faqs = [
    { q: "How do I apply to a program?", a: "Click \"Learn More\" on any program card to view details and start your application. Most programs have a simple online application process." },
    { q: "What are the eligibility requirements?", a: "Eligibility varies by program. Most high school programs are for students in grades 9-12." },
    { q: "Are scholarships available?", a: "Yes, merit-based and financial-need scholarships are available for many programs." },
    { q: "Can I attend programs remotely?", a: "Yes, we offer Online, On-Campus, and Hybrid options for various programs." },
    { q: "What's included in the program fee?", a: "Fees typically include tuition, materials, and certificates. For on-campus, housing and meals may be included." }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6 sm:space-y-12 pb-20 animate-in fade-in duration-700">
      {/* Header Info */}
      <div className="flex flex-col gap-1 px-2">
        <h1 className="text-xl font-bold text-gray-900">Good Morning Sarah! 👋</h1>
        <p className="text-sm text-gray-500 font-medium italic opacity-80">"Keep pushing forward — your growth defines your journey."</p>
      </div>

      {/* Hero Search Section */}
      <div className="bg-[#FFF9E1] rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 text-center relative overflow-hidden border border-amber-100">
        <div className="relative z-10 space-y-6">
          <h2 className="text-[28px] sm:text-[42px] font-black text-gray-900 tracking-tight leading-tight">Find Your Dream Program</h2>
          <p className="text-gray-600 font-medium max-w-xl mx-auto opacity-80 text-sm sm:text-base">Discover world-class opportunities to build your future</p>
          
          <div className="flex justify-center gap-6 sm:gap-12 py-2 sm:py-4">
            <div className="text-center">
              <span className="block text-xl sm:text-3xl font-black text-gray-900">50+</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest">Universities</span>
            </div>
            <div className="text-center">
              <span className="block text-xl sm:text-3xl font-black text-gray-900">10K+</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest">Students</span>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-current" />
                <span className="text-xl sm:text-3xl font-black text-gray-900">4.9</span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest">Average Rating</span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-1.5 flex flex-col sm:flex-row items-stretch sm:items-center shadow-xl shadow-amber-500/10 border border-gray-100 gap-2">
            <div className="flex-1 flex items-center px-4">
              <Search className="w-4 h-4 text-gray-300 shrink-0" />
              <input 
                type="text" 
                placeholder="Search programs..." 
                className="flex-1 bg-transparent px-3 py-4 text-[14px] text-gray-700 focus:outline-none font-medium"
              />
            </div>
            <button className="bg-[#FFCC4D] hover:bg-[#FFB800] text-gray-900 font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95">
              Explore Programs
            </button>
          </div>
        </div>
      </div>

      {/* 3 Steps Journey */}
      <div className="space-y-6">
        <div className="space-y-1 px-2">
          <h3 className="text-xl font-bold text-gray-900">Start Your Journey in 3 Steps</h3>
          <p className="text-sm text-gray-400 font-medium">You're just a few steps away from your first experience!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-gray-100 -z-0"></div>
          
          {/* Step 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-gray-100 flex items-start gap-4 relative z-10 group hover:border-amber-200 transition-all shadow-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
              <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-gray-900 text-[14px] sm:text-[15px]">Complete Your Profile</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Add your details and preferences</p>
              <p className="text-[10px] font-bold text-green-500 pt-2 flex items-center gap-1 italic">✓ Completed</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-gray-100 flex items-start gap-4 relative z-10 group hover:border-amber-200 transition-all shadow-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-gray-900 text-[14px] sm:text-[15px]">Explore Programs</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Browse and shortlist programs</p>
              <button className="text-[10px] font-bold text-blue-500 pt-2 hover:underline flex items-center gap-1">Start Exploring →</button>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-gray-100 flex items-start gap-4 relative z-10 opacity-60 group shadow-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-gray-900 text-[14px] sm:text-[15px]">Apply & Connect</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Submit applications or connect</p>
              <p className="text-[10px] font-bold text-gray-400 pt-2 italic">Not started</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Programs Section */}
      <div className="bg-[#FFF9E1] rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 space-y-8 border border-amber-100/50 overflow-x-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900">Featured Programs</h3>
            <p className="text-sm text-gray-500 font-medium opacity-70">Handpicked opportunities</p>
          </div>
          <button className="flex items-center gap-2 text-blue-600 font-bold text-[13px] hover:underline">
            View All Featured <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredPrograms.map((prog, i) => (
            <div key={i} className="bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden border border-gray-100 flex flex-col group hover:shadow-2xl hover:shadow-amber-500/5 transition-all">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img src={prog.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={prog.title} />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-red-500 text-[9px] sm:text-[10px] text-white font-bold px-2 py-1 rounded">FEATURED</span>
                  <span className="bg-amber-400 text-[9px] sm:text-[10px] text-gray-900 font-bold px-2 py-1 rounded flex items-center gap-1 shrink-0">
                    <Clock className="w-3 h-3" /> FILLING FAST
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col space-y-4">
                <div className="flex flex-wrap gap-2">
                  {prog.tags.map(t => (
                    <span key={t} className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded ${
                      t === 'HYBRID' || t === 'ONLINE' ? 'bg-blue-50 text-blue-600' :
                      t === '4 WEEKS' || t === '8 WEEKS' ? 'bg-green-50 text-green-600' :
                      'bg-purple-50 text-purple-600'
                    }`}>{t}</span>
                  ))}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[16px] sm:text-[17px] text-gray-900 group-hover:text-amber-500 transition-colors line-clamp-1">{prog.title}</h4>
                  <p className="text-[11px] sm:text-[12px] font-bold text-gray-400 uppercase tracking-wider">{prog.university}</p>
                </div>
                <p className="text-[11px] sm:text-[12px] text-gray-500 leading-relaxed font-medium line-clamp-2 italic opacity-80">{prog.desc}</p>
                
                <div className="grid grid-cols-2 gap-y-3 pt-2">
                  <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-gray-500 font-bold">
                    <Calendar className="w-3.5 h-3.5 text-gray-300" /> {prog.date}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-gray-500 font-bold">
                    <Users className="w-3.5 h-3.5 text-gray-300" /> {prog.seats}
                  </div>
                </div>

                <div className="pt-6 mt-auto border-t border-gray-50 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="block text-lg sm:text-xl font-black text-gray-900">{prog.price}</span>
                  </div>
                  <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all font-black px-4 sm:px-6 py-2 rounded-xl text-[11px] sm:text-[12px] active:scale-95">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        <div className="lg:col-span-7 bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 space-y-10 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">Ready to Start Your Journey?</h3>
          <div className="space-y-10 relative">
            <div className="absolute left-5 sm:left-6 top-8 bottom-8 w-[2px] bg-gray-50 -z-0"></div>
            
            <div className="flex items-start gap-4 sm:gap-6 relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 border-4 border-white shadow-sm">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Account Created</h4>
                <p className="text-[11px] sm:text-xs text-gray-400 font-medium italic">✓ Completed</p>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6 relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 border-4 border-white shadow-sm">
                <UserCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Complete Profile</h4>
                <button className="text-[11px] sm:text-xs font-black text-blue-600 hover:underline text-left">Complete Now →</button>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6 relative z-10 opacity-40">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center shrink-0 border-4 border-white shadow-sm">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base text-left">Explore Programs</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 space-y-8 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Profile Progress</h3>
            <button className="text-xs font-bold text-gray-400 hover:text-amber-500 underline">Edit</button>
          </div>
          
          <div className="flex justify-center py-4">
            <div className="relative w-32 sm:w-48 h-32 sm:h-48">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="50%" cy="50%" r="40%" fill="none" stroke="#F9FAFB" strokeWidth="12" />
                <circle cx="50%" cy="50%" r="40%" fill="none" stroke="#FFCC4D" strokeWidth="12" strokeDasharray="251" strokeDashoffset="225" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-[42px] font-black text-gray-900 leading-none">10%</span>
              </div>
            </div>
          </div>

          <ul className="space-y-3 pt-2">
            {[
              { label: 'Basic Info', status: 'Done', color: 'text-green-500' },
              { label: 'Background', status: 'In Progress', color: 'text-blue-500' },
              { label: 'Interests', status: 'Pending', color: 'text-gray-400' },
            ].map(item => (
              <li key={item.label} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${
                    item.status === 'Done' ? 'bg-green-500' : 
                    item.status === 'In Progress' ? 'bg-blue-500' : 'bg-gray-200'
                  }`}></div>
                  <span className="text-[12px] sm:text-[13px] font-bold text-gray-700 truncate">{item.label}</span>
                </div>
                <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-wider shrink-0 ${item.color}`}>{item.status}</span>
              </li>
            ))}
          </ul>

          <button className="w-full bg-[#FFCC4D] hover:bg-[#FFB800] text-gray-900 font-bold py-4 rounded-xl sm:rounded-2xl transition-all mt-4 active:scale-95 shadow-sm">
            Complete Profile
          </button>
        </div>
      </div>

      {/* Learning Hub Section (Mobile Friendly Grids) */}
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-1 px-2">
          <h3 className="text-xl font-bold text-gray-900">Learning Hub</h3>
          <p className="text-sm text-gray-400 font-medium">Access curated resources</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card Component could be extracted, but here inline for brevity */}
          <div className="bg-[#A855F7] rounded-[32px] sm:rounded-[40px] p-8 sm:p-10 text-white flex flex-col group h-[400px] sm:h-[480px] shadow-lg shadow-purple-500/10">
            <div className="w-12 h-12 sm:w-16 h-16 bg-white/20 rounded-[18px] sm:rounded-[24px] flex items-center justify-center mb-6 sm:mb-10 backdrop-blur-md shrink-0">
              <Award className="w-6 h-6 sm:w-8 h-8" />
            </div>
            <div className="space-y-4 flex-1">
              <h4 className="text-[24px] sm:text-[28px] font-black leading-tight">Skills Studio</h4>
              <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed italic opacity-80">Master critical thinking through interactive challenges.</p>
            </div>
            <button className="bg-white text-[#A855F7] font-black py-4 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 transition-all mt-auto shadow-xl active:scale-95">
              Start Training <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="bg-[#3B82F6] rounded-[32px] sm:rounded-[40px] p-8 sm:p-10 text-white flex flex-col group h-[400px] sm:h-[480px] shadow-lg shadow-blue-500/10">
            <div className="w-12 h-12 sm:w-16 h-16 bg-white/20 rounded-[18px] sm:rounded-[24px] flex items-center justify-center mb-6 sm:mb-10 backdrop-blur-md shrink-0">
              <Video className="w-6 h-6 sm:w-8 h-8" />
            </div>
            <div className="space-y-4 flex-1">
              <h4 className="text-[24px] sm:text-[28px] font-black leading-tight">Masterclasses</h4>
              <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed italic opacity-80">Learn from world-class experts in leadership and tech.</p>
            </div>
            <button className="bg-white text-[#3B82F6] font-black py-4 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 transition-all mt-auto shadow-xl active:scale-95">
              Watch Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-[#10B981] rounded-[32px] sm:rounded-[40px] p-8 sm:p-10 text-white flex flex-col group h-[400px] sm:h-[480px] shadow-lg shadow-emerald-500/10">
            <div className="w-12 h-12 sm:w-16 h-16 bg-white/20 rounded-[18px] sm:rounded-[24px] flex items-center justify-center mb-6 sm:mb-10 backdrop-blur-md shrink-0">
              <BookOpen className="w-6 h-6 sm:w-8 h-8" />
            </div>
            <div className="space-y-4 flex-1">
              <h4 className="text-[24px] sm:text-[28px] font-black leading-tight">Library</h4>
              <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed italic opacity-80">Curated articles, guides, and tools tailored to you.</p>
            </div>
            <button className="bg-white text-[#10B981] font-black py-4 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 transition-all mt-auto shadow-xl active:scale-95">
              Access Vault <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#F9FAFB] rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 space-y-8 sm:space-y-12 border border-gray-100">
        <div className="text-center space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Frequently Asked Questions</h3>
          <p className="text-xs sm:text-sm text-gray-500 font-medium">Everything you need to know about our programs</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-[20px] sm:rounded-3xl overflow-hidden border border-gray-100 shadow-sm transition-all">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left group"
              >
                <span className="text-[14px] sm:text-[15px] font-bold text-gray-900 group-hover:text-amber-500 transition-colors leading-tight pr-4">{faq.q}</span>
                {openFaq === i ? <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
              </button>
              {openFaq === i && (
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-[13px] sm:text-[14px] text-gray-500 font-medium leading-relaxed opacity-80 animate-in slide-in-from-top-1 duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-[#FFCC4D] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden group gap-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="space-y-2 relative z-10 text-center lg:text-left w-full lg:w-auto">
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-none">Stay Updated</h3>
          <p className="text-gray-800 font-bold text-[13px] sm:text-[14px] opacity-80 italic">Get notified about new programs and early offers.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 relative z-10 w-full lg:w-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 lg:w-80 bg-white/95 backdrop-blur px-6 py-4 rounded-[16px] text-[14px] font-medium focus:outline-none border-2 border-transparent focus:border-gray-900/10 shadow-sm"
          />
          <button className="bg-gray-900 text-white font-black px-8 py-4 rounded-xl shadow-lg shadow-amber-500/10 transition-all active:scale-95">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
