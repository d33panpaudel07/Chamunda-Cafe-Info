import { motion } from 'framer-motion';
import combo1 from '../assets/combo_1.jpg';
import combo2 from '../assets/combo_2.jpg';
import breakfastCombo from '../assets/breakfast combo.jpg';
import { useCart } from './CartProvider';

export function Combos() {
  const { addToCart, setIsCartOpen } = useCart();

  const handleOrderCombo = (name: string, price: string) => {
    addToCart(name, price, 1);
    setIsCartOpen(true);
  };

  return (
    <section id="combos" className="py-16 px-6 max-w-[1600px] mx-auto w-full relative">
      <div className="flex justify-between items-center py-4 border-b border-rule mb-12">
        <span className="mono">§ 02 / Curated Combos</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 min-h-[600px] lg:min-h-[800px]">
        {/* Large Main Combo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 relative overflow-hidden bg-ink rounded-[2px] min-h-[400px] group"
        >
          <img 
            src={combo1} 
            alt="Signature Feast Combo" 
            className="w-full h-full object-cover absolute inset-0 opacity-80 group-hover:scale-105 transition-transform duration-[1.5s] ease-out brightness-90 saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 text-paper w-full">
            <h3 className="text-4xl md:text-5xl font-display mb-4">The Grand Feast</h3>
            <p className="text-paper-2/90 max-w-md font-light text-sm md:text-base leading-relaxed mb-6">
              A carefully curated selection of our finest charcoal-grilled meats, house-made dips, and authentic sides. Designed to share.
            </p>
            <button 
              onClick={() => handleOrderCombo("The Grand Feast", "Rs.2499")}
              className="bg-paper text-ink px-6 py-3 mono text-[10px] md:text-[11px] hover:bg-white active:scale-95 transition-all rounded-[2px]"
            >
              Order Combo Rs.2499
            </button>
          </div>
        </motion.div>

        {/* Right Stack */}
        <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 relative overflow-hidden bg-ink rounded-[2px] min-h-[300px] group"
          >
            <img 
              src={breakfastCombo} 
              alt="Premium Breakfast Combo" 
              className="w-full h-full object-cover absolute inset-0 opacity-80 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 text-paper w-full">
              <h3 className="text-2xl md:text-3xl font-display mb-2">Morning Special</h3>
              <p className="text-paper-2/80 font-light text-xs md:text-sm mb-4">Start your day with Himalayan herbs and freshly brewed tea.</p>
              <button 
                onClick={() => handleOrderCombo("Morning Special", "Rs.450")}
                className="mono text-[10px] text-accent flex items-center gap-2 hover:text-white active:scale-95 transition-all"
              >
                Add Set (Rs.450) <span className="text-lg leading-none">→</span>
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative overflow-hidden bg-ink rounded-[2px] min-h-[300px] group"
          >
            <img 
              src={combo2} 
              alt="Couples Combo" 
              className="w-full h-full object-cover absolute inset-0 opacity-80 group-hover:scale-105 transition-transform duration-[1.5s] ease-out brightness-90 saturate-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 text-paper w-full">
              <h3 className="text-2xl md:text-3xl font-display mb-2">Chef's Picks</h3>
              <p className="text-paper-2/80 font-light text-xs md:text-sm mb-4">A perfect pairing for two, highlighting our smokiest spices.</p>
              <button 
                onClick={() => handleOrderCombo("Chef's Picks", "Rs.1200")}
                className="mono text-[10px] text-accent flex items-center gap-2 hover:text-white active:scale-95 transition-all"
              >
                Add Set (Rs.1200) <span className="text-lg leading-none">→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
