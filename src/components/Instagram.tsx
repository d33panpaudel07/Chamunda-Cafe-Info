import { motion } from 'framer-motion';

export function Instagram() {
  const images = Array.from({ length: 10 }).map((_, i) => `https://images.unsplash.com/photo-${[
    '1544025162-8360d8e24c25', '1555939594-58d7cb561ad1', '1625937759459-00914c6225a8', 
    '1605333556094-1da2418c991c', '1517409228416-8d76fb5a40db', '1632778149955-e80f8ceca2e8',
    '1596622524451-40c24c2ed212', '1504670073073-6123e39e0754', '1512621776951-a57141f2eefd',
    '1551183053-bf91a1d81141'
  ][i]}?q=80&w=600&auto=format&fit=crop`);

  return (
    <section className="py-16 px-0 w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <div className="eyebrow mb-4">Follow along</div>
          <h2 className="font-display text-[40px] md:text-[56px] leading-none">@chamundacafe</h2>
        </div>
        <button className="mono text-ink hover:text-accent transition-colors pb-2 border-b border-ink hover:border-accent" data-magnetic>
          Open in Instagram ↗
        </button>
      </div>

      <div className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pl-6 md:pl-0 md:grid md:grid-cols-5 gap-0">
        {images.map((url, idx) => (
          <motion.a 
            href="#"
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 5) * 0.1 }}
            className="group relative aspect-square overflow-hidden bg-ink-2 snap-center min-w-[280px] md:min-w-0"
          >
            <img 
              src={url} 
              alt={`Instagram post ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="mono text-white">Post 0{idx + 1}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
