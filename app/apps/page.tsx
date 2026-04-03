'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Container from '@/components/Container';
import AppCard from '@/components/AppCard';
import Modal from '@/components/Modal';
import WhatsAppPopup from '@/components/WhatsAppPopup';
import { appsData, AppData } from '@/data/apps';
import { Rocket, Search, Filter, Copy, Check, Download } from 'lucide-react';

export default function AppsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [copied, setCopied] = useState(false);

  const categories = ['All', ...Array.from(new Set(appsData.map(app => app.category)))];

  const filteredApps = appsData.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         app.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || app.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (app: AppData) => {
    setSelectedApp(app);
    setIsModalOpen(true);
    setCopied(false);
  };

  const handleCopyToken = () => {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY5ODMxNCIsImVtYWlsIjoidmlzaGFsb2ZmaWNpYWwyNDFAZ21haWwuY29tIiwibmFtZSI6IlZpc2hhbCBLdW1hciIsInRpbWVzdGFtcCI6MTc3MTU4NjQzMSwidGVuYW50VHlwZSI6InVzZXIiLCJ0ZW5hbnROYW1lIjoicmd2aWtyYW1qZWV0X2RiIiwidGVuYW50SWQiOiIiLCJkaXNwb3NhYmxlIjpmYWxzZX0.mORGkrIgBmsPEQykl9SbUy555YaoP-EmG-TekhnOyTQ~@SDV_BOTX";
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-terminal-bg pt-32 pb-20">
      <Navbar />
      <WhatsAppPopup />

      <Container>
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
                Explore <span className="text-terminal-accent">Apps</span>
              </h1>
              <p className="text-terminal-dim max-w-xl">
                Browse through our collection of premium tools, games, and applications. Everything you need in one place.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-terminal-dim group-focus-within:text-terminal-accent transition-colors" />
                <input
                  type="text"
                  placeholder="Search apps..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-terminal-border focus:border-terminal-accent/50 focus:outline-none transition-all text-sm text-white"
                />
              </div>
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mt-8 overflow-x-auto pb-4 no-scrollbar"
          >
            <Filter className="w-4 h-4 text-terminal-dim shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all border ${
                  activeCategory === cat
                    ? 'bg-terminal-accent text-terminal-bg border-terminal-accent shadow-[0_0_15px_rgba(251,191,36,0.3)]'
                    : 'bg-white/5 text-terminal-dim border-white/10 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Apps Grid */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredApps.map((app, i) => (
              <AppCard key={app.id} app={app} onDownload={handleDownload} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-terminal-dim" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">No apps found</h3>
            <p className="text-terminal-dim">Try adjusting your search or category filters.</p>
          </div>
        )}
      </Container>

      {/* Download Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedApp?.id === '6' ? "App Activation" : "Download App"}
      >
        {selectedApp?.id === '6' ? (
          <div className="flex flex-col h-full">
            <div className="flex-grow overflow-y-auto max-h-[60vh] pr-2 no-scrollbar">
              <p className="text-[10px] text-terminal-dim/60 leading-tight mb-6 text-justify">
                By downloading this application, you acknowledge that you are accessing a premium modified version of RG Vikramjeet. This token is required for initial activation and authentication within the app environment. Please ensure you copy the token provided below before proceeding to the download page. Unauthorized distribution of this token may lead to access revocation. Our systems monitor token usage to ensure a fair experience for all VIP members. The download link will redirect you to our secure hosting platform.
              </p>

              <div className="text-center mb-6">
                <h4 className="text-sm font-bold text-terminal-accent uppercase tracking-widest mb-4">App Token</h4>
                <div className="relative group">
                  <div className="w-full p-4 rounded-lg bg-black/40 border border-terminal-border font-mono text-[10px] break-all text-terminal-dim/80 text-left pr-12">
                    eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY5ODMxNCIsImVtYWlsIjoidmlzaGFsb2ZmaWNpYWwyNDFAZ21haWwuY29tIiwibmFtZSI6IlZpc2hhbCBLdW1hciIsInRpbWVzdGFtcCI6MTc3MTU4NjQzMSwidGVuYW50VHlwZSI6InVzZXIiLCJ0ZW5hbnROYW1lIjoicmd2aWtyYW1qZWV0X2RiIiwidGVuYW50SWQiOiIiLCJkaXNwb3NhYmxlIjpmYWxzZX0.mORGkrIgBmsPEQykl9SbUy555YaoP-EmG-TekhnOyTQ~@SDV_BOTX
                  </div>
                  <button
                    onClick={handleCopyToken}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md bg-terminal-accent text-terminal-bg hover:scale-105 transition-transform"
                    title="Copy Token"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <button
                  onClick={handleCopyToken}
                  className="mt-4 px-6 py-2 rounded-md border border-terminal-accent text-terminal-accent text-xs font-bold hover:bg-terminal-accent/10 transition-colors"
                >
                  {copied ? "TOKEN COPIED" : "COPY TOKEN"}
                </button>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-terminal-border">
              <a
                href={selectedApp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-lg bg-terminal-accent text-terminal-bg font-bold shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:scale-[1.02] transition-transform"
              >
                <Download className="w-5 h-5" /> DOWNLOAD NOW
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="w-24 h-24 rounded-2xl bg-terminal-accent/10 flex items-center justify-center mx-auto mb-8 animate-bounce">
              <Rocket className="w-12 h-12 text-terminal-accent" />
            </div>
            <h4 className="text-2xl font-display font-bold mb-4 text-white">Coming Soon 🚀</h4>
            <p className="text-terminal-dim mb-8 leading-relaxed">
              We are currently optimizing the servers for <span className="text-white font-bold">{selectedApp?.name}</span>. 
              Join our WhatsApp channel to be notified as soon as it&apos;s live!
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://whatsapp.com/channel/example"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 rounded-lg bg-terminal-accent text-terminal-bg font-bold hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all"
              >
                Join WhatsApp Channel
              </a>
              <button
                onClick={() => setIsModalOpen(false)}
                className="py-4 rounded-lg bg-white/5 hover:bg-white/10 text-terminal-dim font-medium transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
}
