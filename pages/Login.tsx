
import React, { useState } from 'react';
import { Mail, Lock, Eye, ArrowRight, Award } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
  onForgotPassword: () => void;
  onSignup: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin, onForgotPassword, onSignup }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex bg-white font-sans">
      {/* Left Section - Hero/Branding */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-[#FFF9E5] p-16 flex-col justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 relative z-10">
          <div className="bg-amber-400 p-2 rounded-lg">
            <Award className="text-white w-6 h-6" />
          </div>
          <div>
            <span className="font-bold text-sm block leading-none text-gray-800 tracking-tight">LEARN WITH</span>
            <span className="font-bold text-xl block text-gray-900 leading-none">LEADERS</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-md">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Welcome to Your Leadership Journey
          </h1>
          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            Connect with industry leaders, develop essential skills, and shape your future with personalized mentorship programs.
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
            <div className="text-xs text-gray-500 leading-tight">
              <span className="font-semibold text-gray-800">Join thousands of students</span><br />
              already transforming their futures
            </div>
          </div>
        </div>

        {/* Decorative elements to match the image's abstract curves */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-200/40 rounded-full blur-[100px] -mr-32 -mb-32"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-400/20 rounded-full -mr-20 -mb-20"></div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-500 text-sm">Sign in to continue your leadership journey</p>
          </div>

          {/* Social Logins */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
              <svg className="w-5 h-5" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              Continue with Apple
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-gray-400">or sign in with email</span>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your password" 
                  className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-11 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition-all"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500 cursor-pointer" />
                <span className="text-xs text-gray-500 group-hover:text-gray-700">Remember me</span>
              </label>
              <button 
                type="button" 
                onClick={onForgotPassword}
                className="text-xs font-semibold text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#FFCC4D] hover:bg-[#FFB800] text-gray-900 font-bold py-4 rounded-xl shadow-lg shadow-amber-500/10 transition-all transform active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>

          {/* Bottom links */}
          <div className="text-center space-y-8">
            <div className="text-sm">
              <span className="text-gray-500">New here?</span>{' '}
              <button onClick={onSignup} className="font-semibold text-blue-600 hover:underline">Create your account →</button>
            </div>

            <div className="flex items-center justify-center gap-6 text-[10px] text-gray-400 uppercase tracking-widest font-medium">
              <button className="hover:text-gray-600">Privacy Policy</button>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <button className="hover:text-gray-600">Terms of Service</button>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <button className="hover:text-gray-600">Support</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
