import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Showreel from '@/components/showreel';
import SelectedWork from '@/components/selected-work';
import Gallery from '@/components/gallery';
import Collaborations from '@/components/collaborations';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

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
