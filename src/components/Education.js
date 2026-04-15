import React from 'react';

const educationData = [
  {
    degree: 'Bachelor of Science in Information Technology - Network and Security',
    school: 'University of the Cordilleras',
    location: 'Baguio City, Philippines',
    period: '2024 – Present',
    detail: 'Specializing in Networking and IT security.',
  },
  {
    degree: 'Google Cybersecurity Professional Certificate',
    school: 'Coursera / Google',
    location: 'Online',
    period: 'In Progress',
    detail: 'Comprehensive training covering foundational security principles, Linux, Python, SQL, and incident response.',
  },
  {
    degree: 'Cybersecurity Training & Certifications',
    school: 'TryHackMe & LetsDefend',
    location: 'Online',
    period: '2024 – Present',
    detail: 'Earned completion certificates for SOC Level 1 and Security Engineering pathways. Regularly complete coursework in incident response, endpoint security, and CTF challenges.',
  },
];

const Education = () => (
  <section id="education" className="py-16 border-b border-theme">
    <h2 className="font-display text-3xl tracking-widest uppercase mb-2" style={{ color: '#D4AF37' }}>
      Education
    </h2>
    <div className="section-divider" />
    <div className="timeline flex flex-col gap-6">
      {educationData.map((ed, i) => (
        <div key={i} className="relative">
          <div className="timeline-dot" />
          <div className="portfolio-card bg-surface">
            <div className="flex flex-wrap justify-between gap-2 items-start mb-1">
              <span className="font-display text-lg text-main">{ed.degree}</span>
              <span className="text-xs tracking-wider" style={{ color: '#D4AF37' }}>{ed.period}</span>
            </div>
            <p className="text-muted text-sm">{ed.school} — <em>{ed.location}</em></p>
            <p className="text-muted text-sm mt-2 leading-relaxed">{ed.detail}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;