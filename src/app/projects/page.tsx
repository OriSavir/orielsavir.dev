'use client'
import ProjectsGrid from '../../components/sections/ProjectsGrid';
import ProjectsHeader from '../../components/sections/ProjectsHeader';
import { useState } from 'react';

export default function ProjectsPage() {

  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsHeader activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <ProjectsGrid filter = {activeFilter} />
      </div>
    </div>
  );
}
