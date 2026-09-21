import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { useCart } from './CartProvider';

const menuData = {
  'Sekuwa & Chhoila': [
    { name: 'Mutton Sekuwa', desc: 'House signature, charcoal-roasted mutton chunks.', price: 'Rs. 1300 / 1/2kg', badges: ['Signature', 'Fire'] },
    { name: 'Buff Sukuti Sandheko', desc: 'Dry meat tossed with vibrant local spices, onions, and chillies.', price: 'Rs. 300', badges: ['Spicy'] },
    { name: 'Chicken Chhoila', desc: 'Traditional Newari spiced grilled chicken, deeply flavorful.', price: 'Rs. 500 / 1/2kg', badges: ['Traditional'] },
    { name: 'Fish Poleko', desc: 'Whole fish marinated and roasted over fire.', price: 'Rs. 1000 / 1kg', badges: [] },
  ],
  'Khaja & Thakali': [
    { name: 'Mutton Thakali Set', desc: 'Rice, black dal, mutton curry, seasonal veg, pickle & ghee.', price: 'Rs. 350', badges: ['Plated'] },
    { name: 'Buff Khaja Set', desc: 'Beaten rice served with buff curry, roasted soybeans, and sides.', price: 'Rs. 325', badges: [] },
    { name: 'Veg Biryani', desc: 'Fragrant basmati rice layered with spiced vegetables.', price: 'Rs. 200', badges: ['Veg'] },
    { name: 'Chicken Khaja Set', desc: 'Beaten rice served with chicken curry and traditional accompaniments.', price: 'Rs. 300', badges: [] },
  ],
  'Snacks & Momo': [
    { name: 'Chicken Momo', desc: 'Steamed dumplings filled with minced chicken and spices.', price: 'Rs. 150', badges: ['Popular'] },
    { name: 'Mustang Aloo', desc: 'Crispy Himalayan potatoes tossed with timur and chili.', price: 'Rs. 165', badges: ['Spicy'] },
    { name: 'Wai Wai Sadheko', desc: 'Tangy, spicy noodle salad with fresh onions and tomatoes.', price: 'Rs. 90', badges: ['Tangy'] },
    { name: 'Mushroom Chilli', desc: 'Battered and wok-tossed mushrooms with peppers and soy.', price: 'Rs. 225', badges: ['Veg'] },
  ],
  'Drinks & Bar': [
    { name: 'Tongba', desc: 'Traditional hot millet beer served in a wooden vessel.', price: 'Rs. 200', badges: ['Hot', 'Local'] },
    { name: 'Old Durbar (Black)', desc: 'Premium blended Nepali whiskey.', price: 'Rs. 380 / 60ml', badges: ['Premium'] },
    { name: 'Gurkhas & Guns', desc: 'Smooth local whiskey blend.', price: 'Rs. 325 / 60ml', badges: [] },
    { name: 'Hukka', desc: 'Available in any flavor to accompany your evening.', price: 'Rs. 375', badges: ['Experience'] },
  ]
};

type Tab = keyof typeof menuData;

export function Menu() {
  const tabs = Object.keys(menuData) as Tab[];
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);
  const { addToCart, getQty } = useCart();

  return (
    <section id="menu" className="py-16 px-6 max-w-[1600px] mx-auto w-full relative">
      <div className="flex justify-between items-center py-4 border-b border-rule mb-12">
        <span className="mono">§ 04 / Menu</span>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-rule pb-4 mb-12">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            data-magnetic
            className={cn(
              "px-6 py-2 mono rounded-[2px] transition-all duration-300",
              activeTab === tab ? "bg-ink text-paper" : "bg-transparent text-ink hover:bg-paper-2"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="relative min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col pb-24"
          >
            <h3 className="font-display text-[28px] mb-8">{activeTab}</h3>
            
            <div className="flex flex-col border-t border-rule">
              {menuData[activeTab].map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-rule gap-4 group hover:bg-paper-2/30 transition-colors px-2 -mx-2">
                  <div className="flex flex-col gap-1 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-[16px]">{item.name}</span>
                      {item.badges.map(badge => (
                        <span key={badge} className="mono text-[10px] px-2 py-0.5 border border-rule rounded-full bg-paper text-ink-soft">
                          {badge}
                        </span>
                      ))}
                    </div>
                    <span className="text-[14px] text-ink-soft font-light max-w-lg">{item.desc}</span>
                  </div>
                  
                  <div className="flex items-center gap-6 shrink-0">
                    <div className="mono text-ink">
                      {item.price}
                    </div>
                    <div className="flex items-center border border-rule rounded-[2px] bg-paper">
                      <button onClick={() => addToCart(item.name, item.price, -1)} className="px-3 py-1 hover:bg-paper-2 text-ink-soft hover:text-ink active:scale-95 transition-all">-</button>
                      <span className="mono w-6 text-center">{getQty(item.name)}</span>
                      <button onClick={() => addToCart(item.name, item.price, 1)} className="px-3 py-1 hover:bg-paper-2 text-ink-soft hover:text-ink active:scale-95 transition-all">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
