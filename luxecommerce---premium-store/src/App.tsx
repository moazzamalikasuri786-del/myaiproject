import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Categories } from './components/Categories';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetails } from './components/ProductDetails';
import { CustomCursor } from './components/CustomCursor';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Product } from './constants';

interface CartItem extends Product {
  quantity: number;
}

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toast, setToast] = useState<{ message: string; isVisible: boolean }>({
    message: '',
    isVisible: false,
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const showToast = (message: string) => {
    setToast({ message, isVisible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }));
    }, 3000);
  };

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`${product.name} added to bag`);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-primary selection:bg-accent selection:text-white">
      {/* Awwwards Elements */}
      <div className="grain-overlay" />
      <CustomCursor />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar 
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
        onViewDetails={(p) => setSelectedProduct(p)}
      />
      
      <main className="relative">
        <Hero />
        
        <div id="shop" className="relative z-10">
          <FeaturedProducts 
            onAddToCart={addToCart} 
            onViewDetails={(p) => setSelectedProduct(p)}
          />
        </div>
        
        <Categories />
        
        <WhyChooseUs />
        
        <Testimonials />
        
        {/* Newsletter Section - Handcrafted Editorial Style */}
        <section className="py-48 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="editorial-text text-white mb-12">
                  JOIN THE <br />
                  <span className="text-accent italic">LUXE</span> CIRCLE
                </h2>
                <p className="text-slate-400 text-2xl max-w-md leading-tight font-light">
                  Stay ahead of the curve. Get exclusive access to drops, private sales, and the future of premium quality.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <form 
                  className="flex flex-col gap-8"
                  onSubmit={(e) => {
                    e.preventDefault();
                    showToast('Successfully subscribed to newsletter!');
                  }}
                >
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder="YOUR EMAIL ADDRESS"
                      required
                      className="w-full bg-transparent border-b-2 border-white/10 py-8 text-3xl font-display uppercase focus:outline-none focus:border-accent transition-all placeholder:text-white/10"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-focus-within:w-full transition-all duration-700" />
                  </div>
                  
                  <button
                    type="submit"
                    className="self-start group flex items-center gap-4 text-2xl font-black tracking-tighter hover:text-accent transition-colors"
                  >
                    SUBSCRIBE NOW
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
                      →
                    </div>
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Overlays */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          showToast('Checkout process initiated');
        }}
      />

      <AnimatePresence>
        {selectedProduct && (
          <ProductDetails 
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={addToCart}
          />
        )}
      </AnimatePresence>

      <Toast 
        message={toast.message} 
        isVisible={toast.isVisible} 
        onClose={() => setToast((prev) => ({ ...prev, isVisible: false }))} 
      />
    </div>
  );
}
