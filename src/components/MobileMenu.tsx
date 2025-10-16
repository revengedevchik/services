'use client';

import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] w-screen h-screen" style={{ animation: 'menu-fade-in 0.25s ease-out' }}>
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 w-full h-full bg-black/90 backdrop-blur-3xl"
        onClick={onClose}
        style={{ animation: 'backdrop-fade 0.3s ease-out' }}
      />

      {/* Animated circles in background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '0s', animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-float" 
             style={{ animationDelay: '2s', animationDuration: '8s' }} />
      </div>

      {/* Logo */}
      <div className="absolute top-8 left-8 z-20 flex items-center gap-2" style={{ animation: 'slide-in-left 0.4s ease-out' }}>
        <div className="relative p-2 rounded-lg bg-white/10 backdrop-blur-xl border border-white/30 shadow-lg shadow-white/5">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 z-20 p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 active:scale-95 transition-all shadow-lg shadow-white/5"
        style={{ animation: 'slide-in-right 0.4s ease-out' }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Menu content - ТОЧНО ПО ЦЕНТРУ */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 px-8">
        <div className="flex flex-col items-center gap-6 w-full max-w-xs">
          <a 
            href="#home"
            onClick={onClose}
            className="w-full px-8 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white rounded-2xl text-lg font-semibold active:scale-95 transition-all shadow-xl shadow-white/5 text-center"
            style={{ animation: 'scale-in 0.4s ease-out 0.1s backwards' }}
          >
            Главная
          </a>
          <a 
            href="#services"
            onClick={onClose}
            className="w-full px-8 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white rounded-2xl text-lg font-semibold active:scale-95 transition-all shadow-xl shadow-white/5 text-center"
            style={{ animation: 'scale-in 0.4s ease-out 0.2s backwards' }}
          >
            Услуги
          </a>
          <a 
            href="#animations"
            onClick={onClose}
            className="w-full px-8 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white rounded-2xl text-lg font-semibold active:scale-95 transition-all shadow-xl shadow-white/5 text-center"
            style={{ animation: 'scale-in 0.4s ease-out 0.3s backwards' }}
          >
            Анимации
          </a>
          <a 
            href="#testimonials"
            onClick={onClose}
            className="w-full px-8 py-5 bg-white text-black rounded-2xl text-lg font-semibold active:scale-95 transition-all shadow-2xl text-center"
            style={{ animation: 'scale-in 0.4s ease-out 0.4s backwards' }}
          >
            Отзывы
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-8 left-0 right-0 w-full text-center z-20" style={{ animation: 'fade-in-up 0.4s ease-out 0.4s backwards' }}>
        <p className="text-sm text-gray-500">Мобильные приложения и сайты</p>
      </div>
    </div>
  );
}
