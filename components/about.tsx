'use client';

import { Camera, Clapperboard, Sparkles } from 'lucide-react';
import { bio, quickFacts } from '@/lib/aisha-profile';

export default function About() {
  const profiles = [
    {
      title: 'Acting',
      description: 'Television drama work with public credits across Pakistani entertainment platforms.',
      icon: <Clapperboard className="h-7 w-7" />,
    },
    {
      title: 'Digital Presence',
      description: 'Behind-the-scenes, lifestyle, and screen-focused updates through official social channels.',
      icon: <Camera className="h-7 w-7" />,
    },
    {
      title: 'Campaigns',
      description: 'Available for acting projects, brand campaigns, fashion, beauty, and media collaborations.',
      icon: <Sparkles className="h-7 w-7" />,
    }
  ];

  return (
    <section id="about" className="bg-[#10100e] py-20 text-white md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <span className="inline-block text-sm font-sans tracking-widest uppercase text-primary mb-4">About</span>
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-8">
            Professional Profile
          </h2>
          <p className="font-sans text-xl md:text-2xl text-white/82 leading-relaxed max-w-4xl font-light">
            {bio}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {profiles.map((profile, idx) => (
            <div
              key={idx}
              className="border border-white/12 bg-white/[0.04] p-8 md:p-10 rounded-lg hover:border-primary/60 transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/25 transition-colors">
                  {profile.icon}
                </div>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">
                {profile.title}
              </h3>
              <p className="font-sans text-base md:text-lg text-white/75 leading-relaxed">
                {profile.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-white/12 pt-12">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="border-l border-primary/70 pl-5">
                <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {fact.label}
                </p>
                <p className="font-sans text-base leading-relaxed text-white/86">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
