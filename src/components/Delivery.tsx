import { motion } from 'framer-motion';

export function Delivery() {
  return (
    <section className="py-16 px-6 max-w-[1600px] mx-auto w-full">
      <div className="flex justify-between items-center py-4 border-b border-rule mb-12">
        <span className="mono">§ 07 / Delivery & Catering</span>
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-[clamp(40px,8vw,80px)] leading-[0.9] tracking-tighter mb-20 text-center"
      >
        Enjoy Chamunda, <span className="italic text-accent">anywhere.</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
        <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-[1px] bg-rule z-0" />
        
        {[
          { step: '01', title: 'Order', desc: 'Order online directly through our website. We prepare everything fresh to order.' },
          { step: '02', title: 'Package', desc: 'Carefully packed to retain the heat of the sekuwa and the freshness of the spices.' },
          { step: '03', title: 'Enjoy', desc: 'Delivered straight to your door. Note: 10% extra charges apply for Online Food Delivery Services.' }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="flex flex-col items-center text-center relative z-10 bg-paper p-4"
          >
            <div className="w-12 h-12 rounded-full border border-rule bg-paper flex items-center justify-center font-display text-[24px] mb-6">
              {item.step}
            </div>
            <div className="mono mb-4 text-ink">{item.title}</div>
            <p className="text-[15px] text-ink-soft leading-relaxed max-w-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
