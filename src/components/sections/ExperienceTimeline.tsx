'use client';

import { useState, useEffect } from 'react';

// Sample experience data
const experiences = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Capital One",
    period: "May 2024 – Aug 2024",
    description: "Developed a Python SDK with a programmatic API for feature store microservices, enabling ML and big data teams to create, manage, and query feature stores at scale. Implemented Capital One’s first feature store within the credit decisioning data pipeline. Developed a modular Snowflake API interfacing on AWS EMR and Databricks",
    skills: ["Python", "SDK Development", "GitHub Actions", "Distributed Computing", "Snowflake", "AWS EMR", "DynamoDB", "DuckDB", "Apache Spark", "Docker", "Polars", "Delta Lake"]
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    company: "JHU COLLAB",
    period: "Jun 2023 – Dec 2023",
    description: "Developed and deployed a full-stack web application in Next.js (TypeScript) for extracting tables from unstructured documents, integrating a multi-branch CNN with 98% accuracy. Built a RESTful API with serverless endpoints to integrate with AWS S3 and AWS SageMaker, supporting 1000 concurrent tasks and decreasing inference time by 40%.",
    skills: ["TypeScript", "Next.js", "AWS S3", "AWS SageMaker", "PyTorch", "Tailwind CSS"]
  },
  {
    id: 3,
    title: "Deep Learning Researcher",
    company: "JHU Department of Computer Science",
    period: "Dec 2023 – Present",
    description: "Author and researcher on Normalization-Equivariant Learned Proximal Networks, a novel architecture for inverse problems with state-of-the-art noise signal robustness. Implemented CNNs using PyTorch, achieving an over 100% robustness increase on benchmarks.",
    skills: ["Python", "PyTorch", "Mathematics", "CNNs", "Deep Learning", "Optimization", "Neural Networks"]
  },
  {
    id: 4,
    title: "Senior Teaching Assistant, Deep Learning (CS 482/682)",
    company: "Johns Hopkins University",
    period: "Jan 2025 – Present",
    description: "Support 150+ students in a graduate-level deep learning course covering supervised and unsupervised learning, neural architectures, optimization, and novel applications.",
    skills: ["Teaching", "Deep Learning", "Neural Networks", "Optimization"]
  }, 
  {
    id: 5,
    title: "Computational Biophysics Research Assistant",
    company: "JHU Department of Biophysics",
    period: "Apr 2023 – Dec 2023",
    description: "Built computational models involving stochastic reaction-diffusion continuum models of biological systems using Python. Developed C++ simulations to study the impact of cargo binding on clathrin complex longevity.",
    skills: ["Python", "C++", "NumPy", "SciPy", "GNU Scientific Library", "Matplotlib", "Differential Calculus"]
  },
  {
    id: 6,
    title: "Software Engineer",
    company: "Delineo Disease Modeling Group",
    period: "Jan 2022 – Oct 2022",
    description: "Led a development team modeling disease spread mechanisms using Python and Next.js. Developed machine learning modules integrating the SynthPops library to simulate social contact networks across five major cities. Added support for MongoDB to store simulation results, built a frontend to display results interactively, allowing for deeper data analysis insights.",
    skills: ["Python", "Next.js", "TensorFlow", "MongoDB", "PyMongo", "SynthPops", "Data Visualization"]
  }
];

const ExperienceTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-20 w-1 bg-gray-700 transform md:translate-x-[-50%]"></div>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={exp.id}
            className={`relative transition-all duration-1000 transform ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Timeline dot */}
            <div className="absolute left-[-8px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-[var(--cyber-pink)] md:transform md:translate-x-[-50%] z-10"></div>
            
            <div className={`md:w-1/2 ${
              index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'
            }`}>
              <div className="bg-[var(--cyber-dark)] p-6 rounded-lg border border-gray-700 hover:border-[var(--cyber-blue)] transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--cyber-blue)]">{exp.title}</h3>
                    <p className="text-[var(--cyber-pink)]">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm bg-[var(--cyber-darker)] px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-[var(--cyber-darker)] text-[var(--cyber-yellow)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center relative z-10">
        <a 
          href="/files/oriel_savir_resume.pdf" 
          target="_blank"
          className="inline-block px-8 py-3 bg-transparent border-2 border-[var(--cyber-pink)] text-[var(--cyber-pink)] rounded-md hover:bg-[var(--cyber-pink)] hover:bg-opacity-20 hover:text-white transition-all duration-300"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
