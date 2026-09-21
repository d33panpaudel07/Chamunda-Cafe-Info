import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Story', 'Offerings', 'Menu', 'Gallery', 'Bookings'];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled ? 'bg-paper shadow-sm border-b border-rule text-ink py-2' : 'bg-transparent text-ink py-4'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center">
          <a 
            href="#hero" 
            className="font-display text-[18px] lg:text-[22px] whitespace-nowrap hover:text-accent transition-colors"
          >
            Chamunda Cafe <span className="hidden sm:inline">& Sekuwa</span>
          </a>

          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-8 justify-center">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="mono hover:text-accent transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center justify-end gap-6">
            <span className="mono opacity-70">Kathmandu</span>
            <a href="#menu" className="bg-accent text-accent-ink mono px-5 py-2 hover:bg-ink transition-colors rounded-[2px] inline-block" data-magnetic>
              Order / Book Table →
            </a>
          </div>

          <div className="flex lg:hidden justify-end">
            <button onClick={() => setIsOpen(true)} className="p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] bg-ink text-paper flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <a href="#hero" onClick={() => setIsOpen(false)} className="font-display text-[22px] hover:text-accent-gold transition-colors">
                Chamunda
              </a>
              <button onClick={() => setIsOpen(false)} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav aria-label="Mobile navigation" className="flex flex-col gap-6 text-2xl font-display mb-auto">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-accent-gold transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-4 mt-8">
              <span className="mono opacity-70">Kathmandu, Nepal</span>
              <a href="#menu" onClick={() => setIsOpen(false)} className="bg-accent text-accent-ink mono px-5 py-4 w-full text-center hover:bg-accent-gold hover:text-ink transition-colors rounded-[2px] inline-block">
                Order / Book Table →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
