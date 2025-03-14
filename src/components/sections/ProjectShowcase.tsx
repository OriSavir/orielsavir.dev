'use client';

import React, { useState, useMemo } from 'react';
import Slider from 'react-slick';
import ProjectCard from './ProjectCard';
import projects from '../../data/projects';
import { ProjectType } from '../../data/projects';
import ProjectModal from './ProjectModal'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const ProjectShowcase = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const featuredProjects = useMemo(
    () => projects.filter((project: ProjectType) => project.featured),
    []
  );

  const PrevArrow: React.FC<React.ComponentPropsWithoutRef<"button">> = ({ onClick }) => {
    return (
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--cyber-darker)] border border-[var(--cyber-blue)] text-[var(--cyber-blue)] hover:bg-[var(--cyber-blue)] hover:text-blue-800 hover:bg-opacity-20 transition-all duration-300 focus:outline-none -translate-x-5"
        onClick={onClick}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    );
  };

  const NextArrow: React.FC<React.ComponentPropsWithoutRef<"button">> = ({ onClick }) => {
    return (
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--cyber-darker)] border border-[var(--cyber-blue)] text-[var(--cyber-blue)] hover:bg-[var(--cyber-blue)] hover:text-blue-800 hover:bg-opacity-20 transition-all duration-300 focus:outline-none translate-x-5"
        onClick={onClick}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    appendDots: (dots: React.ReactNode[]) => (
      <div className="flex justify-center gap-6 mt-4" style={{ borderRadius: "10px", padding: "10px"}}>
        {dots}
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          activeSlide === i 
            ? 'bg-[var(--cyber-blue)] w-2 shadow-[0_0_8px_var(--cyber-blue)]' 
            : 'bg-gray-600 hover:bg-gray-400'
        }`}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-8">
      <div className="relative">
        <Slider {...settings} className="pb-12 px-3">
          {featuredProjects.map((project) => (
            <div key={project.id} className="px-3">
              <div onClick={() => setSelectedProject(project.id)} className="h-full" style={{ minHeight: "400px" }}>
                <ProjectCard {...project} image={project.image || '/images/default.jpg'} />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={projects.find(p => p.id === selectedProject)!} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
      
      <div className="mt-12 text-center">
        <a 
          href="/projects" 
          className="inline-block px-8 py-3 bg-transparent border-2 border-[var(--cyber-blue)] text-[var(--cyber-blue)] rounded-md hover:bg-[var(--cyber-blue)] hover:bg-opacity-20 hover:text-blue-500 transition-all duration-300 border-neon-blue"
        >
          View All Projects
        </a>
      </div>
    </div>
  );
};

export default ProjectShowcase;
