'use client';

import { Instagram, Mail, Youtube } from 'lucide-react';
import { instagramUrl, managementContactLabel, youtubeUrl } from '@/lib/aisha-profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-3">Aisha Afridi</h3>
            <p className="font-sans text-sm text-muted leading-relaxed">
              Pakistani actress and digital creator with publicly listed television drama work and official social platforms.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-medium text-foreground text-sm uppercase tracking-wide mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="font-sans text-sm text-muted hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#showreel" className="font-sans text-sm text-muted hover:text-primary transition-colors">
                  Showreel
                </a>
              </li>
              <li>
                <a href="#work" className="font-sans text-sm text-muted hover:text-primary transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#gallery" className="font-sans text-sm text-muted hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-medium text-foreground text-sm uppercase tracking-wide mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <p className="font-sans text-sm text-muted">{managementContactLabel}</p>
              </li>
              <li>
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="font-sans text-sm text-muted hover:text-primary transition-colors">
                  @aishaafridi.official
                </a>
              </li>
              <li>
                <p className="font-sans text-sm text-muted">
                  Management inquiries welcome
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-medium text-foreground text-sm uppercase tracking-wide mb-6">
              Follow
            </h4>
            <div className="flex gap-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-card border border-border rounded flex items-center justify-center text-primary hover:border-primary hover:bg-primary hover:text-background transition-all"
                title="Instagram"
                aria-label="Follow Aisha Afridi on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-card border border-border rounded flex items-center justify-center text-primary hover:border-primary hover:bg-primary hover:text-background transition-all"
                title="YouTube"
                aria-label="Open Aisha Afridi on YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#contact"
                className="w-10 h-10 bg-card border border-border rounded flex items-center justify-center text-primary hover:border-primary hover:bg-primary hover:text-background transition-all"
                title="Contact"
                aria-label="Contact Aisha Afridi management"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-sans text-sm text-muted mb-4 md:mb-0">
            Copyright {currentYear} Aisha Afridi. All rights reserved.
          </p>
          <p className="font-sans text-sm text-muted">
            For bookings and media inquiries, contact management.
          </p>
        </div>
      </div>
    </footer>
  );
}
