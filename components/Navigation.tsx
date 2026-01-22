import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-4 flex justify-between items-center ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-stone-100/50 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <a href="#" className="text-xl font-serif italic font-bold text-stone-900 tracking-tight z-50">
        The Garden
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
              scrolled ? 'text-stone-600 hover:text-stone-900' : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile Menu Icon (Simple placeholder for functionality) */}
      <button className="md:hidden text-stone-800 p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      </button>
    </nav>
  );
};