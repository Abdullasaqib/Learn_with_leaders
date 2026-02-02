
import React, { useState, useEffect } from 'react';
import { Mail, ShieldCheck, HelpCircle, Headphones, Award, MessageSquare, Phone, ExternalLink, Inbox, Edit3, MessageCircle } from 'lucide-react';

interface VerificationProps {
  onVerify: () => void;
  onBackToLogin: () => void;
}

export const Verification: React.FC<VerificationProps> = ({ onVerify, onBackToLogin }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(53);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOtpChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

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
            Almost There!
          </h1>
          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            We've sent a verification code to your email. This helps us ensure your account is secure and that you receive important updates about your leadership journey.
          </p>
        </div>

        {/* Decorative elements - abstract circles */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-200/40 rounded-full blur-[100px] -mr-32 -mb-32"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-400/20 rounded-full -mr-20 -mb-20 opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] border-[40px] border-amber-400/10 rounded-full -mr-10 -mb-10"></div>
      </div>

      {/* Right Section - Verification Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">Verify your account</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We've sent a 6-digit verification code to<br />
              <span className="text-blue-600 font-medium">sarah.johnson@email.com</span>
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Enter verification code</label>
              <div className="flex justify-between gap-2 max-w-xs mx-auto">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-${idx}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, idx)}
                    className="w-12 h-14 border-2 border-gray-100 rounded-xl text-center text-xl font-bold focus:border-blue-500 focus:outline-none transition-all"
                  />
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-gray-400">
                Code expires in <span className="font-bold text-gray-700">{formatTime(timer)}</span>
              </p>
              <button className="text-xs font-bold text-gray-300 cursor-not-allowed">Resend code</button>
            </div>

            <button 
              onClick={onVerify}
              className="w-full bg-[#FFCC4D]/50 hover:bg-[#FFCC4D] text-gray-900 font-bold py-4 rounded-xl transition-all shadow-lg shadow-amber-500/5 active:scale-[0.98]"
            >
              Verify Now
            </button>
          </div>

          {/* Didn't receive code? */}
          <div className="space-y-3">
            <p className="text-xs text-gray-500">Didn't receive the code?</p>
            <div className="flex flex-col items-center gap-2">
              <button className="flex items-center gap-2 text-[11px] font-bold text-blue-600 hover:underline">
                <Inbox className="w-4 h-4" /> Check your spam folder
              </button>
              <button onClick={onBackToLogin} className="flex items-center gap-2 text-[11px] font-bold text-blue-600 hover:underline">
                <Edit3 className="w-4 h-4" /> Change email address
              </button>
            </div>
          </div>

          {/* WhatsApp Verification Box */}
          <div className="bg-[#F0FFF4] border border-[#DCFCE7] rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#25D366] shadow-sm">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-800">WhatsApp Verification</p>
                <p className="text-[11px] text-gray-500">Get code via WhatsApp instead</p>
              </div>
            </div>
            <button className="bg-[#25D366] hover:bg-[#128C7E] text-white text-[10px] font-bold px-4 py-2 rounded-lg transition-colors">
              Send via WhatsApp
            </button>
          </div>

          {/* Footer */}
          <div className="pt-8 text-center space-y-4">
            <p className="text-[11px] font-medium text-gray-400">Need help with verification?</p>
            <div className="flex items-center justify-center gap-6">
              <button className="flex items-center gap-1.5 text-[10px] text-gray-500 font-bold hover:text-gray-800">
                <ShieldCheck className="w-3.5 h-3.5" /> Support
              </button>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <button className="flex items-center gap-1.5 text-[10px] text-gray-500 font-bold hover:text-gray-800">
                <Phone className="w-3.5 h-3.5" /> Contact Us
              </button>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <button className="flex items-center gap-1.5 text-[10px] text-gray-500 font-bold hover:text-gray-800">
                <HelpCircle className="w-3.5 h-3.5" /> FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
