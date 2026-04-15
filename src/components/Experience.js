import React, { useState } from 'react';

const experienceData = [
  {
    role: 'National Finalist — Capture The Flag (CTF)',
    org: 'HackForGov Nationals 2025',
    period: '2025',
    bullets: [
      'Competed at the national level alongside a team of 4 in a rigorous cybersecurity CTF competition.',
      'Applied practical skills in vulnerability analysis, forensics, and offensive/defensive security strategies.',
    ],
  },
  {
    role: 'Top Scorer — Capture The Flag (CTF)',
    org: 'HackForGov Regionals CAR 2025',
    period: '2025',
    bullets: [
      'Achieved the highest score in the regional division, successfully securing a spot in the National finals.',
      'Collaborated within a 4-person team to solve complex security challenges under strict time pressure.',
    ],
  },
  {
    role: 'Wazuh Cybersecurity Homelab',
    org: 'Self-Directed',
    period: '2026',
    bullets: [
      'Deployed and configured a basic Wazuh SIEM environment for threat detection and security monitoring with the use of Sysmon.',
      'Gained hands-on experience with log analysis, agent deployment, and endpoint security workflows.',
    ],
  },
  {
    role: 'Cybersecurity Trainee (Simulated SOC)',
    org: 'TryHackMe & LetsDefend',
    period: '2023 – Present',
    bullets: [
      'Completed rigorous SOC Level 1 and Security Engineering pathways, gaining hands-on experience with real-world cyber attack scenarios.',
      'Conducted incident response, malware analysis, and log investigation using simulated SIEM and EDR environments.',
      'Regularly participate in Capture The Flag (CTF) challenges to practice vulnerability exploitation and defensive mitigation techniques.',
    ],
  },
];

const Experience = () => {
  const [open, setOpen] = useState(null);

  return (
    <section id="experience" className="py-16 border-b border-theme">
      <h2 className="font-display text-3xl tracking-widest uppercase mb-2" style={{ color: '#D4AF37' }}>
        Experience
      </h2>
      <div className="section-divider" />
      <div className="flex flex-col gap-4">
        {experienceData.map((exp, i) => (
          <div key={i} className="portfolio-card bg-surface overflow-hidden p-0">
            <button
              className="w-full flex justify-between items-start gap-3 px-5 py-4 text-left"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <div>
                <span className="font-display text-lg text-main block">{exp.role}</span>
                <span className="text-muted text-sm">{exp.org}</span>
              </div>
              <span className="exp-arrow mt-1" style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
            </button>
            <p className="text-xs tracking-wider px-5 pb-2" style={{ color: '#D4AF37' }}>{exp.period}</p>
            {open === i && (
              <ul style={{ listStyle: 'none', margin: 0, padding: '0 22px 16px' }} className="flex flex-col gap-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-muted text-sm leading-relaxed" style={{ paddingLeft: '16px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '2px', color: '#D4AF37', fontSize: '0.75rem' }}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;