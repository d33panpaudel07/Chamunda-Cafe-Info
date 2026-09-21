import { motion } from 'framer-motion';

export function Marquee() {
  const items = ["Authentic Sekuwa", "Thakali Set", "Chhoila", "Tongba", "Khaja Sets", "Hukka"];

  return (
    <div className="w-full bg-paper-2 border-y border-rule overflow-hidden py-4 flex items-center relative z-10">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20
        }}
      >
        {/* Render twice for continuous loop */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center">
                <span className="font-display italic text-xl px-4 text-ink">{item}</span>
                <span className="text-accent px-2">✦</span>
              </div>
            ))}
            {/* Additional set of items to ensure smooth wrap within the single block */}
            {items.map((item, idx) => (
              <div key={`extra-${idx}`} className="flex items-center">
                <span className="font-display italic text-xl px-4 text-ink">{item}</span>
                <span className="text-accent px-2">✦</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
