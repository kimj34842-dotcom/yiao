import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastCoords, setToastCoords] = useState({ x: 0, y: 0 });

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('camille_aitrainer@163.com').then(() => {
      setToastCoords({ x: e.clientX, y: e.clientY - 40 });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }).catch(console.error);
  };

  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent-pink/50 selection:text-text relative">
      <Navbar onCopyEmail={handleCopyEmail} />
      {children}

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            style={{
              position: 'fixed',
              left: toastCoords.x - 80,
              top: toastCoords.y,
              zIndex: 9999,
            }}
            className="px-4 py-2 rounded-full bg-text text-bg text-xs font-semibold shadow-lg flex items-center gap-1.5 pointer-events-none border border-border/10"
          >
            <span>(•͈⌔•͈⑅)</span>
            <span>已复制到剪贴板啦！</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
