import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import {ProjectType} from '../../data/projects'

interface ProjectModalProps {
    project: ProjectType;
    onClose: () => void;
  }
  
  const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      document.body.style.overflow = 'hidden';
      
      const handleEsc = (_: KeyboardEvent) => {
        onClose();
      };
      window.addEventListener('keydown', handleEsc);
      
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleEsc);
      };
    }, [onClose]);

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }      
    };
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm" onClick={handleClickOutside}>
        <motion.div 
          className="relative bg-[var(--cyber-dark)] max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg border border-gray-700"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          ref = {modalRef}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--cyber-darker)] text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative h-64 md:h-80">
            <div className="absolute inset-0">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--cyber-dark)] to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-[var(--cyber-darker)] text-[var(--cyber-yellow)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[var(--cyber-blue)] mb-3">Project Overview</h3>
              <p className="text-gray-300">{project.longDescription}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-bold text-[var(--cyber-blue)] mb-3">Features</h3>
                <ul className="space-y-2 text-gray-300">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[var(--cyber-yellow)] mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[var(--cyber-blue)] mb-3">Technologies</h3>
                <ul className="space-y-2 text-gray-300">
                  {project.tags.map((tag, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[var(--cyber-yellow)] mr-2">•</span>
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {
                project.link &&
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[var(--cyber-blue)] bg-opacity-20 border border-[var(--cyber-blue)] text-white font-bold rounded hover:bg-opacity-30 transition-all duration-300"
                >
                  View Live Project
                </a>
              }
              
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-transparent border border-gray-600 text-gray-300 rounded hover:border-white transition-all"
                >
                  View Source Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

export default ProjectModal;