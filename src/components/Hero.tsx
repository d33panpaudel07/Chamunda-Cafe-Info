import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion, AnimatePresence } from 'framer-motion';

import heroImg1 from '../assets/biryani.jpg';
import heroImg2 from '../assets/momo_platter.jpg';
import heroImg3 from '../assets/sekuwa_chicken_grill.jpg';

const images = [
  { src: heroImg1, label: "Slow-cooked Biryani", badge: "Signature" },
  { src: heroImg2, label: "Momo Platter", badge: "Popular" },
  { src: heroImg3, label: "Sekuwa Grill", badge: "Charcoal" }
];

gsap.registerPlugin(useGSAP);

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 6000); // 6 seconds for a long, luxurious read
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial state: hide things slightly to prevent flash before animation
    gsap.set(['.hero-title-line', '.hero-meta', '.hero-btn', '.hero-top-bar'], { autoAlpha: 0 });
    gsap.set('.hero-image', { clipPath: 'inset(100% 0 0 0)' });

    tl.to('.hero-top-bar', { autoAlpha: 1, duration: 1 })
      .to('.hero-title-line', {
        autoAlpha: 1,
        y: 0,
        yPercent: 0, 
        stagger: 0.15,
        duration: 1.2,
        ease: 'power4.out'
      }, "-=0.5")
      .to('.hero-image', {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.5,
        ease: 'power4.inOut'
      }, "-=1")
      .to('.hero-meta', {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        duration: 1
      }, "-=1.5")
      .to('.hero-btn', {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        duration: 1
      }, "-=1.2");
  }, { scope: container });

  return (
    <section id="hero" ref={container} className="w-full min-h-[100svh] lg:h-[100svh] pt-[80px] pb-6 px-6 md:px-12 max-w-[1600px] mx-auto flex flex-col">
      {/* Top bar */}
      <div className="hero-top-bar flex flex-wrap gap-4 justify-between items-center py-2 border-b border-rule mb-4 shrink-0 -translate-y-4">
        <span className="mono text-[10px] md:text-[11px]">N°.01 — Authentic Nepali Cuisine</span>
        <span className="mono text-ink-soft text-[10px] md:text-[11px]">Kathmandu, Nepal</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 min-h-0">
        
        {/* Left Content */}
        <div className="lg:col-span-6 flex flex-col justify-center h-full pt-4 lg:pt-0">
          <h1 className="text-5xl md:text-7xl lg:text-[110px] leading-[0.9] tracking-wide mb-6 md:mb-8 font-display px-2 -mx-2">
            <div className="hero-title-line translate-y-8">Fire, Spice</div>
            <div className="hero-title-line translate-y-8 text-accent pr-4">& Tradition.</div>
          </h1>

          <div className="mb-6 md:mb-10 hero-meta translate-y-4 max-w-md">
            <p className="text-ink-2 text-base md:text-lg leading-relaxed max-w-sm">Authentic Nepalese culinary heritage. From smoky charcoal sekuwa to rich, fragrant biryani. A true taste of Kathmandu.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 overflow-hidden pt-2">
            <a href="#menu" className="hero-btn translate-y-4 bg-accent text-accent-ink px-8 py-4 text-sm tracking-widest uppercase hover:bg-ink hover:scale-105 active:scale-95 transition-all rounded-[2px] w-full sm:w-auto text-center inline-block font-semibold shadow-xl" data-magnetic>
              View Menu
            </a>
            <a href="#bookings" className="hero-btn translate-y-4 border border-rule px-8 py-4 text-sm tracking-widest uppercase hover:border-ink hover:text-ink text-ink-soft hover:scale-105 active:scale-95 transition-all rounded-[2px] w-full sm:w-auto text-center inline-block font-medium" data-magnetic>
              Book a Table
            </a>
          </div>
        </div>

        {/* Right Image Carousel - All images mounted, stacked absolutely */}
        <div className="lg:col-span-6 flex flex-col h-full py-4 lg:py-12">
          <div className="hero-image w-full flex-1 aspect-[4/5] lg:aspect-auto relative overflow-hidden bg-ink rounded-[2px]">
            {images.map((img, idx) => {
              const isActive = idx === currentIdx;
              return (
                <motion.img 
                  key={idx}
                  src={img.src}
                  alt={img.label}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1.02 : 1.15,
                    zIndex: isActive ? 10 : 1
                  }}
                  transition={{ 
                    opacity: { duration: 1.2, ease: "easeInOut" },
                    scale: { duration: 6, ease: "linear" } 
                  }}
                  className="w-full h-full object-cover absolute inset-0 origin-center filter contrast-110 saturate-105"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              )
            })}
          </div>
          <div className="hero-meta flex justify-between items-center mt-3 text-ink-soft shrink-0">
            <AnimatePresence mode="wait">
              <motion.span 
                key={currentIdx}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="mono text-[10px] inline-block"
              >
                Fig. 0{currentIdx + 1} / {images[currentIdx].label}
              </motion.span>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.span 
                key={currentIdx + '-badge'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mono text-[10px]"
              >
                ↗ {images[currentIdx].badge}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
