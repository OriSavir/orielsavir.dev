'use client';

import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { motion } from 'framer-motion';
import projects from '../../data/projects';

interface ProjectsGridProps {
  filter: string;
}

const ProjectsGrid:  React.FC<ProjectsGridProps> = ({ filter }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };
  
  return (
    <div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <div 
              onClick={() => setSelectedProject(project.id)}
              className="cursor-pointer"
            >
              <ProjectCard {...project} />
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <h3 className="text-2xl text-gray-400">No public projects found in this category right now :( But I&apos;m probably on some!</h3>
        </div>
      )}
      
      {selectedProject && (
        <ProjectModal 
          project={projects.find(p => p.id === selectedProject)!} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default ProjectsGrid;

