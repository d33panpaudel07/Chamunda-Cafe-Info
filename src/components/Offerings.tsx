import { motion } from 'framer-motion';

const offerings = [
  {
    num: '01',
    title: <>The <span className="italic">Sekuwa</span> Grill</>,
    desc: 'Mutton, Pork, Buff, and Chicken marinated in our signature house spices and roasted over live charcoal.',
    tags: '1/2 kg · 1 kg'
  },
  {
    num: '02',
    title: 'Thakali Sets',
    desc: 'The quintessential Nepali dining experience. Traditional veg, chicken, and mutton sets served with local ghee and rich curries.',
    tags: 'Authentic · Plated'
  },
  {
    num: '03',
    title: <><span className="italic">Khaja</span> & Snacks</>,
    desc: 'Perfect for evenings. From spicy Buff Sukuti Sandheko and Mustang Aloo to Chatpate and steamed Momo.',
    tags: 'Spicy · Tangy'
  },
  {
    num: '04',
    title: <>Bar & <span className="italic">Traditional Pours</span></>,
    desc: 'Pour a hot Tongba or traditional Chhyang, or choose from premium spirits like Old Durbar and Gurkhas & Guns.',
    tags: 'Local · Premium'
  }
];

export function Offerings() {
  return (
    <section id="offerings" className="py-16 px-6 max-w-[1600px] mx-auto w-full">
      <div className="flex justify-between items-center py-4 border-b border-rule mb-12">
        <span className="mono">§ 03 / Offerings</span>
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-[clamp(40px,8vw,120px)] leading-[0.9] tracking-tighter mb-20"
      >
        Crafted with local spices,<br/>
        <span className="italic text-accent">grilled to perfection.</span>
      </motion.h2>

      <div className="flex flex-col border-t border-rule">
        {offerings.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group flex flex-col md:flex-row md:items-center py-8 border-b border-rule relative hover:bg-paper-2/50 transition-colors"
            data-magnetic
          >
            <div className="mono text-ink-soft opacity-50 w-16 mb-4 md:mb-0">
              {item.num}
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 md:gap-8 items-center md:pr-16">
              <div className="font-display text-[28px]">{item.title}</div>
              <div className="text-[15px] text-ink-soft max-w-md">{item.desc}</div>
              <div className="mono text-ink-soft md:justify-self-end">{item.tags}</div>
            </div>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center w-12 h-12 border border-ink text-ink bg-paper">
              →
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
