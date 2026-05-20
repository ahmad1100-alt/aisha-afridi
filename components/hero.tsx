import Image from 'next/image';
import { Instagram, Youtube } from 'lucide-react';
import { instagramUrl, youtubeUrl } from '@/lib/aisha-profile';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[#10100e] text-white md:min-h-[calc(100svh-7rem)]">
      <Image
        src="/aisha-hero.jpg"
        alt="Aisha Afridi"
        fill
        className="object-cover object-[58%_26%] md:object-[65%_36%]"
        priority
        quality={86}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/88 md:bg-gradient-to-r md:from-black/80 md:via-black/45 md:to-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#10100e] via-[#10100e]/70 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-end px-4 pb-7 pt-24 md:min-h-[calc(100svh-7rem)] md:px-8 md:pb-16">
        <div className="max-w-3xl">
          <div className="mb-3 flex flex-wrap items-center gap-2 md:mb-6 md:gap-3">
            <span className="border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur md:px-4 md:py-2 md:text-xs md:tracking-[0.22em]">
              Official Portfolio
            </span>
            <span className="border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/85 backdrop-blur md:px-4 md:py-2 md:text-xs md:tracking-[0.18em]">
              Pakistani Actress
            </span>
          </div>

          <h1 className="mb-3 font-serif text-5xl leading-[0.95] text-white sm:text-6xl md:mb-6 md:text-8xl lg:text-9xl">
            Aisha Afridi
          </h1>
          <p className="mb-3 max-w-[18rem] font-sans text-base font-semibold uppercase tracking-[0.12em] text-primary md:mb-4 md:max-w-none md:text-2xl md:tracking-[0.16em]">
            Pakistani Actress & Digital Creator
          </p>
          <p className="mb-6 max-w-[21rem] font-sans text-base font-light leading-relaxed text-white/90 md:mb-8 md:max-w-2xl md:text-2xl">
            Television drama, BTS storytelling, fashion, lifestyle, and brand collaborations.
          </p>

          <div className="mb-10 hidden flex-wrap gap-3 text-sm text-white/80 md:flex">
            <span className="border-l border-primary pl-3">Television Drama</span>
            <span className="border-l border-primary pl-3">Digital Creator</span>
            <span className="border-l border-primary pl-3">Brand Collaborations</span>
            <span className="border-l border-primary pl-3">BTS Content</span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap md:gap-4">
            <a href="#work" className="btn-gold text-center text-sm font-semibold md:text-lg">
              View Work
            </a>
            <a href="#contact" className="btn-glass text-center text-sm font-semibold md:text-lg">
              Booking Inquiry
            </a>
            <a href="#showreel" className="btn-glass col-span-2 hidden text-center text-sm font-semibold sm:inline-flex md:text-lg">
              View Reels
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="icon-link hidden md:inline-flex"
              aria-label="Open Aisha Afridi Instagram"
              title="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="icon-link hidden md:inline-flex"
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
