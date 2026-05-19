'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#showreel', label: 'Showreel' },
    { href: '#work', label: 'Work' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
            <Image
              src="/icon.svg"
              alt="Aisha Afridi logo"
              width={40}
              height={40}
              className="rounded-lg"
              priority
            />
            <span className="font-serif text-2xl font-medium">Aisha Afridi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-gold text-xs"
            >
              Booking Inquiry
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-card rounded transition-colors"
            aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-navigation" className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-foreground hover:text-primary transition-colors px-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-gold text-xs mx-4 text-center"
                onClick={() => setIsOpen(false)}
              >
                Booking Inquiry
              </a>
            </div>
          </div>
        )}
      </div>
      <a
        href="#contact"
        className="md:hidden fixed bottom-4 left-4 right-4 z-50 btn-gold text-center text-sm font-semibold shadow-2xl"
      >
        Booking Inquiry
      </a>
    </nav>
  );
}
