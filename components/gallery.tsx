'use client';

import Image from 'next/image';
import { useState } from 'react';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  span: 'col-span-1' | 'col-span-2';
  height: string;
}

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    { id: 1, src: '/aisha-gallery-1.jpg', alt: 'Aisha Afridi editorial portrait', span: 'col-span-1', height: 'h-[320px] md:h-[520px]' },
    { id: 2, src: '/aisha-gallery-2.jpg', alt: 'Aisha Afridi fashion portrait', span: 'col-span-1', height: 'h-[260px] md:h-[320px]' },
    { id: 3, src: '/aisha-gallery-3.jpg', alt: 'Aisha Afridi indoor portrait', span: 'col-span-1', height: 'h-[260px] md:h-[320px]' },
    { id: 4, src: '/aisha-gallery-4.jpg', alt: 'Aisha Afridi lifestyle portrait', span: 'col-span-2', height: 'h-[300px] md:h-[360px]' },
    { id: 5, src: '/aisha-gallery-5.jpg', alt: 'Aisha Afridi digital content still', span: 'col-span-1', height: 'h-[320px] md:h-[420px]' },
    { id: 6, src: '/aisha-gallery-6.jpg', alt: 'Aisha Afridi close portrait', span: 'col-span-1', height: 'h-[320px] md:h-[420px]' },
  ];

  const selectedItem = galleryItems.find((item) => item.id === selectedId);

  return (
    <section id="gallery" className="py-24 md:py-36 bg-[#10100e] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-20">
          <span className="inline-block text-sm font-sans tracking-widest uppercase text-primary mb-4">02</span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6">
            Gallery
          </h2>
          <p className="font-sans text-xl text-white/75 max-w-2xl">
            A curated visual set from Aisha&apos;s official social media export, selected for a polished live portfolio.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {galleryItems.map((item) => (
              <button
                type="button"
                key={item.id}
                className={`${item.span} ${item.height} relative overflow-hidden rounded-lg cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary`}
                onClick={() => setSelectedId(item.id)}
                aria-label={`Open gallery image ${item.id}`}
              >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                quality={88}
              />
                <span className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">View</span>
                </span>
              </button>
          ))}
        </div>

        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image preview"
          >
            <div className="relative max-w-5xl w-full aspect-[3/4] md:aspect-auto md:h-[85vh]">
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                fill
                className="object-contain"
                quality={95}
              />
              <button
                type="button"
                className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center transition-all font-sans text-xl"
                aria-label="Close gallery image"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId(null);
                }}
              >
                X
              </button>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryItems.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    aria-label={`View gallery image ${item.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedId(item.id);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      selectedId === item.id ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
