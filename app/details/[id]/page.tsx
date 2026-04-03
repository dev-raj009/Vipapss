'use client';

import { motion } from 'motion/react';
import { useParams, useRouter } from 'next/navigation';
import { appsData } from '@/data/apps';
import Navbar from '@/components/Navbar';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Image from 'next/image';
import { ChevronLeft, Download, ExternalLink, Tag, Layers, Star, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import Modal from '@/components/Modal';

export default function AppDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const app = appsData.find(a => a.id === id);

  const handleCopyToken = () => {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY5ODMxNCIsImVtYWlsIjoidmlzaGFsb2ZmaWNpYWwyNDFAZ21haWwuY29tIiwibmFtZSI6IlZpc2hhbCBLdW1hciIsInRpbWVzdGFtcCI6MTc3MTU4NjQzMSwidGVuYW50VHlwZSI6InVzZXIiLCJ0ZW5hbnROYW1lIjoicmd2aWtyYW1qZWV0X2RiIiwidGVuYW50SWQiOiIiLCJkaXNwb3NhYmxlIjpmYWxzZX0.mORGkrIgBmsPEQykl9SbUy555YaoP-EmG-TekhnOyTQ~@SDV_BOTX";
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!app) {
    return (
      <div className="min-h-screen bg-terminal-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">App Not Found</h1>
          <button 
            onClick={() => router.push('/apps')}
            className="px-6 py-3 rounded-lg bg-terminal-accent text-terminal-bg font-bold"
          >
            Back to Apps
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-terminal-bg pt-32 pb-20">
      <Navbar />
      
      <Container>
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-terminal-dim hover:text-white transition-colors mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Info */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row gap-8 items-start mb-12"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-terminal-border shadow-2xl shrink-0">
                <Image
                  src={app.icon}
                  alt={app.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-md bg-terminal-accent/10 border border-terminal-accent/30 text-terminal-accent text-xs font-bold uppercase tracking-widest">
                    {app.type}
                  </span>
                  <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-terminal-dim text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                    <Layers className="w-3 h-3" /> {app.category}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight text-white">
                  {app.name}
                </h1>
                <p className="text-xl text-terminal-dim leading-relaxed">
                  {app.description}
                </p>
              </div>
            </motion.div>

            {/* Screenshots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                <Star className="w-5 h-5 text-terminal-accent" /> Screenshots
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {app.screenshots.map((shot, i) => (
                  <div 
                    key={i} 
                    className="relative w-[280px] md:w-[400px] aspect-video rounded-xl overflow-hidden border border-terminal-border shrink-0 group"
                  >
                    <Image
                      src={shot}
                      alt={`${app.name} screenshot ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="terminal-card"
            >
              <h3 className="text-xl font-bold mb-6 text-white">About this app</h3>
              <p className="text-terminal-dim leading-relaxed whitespace-pre-wrap">
                {app.longDescription}
              </p>
              
              <div className="mt-10 flex flex-wrap gap-2">
                {app.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-white/5 border border-white/10 text-sm text-terminal-dim">
                    <Tag className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Actions */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="sticky top-32 terminal-card border-terminal-accent/20"
            >
              <div className="mb-8">
                <p className="text-sm text-terminal-dim uppercase tracking-widest mb-2">App ID</p>
                <p className="font-mono text-terminal-accent">{app.id.padStart(6, '0')}</p>
              </div>

              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full flex items-center justify-center gap-3 py-5 rounded-lg bg-terminal-accent text-terminal-bg font-bold shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                >
                  <Download className="w-5 h-5" /> Download Now
                </button>
                <a
                  href={app.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 font-bold transition-all text-white"
                >
                  <ExternalLink className="w-5 h-5" /> Visit Website
                </a>
              </div>

              <div className="mt-10 pt-10 border-t border-terminal-border">
                <div className="flex items-center justify-between text-sm text-terminal-dim mb-4">
                  <span>Version</span>
                  <span className="text-white">v2.4.0</span>
                </div>
                <div className="flex items-center justify-between text-sm text-terminal-dim mb-4">
                  <span>Size</span>
                  <span className="text-white">48.5 MB</span>
                </div>
                <div className="flex items-center justify-between text-sm text-terminal-dim">
                  <span>Last Updated</span>
                  <span className="text-white">2 days ago</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={app.id === '6' ? "App Activation" : "Download"}
      >
        {app.id === '6' ? (
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
                href={app.website}
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
            <h4 className="text-2xl font-display font-bold mb-4">Coming Soon 🚀</h4>
            <p className="text-white/60 mb-8">
              We are preparing the high-speed download links for {app.name}. 
              Check back soon or join our community for updates!
            </p>
            <Button onClick={() => setIsModalOpen(false)} className="w-full">
              Got it
            </Button>
          </div>
        )}
      </Modal>
    </main>
  );
}
