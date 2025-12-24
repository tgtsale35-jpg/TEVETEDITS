
import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div id="portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h2 className="text-sm uppercase tracking-widest text-blue-500 font-bold mb-4">תיק עבודות</h2>
        <h3 className="text-4xl md:text-5xl font-black">העבודות <span className="gradient-text">המובילות שלי</span></h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* YouTube Video Section */}
        <div className="flex flex-col gap-6">
          <div className="glass p-3 rounded-3xl overflow-hidden aspect-video shadow-2xl">
            <iframe 
              className="w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/zRoSb4A895M" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="px-2">
            <span className="text-blue-500 font-bold uppercase text-xs tracking-widest">YouTube Project</span>
            <h4 className="text-2xl font-bold mt-1">עריכת תוכן מקצועית ליוטיוב</h4>
            <p className="text-gray-400 mt-2">בניית קצב נכון, הוספת אפקטים ושיפור חוויית הצפייה למקסימום ריטנשן.</p>
          </div>
        </div>

        {/* Instagram Video Section */}
        <div className="flex flex-col gap-6">
          <div className="glass p-3 rounded-3xl overflow-hidden aspect-video relative group shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800" 
              alt="Instagram Project" 
              className="w-full h-full object-cover rounded-2xl opacity-60 group-hover:opacity-40 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <a 
                href="https://www.instagram.com/reel/DMlRdohtJbJ/?igsh=MWhtczNjaHM3MjY4eg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full shadow-xl transform group-hover:scale-110 transition-transform flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                צפו באינסטגרם
              </a>
            </div>
          </div>
          <div className="px-2">
            <span className="text-purple-500 font-bold uppercase text-xs tracking-widest">Instagram Reel</span>
            <h4 className="text-2xl font-bold mt-1">רילס ויראלי לעסקים</h4>
            <p className="text-gray-400 mt-2">עריכה קצבית ומניעה לפעולה שתופסת את הקהל מהשנייה הראשונה של הגלילה.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
