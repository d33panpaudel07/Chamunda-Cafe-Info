import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Gallery() {
  const container = useRef<HTMLDivElement>(null);

  const images = [
    { url: 'https://images.unsplash.com/photo-1544025162-8360d8e24c25?q=80&w=2069&auto=format&fit=crop', cap: 'Evening Tongba', span: 'col-span-12 md:col-span-5 aspect-[4/5]' },
    { url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop', cap: 'The Charcoal Grill', span: 'col-span-12 md:col-span-7 aspect-[16/9] md:aspect-[4/3]' },
    { url: 'https://images.unsplash.com/photo-1625937759459-00914c6225a8?q=80&w=1974&auto=format&fit=crop', cap: 'Mutton Sekuwa', span: 'col-span-12 md:col-span-4 aspect-square' },
    { url: 'https://images.unsplash.com/photo-1605333556094-1da2418c991c?q=80&w=1974&auto=format&fit=crop', cap: 'Weekend Khaja Set', span: 'col-span-12 md:col-span-4 aspect-square' },
    { url: 'https://images.unsplash.com/photo-1517409228416-8d76fb5a40db?q=80&w=2070&auto=format&fit=crop', cap: 'Hukka Lounge', span: 'col-span-12 md:col-span-4 aspect-square' },
    { url: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=2070&auto=format&fit=crop', cap: 'Authentic Thakali', span: 'col-span-12 md:col-span-8 aspect-[16/9]' },
    { url: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2000&auto=format&fit=crop', cap: 'Our Spices', span: 'col-span-12 md:col-span-4 aspect-[3/4]' },
  ];

  useGSAP(() => {
    // Reveal text
    gsap.from('.gallery-title', {
      scrollTrigger: {
        trigger: '.gallery-header',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Parallax & reveal on images
    const items = gsap.utils.toArray('.gallery-item');
    items.forEach((item: any, i) => {
      // Fade in and slide up
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: (i % 3) * 0.1 // Stagger by row roughly
      });

      // Subtle parallax effect on the image inside
      const img = item.querySelector('.parallax-img');
      if (img) {
        gsap.to(img, {
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
          yPercent: 15, // Moves image slightly as you scroll
          ease: 'none'
        });
      }
    });
  }, { scope: container });

  return (
    <section id="gallery" ref={container} className="w-full bg-paper text-ink py-16">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="gallery-header flex justify-between items-center py-4 border-b border-rule mb-16">
          <span className="mono">§ 08 / Atmosphere</span>
          <span className="mono text-ink-soft hidden md:block">Kathmandu, Nepal</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="gallery-title text-[clamp(40px,8vw,120px)] leading-[0.9] tracking-tight px-2 -mx-2">
            Through the<br/>
            <span className="italic text-accent pr-4">lens.</span>
          </h2>
          <button className="mono text-ink hover:text-accent transition-colors pb-2 border-b border-ink hover:border-accent gallery-title" data-magnetic>
            Follow our Instagram →
          </button>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`gallery-item group relative overflow-hidden rounded-[2px] bg-paper-2 ${img.span}`}
            >
              <div className="w-full h-[115%] absolute top-[-7.5%] left-0"> {/* Extra height for parallax */}
                <img 
                  src={img.url} 
                  alt={img.cap} 
                  className="parallax-img w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="mono text-ink bg-paper/90 backdrop-blur-sm px-3 py-1 rounded-[2px]">{img.cap}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
