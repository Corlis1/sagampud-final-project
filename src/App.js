import React, { useState, useEffect } from 'react';
import './index.css';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

const NAV_LINKS = ['about', 'education', 'experience', 'skills', 'contact'];

function App() {
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.className = dark ? 'dark' : 'light';
  }, [dark]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <div className={dark ? 'dark' : 'light'}>
      <header className="bg-header border-b border-theme sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between py-4 gap-4">
          <svg viewBox="0 0 130 36" width="120" height="36" aria-label="CS Portfolio">
            <text x="0" y="28" fontFamily="EB Garamond, serif" fontSize="28" fill="#D4AF37" letterSpacing="2">CS</text>
            <line x1="42" y1="18" x2="130" y2="18" stroke="#332B1A" strokeWidth="1" />
            <text x="46" y="24" fontFamily="Inter, sans-serif" fontSize="9.5" fill="#9a9a8e" letterSpacing="2">PORTFOLIO</text>
          </svg>

          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              {NAV_LINKS.map((id) => (
                <li key={id}>
                  <button
                    className={`nav-link ${active === id ? 'active' : ''}`}
                    onClick={() => scrollTo(id)}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => setDark((v) => !v)} className="nav-link text-base px-2"
              aria-label="Toggle theme">
              {dark ? '☀' : '☾'}
            </button>
            <button className="md:hidden nav-link text-lg px-2"
              onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-surface border-t border-theme">
            <ul className="flex flex-col list-none m-0 p-0 py-2">
              {NAV_LINKS.map((id) => (
                <li key={id}>
                  <button className={`nav-link block w-full text-left px-6 py-3 ${active === id ? 'active' : ''}`}
                    onClick={() => scrollTo(id)}>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <div className="bg-hero border-b border-theme">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <p className="text-muted text-xs tracking-widest uppercase mb-3">Hello, I'm</p>
          <h1 className="font-display tracking-wider leading-none mb-4"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', color: '#D4AF37' }}>
            Corliss Sagampud
          </h1>
          <p className="text-muted text-sm tracking-widest uppercase mb-8">
            IT Student &nbsp;·&nbsp; Cybersecurity &nbsp;·&nbsp; Web Developer
          </p>
          <button className="check-btn" onClick={() => scrollTo('contact')}>Get In Touch</button>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-footer border-t border-theme py-8 text-center">
        <p className="text-muted text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Corliss Sagampud &nbsp;·&nbsp; Baguio City, Philippines
        </p>
      </footer>
    </div>
  );
}

export default App;