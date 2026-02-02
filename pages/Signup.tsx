
import React, { useState } from 'react';
import { 
  Mail, 
  Lock, 
  User, 
  ChevronDown, 
  Eye, 
  Award, 
  ShieldCheck, 
  LockKeyhole, 
  UserCheck 
} from 'lucide-react';

interface SignupProps {
  onSignup: () => void;
  onBackToLogin: () => void;
}

export const Signup: React.FC<SignupProps> = ({ onSignup, onBackToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex bg-white font-sans overflow-hidden">
      {/* Left Section - Hero/Branding */}
      <div className="hidden lg:flex w-[48%] relative bg-[#FFF9E5] p-16 flex-col justify-between m-4 rounded-[32px] overflow-hidden">
        {/* Logo */}
        <div className="flex items-center gap-2 relative z-20">
          <div className="text-amber-500">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 30C40 30 60 40 80 20C75 45 60 60 20 60C30 50 25 35 20 30Z" fill="currentColor"/>
              <path d="M25 65C45 65 65 75 85 55C80 80 65 95 25 95C35 85 30 70 25 65Z" fill="currentColor" opacity="0.5"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[10px] text-gray-800 tracking-tight leading-none">LEARN WITH</span>
            <span className="font-black text-xl text-gray-900 leading-none">LEADERS</span>
          </div>
        </div>

        {/* Hero Content - Positioned at the bottom like the image */}
        <div className="relative z-20 mb-8 max-w-sm">
          <h1 className="text-[44px] font-bold text-gray-900 leading-[1.1] mb-6">
            Welcome Future Leader
          </h1>
          <p className="text-gray-700 text-lg mb-8 font-medium leading-relaxed opacity-80">
            Let's build your global profile and connect you with the world's most inspiring leaders.
          </p>

          {/* Social Proof */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[64, 65, 66, 67].map((id) => (
                <img 
                  key={id}
                  src={`https://picsum.photos/id/${id}/100/100`} 
                  alt="Student" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="text-[12px] text-gray-600 leading-tight">
              <span className="font-bold text-gray-800">Join 5,000+ students</span><br />
              building their future today
            </div>
          </div>
        </div>

        {/* Decorative elements - Arcs from the image */}
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] border border-amber-400/10 rounded-full -mr-64 -mb-64 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] border border-amber-400/20 rounded-full -mr-32 -mb-32 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-amber-200/40 to-transparent blur-3xl rounded-full -mr-20 -mb-20 pointer-events-none"></div>
      </div>

      {/* Right Section - Signup Form */}
      <div className="w-full lg:w-[52%] flex flex-col items-center justify-start p-8 md:p-12 overflow-y-auto custom-scrollbar">
        <div className="w-full max-w-md space-y-7 pt-12 pb-16">
          <div className="text-center space-y-2">
            <h2 className="text-[32px] font-bold text-gray-900">Create Your Account</h2>
            <p className="text-gray-500 text-sm font-medium opacity-80">Welcome future leader — let's build your global profile</p>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors text-[13px] font-medium text-gray-700 shadow-sm">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-4 h-4" alt="Google" />
              Sign up with Google
            </button>
            <button className="flex items-center justify-center gap-3 py-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors text-[13px] font-medium text-gray-700 shadow-sm">
              <svg className="w-4 h-4" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              Sign up with Apple
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-[11px] uppercase tracking-[0.1em]">
              <span className="bg-white px-4 text-gray-400 font-medium">or create account with email</span>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onSignup(); }}>
            <div className="space-y-2">
              <label className="text-[13px] font-semibold text-gray-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-300" />
                <input 
                  type="text" 
                  placeholder="Enter your full name" 
                  className="w-full border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-[14px] focus:outline-none focus:ring-4 focus:ring-amber-500/5 focus:border-amber-400 transition-all placeholder:text-gray-300"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-semibold text-gray-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-300" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-[14px] focus:outline-none focus:ring-4 focus:ring-amber-500/5 focus:border-amber-400 transition-all placeholder:text-gray-300"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-semibold text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-300" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Create a strong password" 
                  className="w-full border border-gray-200 rounded-xl py-3.5 pl-12 pr-12 text-[14px] focus:outline-none focus:ring-4 focus:ring-amber-500/5 focus:border-amber-400 transition-all placeholder:text-gray-300"
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Eye className="w-[18px] h-[18px]" />
                </button>
              </div>
              <div className="flex gap-1.5 pt-1">
                <div className="h-1 flex-1 bg-gray-100 rounded-full"></div>
                <div className="h-1 flex-1 bg-gray-100 rounded-full"></div>
                <div className="h-1 flex-1 bg-gray-100 rounded-full"></div>
                <div className="h-1 flex-1 bg-gray-100 rounded-full"></div>
              </div>
              <p className="text-[11px] text-gray-400 font-medium">Password strength: <span className="text-gray-600">Weak</span></p>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-semibold text-gray-700">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-300" />
                <input 
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password" 
                  className="w-full border border-gray-200 rounded-xl py-3.5 pl-12 pr-12 text-[14px] focus:outline-none focus:ring-4 focus:ring-amber-500/5 focus:border-amber-400 transition-all placeholder:text-gray-300"
                  required
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Eye className="w-[18px] h-[18px]" />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-semibold text-gray-700">Country</label>
              <div className="relative">
                <select className="w-full appearance-none border border-gray-200 rounded-xl py-3.5 px-4 text-[14px] focus:outline-none focus:ring-4 focus:ring-amber-500/5 focus:border-amber-400 bg-white transition-all text-gray-500 font-medium cursor-pointer">
                  <option>Select your country</option>
                  <option>United States</option>
                  <option>India</option>
                  <option>United Kingdom</option>
                  <option>United Arab Emirates</option>
                  <option>Singapore</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <label className="flex items-start gap-4 cursor-pointer group">
                <input type="checkbox" className="mt-1 w-[18px] h-[18px] rounded border-gray-200 text-amber-500 focus:ring-amber-500 cursor-pointer" />
                <div className="space-y-1">
                  <p className="text-[13px] font-bold text-gray-800">I'm 13–18 years old</p>
                  <p className="text-[11px] text-gray-500 leading-tight">This program is designed specifically for high school students</p>
                </div>
              </label>
              <label className="flex items-center gap-4 cursor-pointer group">
                <input type="checkbox" className="w-[18px] h-[18px] rounded border-gray-200 text-amber-500 focus:ring-amber-500 cursor-pointer" />
                <p className="text-[13px] text-gray-500 font-medium">
                  I agree to the <button className="text-blue-600 hover:underline font-bold">Terms of Service</button> and <button className="text-blue-600 hover:underline font-bold">Privacy Policy</button>
                </p>
              </label>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#FFCC4D] hover:bg-[#FFB800] text-gray-900 font-bold py-4 rounded-xl shadow-xl shadow-amber-500/20 transition-all transform active:scale-[0.98] mt-6"
            >
              Create Account
            </button>
          </form>

          {/* Bottom links */}
          <div className="text-center pt-2 pb-8">
            <div className="text-[14px]">
              <span className="text-gray-500 font-medium">Already have an account?</span>{' '}
              <button onClick={onBackToLogin} className="font-bold text-blue-600 hover:underline">Sign in →</button>
            </div>

            <div className="h-px w-full bg-gray-50 my-8"></div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <LockKeyhole className="w-3.5 h-3.5 text-green-500" />
                256-bit SSL Encrypted
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                GDPR Compliant
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-3.5 h-3.5 text-purple-500" />
                Privacy Protected
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
