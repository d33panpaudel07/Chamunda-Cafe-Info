import { motion } from 'framer-motion';
import burger from '../assets/burger.jpg';
import c_momo from '../assets/c_momo.jpg';
import jhol_momo from '../assets/jhol_momo.jpg';
import chicken_lollipop from '../assets/chicken_lollipop.jpg';
import { useCart } from './CartProvider';

const signatureItems = [
  { img: jhol_momo, name: "Jhol Momo", desc: "Dumplings swimming in a tangy, spicy sesame broth.", price: "Rs.250" },
  { img: c_momo, name: "C Momo", desc: "Crispy fried momos wok-tossed in a zesty chili sauce.", price: "Rs.280" },
  { img: chicken_lollipop, name: "Grilled Lollipops", desc: "Charcoal-kissed wings marinated in a dry spice rub.", price: "Rs.350" },
  { img: burger, name: "Tower Burger", desc: "House-ground patty, smoked cheese, and secret sekuwa sauce.", price: "Rs.400" },
];

export function Signatures() {
  const { addToCart, setIsCartOpen } = useCart();

  return (
    <section id="signatures" className="bg-[#fcfcfc] text-ink py-24 w-full">
      <div className="px-6 max-w-[1600px] mx-auto w-full relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end py-4 border-b border-rule/50 mb-16 gap-6">
          <div>
            <span className="mono mb-4 block">§ 03 / Signatures</span>
            <h2 className="text-4xl md:text-5xl font-display max-w-md">Flavors that defined us.</h2>
          </div>
          <p className="max-w-xs text-sm text-ink-soft">
            Our most beloved dishes, prepared the same way since day one. No shortcuts, just authentic craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {signatureItems.map((item, i) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col group h-full"
            >
              <div className="aspect-[4/5] bg-white rounded-[2px] overflow-hidden mb-6 relative border border-rule/30 flex items-center justify-center p-4">
                {/* 
                  Using mix-blend-multiply so the stark white backgrounds of these product shots
                  blend perfectly into the card background. 
                */}
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out saturate-[1.1]"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-start mb-2 gap-4">
                <h3 className="font-display text-xl md:text-2xl">{item.name}</h3>
                <span className="mono text-xs whitespace-nowrap mt-1">{item.price}</span>
              </div>
              <p className="text-ink-soft text-sm font-light mt-auto mb-6">
                {item.desc}
              </p>
              <button 
                onClick={() => {
                  addToCart(item.name, item.price, 1);
                  setIsCartOpen(true);
                }}
                className="w-full text-center border border-rule hover:border-ink hover:bg-ink hover:text-paper py-3 mono text-[10px] tracking-widest uppercase transition-all duration-300 active:scale-95 rounded-[2px]"
              >
                Order Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
