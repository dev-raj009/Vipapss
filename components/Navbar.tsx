'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle, Send, Home, Grid, Info } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/apps', icon: Home },
  { name: 'WhatsApp', href: 'https://whatsapp.com/channel/example', icon: MessageCircle, external: true },
  { name: 'Telegram', href: 'https://t.me/example', icon: Send, external: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-terminal-bg/80 backdrop-blur-lg border-b border-terminal-border py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/apps" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-terminal-accent flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-all duration-300">
              <Grid className="text-terminal-bg w-6 h-6" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-white">
              VIP<span className="text-terminal-accent">STUDY</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                className={`text-sm font-medium transition-colors hover:text-terminal-accent ${
                  pathname === link.href ? 'text-terminal-accent' : 'text-terminal-dim'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-terminal-dim hover:text-white transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[280px] bg-terminal-bg border-l border-terminal-border p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="text-lg font-display font-bold text-white">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-terminal-dim hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 text-lg font-medium text-terminal-dim hover:text-terminal-accent transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-terminal-accent/10 transition-colors">
                      <link.icon className="w-5 h-5" />
                    </div>
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="absolute bottom-10 left-6 right-6">
                <div className="p-4 rounded-lg bg-terminal-accent/5 border border-terminal-border">
                  <p className="text-xs text-terminal-dim mb-2 uppercase tracking-widest">Support</p>
                  <p className="text-sm text-white/80">Need help? Join our community channels.</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
