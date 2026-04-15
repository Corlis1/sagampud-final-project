import React, { useState } from 'react';
import corlis from '../assets/corlis.jpg';

const AboutMe = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-16 border-b border-theme">
      <h2 className="font-display text-3xl tracking-widest uppercase mb-2" style={{ color: '#D4AF37' }}>
        About Me
      </h2>
      <div className="section-divider" />

      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-shrink-0">
          <div
            className="portfolio-card bg-surface rounded-full overflow-hidden flex items-center justify-center"
            style={{ width: '280px', height: '280px' }}
          >
            <img
              src={corlis}
              alt="Corliss Sagampud"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <p className="text-muted text-base leading-relaxed max-w-xl">
            I am <span className="text-main font-medium">Corliss Sagampud</span>, an IT student based in
            Baguio City, Philippines, with a focus on networking and application of cybersecurity.
          </p>

          {expanded && (
            <div className="text-muted text-base leading-relaxed max-w-xl mt-3 space-y-3">
              <p>
                Over the past year, I have immersed myself in practical security training through platforms
                like TryHackMe and LetsDefend, completing learning paths in SOC Level 1 and Security
                Engineering. I frequently participate in Capture The Flag (CTF) challenges to continuously
                sharpen my offensive and defensive skills.
              </p>
              <p>
                Currently, I am actively pursuing the Google Cybersecurity Professional Certificate to
                further formalize my foundational knowledge alongside my degree, supplementing my
                hands-on home lab and simulation experience.
              </p>
            </div>
          )}

          <button className="check-btn mt-5" onClick={() => setExpanded((v) => !v)}>
            {expanded ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;