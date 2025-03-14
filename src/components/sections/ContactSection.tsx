'use client';

import ContactForm from './ContactForm';
import { useState, useEffect } from 'react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className={`transition-all duration-1000 transform ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
      }`}>
        <h3 className="text-2xl font-bold mb-6 text-[var(--cyber-blue)] neon-blue">Let's Connect</h3>
        
        <p className="text-gray-300 mb-6">
          I'm always open to discussing new projects, ideas, or opportunities. Feel free to reach out here or through my socials!
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-[var(--cyber-blue)] bg-opacity-20 flex items-center justify-center mr-4">
            </div>
            <div>
              <p className="text-gray-400 text-sm">Personal Email</p>
              <a href="mailto:orisavir@gmail.com" className="text-[var(--cyber-blue)] hover:underline">
                orisavir at gmail dot com
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-[var(--cyber-blue)] bg-opacity-20 flex items-center justify-center mr-4">
            </div>
            <div>
              <p className="text-gray-400 text-sm">School Email</p>
              <a href="mailto:osavir1@jhu.edu" className="text-[var(--cyber-blue)] hover:underline">
                osavir1 at jhu dot edu
              </a>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-[var(--cyber-blue)] bg-opacity-20 flex items-center justify-center mr-4">
            </div>
            <div>
              <p className="text-gray-400 text-sm">Location</p>
              <p className="text-white">New York, NY | Baltimore, MD </p>
            </div>
          </div>
          
        </div>
        
        <div className="flex space-x-4">
          <a 
            href="https://github.com/OriSavir" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[var(--cyber-darker)] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[var(--cyber-blue)] hover:border-[var(--cyber-blue)] transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/oriel-savir/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[var(--cyber-darker)] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[var(--cyber-blue)] hover:border-[var(--cyber-blue)] transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a 
            href="https://devpost.com/OriSavir" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[var(--cyber-darker)] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[var(--cyber-blue)] hover:border-[var(--cyber-blue)] transition-all duration-300"
          >
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div className={`transition-all duration-1000 delay-300 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
      }`}>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
