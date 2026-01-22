import React, { useState } from 'react';
import { Hotspot } from '../types';
import { HERO_IMAGE_URL } from '../constants';

interface FlowerMapProps {
  hotspots: Hotspot[];
  debugMode: boolean;
}

export const FlowerMap: React.FC<FlowerMapProps> = ({ hotspots, debugMode }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-5xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl animate-fade-in border border-white/20">
      {/* Background Image */}
      <img 
        src={HERO_IMAGE_URL} 
        alt="Digital Garden Map" 
        className="w-full h-full object-cover transition-transform duration-[20s] ease-linear hover:scale-105"
      />
      
      {/* Overlay to darken slightly for text contrast */}
      <div className="absolute inset-0 bg-stone-900/10 pointer-events-none" />

      {/* Hotspots */}
      {hotspots.map((hotspot) => (
        <div
          key={hotspot.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30"
          style={{ top: `${hotspot.y}%`, left: `${hotspot.x}%` }}
          onClick={() => setActiveId(activeId === hotspot.id ? null : hotspot.id)}
          onMouseEnter={() => setActiveId(hotspot.id)}
          onMouseLeave={() => setActiveId(null)}
        >
          {/* Pulse Effect */}
          <div className={`relative flex items-center justify-center w-8 h-8 md:w-12 md:h-12 transition-all duration-300 ${activeId === hotspot.id ? 'scale-110' : 'scale-100 hover:scale-110'}`}>
             <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping bg-white`}></span>
             <div className="relative inline-flex rounded-full h-3 w-3 md:h-4 md:w-4 bg-white shadow-lg border-2 border-nature-sage"></div>
          </div>

          {/* Tooltip Card */}
          <div 
            className={`
              absolute left-1/2 bottom-full mb-3 -translate-x-1/2 w-48 md:w-64 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-stone-100
              transition-all duration-300 origin-bottom
              ${activeId === hotspot.id ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'}
            `}
          >
            <h4 className="font-serif text-lg text-stone-900 mb-1">{hotspot.label}</h4>
            <p className="text-xs text-stone-500 leading-relaxed font-sans">{hotspot.description}</p>
            {/* Arrow */}
            <div className="absolute left-1/2 top-full -translate-x-1/2 -mt-2 border-8 border-transparent border-t-white/95 drop-shadow-sm"></div>
          </div>
          
          {/* Debug Label */}
          {debugMode && (
            <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] px-1 rounded">
              {hotspot.x}%, {hotspot.y}%
            </div>
          )}
        </div>
      ))}
    </div>
  );
};