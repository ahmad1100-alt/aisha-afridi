import Image from 'next/image';
import { workItems } from '@/lib/aisha-profile';

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 md:mb-20">
          <span className="inline-block text-sm font-sans tracking-widest uppercase text-primary mb-4">01</span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-6">
            Selected Screen Work
          </h2>
          <p className="max-w-3xl font-sans text-lg leading-relaxed text-muted md:text-xl">
            Confirmed and publicly listed screen work from Aisha Afridi&apos;s television portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {workItems.map((work, index) => (
            <article
              key={work.title}
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl"
            >
              <div className="relative h-[360px] overflow-hidden bg-[#15120f] md:h-[460px]">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  quality={84}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute left-4 top-4 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                  {work.year}
                </div>
              </div>

              <div className="p-7 md:p-9">
                <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  {String(index + 1).padStart(2, '0')} / {work.category}
                </p>
                <h3 className="mb-5 font-serif text-4xl leading-tight text-foreground md:text-5xl">
                  {work.title}
                </h3>
                <dl className="mb-5 grid gap-3 border-y border-border py-5 font-sans text-sm text-muted sm:grid-cols-3">
                  <div>
                    <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      Platform
                    </dt>
                    <dd>{work.platform}</dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      Role / Notes
                    </dt>
                    <dd>{work.role}</dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      Year
                    </dt>
                    <dd>{work.year}</dd>
                  </div>
                </dl>
                <p className="font-sans text-base leading-relaxed text-foreground md:text-lg">
                  {work.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-8 border-t border-border pt-12 md:grid-cols-3 md:items-center">
          <div className="md:col-span-2">
            <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Portfolio Note
            </p>
            <p className="font-sans text-lg leading-relaxed text-foreground">
              The live portfolio keeps the focus on publicly listed career notes and approved screen-ready material. Additional casting details can be shared privately on request.
            </p>
          </div>
          <a href="#contact" className="btn-gold justify-self-start text-base font-semibold md:justify-self-end">
            Send Booking Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}
