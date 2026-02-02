
import React, { useState } from 'react';

import {
  Edit3, Mail, Phone, Globe, Clock, Trophy, Plus, FileText,
  CheckCircle2, Star, Briefcase, GraduationCap, Users,
  BarChart, Zap, Share2, Printer, ChevronRight,
  Award, Heart, ShieldCheck, Trash2, Lock, Bell,
  Languages, Settings, Download, MoreVertical,
  Search, ExternalLink, Cpu, LayoutGrid, Palette, Leaf,
  FlaskConical, Code, Bot, PieChart, Sparkles, CloudUpload,
  ArrowRight, X, Calendar, Target as TargetIcon,
  ChevronDown,
  Upload,
  Wand2,
  Loader2
} from 'lucide-react';



const AddAchievementDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('Academic');
  const [isFeatured, setIsFeatured] = useState(false);
  const [isPublic, setIsPublic] = useState(true);
  const [title, setTitle] = useState('');
  const [organization, setOrganization] = useState('');
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateAIDescription = async () => {
    alert("AI features are disabled in this serverless version.");
  };

  if (!isOpen) return null;

  const categories = [
    { id: 'Academic', icon: <GraduationCap className="w-6 h-6" />, color: 'text-amber-600' },
    { id: 'Leadership', icon: <Briefcase className="w-6 h-6" />, color: 'text-blue-600' },
    { id: 'Project', icon: <TargetIcon className="w-6 h-6" />, color: 'text-purple-600' },
    { id: 'Competition', icon: <Award className="w-6 h-6" />, color: 'text-red-600' },
    { id: 'Service', icon: <Users className="w-6 h-6" />, color: 'text-green-600' },
    { id: 'Certificate', icon: <FileText className="w-6 h-6" />, color: 'text-teal-600' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose} />
      <div className="relative w-[500px] bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500 overflow-hidden">
        <div className="p-8 border-b border-gray-100 flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-black">Add Achievement</h2>
            <p className="text-sm font-medium text-gray-400">Showcase your success story</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-black transition-all"><X className="w-5 h-5" /></button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-10 pb-32">
          <div className="space-y-6">
            <h3 className="text-base font-black text-black">1. Choose Category</h3>
            <div className="grid grid-cols-3 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 ${selectedCategory === cat.id ? 'bg-amber-50 border-amber-400 shadow-md' : 'bg-white border-gray-100'
                    }`}
                >
                  <div className={`${cat.color}`}>{cat.icon}</div>
                  <span className={`text-[12px] font-black ${selectedCategory === cat.id ? 'text-black' : 'text-gray-400'}`}>{cat.id}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-base font-black text-black">2. Achievement Details</h3>
            <div className="space-y-4">
              <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Achievement Title" className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 text-black font-medium focus:border-amber-400 outline-none" />
              <input value={organization} onChange={(e) => setOrganization(e.target.value)} type="text" placeholder="Issuing Organization" className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 text-black font-medium focus:border-amber-400 outline-none" />
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe your achievement..." className="w-full bg-gray-50 border border-gray-100 rounded-[24px] py-4 px-6 text-black font-medium h-32 resize-none outline-none" />
            </div>
          </div>


        </div>

        <div className="p-8 border-t border-gray-100 bg-white absolute bottom-0 left-0 right-0 z-20 flex gap-4">
          <button onClick={onClose} className="flex-1 bg-white border-2 border-gray-100 text-black font-black py-4 rounded-2xl text-[13px]">Cancel</button>
          <button className="flex-[2] bg-[#FFCC4D] hover:bg-[#FFB800] text-black font-black py-4 rounded-2xl text-[13px] shadow-xl">Add Achievement</button>
        </div>
      </div>
    </div>
  );
};

export const Profile: React.FC = () => {
  const [isAchievementDrawerOpen, setIsAchievementDrawerOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto flex gap-8 pb-20 animate-in fade-in duration-700">
      <AddAchievementDrawer isOpen={isAchievementDrawerOpen} onClose={() => setIsAchievementDrawerOpen(false)} />
      <div className="flex-1 space-y-8">
        <div className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-sm space-y-8 text-black">
          <div className="flex justify-between items-center"><h2 className="text-xl font-bold">Personal Information</h2><button className="text-blue-600 font-bold text-[13px] hover:bg-blue-50 px-4 py-2 rounded-xl transition-all"><Edit3 className="w-4 h-4 mr-2 inline" />Edit</button></div>
          <div className="flex gap-10">
            <div className="relative"><img src="https://picsum.photos/id/64/200/200" className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl" alt="Mitchell" /></div>
            <div className="flex-1 grid grid-cols-2 gap-y-6">
              <div className="space-y-1"><p className="text-[11px] font-black text-gray-300 uppercase tracking-widest">Full Name</p><p className="text-[15px] font-bold">Sarah Mitchell</p></div>
              <div className="space-y-1"><p className="text-[11px] font-black text-gray-300 uppercase tracking-widest">Email</p><p className="text-[15px] font-bold text-blue-600">sarah.mitchell@email.com</p></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-sm space-y-10">
          <div className="flex justify-between items-center"><h2 className="text-xl font-bold text-black">Achievements & Honors</h2><button onClick={() => setIsAchievementDrawerOpen(true)} className="bg-[#FFCC4D] text-black font-black px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-all"><Plus className="w-4 h-4" />Add Achievement</button></div>
          <div className="grid grid-cols-3 gap-6">
            {['Academic', 'Leadership', 'Project'].map(cat => (
              <div key={cat} className="bg-gray-50 border border-gray-100 rounded-[32px] p-6 flex flex-col items-center text-center space-y-4 group hover:shadow-xl transition-all">
                <div className="text-3xl">🏆</div>
                <h5 className="font-bold text-black">{cat}</h5>
                <button onClick={() => setIsAchievementDrawerOpen(true)} className="bg-white text-black font-black py-2.5 px-6 rounded-xl text-[11px] shadow-sm border border-gray-100 hover:border-amber-400">Add</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
