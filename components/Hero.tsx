
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Abstract Background elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>

      <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-tight">
        הופכים את הוידאו שלך <br />
        <span className="gradient-text">למכונת מכירות</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
        אני טבת, עורך וידאו מומחה לעסקים. אני עוזר למותגים לצמוח ברשתות החברתיות דרך תוכן חד, מהיר וממיר.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="#contact" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-600/25"
        >
          דברו איתי עכשיו
        </a>
        <a 
          href="#portfolio" 
          className="glass hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full text-lg transition-all border border-white/20"
        >
          צפו בעבודות שלי
        </a>
      </div>

      <div className="mt-20 w-full max-w-5xl mx-auto rounded-2xl overflow-hidden glass p-2">
        <div className="aspect-video w-full bg-neutral-800 rounded-xl relative group">
          <img 
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=2000" 
            alt="Video Editing Workspace" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <a href="#portfolio" className="w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
            </a>
          </div>
          <div className="absolute bottom-6 right-6 text-right">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Showreel 2024</p>
            <p className="text-xl font-bold">TEVET EDITS Production</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
