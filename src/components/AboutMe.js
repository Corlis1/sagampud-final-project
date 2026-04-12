import React, { useState } from 'react';

const AboutMe = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-16 border-b border-theme">
      <h2 className="font-display text-3xl tracking-widest uppercase mb-2" style={{ color: '#D4AF37' }}>
        About Me
      </h2>
      <div className="section-divider" />
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="flex-shrink-0">
          <div className="portfolio-card bg-surface w-28 h-28 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 80 80" width="70" height="70" aria-label="Profile initials">
              <circle cx="40" cy="30" r="18" fill="#D4AF37" fillOpacity="0.12" stroke="#D4AF37" strokeWidth="1" />
              <text x="40" y="36" textAnchor="middle" fontSize="18" fill="#D4AF37" fontFamily="EB Garamond, serif" fontWeight="600">CS</text>
              <path d="M10 72 C10 54 70 54 70 72" fill="#D4AF37" fillOpacity="0.1" stroke="#D4AF37" strokeWidth="1" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-muted text-base leading-relaxed max-w-xl">
            I am <span className="text-main font-medium">Corliss Sagampud</span>, an IT student based in
            Baguio City, Philippines, with a focus on networking and application of cybersecurity.
          </p>
          {expanded && (
            <div className="text-muted text-base leading-relaxed max-w-xl mt-3 space-y-3">
              <p>
                Over the past year, I have immersed myself in practical security training through platforms like TryHackMe and LetsDefend, completing learning paths in SOC Level 1 and Security Engineering. I frequently participate in Capture The Flag (CTF) challenges to continuously sharpen my offensive and defensive skills.
              </p>
              <p>
                Currently, I am actively pursuing the Google Cybersecurity Professional Certificate to further formalize my foundational knowledge alongside my degree, supplementing my hands-on home lab and simulation experience.
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