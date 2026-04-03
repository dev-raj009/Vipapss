'use client';

import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function WhatsAppPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem('whatsapp-popup-seen');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('whatsapp-popup-seen', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            className="relative w-full max-w-sm glass rounded-[2.5rem] p-8 text-center shadow-[0_0_50px_rgba(34,197,94,0.2)]"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-white/30 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-20 h-20 rounded-3xl bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-green-500" />
            </div>

            <h3 className="text-2xl font-display font-bold mb-3">Join Our Channel</h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              Get instant updates on new premium apps, MODs, and exclusive content directly on WhatsApp.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://whatsapp.com/channel/example"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-bold transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
              >
                Join Now <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={handleClose}
                className="py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white/60 font-medium transition-all"
              >
                Maybe Later
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
