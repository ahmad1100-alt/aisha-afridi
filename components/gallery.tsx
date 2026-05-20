'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useMemo, useState } from 'react';

const GALLERY_IMAGE_COUNT = 117;
const INITIAL_VISIBLE_COUNT = 24;
const LOAD_MORE_COUNT = 24;
const CATEGORIES = ['All', 'Portraits', 'Editorial', 'BTS', 'Traditional', 'Brand Shoots', 'Social'] as const;
const CATEGORY_SEQUENCE = ['Portraits', 'Editorial', 'BTS', 'Traditional', 'Brand Shoots', 'Social'] as const;

type GalleryCategory = (typeof CATEGORIES)[number];

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  span: 'col-span-1' | 'col-span-2';
  height: string;
  category: Exclude<GalleryCategory, 'All'>;
}

const getGalleryImage = (index: number) =>
  `/portfolio-gallery/aisha-${String(index + 1).padStart(3, '0')}.${index < 72 ? 'webp' : 'jpg'}`;

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');

  const galleryItems: GalleryItem[] = useMemo(
    () =>
      Array.from({ length: GALLERY_IMAGE_COUNT }, (_, index) => ({
        id: index + 1,
        src: getGalleryImage(index),
        alt: `Aisha Afridi portfolio visual ${index + 1}`,
        category: CATEGORY_SEQUENCE[index % CATEGORY_SEQUENCE.length],
        span: index % 11 === 0 ? 'col-span-2' : 'col-span-1',
        height:
          index % 11 === 0
            ? 'h-[300px] md:h-[460px]'
            : index % 5 === 0
              ? 'h-[300px] md:h-[420px]'
              : 'h-[240px] md:h-[340px]',
      })),
    []
  );

  const filteredItems = useMemo(
    () =>
      activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory, galleryItems]
  );

  const visibleItems = filteredItems.slice(0, visibleCount);
  const selectedItem = selectedIndex === null ? null : filteredItems[selectedIndex];
  const canLoadMore = visibleCount < filteredItems.length;

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null ? current : (current - 1 + filteredItems.length) % filteredItems.length
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null ? current : (current + 1) % filteredItems.length
    );
  };

  return (
    <section id="gallery" className="bg-[#10100e] py-16 text-white md:py-36">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-10 md:mb-20">
          <span className="mb-3 inline-block font-sans text-xs uppercase tracking-widest text-primary md:mb-4 md:text-sm">02</span>
          <h2 className="mb-4 font-serif text-4xl text-white md:mb-6 md:text-7xl lg:text-8xl">
            Curated Gallery
          </h2>
          <p className="max-w-2xl font-sans text-base leading-relaxed text-white/75 md:text-xl">
            A premium visual selection from Aisha Afridi&apos;s latest approved portfolio images.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2.5 md:mb-10 md:gap-3">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(INITIAL_VISIBLE_COUNT);
                setSelectedIndex(null);
              }}
              className={`rounded-full border px-4 py-2 font-sans text-xs font-semibold transition-all md:px-5 md:py-2.5 md:text-sm ${
                activeCategory === category
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-white/20 bg-white/5 text-white/78 hover:border-primary hover:text-white'
              }`}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
          {visibleItems.map((item, index) => (
            <button
              type="button"
              key={item.id}
              className={`${item.span} ${item.height} relative overflow-hidden rounded-lg cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary`}
              onClick={() => setSelectedIndex(index)}
              aria-label={`Open gallery image ${item.id}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                quality={82}
                sizes="(min-width: 768px) 25vw, 50vw"
              />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                  View
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-5">
          <p className="font-sans text-sm text-white/60">
            Showing {visibleItems.length} of {filteredItems.length} visuals
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
          </p>
          {canLoadMore && (
            <button
              type="button"
              onClick={() =>
                setVisibleCount((current) => Math.min(current + LOAD_MORE_COUNT, galleryItems.length))
              }
              className="btn-gold text-base font-semibold"
            >
              Load More
            </button>
          )}
        </div>

        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image preview"
          >
            <div className="relative max-w-6xl w-full aspect-[3/4] md:aspect-auto md:h-[88vh]">
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                fill
                className="object-contain"
                quality={90}
                sizes="100vw"
              />
              <button
                type="button"
                className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center transition-all"
                aria-label="Close gallery image"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(null);
                }}
              >
                <X size={22} />
              </button>
              <button
                type="button"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center transition-all"
                aria-label="Previous gallery image"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrevious();
                }}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center transition-all"
                aria-label="Next gallery image"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
              >
                <ChevronRight size={24} />
              </button>
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/45 px-4 py-2 font-sans text-sm text-white/85 backdrop-blur">
                {selectedIndex !== null ? selectedIndex + 1 : 1} / {filteredItems.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
