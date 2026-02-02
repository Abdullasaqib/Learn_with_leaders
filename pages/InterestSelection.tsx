
import React, { useState } from 'react';
import { 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  FlaskConical, 
  Code, 
  Dna, 
  Sun, 
  Database, 
  Shield, 
  Rocket, 
  Cpu, 
  Bot,
  Briefcase,
  Lightbulb,
  BarChart,
  PieChart,
  Layers,
  Users,
  Wallet,
  Truck,
  Monitor,
  Palette,
  PenTool,
  Camera,
  Video,
  Smartphone,
  Film,
  Music,
  Pen,
  Shirt,
  Globe,
  Leaf,
  Scale,
  HeartPulse,
  GraduationCap,
  Heart,
  Handshake,
  Brain
} from 'lucide-react';

interface Interest {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface Category {
  title: string;
  description: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  interests: Interest[];
}

const categories: Category[] = [
  {
    title: 'STEM & Innovation',
    description: 'Technology, Science, Engineering, and Mathematics',
    icon: FlaskConical,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    interests: [
      { id: 'soft-dev', label: 'Software Development', icon: Code },
      { id: 'biotech', label: 'Biotechnology', icon: Dna },
      { id: 'renewable', label: 'Renewable Energy', icon: Sun },
      { id: 'data-sci', label: 'Data Science', icon: Database },
      { id: 'cyber', label: 'Cybersecurity', icon: Shield },
      { id: 'space', label: 'Space Exploration', icon: Rocket },
      { id: 'quantum', label: 'Quantum Computing', icon: Cpu },
      { id: 'ai', label: 'Artificial Intelligence', icon: Bot },
    ]
  },
  {
    title: 'Business & Leadership',
    description: 'Entrepreneurship, Management, and Strategic Thinking',
    icon: Briefcase,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    interests: [
      { id: 'entre', label: 'Entrepreneurship', icon: Lightbulb },
      { id: 'mark', label: 'Marketing', icon: BarChart },
      { id: 'fin', label: 'Finance', icon: PieChart },
      { id: 'proj-mg', label: 'Project Management', icon: Layers },
      { id: 'cons', label: 'Consulting', icon: Users },
      { id: 'inv', label: 'Investment', icon: Wallet },
      { id: 'supp', label: 'Supply Chain', icon: Truck },
      { id: 'dig-trans', label: 'Digital Transformation', icon: Monitor },
    ]
  },
  {
    title: 'Creative Arts & Design',
    description: 'Visual Arts, Media, and Creative Expression',
    icon: Palette,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    interests: [
      { id: 'graph', label: 'Graphic Design', icon: PenTool },
      { id: 'photo', label: 'Photography', icon: Camera },
      { id: 'video', label: 'Video Production', icon: Video },
      { id: 'uiux', label: 'UI/UX Design', icon: Smartphone },
      { id: 'anim', label: 'Animation', icon: Film },
      { id: 'music', label: 'Music Production', icon: Music },
      { id: 'writ', label: 'Creative Writing', icon: Pen },
      { id: 'fash', label: 'Fashion Design', icon: Shirt },
    ]
  },
  {
    title: 'Social Impact & Sustainability',
    description: 'Making a difference in communities and the environment',
    icon: Globe,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    interests: [
      { id: 'env', label: 'Environmental Conservation', icon: Leaf },
      { id: 'soc-jus', label: 'Social Justice', icon: Scale },
      { id: 'pub-heal', label: 'Public Health', icon: HeartPulse },
      { id: 'edu-ref', label: 'Education Reform', icon: GraduationCap },
      { id: 'comm-dev', label: 'Community Development', icon: Users },
      { id: 'pov-all', label: 'Poverty Alleviation', icon: Heart },
      { id: 'hum-rig', label: 'Human Rights', icon: Handshake },
      { id: 'ment-heal', label: 'Mental Health', icon: Brain },
    ]
  }
];

interface InterestSelectionProps {
  onComplete: () => void;
}

export const InterestSelection: React.FC<InterestSelectionProps> = ({ onComplete }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleInterest = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFBEB] via-white to-[#FFFBEB] p-8 lg:p-12 font-sans relative">
      <div className="max-w-6xl mx-auto space-y-12 pb-32">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-amber-400 p-2 rounded-lg">
            <Award className="text-white w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-[10px] block leading-none text-gray-800 tracking-tight">LEARN WITH</span>
            <span className="font-bold text-base block text-gray-900 leading-none">LEADERS</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">What sparks your curiosity?</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose the areas that excite you most. We'll use these to personalize your learning journey and connect you with the right mentors.
          </p>
          <div className="inline-flex items-center gap-2 bg-white border border-amber-100 px-4 py-2 rounded-full text-xs font-medium text-amber-700 shadow-sm">
            <span>💡 Select 3-5 interests that best represent your passions</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-6">
          {categories.map((category) => (
            <div key={category.title} className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className={`${category.iconBg} ${category.iconColor} p-3 rounded-xl`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
                  <p className="text-xs text-gray-400">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.interests.map((interest) => (
                  <button
                    key={interest.id}
                    onClick={() => toggleInterest(interest.id)}
                    className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all group ${
                      selected.includes(interest.id)
                        ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-400/20'
                        : 'bg-white border-gray-100 hover:border-amber-200'
                    }`}
                  >
                    <interest.icon className={`w-4 h-4 ${
                      selected.includes(interest.id) ? 'text-amber-500' : 'text-gray-400 group-hover:text-amber-400'
                    }`} />
                    <span className={`text-[13px] font-medium ${
                      selected.includes(interest.id) ? 'text-amber-900' : 'text-gray-600'
                    }`}>
                      {interest.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-8 flex justify-center z-50 pointer-events-none">
        <div className="bg-white/80 backdrop-blur-md border border-gray-100 px-8 py-3 rounded-full shadow-xl flex items-center gap-8 pointer-events-auto">
          <button className="flex items-center gap-2 text-xs font-bold text-gray-300 cursor-not-allowed">
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          
          <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            1 of 4
          </div>

          <button 
            onClick={onComplete}
            disabled={selected.length < 3}
            className={`flex items-center gap-2 text-xs font-bold px-8 py-2.5 rounded-lg transition-all ${
              selected.length >= 3 
                ? 'bg-amber-400 hover:bg-amber-500 text-gray-900' 
                : 'bg-amber-400/50 text-gray-900/50 cursor-not-allowed'
            }`}
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Background Decorative Curves */}
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] border border-amber-200/20 rounded-full -ml-32 -mb-32 -z-10 pointer-events-none"></div>
    </div>
  );
};
