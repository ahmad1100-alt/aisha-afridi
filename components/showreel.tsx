'use client';

import { useState } from 'react';
import { Instagram, Youtube } from 'lucide-react';
import { instagramUrl, reelItems, youtubeUrl } from '@/lib/aisha-profile';

export default function Showreel() {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleReels = reelItems.slice(0, visibleCount);
  const canShowMore = visibleCount < reelItems.length;

  return (
    <section id="showreel" className="bg-background py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="mb-3 inline-block font-sans text-xs uppercase tracking-widest text-primary md:mb-4 md:text-sm">
              Reels
            </span>
            <h2 className="mb-4 font-serif text-4xl text-foreground md:text-6xl">
              Moving Portraits
            </h2>
            <p className="font-sans text-base leading-relaxed text-muted md:text-lg">
              Selected reels from Aisha Afridi&apos;s recent approved content, bringing together on-camera presence, styling, and short-form storytelling.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              <Instagram size={18} />
              Instagram
            </a>
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline inline-flex items-center justify-center gap-2"
            >
              <Youtube size={18} />
              YouTube
            </a>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleReels.map((reel) => (
            <article
              key={reel.video}
              className="overflow-hidden rounded-lg border border-border bg-card shadow-[0_14px_36px_rgba(21,21,21,0.06)]"
            >
              <div className="relative bg-black">
                <video
                  className="aspect-[9/16] h-full w-full object-cover"
                  controls
                  preload="none"
                  playsInline
                  poster={reel.poster}
                >
                  <source src={reel.video} type="video/mp4" />
                </video>
                {/* <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                  Reel {String(index + 1).padStart(2, '0')}
                </div> */}
              </div>
              {/* <div className="p-4 md:p-5">
                <h3 className="mb-2 font-serif text-2xl text-foreground">{reel.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted">
                  {reel.description}
                </p>
              </div> */}
            </article>
          ))}
        </div>

        {canShowMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount(reelItems.length)}
              className="btn-outline inline-flex items-center justify-center"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
