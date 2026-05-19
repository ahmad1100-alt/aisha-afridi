'use client';

import Image from 'next/image';
import { Instagram, Youtube } from 'lucide-react';
import { instagramUrl, youtubeUrl } from '@/lib/aisha-profile';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[calc(100svh-7rem)] overflow-hidden bg-[#10100e] text-white">
      <Image
        src="/aisha-hero.jpg"
        alt="Aisha Afridi"
        fill
        className="object-cover object-[65%_36%]"
        priority
        quality={95}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#10100e] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-7rem)] max-w-7xl items-end px-4 pb-10 pt-28 md:px-8 md:pb-16">
        <div className="max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
              Official Portfolio
            </span>
            <span className="border border-white/20 bg-black/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/85 backdrop-blur">
              Pakistani Actress
            </span>
          </div>

          <h1 className="mb-6 font-serif text-6xl leading-none text-white md:text-8xl lg:text-9xl">
            Aisha Afridi
          </h1>
          <p className="mb-8 max-w-2xl font-sans text-xl font-light leading-relaxed text-white/90 md:text-3xl">
            Pakistani actress and digital creator with screen work across television drama, BTS storytelling, fashion, lifestyle, and brand-led visual content.
          </p>

          <div className="mb-10 flex flex-wrap gap-3 text-sm text-white/80">
            <span className="border-l border-primary pl-3">Television Drama</span>
            <span className="border-l border-primary pl-3">Digital Creator</span>
            <span className="border-l border-primary pl-3">Brand Collaborations</span>
            <span className="border-l border-primary pl-3">BTS Content</span>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#work" className="btn-gold text-base font-semibold md:text-lg">
              View Work
            </a>
            <a href="#contact" className="btn-glass text-base font-semibold md:text-lg">
              Booking Inquiry
            </a>
            <a href="#gallery" className="btn-glass text-base font-semibold md:text-lg">
              View Gallery
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              aria-label="Open Aisha Afridi Instagram"
              title="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              aria-label="Open Aisha Afridi YouTube"
              title="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
