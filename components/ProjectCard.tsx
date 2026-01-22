import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out">
      <div className="h-48 overflow-hidden bg-stone-200 relative">
        {project.image && (
            <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
        )}
        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300" />
      </div>
      
      <div className="p-8">
        <div className="flex gap-2 mb-4 flex-wrap">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-stone-100 text-stone-600 text-[10px] uppercase tracking-wider font-semibold rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-serif text-stone-900 mb-3 group-hover:text-nature-moss transition-colors">
          {project.title}
        </h3>
        
        <p className="text-stone-500 mb-6 leading-relaxed text-sm">
          {project.description}
        </p>

        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-stone-300 pb-1 hover:border-stone-900 hover:text-nature-moss transition-all"
        >
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1">
            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};