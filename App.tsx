
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <section id="portfolio" className="py-20 bg-neutral-900">
          <Portfolio />
        </section>
        <section id="services" className="py-20">
          <Services />
        </section>
        <section id="contact" className="py-20 bg-neutral-900">
          <Contact />
        </section>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
