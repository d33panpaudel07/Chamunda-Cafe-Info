import React, { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Plus, Minus } from 'lucide-react';

export type CartItem = {
  name: string;
  price: string;
  quantity: number;
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (name: string, price: string, delta: number) => void;
  getQty: (name: string) => number;
  isCartOpen: boolean;
  setIsCartOpen: (val: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (name: string, price: string, delta: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.name === name);
      if (existing) {
        const nextQty = existing.quantity + delta;
        if (nextQty <= 0) return prev.filter(item => item.name !== name);
        return prev.map(item => item.name === name ? { ...item, quantity: nextQty } : item);
      }
      if (delta > 0) {
        return [...prev, { name, price, quantity: delta }];
      }
      return prev;
    });
  };

  const getQty = (name: string) => cart.find(item => item.name === name)?.quantity || 0;

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, getQty, isCartOpen, setIsCartOpen }}>
      {children}

      {/* Floating Action Button for Cart (when closed) */}
      <AnimatePresence>
        {totalItems > 0 && !isCartOpen && (
          <motion.button 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-6 right-6 z-[90] bg-ink text-paper p-4 px-6 rounded-[2px] shadow-2xl flex items-center gap-4 hover:scale-105 active:scale-95 transition-all border border-rule/20"
          >
            <ShoppingBag size={20} />
            <div className="flex flex-col text-left">
              <span className="mono text-[10px] opacity-70 leading-none">Your Order</span>
              <span className="font-medium text-sm leading-none mt-1">{totalItems} items</span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Slide-out Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-[99]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full max-w-md h-[100dvh] bg-paper shadow-2xl z-[100] flex flex-col border-l border-rule"
            >
              <div className="p-6 border-b border-rule flex justify-between items-center">
                <h2 className="font-display text-2xl">Your Cart</h2>
                <button 
                  onClick={() => setIsCartOpen(false)} 
                  className="p-2 hover:bg-paper-2 rounded-full transition-colors text-ink-soft hover:text-ink"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                {cart.length === 0 ? (
                  <div className="text-center text-ink-soft my-auto">
                    <ShoppingBag size={48} className="mx-auto mb-4 opacity-20" />
                    <p className="font-light">Your cart is empty.</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.name} className="flex justify-between items-center gap-4 pb-6 border-b border-rule/50 last:border-0">
                      <div className="flex flex-col flex-1">
                        <span className="font-medium">{item.name}</span>
                        <span className="mono text-[11px] text-ink-soft mt-1">{item.price}</span>
                      </div>
                      
                      <div className="flex items-center border border-rule rounded-[2px] bg-paper">
                        <button onClick={() => addToCart(item.name, item.price, -1)} className="p-2 hover:bg-paper-2 transition-colors">
                          <Minus size={14} />
                        </button>
                        <span className="mono w-8 text-center text-sm">{item.quantity}</span>
                        <button onClick={() => addToCart(item.name, item.price, 1)} className="p-2 hover:bg-paper-2 transition-colors">
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-rule bg-paper-2">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-medium text-ink-soft">Total Items</span>
                    <span className="mono font-bold text-lg">{totalItems}</span>
                  </div>
                  <a 
                    href={`https://wa.me/9779823301556?text=${encodeURIComponent("Order Details:\n" + cart.map(i => `${i.name} x${i.quantity} (${i.price})`).join('\n'))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center bg-accent text-accent-ink py-4 mono uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all rounded-[2px] shadow-lg"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </CartContext.Provider>
  );
}
