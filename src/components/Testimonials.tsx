import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "The Mutton Sekuwa here is unmatched. The smokiness from the charcoal and the perfect blend of spices took me right back to the roots of Kathmandu street food, but in a cozy cafe setting.",
    author: "Anish M.",
    location: "Kathmandu",
    avatar: "https://i.pravatar.cc/150?u=anish"
  },
  {
    quote: "A perfect weekend spot. We ordered the Buff Khaja set and a Tongba. The vibe, the hospitality, and the flavors make it feel exactly like they promise—your taste, your home.",
    author: "Sunita S.",
    location: "Lalitpur",
    avatar: "https://i.pravatar.cc/150?u=sunita"
  },
  {
    quote: "Found our new regular spot. The Mustang Aloo is dangerously addictive, and pairing it with a chilled Barhasinghe on a Friday evening is perfection.",
    author: "Roshan P.",
    location: "KTM",
    avatar: "https://i.pravatar.cc/150?u=roshan"
  }
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 px-6 max-w-[1600px] mx-auto w-full bg-paper-2 my-24 border-y border-rule">
      <div className="flex justify-between items-center py-4 border-b border-rule mb-16">
        <span className="mono">§ 06 / Testimonials</span>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <img 
              src={testimonials[current].avatar} 
              alt={testimonials[current].author} 
              className="w-[60px] h-[60px] rounded-full border border-rule object-cover mb-8 grayscale"
            />
            <blockquote className="font-display text-[24px] md:text-[32px] italic leading-tight text-ink mb-8">
              "{testimonials[current].quote}"
            </blockquote>
            <cite className="mono text-ink-soft not-italic">
              {testimonials[current].author} · {testimonials[current].location}
            </cite>
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-0 md:-mx-20 pointer-events-none">
          <button onClick={prev} className="pointer-events-auto p-4 hover:text-accent transition-colors" data-magnetic>
            <ArrowLeft strokeWidth={1} size={32} />
          </button>
          <button onClick={next} className="pointer-events-auto p-4 hover:text-accent transition-colors" data-magnetic>
            <ArrowRight strokeWidth={1} size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
