import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial state: hide things slightly to prevent flash before animation
    gsap.set(['.hero-title-line', '.hero-meta', '.hero-btn', '.hero-top-bar'], { autoAlpha: 0 });
    gsap.set('.hero-image', { clipPath: 'inset(100% 0 0 0)' });
    gsap.set('.hero-img-inner', { scale: 1.2 });

    tl.to('.hero-top-bar', { autoAlpha: 1, duration: 1 })
      .to('.hero-title-line', {
        autoAlpha: 1,
        y: 0,
        yPercent: 0, // Using autoAlpha and y instead of pure yPercent to avoid initial layout shifts
        stagger: 0.15,
        duration: 1.2,
        ease: 'power4.out'
      }, "-=0.5")
      .to('.hero-image', {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.5,
        ease: 'power4.inOut'
      }, "-=1")
      .to('.hero-img-inner', {
        scale: 1,
        duration: 2,
        ease: 'power3.out'
      }, "-=1.5")
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
        <span className="mono text-[10px] md:text-[11px]">N°.01 — Authentic Cafe & Sekuwa</span>
        <span className="mono text-ink-soft text-[10px] md:text-[11px]">Kathmandu, Nepal</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 min-h-0">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center h-full pt-4 lg:pt-0">
          <h1 className="text-[clamp(40px,10vw,90px)] leading-[0.9] tracking-tight mb-6 md:mb-8 font-display px-2 -mx-2">
            <div className="hero-title-line translate-y-8">Where every bite</div>
            <div className="hero-title-line translate-y-8">tells a story,</div>
            <div className="hero-title-line translate-y-8 italic text-accent pr-4">every flame carries</div>
            <div className="hero-title-line translate-y-8 italic text-accent pr-4">a tradition.</div>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="hero-meta translate-y-4">
              <div className="mono text-ink-soft mb-1 md:mb-2">— Fire</div>
              <p className="text-ink-2 text-[14px] md:text-[15px] leading-relaxed max-w-sm">Charcoal-roasted to perfection, bringing out deep, smoky flavors rooted in Kathmandu's sekuwa culture.</p>
            </div>
            <div className="hero-meta translate-y-4">
              <div className="mono text-ink-soft mb-1 md:mb-2">— Spice</div>
              <p className="text-ink-2 text-[14px] md:text-[15px] leading-relaxed max-w-sm">House-blended marinades using authentic local spices sourced directly from the mountains.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="#menu" className="hero-btn translate-y-4 bg-accent text-accent-ink px-6 py-3 mono hover:bg-ink transition-colors rounded-[2px] w-full sm:w-auto text-center inline-block" data-magnetic>
              View Menu →
            </a>
            <a href="#bookings" className="hero-btn translate-y-4 border border-rule px-6 py-3 mono hover:border-ink hover:text-ink text-ink-soft transition-colors rounded-[2px] w-full sm:w-auto text-center inline-block" data-magnetic>
              Book a Table →
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5 flex flex-col h-full py-4 lg:py-12">
          <div className="hero-image w-full flex-1 aspect-square lg:aspect-auto relative overflow-hidden bg-paper-2 rounded-[2px]">
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop" 
              alt="The Sekuwa Grill" 
              className="hero-img-inner w-full h-full object-cover absolute inset-0 origin-center"
            />
          </div>
          <div className="hero-meta flex justify-between items-center mt-3 text-ink-soft shrink-0">
            <span className="mono text-[10px]">Fig. 01 / The Sekuwa Grill</span>
            <span className="mono text-[10px]">↗ 02:34 vibe</span>
          </div>
        </div>

      </div>
    </section>
  );
}
