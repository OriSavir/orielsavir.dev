'use client';

import TypewriterText from '../animations/TypewriterText';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);
  
  const scrollIntoContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }
  
  const scrollIntoProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className={`text-center transition-all duration-1000 transform ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <TypewriterText
            texts={['ORIEL', 'SAVIR']}
            colors={['text-[var(--cyber-blue)] neon-blue', 'text-[var(--cyber-pink)] neon-pink']}
            typingSpeed={150}
            delayBetweenTexts={800}
          />
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Student | Software Engineer | Deep Learning Researcher
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            onClick={scrollIntoProjects}
            className="px-6 py-3 bg-transparent border-2 border-[var(--cyber-blue)] text-[var(--cyber-blue)] rounded-md hover:bg-[var(--cyber-blue)] hover:text-blue-500 hover:bg-opacity-20 transition-all duration-300 border-neon-blue"
          >
            View Projects
          </a>
          <a 
            onClick={scrollIntoContact}
            className="px-6 py-3 bg-transparent border-2 border-[var(--cyber-blue)] text-[var(--cyber-blue)] rounded-md hover:bg-[var(--cyber-blue)] hover:bg-opacity-20 hover:text-blue-500 transition-all duration-300 border-neon-blue"
          >
            Contact Me
          </a>
        </div>
        <div className="flex justify-center space-x-4 space-y-4 mt-4">
          <a 
            href="/files/oriel_savir_resume.pdf"
            className="px-6 py-3 bg-transparent border-2 border-[var(--cyber-pink)] text-[var(--cyber-pink)] rounded-md hover:bg-[var(--cyber-pink)] hover:bg-opacity-20 hover:text-white transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Hero;
