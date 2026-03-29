import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { Product } from '@/src/constants';

interface CartItem extends Product {
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
  onCheckout
}) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-xl bg-[#0a0a0a] border-l border-white/5 z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="p-12 flex items-center justify-between border-b border-white/5">
              <div className="space-y-1">
                <h2 className="text-4xl font-black text-white tracking-tighter uppercase">YOUR BAG</h2>
                <p className="text-[10px] text-accent font-black tracking-[0.3em] uppercase">{items.length} ITEMS SELECTED</p>
              </div>
              <button 
                onClick={onClose} 
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-accent transition-all group"
              >
                <X size={20} className="group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-12 space-y-12 no-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-8">
                  <h3 className="text-2xl font-light text-white/20 uppercase tracking-widest italic">Your bag is empty</h3>
                  <button
                    onClick={onClose}
                    className="text-xs font-black text-accent tracking-[0.4em] uppercase hover:text-white transition-colors"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    className="flex gap-8 group"
                  >
                    <div className="w-32 aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-2">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <h3 className="text-xl font-black text-white uppercase tracking-tighter">{item.name}</h3>
                          <p className="text-[10px] text-white/40 font-black tracking-[0.2em] uppercase">{item.category}</p>
                        </div>
                        <p className="text-lg font-black text-accent tracking-tighter">${item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 border border-white/10 px-4 py-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="text-white/40 hover:text-accent transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-black text-white w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="text-white/40 hover:text-accent transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemove(item.id)}
                          className="text-white/20 hover:text-red-500 transition-colors uppercase text-[10px] font-black tracking-[0.2em]"
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-12 border-t border-white/5 space-y-8 bg-black">
                <div className="flex items-end justify-between">
                  <div className="space-y-1">
                    <p className="text-[10px] text-white/40 font-black tracking-[0.3em] uppercase">SUBTOTAL</p>
                    <p className="text-xs text-white/20 font-medium">Shipping and taxes calculated at checkout.</p>
                  </div>
                  <span className="text-4xl font-black text-white tracking-tighter">${subtotal.toFixed(2)}</span>
                </div>
                
                <button
                  onClick={onCheckout}
                  className="w-full py-8 bg-accent text-white font-black text-xs tracking-[0.5em] uppercase hover:bg-blue-600 transition-all shadow-2xl shadow-accent/20"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
