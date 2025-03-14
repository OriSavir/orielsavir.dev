'use client';

import { useEffect, useState } from 'react';
import FloatingImage from "./FloatingImage";

const Bio = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className={`transition-all duration-1000 transform ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
      }`}>
          <FloatingImage
            src="/images/profile.png"
            alt="Oriel Savir"
            width={500}
            height={400}
          />
      </div>
      
      <div className={`transition-all duration-1000 delay-300 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
      }`}>
        <h2 className="text-3xl font-bold mb-6 text-[var(--cyber-pink)] neon-pink">About Me</h2>
        
        <p className="text-gray-300 mb-4">
            Hello! My name is Oriel Savir, and this is my website. I'm a student at Johns Hopkins University studying CS & Applied Maths (Financial Mathematics).
            I'm a curious mind with a passion for technology, math, and innovation.
            Throughout my time in college, I've gained experience in software development, deep learning research, and open source tech.
            In addition, I love using my math skills to solve complex problems, especially in deep learning, data science, computational biology, and quantitative finance!
            Whether it's engineering complex software or pushing the boundaries of deep learning, I'm always eager to learn more and collaborate on exciting projects with passionate, talented people.
            Feel free to reach out, would love to chat!
        </p>

        
        <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
            <h3 className="text-[var(--cyber-blue)] font-bold mb-2">Skills</h3>
            <ul className="space-y-1 text-gray-300">
                <li>• Python, C++, C, TypeScript, JavaScript, Java</li>
                <li>• React, Next.js, Express</li>
                <li>• PostgreSQL, MySQL, Snowflake, Apache Spark</li>
                <li>• AWS (S3, Lambda, EMR), Databricks, Docker</li>
                <li>• PyTorch, NumPy, pandas, SciPy</li>
            </ul>
        </div>

          <div>
            <h3 className="text-[var(--cyber-blue)] font-bold mb-2">Interests</h3>
            <ul className="space-y-1 text-gray-300">
              <li>• Deep Learning </li>
              <li>• AI-enabled technology </li>
              <li>• Full-Stack Development </li>
              <li>• Open Source</li>
              <li>• Dev Tools </li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Bio;
