
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 glass top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          <div className="flex-shrink-0">
            <span className="text-2xl font-black gradient-text tracking-tighter">TEVET EDITS</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
