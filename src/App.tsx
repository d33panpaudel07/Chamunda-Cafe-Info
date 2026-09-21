import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Combos } from './components/Combos';
import { Signatures } from './components/Signatures';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Delivery } from './components/Delivery';
import { Instagram } from './components/Instagram';
import { Bookings } from './components/Bookings';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Combos />
      <Signatures />
      <Menu />
      <Gallery />
      <Testimonials />
      <Delivery />
      <Instagram />
      <Bookings />
      <Location />
    </>
  );
}

import { CartProvider } from './components/CartProvider';

function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Handle anchor link clicks for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          (lenis as any).scrollTo(element, { offset: 0 });
          // Update URL without page jump
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <Router>
      <CartProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
