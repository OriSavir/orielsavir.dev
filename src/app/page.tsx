// src/app/page.tsx
import Hero from '../components/sections/Hero';
import Bio from '../components/sections/Bio';
import ProjectsShowcase from '../components/sections/ProjectShowcase';
import ExperienceTimeline from '../components/sections/ExperienceTimeline';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
        <Bio />
      </section>
      
      <section id="projects" className="py-20 px-4 bg-[var(--cyber-dark)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[var(--cyber-blue)] neon-blue">
            Some of my projects
          </h2>
          <ProjectsShowcase />
        </div>
      </section>
      
      <section id="experience" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-[var(--cyber-pink)] neon-pink">
          My work experience
        </h2>
        <ExperienceTimeline />
      </section>
      
      <section id="contact" className="py-20 px-4 bg-[var(--cyber-dark)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[var(--cyber-yellow)]">
            Wanna talk about something? Shoot me a message!
          </h2>
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
