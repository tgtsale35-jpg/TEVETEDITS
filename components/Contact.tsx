
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("תודה! ההודעה נשלחה בהצלחה. נחזור אליך בקרוב.");
  };

  return (
    <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm uppercase tracking-widest text-blue-500 font-bold mb-4">צרו קשר</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-8">מוכנים לקחת את העסק <br /><span className="gradient-text">לשלב הבא?</span></h3>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            אני זמין לשיחה מהירה בווטסאפ. בואו נבין איך אני יכול לעזור לכם להביא יותר לקוחות דרך וידאו.
          </p>
          
          <div className="space-y-6">
            <a href="https://wa.me/972548970894" target="_blank" rel="noreferrer" className="flex items-center gap-4 glass p-6 rounded-2xl hover:bg-white/10 transition-colors w-fit">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </div>
              <div>
                <span className="block text-sm text-gray-400">ווטסאפ (טבת)</span>
                <span className="text-xl font-bold">054-897-0894</span>
              </div>
            </a>
          </div>
        </div>

        <div className="glass p-10 rounded-3xl border border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">שם מלא</label>
              <input 
                type="text" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="ישראל ישראלי"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">טלפון ליצירת קשר</label>
              <input 
                type="tel" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="05X-XXXXXXX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">ההודעה שלך</label>
              <textarea 
                rows={4}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="ספר לי קצת על הפרויקט שלך..."
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-white text-black font-black py-4 rounded-xl text-lg hover:bg-gray-200 transition-colors"
            >
              שלח הודעה
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
