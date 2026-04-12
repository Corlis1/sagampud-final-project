import React from 'react';

const skillGroups = [
  { category: 'Languages', items: ['Python', 'Bash', 'HTML & CSS', 'SQL'] },
  { category: 'Tools & Platforms', items: ['Wazuh SIEM', 'Splunk', 'Wireshark', 'VMware / VirtualBox', 'Linux & Windows OS'] },
  { category: 'Cybersecurity', items: ['Incident Response', 'SOC Operations', 'Log Analysis', 'Threat Hunting', 'CTF / Penetration Testing'] },
];

const Skills = () => (
  <section id="skills" className="py-16 border-b border-theme">
    <h2 className="font-display text-3xl tracking-widest uppercase mb-2" style={{ color: '#D4AF37' }}>
      Skills
    </h2>
    <div className="section-divider" />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {skillGroups.map((group, i) => (
        <div key={i} className="portfolio-card bg-surface">
          <h3 className="font-display text-base tracking-widest uppercase mb-4" style={{ color: '#D4AF37' }}>
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((sk, j) => <span key={j} className="skill-tag">{sk}</span>)}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;