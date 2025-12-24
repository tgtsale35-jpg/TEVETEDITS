
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="text-xl font-black gradient-text tracking-tighter">TEVET EDITS</span>
          <p className="text-sm text-gray-500 mt-2">© 2024 טבת - עריכת וידאו לעסקים. כל הזכויות שמורות.</p>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">אינסטגרם</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">טיקטוק</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">יוטיוב</a>
        </div>

        <div className="text-center md:text-left">
          <p className="text-xs text-gray-600">Built with ❤️ by Tevet AI Assistant</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
