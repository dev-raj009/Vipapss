'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        router.push('/get-started');
      }, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Animated Background Gradients */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-terminal-accent/10 blur-[120px] rounded-full"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-terminal-accent/5 blur-[100px] rounded-full"
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center"
          >
            <motion.h1
              animate={{
                textShadow: [
                  "0 0 10px rgba(251, 191, 36, 0.3)",
                  "0 0 30px rgba(251, 191, 36, 0.6)",
                  "0 0 10px rgba(251, 191, 36, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-terminal-accent"
            >
              VIP STUDY
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-terminal-dim font-mono tracking-widest uppercase text-xs"
            >
              Premium Apps & MOD APKs
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
