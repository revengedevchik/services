'use client';

import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300">
      <nav
        className={`
          relative overflow-hidden rounded-2xl px-6 py-4
          backdrop-blur-md bg-white/10 border border-white/20
          shadow-lg shadow-white/5
          transition-all duration-300
          ${scrolled ? 'shadow-xl shadow-white/10 bg-white/20' : ''}
        `}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="relative group cursor-pointer">
              <div className="relative p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 transition-all group-hover:bg-white/20 group-hover:scale-110">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
              </div>
              <div className="absolute inset-0 bg-white/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Главная
              </a>
              <a href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Услуги
              </a>
              <a href="#animations" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Анимации
              </a>
              <a href="#testimonials" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Отзывы
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://t.me/revenge_offical"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white text-black rounded-lg hover:bg-gray-200 active:bg-gray-300 transition-all active:scale-95"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
              Telegram
            </a>
            
            <button 
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 active:bg-white/20 rounded-lg transition-all active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
