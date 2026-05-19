'use client';

import { Download, FileText } from 'lucide-react';

interface PressKit {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function PressKit() {
  const pressKits: PressKit[] = [
    {
      id: 1,
      title: 'Professional Bio',
      description: 'Short and long biography copy for media, casting, and brand review',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      id: 2,
      title: 'Headshots Collection',
      description: 'High-resolution professional portraits and approved image selections',
      icon: <Download className="w-8 h-8" />,
    },
    {
      id: 3,
      title: 'Media Kit',
      description: 'Portfolio overview, contact details, and collaboration information',
      icon: <FileText className="w-8 h-8" />,
    },
  ];

  return (
    <section id="press" className="py-24 md:py-40 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-20">
          <span className="inline-block text-sm font-sans tracking-widest uppercase text-primary mb-4">03</span>
          <h2 className="font-serif text-6xl md:text-7xl text-foreground mb-8">
            Press Kit & Media
          </h2>
          <p className="font-sans text-xl text-foreground max-w-2xl">
            Essential materials for media, casting, and industry professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16">
          {pressKits.map((kit) => (
            <div
              key={kit.id}
              className="bg-card border border-primary/15 p-10 md:p-12 rounded-lg hover:border-primary hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-primary/10 w-fit rounded-lg group-hover:bg-primary/20 transition-colors">
                <div className="text-primary">
                  {kit.icon}
                </div>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
                {kit.title}
              </h3>
              <p className="font-sans text-base md:text-lg text-foreground leading-relaxed mb-8">
                {kit.description}
              </p>
              <a
                href="#contact"
                aria-label={`${kit.title} available on request`}
                className="w-full btn-gold text-base font-semibold py-4 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Available on Request
              </a>
            </div>
          ))}
        </div>

        <div className="border-t border-primary/15 my-16" />

        <div className="bg-card border border-primary/15 p-12 md:p-16 rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300">
          <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Need Something Specific?
          </h3>
          <p className="font-sans text-lg text-foreground leading-relaxed mb-10 max-w-3xl">
            Contact management for custom press materials, additional media assets, interviews, or collaboration details.
          </p>
          <a
            href="#contact"
            className="btn-outline text-lg font-semibold py-4 px-8 inline-flex items-center gap-2"
            aria-label="Contact Aisha Afridi management for press materials"
          >
            Contact Management
          </a>
        </div>
      </div>
    </section>
  );
}
