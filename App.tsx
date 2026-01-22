import React, { useState, useEffect } from 'react';
import { FlowerMap } from './components/FlowerMap';
import { Navigation } from './components/Navigation';
import { FLOWER_HOTSPOTS } from './constants';
import { fetchWelcomeMessage } from './services/geminiService';

const App: React.FC = () => {
  const [debugMode, setDebugMode] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState<string>('');
  const [loadingMessage, setLoadingMessage] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      const msg = await fetchWelcomeMessage();
      if (isMounted) {
        setWelcomeMessage(msg);
        setLoadingMessage(false);
      }
    };
    loadData();
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="w-full min-h-screen font-sans text-stone-800 bg-stone-50 selection:bg-stone-200">
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 md:px-6">
        
        {/* Header Text */}
        <div className="text-center mb-12 z-10 max-w-2xl mx-auto animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6 tracking-tight leading-tight">
              The Garden
            </h1>
            <div className="h-8 flex items-center justify-center">
              {loadingMessage ? (
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce"></div>
                  </div>
              ) : (
                  <p className="text-stone-500 font-serif italic text-xl md:text-2xl animate-fade-in px-4 border-l-2 border-stone-200 pl-4">
                    "{welcomeMessage}"
                  </p>
              )}
            </div>
        </div>

        {/* Map Container */}
        <div className="w-full flex justify-center items-center z-10 px-2 md:px-8">
           <FlowerMap hotspots={FLOWER_HOTSPOTS} debugMode={debugMode} />
        </div>
        
        {/* Debug Toggle - Subtle */}
        <div className="mt-8 flex justify-center z-10">
           <button
              onClick={() => setDebugMode(!debugMode)}
              className="text-[10px] uppercase tracking-[0.2em] text-stone-400 hover:text-stone-800 transition-colors"
            >
              {debugMode ? 'Hide Coordinates' : 'Explore Map'}
            </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-stone-400">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
           </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-white relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-nature-blush/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
               <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Cultivating <br/><span className="italic text-nature-sage">Digital Experiences</span></h2>
               <div className="w-16 h-1 bg-stone-800 mb-8"></div>
            </div>
            <div className="w-full md:w-1/2 space-y-6 text-stone-600 leading-loose text-lg font-light">
              <p>
                Welcome to my digital garden. This space is a curated collection of my creative journey, where code meets design and logic intertwines with art.
              </p>
              <p>
                I approach development like gardening—requiring patience, structure, and a touch of creativity to help ideas flourish into robust applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-stone-50 border-t border-stone-200 py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-stone-900 font-serif italic text-lg mb-4">Ashely Shen</p>
          <p className="text-stone-400 text-xs font-sans tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} The Garden. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;