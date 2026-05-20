import { Camera, Clapperboard, ImageIcon, Radio, Shirt, Sparkles } from 'lucide-react';

interface Collaboration {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Collaborations() {
  const collaborations: Collaboration[] = [
    {
      id: 1,
      title: 'Acting Projects',
      description: 'Television, scripted screen work, casting, and character-led productions',
      icon: <Clapperboard className="w-8 h-8" />,
    },
    {
      id: 2,
      title: 'Fashion Campaigns',
      description: 'Photoshoots, lookbooks, fashion editorials, and designer-led content',
      icon: <Shirt className="w-8 h-8" />,
    },
    {
      id: 3,
      title: 'Beauty Campaigns',
      description: 'Cosmetics, skincare, wellness, and camera-ready beauty partnerships',
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      id: 4,
      title: 'Lifestyle Shoots',
      description: 'Brand partnerships and lifestyle content creation',
      icon: <ImageIcon className="w-8 h-8" />,
    },
    {
      id: 5,
      title: 'BTS Content',
      description: 'Behind-the-scenes, set diaries, social reels, and campaign storytelling',
      icon: <Camera className="w-8 h-8" />,
    },
    {
      id: 6,
      title: 'Event & Media Appearances',
      description: 'Event appearances, media interviews, and public-facing campaign moments',
      icon: <Radio className="w-8 h-8" />,
    },
  ];

  return (
    <section id="collaborations" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-4">
          Brand Collaborations
        </h2>
        <p className="font-sans text-lg text-muted mb-16 max-w-2xl">
          Partnership areas shown here describe availability, not unconfirmed past client claims.
        </p>

        {/* Icon-Based Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collaborations.map((collab) => (
            <div
              key={collab.id}
            className="p-8 hover:bg-card transition-colors rounded-lg border border-transparent hover:border-primary/30"
            >
              <div className="text-primary mb-4">
                {collab.icon}
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">
                {collab.title}
              </h3>
              <p className="font-sans text-sm md:text-base text-muted leading-relaxed">
                {collab.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="font-sans text-muted mb-6">
            Interested in a collaboration? Send the project context and requested dates.
          </p>
          <a href="#contact" className="btn-gold">
            Send Collaboration Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}
