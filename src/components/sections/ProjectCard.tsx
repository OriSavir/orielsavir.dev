// src/components/sections/ProjectCard.tsx
import { useState } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  link: string | null;
  github?: string | null;
  featured: boolean;
  longDescription: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  link,
  github,
  featured
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="w-[320px] h-[525px] bg-[var(--cyber-dark)] rounded-lg overflow-hidden transition-all duration-500 transform hover:scale-[1.02] 
        border border-gray-800 hover:border-[var(--cyber-blue)] flex flex-col ring-2 ring-[var(--cyber-pink)] ring-opacity-50 
        hover:ring-opacity-100 hover:ring-[var(--cyber-blue)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    <div className="relative h-48 overflow-hidden flex-shrink-0">
      <img 
        src={image} 
        alt={title}
        className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        onError={(e) => {
          e.currentTarget.src = 'https://avatars1.githubusercontent.com/u/9919?v=4';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--cyber-dark)] to-transparent opacity-70"></div>
      
      {featured && (
        <div className="absolute top-2 right-2 bg-[var(--cyber-pink)] text-xs px-2 py-1 rounded-full text-white">
          Featured
        </div>
      )}
    </div>

    {/* Make sure this section has a fixed min height */}
    <div className="p-6 flex flex-col flex-grow min-h-[200px]">
      <h3 className="text-xl font-bold mb-2 text-[var(--cyber-blue)]">{title}</h3>
      
      <p className="text-gray-300 mb-4 flex-grow line-clamp-3 overflow-hidden">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.slice(0, 3).map((tag, index) => (
          <span 
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-[var(--cyber-darker)] text-[var(--cyber-yellow)]"
          >
            {tag}
          </span>
        ))}
        {tags.length > 3 && (
          <span className="text-xs px-2 py-1 rounded-full bg-[var(--cyber-darker)] text-gray-400">
            +{tags.length - 3} more
          </span>
        )}
      </div>
      
      <div className="flex space-x-3 mt-auto">
        {github && (
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-transparent border border-gray-600 text-gray-300 rounded hover:border-white transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  </div>
    );
};

export default ProjectCard;
