
import React from 'react';

const services = [
  {
    title: 'סרטוני Reels ו-TikTok',
    description: 'עריכה דינמית ששומרת על תשומת הלב מהשנייה הראשונה. כולל כתוביות מעוצבות, אפקטים קוליים וצבעים חיים.',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'עריכת YouTube מקיפה',
    description: 'הפיכת חומרי הגלם לסיפור מרתק. בניית קצב נכון, עריכת סאונד ועיצוב גרפי משלים.',
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    title: 'סרטוני תדמית ומכירה',
    description: 'בניית אמון אצל הלקוחות שלך דרך ויזואליה מקצועית ומושקעת שגורמת לעסק שלך להיראות כמו מותג גדול.',
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'עיצוב כתוביות וגרפיקה',
    description: 'כתוביות "Alex Hormozi style" שמושכות את העין ומשפרות את זמן הצפייה בסרטון ב-40%.',
    icon: (
      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-sm uppercase tracking-widest text-blue-500 font-bold mb-4">השירותים שלנו</h2>
        <h3 className="text-4xl md:text-5xl font-black mb-6">מה תקבלו ב-<span className="gradient-text">TGT EDITS</span>?</h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          אנחנו לא רק עורכים וידאו - אנחנו בונים אסטרטגיה חזותית שתגדיל את המכירות והחשיפה שלכם.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-10 rounded-3xl glass hover:bg-white/10 transition-colors border border-white/5 flex flex-col md:flex-row gap-8 items-start">
            <div className="p-4 bg-white/5 rounded-2xl">
              {service.icon}
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed text-lg">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
