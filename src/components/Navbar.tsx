import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onCopyEmail: (e: React.MouseEvent) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCopyEmail }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '首页', href: '#hero' },
    { label: '经历', href: '#experience' },
    { label: '项目', href: '#projects' },
    { label: '笔记', href: '#notes' },
    { label: '优势', href: '#skills' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'navbar-blur py-4 shadow-healing'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 text-xl font-bold font-quicksand text-text hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent-pink to-accent-purple border-2 border-text flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(74,62,61,1)]">
            <Sparkles className="w-4 h-4 text-text" />
          </div>
          <span>Camille.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-text-secondary hover:text-text transition-colors font-quicksand relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent-pink opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
          <button
            onClick={onCopyEmail}
            className="btn-primary text-sm py-2 px-6"
          >
            联系我
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={onCopyEmail}
            className="btn-primary text-xs py-1.5 px-4"
          >
            联系我
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full bg-surface/80 border-2 border-text text-text hover:bg-usagi-yellow transition-colors shadow-[2px_2px_0px_0px_rgba(74,62,61,1)]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-x-0 top-[73px] p-6 bg-bg/95 backdrop-blur-lg border-b border-border transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-text-secondary hover:text-text py-2 border-b border-border/50 transition-colors font-quicksand"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
