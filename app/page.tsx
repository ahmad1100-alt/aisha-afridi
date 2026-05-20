import dynamic from 'next/dynamic';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import SelectedWork from '@/components/selected-work';
import Collaborations from '@/components/collaborations';
import Footer from '@/components/footer';

const Gallery = dynamic(() => import('@/components/gallery'));
const Showreel = dynamic(() => import('@/components/showreel'));
const Contact = dynamic(() => import('@/components/contact'));

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <SelectedWork />
      <Gallery />
      <Showreel />
      <Collaborations />
      {/* Press kit section paused until approved PDF/headshot downloads are ready. */}
      <Contact />
      <Footer />
    </main>
  );
}
