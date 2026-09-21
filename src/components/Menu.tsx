import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartProvider';
import { Search } from 'lucide-react';

const menuCategories = [
  {
    title: "Breakfast & Soup",
    items: [
      { name: "Plain Omlette", price: "90", desc: "" },
      { name: "Masala Omlette", price: "100", desc: "" },
      { name: "Veg Sandwich", price: "165", desc: "" },
      { name: "Chicken Sandwich", price: "200", desc: "" },
      { name: "Egg Sandwich", price: "195", desc: "" },
      { name: "Egg Boil (per pc.)", price: "45", desc: "" },
      { name: "Veg Soup", price: "100", desc: "" },
      { name: "Chicken Soup", price: "130", desc: "" },
      { name: "Mushroom Soup", price: "130", desc: "" },
    ]
  },
  {
    title: "Chowmein & Fried Rice",
    items: [
      { name: "Veg Chowmein", price: "120", desc: "" },
      { name: "Chicken Chowmein", price: "150", desc: "" },
      { name: "Buff Chowmein", price: "160", desc: "" },
      { name: "Mix Chowmein", price: "160", desc: "" },
      { name: "Veg Fried Rice", price: "130", desc: "" },
      { name: "Chicken Fried Rice", price: "165", desc: "" },
      { name: "Buff Fried Rice", price: "175", desc: "" },
      { name: "Mixed Fried Rice", price: "190", desc: "" },
    ]
  },
  {
    title: "Momo & Rolls",
    items: [
      { name: "Veg Momo", price: "120", desc: "" },
      { name: "Chicken Momo", price: "150", desc: "" },
      { name: "Buff Momo", price: "160", desc: "" },
      { name: "Veg Katti Roll", price: "120", desc: "" },
      { name: "Egg Katti Roll", price: "140", desc: "" },
      { name: "Chicken Katti Roll", price: "150", desc: "" },
      { name: "Mixed Katti Roll", price: "180", desc: "" },
    ]
  },
  {
    title: "Burger & Veg Items",
    items: [
      { name: "Veg Burger", price: "175", desc: "" },
      { name: "Chicken Burger", price: "200", desc: "" },
      { name: "Ham Burger", price: "250", desc: "" },
      { name: "Mustang Aloo", price: "165", desc: "" },
      { name: "French Fries", price: "160", desc: "" },
      { name: "Mushroom Chilli", price: "225", desc: "" },
      { name: "Chips Chilli", price: "165", desc: "" },
      { name: "Peanuts / Bhatmas Sadheko", price: "145", desc: "" },
      { name: "Green Bhatmas Sadheko", price: "170", desc: "" },
      { name: "Chatpate", price: "120", desc: "" },
      { name: "Wai Wai Sadheko", price: "90", desc: "" },
    ]
  },
  {
    title: "Chicken & Buff Items",
    items: [
      { name: "Chicken Chilli", price: "225", desc: "" },
      { name: "Chicken Drumstick / Wings", price: "225", desc: "" },
      { name: "Chicken Sadheko", price: "225", desc: "" },
      { name: "Boiled Chicken", price: "225", desc: "" },
      { name: "Timur Chicken", price: "250", desc: "" },
      { name: "Chicken / Buff Sausage Fry", price: "200", desc: "" },
      { name: "Buff Chilli", price: "300", desc: "" },
      { name: "Buff Sukuti Sandheko", price: "300", desc: "" },
    ]
  },
  {
    title: "Mutton & Fish",
    items: [
      { name: "Tauko Boil", price: "300", desc: "" },
      { name: "Tauko Dry Fry", price: "325", desc: "" },
      { name: "Rakti Dry Fry", price: "250", desc: "" },
      { name: "Bhutan", price: "250", desc: "" },
      { name: "Fish Poleko (750 gm)", price: "750", desc: "" },
      { name: "Fish Poleko (1 kg)", price: "1000", desc: "" },
    ]
  },
  {
    title: "Sets & Biryani",
    items: [
      { name: "Veg Thakali Set", price: "250", desc: "" },
      { name: "Chicken Thakali Set", price: "300", desc: "" },
      { name: "Mutton Thakali Set", price: "350", desc: "" },
      { name: "Veg Khaja Set", price: "275", desc: "" },
      { name: "Chicken Khaja Set", price: "300", desc: "" },
      { name: "Pork Khaja Set", price: "325", desc: "" },
      { name: "Mutton Khaja Set", price: "400", desc: "" },
      { name: "Chicken Biryani", price: "300", desc: "" },
      { name: "Mutton Biryani", price: "350", desc: "" },
    ]
  },
  {
    title: "Sekuwa (200gm)",
    items: [
      { name: "Mutton Sekuwa", price: "500", desc: "Available up to 1kg (2500)" },
      { name: "Pork Sekuwa", price: "250", desc: "Available up to 1kg (1000)" },
      { name: "Buff Sekuwa", price: "250", desc: "Available up to 1kg (1000)" },
      { name: "Chicken Sekuwa", price: "200", desc: "Available up to 1kg (900)" },
      { name: "Wings Sekuwa", price: "190", desc: "" },
      { name: "Poleko / Roast Chicken", price: "200", desc: "" },
    ]
  },
  {
    title: "Chhoila & Pakku (200gm)",
    items: [
      { name: "Mutton Chhoila", price: "525", desc: "" },
      { name: "Chicken Chhoila", price: "225", desc: "" },
      { name: "Buff Chhoila", price: "275", desc: "" },
      { name: "Pork Chhoila", price: "275", desc: "" },
      { name: "Mutton Pakku", price: "500", desc: "" },
      { name: "Local Chicken Pakku", price: "350", desc: "" },
    ]
  },
  {
    title: "Drinks & Bar",
    items: [
      { name: "Coke / Pepsi / Dew", price: "65", desc: "" },
      { name: "Real Juice", price: "50", desc: "" },
      { name: "Red Bull", price: "150", desc: "" },
      { name: "Tongba", price: "200", desc: "Traditional" },
      { name: "Local Raksi (Quarter)", price: "100", desc: "" },
      { name: "Chhyang (per glass)", price: "60", desc: "" },
      { name: "Tuborg / Carlsberg", price: "490", desc: "540 for Carlsberg" },
      { name: "Apple Cider", price: "250", desc: "" },
    ]
  }
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].title);
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart, setIsCartOpen } = useCart();

  // Filter logic
  let displayedCategories = menuCategories;
  
  if (searchTerm.trim() !== '') {
    const q = searchTerm.toLowerCase();
    
    displayedCategories = menuCategories.map(cat => ({
      ...cat,
      items: cat.items.filter(item => 
        item.name.toLowerCase().includes(q) || 
        item.price.includes(q)
      )
    })).filter(cat => cat.items.length > 0);
  } else {
    // If no search, just show the active category
    displayedCategories = menuCategories.filter(cat => cat.title === activeCategory);
  }

  return (
    <section id="menu" className="w-full bg-paper text-ink py-24 min-h-[80svh]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col h-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="font-display text-[48px] md:text-[72px] leading-[0.9] tracking-tight">
            The full<br/><span className="text-accent italic pr-4">menu.</span>
          </h2>
          
          <div className="relative w-full md:w-[300px]">
            <input 
              type="text" 
              placeholder="Search dishes, prices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-b border-ink/30 px-0 py-3 pr-8 focus:outline-none focus:border-accent transition-colors font-mono text-sm placeholder:text-ink-soft/50"
            />
            <Search size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-ink-soft pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 flex-1">
          {/* Categories Sidebar */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-8 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide shrink-0 border-b lg:border-b-0 border-rule/50">
            {menuCategories.map((cat, i) => {
              const isActive = activeCategory === cat.title;
              return (
                <button
                  key={i}
                  onClick={() => setActiveCategory(cat.title)}
                  className={`relative text-left whitespace-nowrap lg:whitespace-normal transition-colors duration-300 mono text-sm md:text-base pb-2 lg:pb-1 ${
                    isActive ? 'text-ink font-medium' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {cat.title}
                  {isActive && (
                    <motion.div 
                      layoutId="activeMenuCategory"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Menu Items List */}
          <div className="lg:col-span-9 flex-1">
            <AnimatePresence mode="popLayout">
              {displayedCategories.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="py-12 text-center text-ink-soft mono"
                >
                  No items found for "{searchTerm}"
                </motion.div>
              )}
              
              {displayedCategories.map((cat, catIdx) => (
                <motion.div
                  key={cat.title + (searchTerm ? '-search' : '-tab')}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="mb-12 last:mb-0"
                >
                  {searchTerm !== '' && (
                    <h3 className="mono text-xs text-accent mb-6 uppercase tracking-widest">{cat.title}</h3>
                  )}
                  <div className="flex flex-col gap-6">
                    {cat.items.map((item, i) => (
                      <div key={i} className="group flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 pb-6 border-b border-rule/30">
                        <div className="flex-1 max-w-xl">
                          <h4 className="text-xl md:text-2xl font-display group-hover:text-accent transition-colors">{item.name}</h4>
                          {item.desc && (
                            <p className="text-ink-soft text-sm font-light mt-2">{item.desc}</p>
                          )}
                        </div>
                        <div className="flex justify-between md:justify-end items-center gap-6 shrink-0 w-full md:w-auto mt-2 md:mt-0">
                          <span className="mono">Rs. {item.price}</span>
                          <button 
                            onClick={() => {
                              addToCart(item.name, `Rs. ${item.price}`, 1);
                              setIsCartOpen(true);
                            }}
                            className="bg-paper-2 hover:bg-ink hover:text-paper px-4 py-2 mono text-xs uppercase tracking-widest transition-all duration-300 active:scale-95 rounded-[2px] border border-rule/50"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
