import React from 'react';

const Contact = () => {
  const contactLinks = [
    { label: 'Phone', value: '09952139480', href: 'tel:09952139480' },
    { label: 'Email', value: 'c.sagampud@protonmail.com', href: 'mailto:c.sagampud@protonmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/c0rliss-sagampud', href: 'https://www.linkedin.com/in/c0rliss-sagampud/', target: '_blank' },
    { label: 'GitHub', value: 'github.com', href: 'https://github.com/', target: '_blank' },
  ];

  return (
    <section id="contact" className="py-16">
      <h2 className="font-display text-3xl tracking-widest uppercase mb-2" style={{ color: '#D4AF37' }}>
        Contact
      </h2>
      <div className="section-divider" />
      <div className="flex flex-col gap-4 mt-8 max-w-lg">
        {contactLinks.map((link, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="font-display tracking-widest uppercase text-sm sm:w-28" style={{ color: '#D4AF37' }}>
              {link.label}:
            </span>
            <a
              href={link.href}
              target={link.target}
              rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
              className="text-muted hover:text-white transition-colors"
            >
              {link.value}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;