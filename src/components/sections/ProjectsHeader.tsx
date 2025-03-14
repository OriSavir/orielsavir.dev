// src/components/sections/ProjectsHeader.tsx
'use client';

import { useState, useEffect } from 'react';
import GlitchText from '../animations/GlitchText';

interface ProjectsHeaderProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({ activeFilter, setActiveFilter}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'quant', name: 'Quantitative Finance' },
    { id: 'science', name: 'Data Science' },
    { id: 'other', name: 'Other' }
  ];
  
  return (
    <div className="mb-16">
      <div className={`text-center transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <GlitchText 
            text="MY" 
            className="text-[var(--cyber-blue)] neon-blue" 
          />
          <span className="mx-2">|</span>
          <GlitchText 
            text="PROJECTS" 
            className="text-[var(--cyber-pink)] neon-pink" 
          />
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          Explore my portfolio of projects spanning a variety of categories, technologies, and usages. 
          These projects are a small selection of projects I worked on in my spare time, and I am constantly working on more.
          I may add a &quot;Current Projects&quot; section to this website in the future to showcase what I&apos;m currently working on, but for now, 
          I am only posting a selection of my work that has open-source code on GitHub.
          Let me know what you think!
        </p>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-[var(--cyber-blue)] bg-opacity-20 text-[var(--cyber-blue)] border border-[var(--cyber-blue)] text-blue-800'
                  : 'bg-[var(--cyber-darker)] text-gray-400 border border-gray-700 hover:border-gray-500'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="relative h-1 w-full max-w-3xl mx-auto mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--cyber-blue)] to-transparent animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProjectsHeader;
