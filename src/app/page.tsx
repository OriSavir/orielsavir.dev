import Image from 'next/image';
import Link from 'next/link';
import experiences from '@/data/experiences';
import publications from '@/data/publications';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Header */}
      <header className="space-y-6">
        <div className="flex items-center gap-6">
          <Image
            src="/images/profile.png"
            alt="Oriel Savir"
            width={96}
            height={96}
            className="rounded-full w-24 h-24 object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-[var(--text)]">Hey, I&apos;m Oriel</h1>
            <p className="text-[var(--text-muted)] text-sm mt-1">
              Thanks for visiting
            </p>
          </div>
        </div>
        <nav className="flex gap-4 text-sm">
          <a href="#about">about</a>
          <Link href="/blog">blogposts</Link>
          <a href="#experience">experience</a>
          <a href="#publications">publications</a>
          <a href="#tidbits">extra (+dog photos)</a>
        </nav>
      </header>

      {/* About */}
      <section id="about" className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--text)]">About</h2>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed">
          Hello! My name is Oriel Savir. I&apos;m a graduate from Johns Hopkins University, where I studied
          Applied Mathematics &amp; Computer Science. I am passionate about
          math, technology, and innovation. Throughout my time in college, I gained experience
          in deep learning research, software development, and open source tech. As a researcher, I am, broadly
          speaking, motivated by problems that sit in the gap between theory and empirical experimentation
          for generalizability &amp; robustness, representation learning, probabilistic modeling, reinforcement learning, and alignment &amp; interpretability for safety. I&apos;m also interested in math research
          (at the moment this is a hobby, although I would love to connect my ML work to this) &ndash; particularly analysis, topology, number theory, and differential equations. As a programmer, I am
          currently interested in systems for performance and stability in ML (squeezing the most juice out of hardware) and
          agentic applications.
          I&apos;m always eager to learn more, meet passionate people, and make the most out of life!
        </p>

        <div>
          <h3 className="font-bold text-[var(--text)] mb-2">Interests</h3>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Deep Learning, Generalizability, Representation Learning, Alignment &amp; Interpretability, ML Systems (Kernels are fun!)
          </p>
        </div>
      </section>

            {/* Publications */}
      <section id="publications" className="space-y-6">
        <h2 className="text-lg font-bold text-[var(--text)]">Publications</h2>
        <div className="space-y-4">
          {publications.map((pub) => (
            <div key={pub.id} className="space-y-1">
              <div className="flex items-baseline gap-2">
                <h3 className="text-sm font-bold text-[var(--text)]">{pub.title}</h3>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs"
                  >
                    paper
                  </a>
                )}
              </div>
              <p className="text-sm text-[var(--text-muted)]">{pub.authors}</p>
              <p className="text-xs text-[var(--text-muted)]">{pub.venue}, {pub.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="space-y-6">
        <h2 className="text-lg font-bold text-[var(--text)]">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="text-sm font-bold text-[var(--text)]">{exp.title}</h3>
                  <p className="text-sm text-[var(--accent)]">{exp.company}</p>
                </div>
                <span className="text-xs text-[var(--text-muted)] shrink-0">{exp.period}</span>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-0.5 border border-[var(--border)] text-[var(--text-muted)] rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="tidbits" className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--text)]">Extra Homepage Tidbits</h2>
        <div>
          <h3 className="font-bold text-[var(--text)] mb-2">Fun stuff</h3>
            <ul className="text-sm text-[var(--text-muted)] leading-relaxed space-y-1">
              <li>- I love all animals and have two dogs: Ben (a 14-year-old Shih Tzu, former show diva) and Einstein (a 4-month-old goldendoodle)!
                As is obligatory on the internet, photos of the two will be at the bottom of the page.
              </li>
              <li>- I am a self-taught guitarist and have been learning for two years. I play an acoustic, which I find versatile 
                enough. As a huge rock fan, I plan to get an electric guitar setup very soon though.
                I have also been noodling around with some music theory and composition/song-writing (though my guitar skills are better than my voice for now!).
                Eventually, I would love to get to a point of releasing originals.
              </li>
              <li>- I also love EDM (especially DnB) and have been learning to use Ableton for a couple months. </li>
              <li>- I have lived in three continents: North America, Asia, and Europe. A goal is to spend at least some time in all seven (including Antarctica)! </li>
              <li>- I occasionally play video games. My all-time favorites are The Witcher, Portal, Soulsborne, and the Ratchet &amp; Clank series. </li>
              <li>- I enjoy reading, particularly dystopian fiction, sci-fi, detective, and non-fiction on philosophy, physics, and mathematics. </li>
              <li>- I love to cook new receipes and am generally willing to try most foods at least once (with few exceptions haha)! </li>
            </ul>            
        </div>
        <div>
          <h3 className="font-bold text-[var(--text)] mb-2">Things I believe (a constantly evolving list):</h3>
          <ul className="text-sm text-[var(--text-muted)] leading-relaxed space-y-1">
            <li>- The world is beautiful and complex, and there&apos;s many opportunities to ask questions about how things work.
              This is under-appreciated.
            </li>
            <li>- Mathematics is extremely powerful and, with effort, can be used to understand everything. 
              Learning math develops priceless cognitive and logical problem-solving skills. Thus, learning more math is a good idea for anyone.
            </li>
            <li>- The best way to learn is by doing. </li>
            <li>- Pineapple can work on pizza, but there is a time and place for everything. </li>
            <li>- The Artificial Intelligence boom and its impact will be the defining force of most of the 21st century. </li>
            <li>- Modern LLMs and training methods are very impressive, but future AI progress will require methods beyond naive scaling alone.
              Latent dynamics modeling, representation learning, and program synthesis will be expanded upon for better structured world models. 
              Reinforcement learning will make a strong comeback when learned dynamics support long-horizon planning and world understanding. </li>
            <li>- Interpretability and alignment are crucial for the long-term success of AI for the benefit of humanity. </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[var(--text)] mb-2">Dogs!</h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/images/ben.png"
                alt="Ben: The Shih Tzu"
                width={200}
                height={200}
                className="rounded-lg w-48 h-48 object-cover"
              />
              <p className="text-sm text-[var(--text-muted)]">Ben</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/images/einstein.png"
                alt="Einstein: The Goldendoodle"
                width={200}
                height={200}
                className="rounded-lg w-48 h-48 object-cover"
              />
              <p className="text-sm text-[var(--text-muted)]">Einstein</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border)] pt-8 text-sm text-[var(--text-muted)]">
        <div className="flex flex-wrap gap-4">
          <a href="mailto:orisav9@gmail.com">email</a>
          <a href="https://github.com/OriSavir" target="_blank" rel="noopener noreferrer">github</a>
          <a href="https://linkedin.com/in/orielsavir" target="_blank" rel="noopener noreferrer">linkedin</a>
        </div>
      </footer>
    </div>
  );
}
