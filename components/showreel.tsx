'use client';

import Image from 'next/image';
import { Instagram, Play, Youtube } from 'lucide-react';
import { instagramUrl, youtubeUrl } from '@/lib/aisha-profile';

export default function Showreel() {
  return (
    <section id="showreel" className="bg-[#ece8df] py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-5 md:px-8">
        <div className="md:col-span-2">
          <span className="mb-4 inline-block text-sm font-sans uppercase tracking-widest text-primary">
            Showreel & Social Presence
          </span>
          <h2 className="mb-6 font-serif text-5xl text-foreground md:text-6xl">
            Screen Updates, BTS, and Lifestyle Content
          </h2>
          <p className="mb-8 font-sans text-lg leading-relaxed text-muted">
            Alongside television work, Aisha shares behind-the-scenes and lifestyle content through her official YouTube channel and Instagram presence.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              <Youtube size={20} />
              YouTube
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline inline-flex items-center justify-center gap-2"
            >
              <Instagram size={20} />
              Instagram
            </a>
          </div>
        </div>

        <a
          href={youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative min-h-[440px] overflow-hidden rounded-lg md:col-span-3 md:min-h-[560px]"
          aria-label="Open Aisha Afridi official YouTube channel"
        >
          <Image
            src="/aisha-gallery-5.jpg"
            alt="Aisha Afridi screen and digital content"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            quality={92}
            sizes="(min-width: 768px) 60vw, 100vw"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <span className="absolute bottom-6 left-6 flex items-center gap-4 text-white">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
              <Play className="ml-1 h-6 w-6" fill="currentColor" />
            </span>
            <span className="font-sans text-lg font-semibold">View Official YouTube</span>
          </span>
        </a>
      </div>
    </section>
  );
}
