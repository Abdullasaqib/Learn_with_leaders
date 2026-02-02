
import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  ChevronDown, 
  LayoutGrid, 
  List, 
  X, 
  Star, 
  Clock, 
  Users, 
  Calendar, 
  Heart,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ChevronUp
} from 'lucide-react';
import { ProgramDetails } from './ProgramDetails';

interface ExploreProgramsProps {
  onStartApplication: () => void;
}

export const ExplorePrograms: React.FC<ExploreProgramsProps> = ({ onStartApplication }) => {
  const [activeFilters, setActiveFilters] = useState(['Leadership']);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);

  if (selectedProgramId) {
    return (
      <ProgramDetails 
        onBack={() => setSelectedProgramId(null)} 
        onApply={onStartApplication} 
      />
    );
  }

  const featuredPrograms = [
    {
      id: "featured-1",
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
      id: "featured-2",
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
      id: "featured-3",
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

  const programImages = [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1513258496099-48168024adb0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
  ];

  const allPrograms = programImages.map((img, i) => ({
    id: `prog-${i}`,
    title: "AI & Machine Learning Bootcamp",
    university: "MIT",
    desc: "Master AI fundamentals and build real-world applications with expert guidance",
    tags: i === 2 ? ["ON CAMPUS", "5 WEEKS", "SUSTAINABILITY"] : ["ONLINE", "8 WEEKS", "TECH"],
    date: "Aug 5, 2024",
    seats: "60 seats",
    rating: "4.8",
    students: "3.5K",
    price: "$1,899",
    image: img
  }));

  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-20 animate-in fade-in duration-700">
      <div className="bg-[#FFF9E1] rounded-[40px] py-20 px-12 text-center relative overflow-hidden border border-amber-100">
        <div className="relative z-10 space-y-10">
          <h1 className="text-[54px] font-black text-gray-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Explore Global Leadership Programs
          </h1>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto text-lg">
            Discover world-class opportunities to build your future
          </p>
          
          <div className="flex justify-center gap-24 py-4">
            <div className="text-center">
              <span className="block text-5xl font-black text-gray-900">50+</span>
              <span className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-3 block">Universities</span>
            </div>
            <div className="text-center">
              <span className="block text-5xl font-black text-gray-900">10K+</span>
              <span className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-3 block">Students</span>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="flex items-center gap-2">
                <Star className="w-8 h-8 text-amber-500 fill-current" />
                <span className="text-5xl font-black text-gray-900">4.9</span>
              </div>
              <span className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-3 block">Average Rating</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-[24px] p-2 flex items-center shadow-2xl shadow-amber-500/5 border border-gray-100/50">
            <input 
              type="text" 
              placeholder="Search programs, universities, or topics..." 
              className="flex-1 bg-transparent px-8 py-5 text-[16px] text-black focus:outline-none font-medium placeholder:text-gray-300"
            />
            <button className="bg-[#FFCC4D] hover:bg-[#FFB800] text-gray-900 font-bold w-[64px] h-[64px] rounded-[18px] flex items-center justify-center transition-all shadow-lg shadow-amber-500/10">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-amber-400/5 rounded-full -mr-64 -mt-64 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-amber-200/20 to-transparent blur-[100px] rounded-full -ml-32 -mb-32"></div>
      </div>

      <div className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-sm space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="bg-gray-900 text-white px-8 py-3.5 rounded-2xl font-bold text-[14px] flex items-center gap-3">
              <Filter className="w-4 h-4" /> Filters <span className="bg-amber-400 text-gray-900 rounded-full w-6 h-6 flex items-center justify-center text-[11px] font-black">3</span>
            </button>
            <div className="flex gap-4">
              {['Grade Level', 'Category', 'Duration'].map(f => (
                <button key={f} className="bg-white border border-gray-100 px-8 py-3.5 rounded-2xl font-bold text-[14px] text-gray-600 flex items-center gap-3 hover:bg-gray-50 transition-colors">
                  {f} <ChevronDown className="w-4 h-4 text-gray-300" />
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-8 py-3.5 font-bold text-[14px] text-gray-600 min-w-[240px] justify-between">
              Sort: Relevance <ChevronDown className="w-4 h-4 text-gray-300" />
            </div>
            <div className="flex bg-gray-50 p-1.5 rounded-2xl">
              <button onClick={() => setViewType('grid')} className={`p-2.5 rounded-xl transition-all ${viewType === 'grid' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400'}`}><LayoutGrid className="w-5 h-5" /></button>
              <button onClick={() => setViewType('list')} className={`p-2.5 rounded-xl transition-all ${viewType === 'list' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400'}`}><List className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFF9E1] rounded-[40px] p-16 space-y-10 border border-amber-100/50">
        <h3 className="text-[30px] font-black text-gray-900">Featured Programs</h3>
        <div className="grid grid-cols-3 gap-10">
          {featuredPrograms.map((prog, i) => (
            <div key={i} className="bg-white rounded-[40px] overflow-hidden border border-gray-100 flex flex-col group hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img src={prog.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={prog.title} />
              </div>
              <div className="p-10 flex-1 flex flex-col space-y-6">
                <h4 className="font-bold text-[20px] text-gray-900 group-hover:text-amber-500 transition-colors leading-snug">{prog.title}</h4>
                <div className="pt-8 mt-auto border-t border-gray-50 flex items-center justify-between">
                  <span className="block text-2xl font-black text-gray-900">{prog.price}</span>
                  <button onClick={() => setSelectedProgramId(prog.id)} className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all font-black px-8 py-3 rounded-2xl text-[13px]">Learn More →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-10">
        <h3 className="text-[30px] font-black text-gray-900">All Programs</h3>
        <div className="grid grid-cols-3 gap-10">
          {allPrograms.map((prog, i) => (
            <div key={i} className="bg-white rounded-[40px] overflow-hidden border border-gray-100 flex flex-col group hover:shadow-2xl hover:shadow-gray-100 transition-all duration-500">
              <div className="relative h-60 overflow-hidden">
                <img src={prog.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={prog.title} />
              </div>
              <div className="p-10 space-y-6 flex-1 flex flex-col">
                <h4 className="font-bold text-[18px] text-gray-900 leading-snug group-hover:text-amber-500 transition-colors">{prog.title}</h4>
                <div className="pt-8 mt-auto border-t border-gray-50 flex items-center justify-between">
                  <span className="text-2xl font-black text-gray-900">{prog.price}</span>
                  <button onClick={() => setSelectedProgramId(prog.id)} className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all font-black px-8 py-3 rounded-2xl text-[13px]">Quick Apply →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
