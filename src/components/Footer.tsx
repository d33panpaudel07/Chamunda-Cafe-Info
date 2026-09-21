import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="w-full bg-ink text-paper pt-32 pb-6 px-6 max-w-[1600px] mx-auto flex flex-col">
      {/* Big Display Type */}
      <div className="mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(60px,12vw,200px)] leading-[0.8] tracking-tight pl-2"
        >
          Chamunda <span className="italic text-accent-gold">Cafe.</span>
        </motion.h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-32">
        <div className="flex flex-col gap-6">
          <h3 className="mono text-paper opacity-50 mb-2">Location</h3>
          <a 
            href="https://share.google/dsAi9T8uWFVtZalUz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[16px] max-w-[200px] text-paper opacity-90 hover:text-accent-gold transition-colors hover:underline"
          >
            Kathmandu<br/>
            Nepal
          </a>
          <div className="mono text-paper opacity-90">
            hello@chamundacafe.com<br/>
            Order Online
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="mono text-paper opacity-50 mb-4">Menu</h3>
          <a href="#menu" className="text-paper opacity-90 hover:text-accent-gold transition-colors w-fit">Sekuwa & Chhoila</a>
          <a href="#menu" className="text-paper opacity-90 hover:text-accent-gold transition-colors w-fit">Thakali Sets</a>
          <a href="#menu" className="text-paper opacity-90 hover:text-accent-gold transition-colors w-fit">Khaja Sets</a>
          <a href="#menu" className="text-paper opacity-90 hover:text-accent-gold transition-colors w-fit">Bar & Drinks</a>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="mono text-paper opacity-50 mb-4">Cafe</h3>
          <a href="#story" className="text-paper opacity-90 hover:text-accent-gold transition-colors w-fit">Our Story</a>
          <a href="#gallery" className="text-paper opacity-90 hover:text-accent-gold transition-colors w-fit">Gallery</a>
          <a href="#bookings" className="text-paper opacity-90 hover:text-accent-gold transition-colors w-fit">Bookings</a>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="mono text-paper opacity-50 mb-4">Follow</h3>
          <a href="#" className="text-paper opacity-90 hover:text-accent-gold transition-colors w-fit">Instagram</a>
          <a href="#" className="text-paper opacity-90 hover:text-accent-gold transition-colors w-fit">Facebook</a>
          <a href="#" className="text-paper opacity-90 hover:text-accent-gold transition-colors w-fit">TikTok</a>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-ink-2 gap-4">
        <span className="mono text-paper opacity-50">© {new Date().getFullYear()} Chamunda Cafe & Sekuwa.</span>
        <span className="mono text-paper opacity-50">Designed for Kathmandu</span>
      </div>
    </footer>
  );
}
