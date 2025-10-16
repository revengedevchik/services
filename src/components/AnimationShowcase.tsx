'use client';

import { useState } from 'react';
import { Menu, Bell, ShoppingCart, MessageCircle, Settings, CreditCard, User, Search, ChevronRight, Check, X, Star, Heart, Download, Home, Compass, Plus, Mail, Image, ArrowDown, ToggleLeft, ToggleRight, Trash2, Archive, Share2, Wifi, WifiOff, Volume2, VolumeX, RefreshCw, ChevronDown, Zap, Battery } from 'lucide-react';

export default function AnimationShowcase() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationRead, setNotificationRead] = useState(false);
  const [cartItems, setCartItems] = useState(3);
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [toggleOn, setToggleOn] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(null);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [pullToRefresh, setPullToRefresh] = useState(0);
  const [wifiOn, setWifiOn] = useState(true);
  const [soundOn, setSoundOn] = useState(true);
  const [searchFocused, setSearchFocused] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [paymentExpanded, setPaymentExpanded] = useState(false);
  const [fabOpen, setFabOpen] = useState(false);
  const [selectedChip, setSelectedChip] = useState<number | null>(null);

  return (
    <section id="animations" className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Интерфейсы с Анимациями
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Готовые UI компоненты для мобильных и веб приложений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Mobile Bottom Navigation */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="relative bg-zinc-950 backdrop-blur-xl p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-6">Bottom Tab Bar</h3>
              
              <div className="bg-zinc-900 rounded-2xl p-4">
                <div className="flex justify-around items-center">
                  {[
                    { icon: Home, label: 'Home', index: 0 },
                    { icon: Compass, label: 'Explore', index: 1 },
                    { icon: Plus, label: 'Add', index: 2 },
                    { icon: Bell, label: 'Alerts', index: 3 },
                    { icon: User, label: 'Profile', index: 4 },
                  ].map(({ icon: Icon, label, index }) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className="flex flex-col items-center gap-1 group/tab"
                    >
                      <div className={`p-2 rounded-xl transition-all duration-300 ${
                        activeTab === index 
                          ? 'bg-white/20 scale-110' 
                          : 'group-hover/tab:bg-white/5'
                      }`}>
                        <Icon className={`w-5 h-5 transition-all duration-300 ${
                          activeTab === index 
                            ? 'text-white' 
                            : 'text-gray-500 group-hover/tab:text-gray-300'
                        }`} />
                      </div>
                      <span className={`text-xs transition-all duration-300 ${
                        activeTab === index 
                          ? 'text-white font-medium' 
                          : 'text-gray-600'
                      }`}>
                        {label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2. Toggle Switch */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="relative bg-zinc-950 backdrop-blur-xl p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-6">Toggle Switches</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-xl">
                  <div className="flex items-center gap-3">
                    {wifiOn ? <Wifi className="w-5 h-5 text-white" /> : <WifiOff className="w-5 h-5 text-gray-500" />}
                    <span className="text-gray-300">Wi-Fi</span>
                  </div>
                  <button
                    onClick={() => setWifiOn(!wifiOn)}
                    className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                      wifiOn ? 'bg-white' : 'bg-gray-700'
                    }`}
                  >
                    <div className={`absolute top-1 w-6 h-6 rounded-full bg-black transition-all duration-300 ${
                      wifiOn ? 'left-7' : 'left-1'
                    }`} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-xl">
                  <div className="flex items-center gap-3">
                    {soundOn ? <Volume2 className="w-5 h-5 text-white" /> : <VolumeX className="w-5 h-5 text-gray-500" />}
                    <span className="text-gray-300">Sound</span>
                  </div>
                  <button
                    onClick={() => setSoundOn(!soundOn)}
                    className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                      soundOn ? 'bg-white' : 'bg-gray-700'
                    }`}
                  >
                    <div className={`absolute top-1 w-6 h-6 rounded-full bg-black transition-all duration-300 ${
                      soundOn ? 'left-7' : 'left-1'
                    }`} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Accordion / Expandable List */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="relative bg-zinc-950 backdrop-blur-xl p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-6">Accordion</h3>
              
              <div className="space-y-3">
                {[
                  { id: 1, title: 'What is React?', content: 'A JavaScript library for building user interfaces' },
                  { id: 2, title: 'What is Next.js?', content: 'A React framework with server-side rendering' },
                  { id: 3, title: 'What is Tailwind?', content: 'A utility-first CSS framework' }
                ].map((item) => (
                  <div key={item.id} className="bg-zinc-900 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setExpandedAccordion(expandedAccordion === item.id ? null : item.id)}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-all duration-300"
                    >
                      <span className="text-white font-medium">{item.title}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        expandedAccordion === item.id ? 'rotate-180' : ''
                      }`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${
                      expandedAccordion === item.id ? 'max-h-32' : 'max-h-0'
                    }`}>
                      <div className="p-4 pt-0 text-gray-400 text-sm">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Swipe Actions */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="relative bg-zinc-950 backdrop-blur-xl p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-6">Swipe Actions</h3>
              
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-y-0 right-0 flex">
                  <button className="px-6 bg-zinc-700 flex items-center justify-center">
                    <Archive className="w-5 h-5 text-white" />
                  </button>
                  <button className="px-6 bg-red-600 flex items-center justify-center">
                    <Trash2 className="w-5 h-5 text-white" />
                  </button>
                </div>
                
                <div
                  className="relative bg-zinc-900 p-4 cursor-grab active:cursor-grabbing touch-pan-y select-none"
                  style={{ transform: `translateX(${swipeOffset}px)`, transition: swipeOffset === 0 || swipeOffset === -120 ? 'transform 0.3s' : 'none' }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    const startX = e.clientX;
                    const handleMove = (e: MouseEvent) => {
                      const diff = Math.min(0, e.clientX - startX);
                      setSwipeOffset(diff);
                    };
                    const handleUp = () => {
                      if (swipeOffset < -50) {
                        setSwipeOffset(-120);
                      } else {
                        setSwipeOffset(0);
                      }
                      document.removeEventListener('mousemove', handleMove);
                      document.removeEventListener('mouseup', handleUp);
                    };
                    document.addEventListener('mousemove', handleMove);
                    document.addEventListener('mouseup', handleUp);
                  }}
                  onTouchStart={(e) => {
                    const startX = e.touches[0].clientX;
                    const handleMove = (e: TouchEvent) => {
                      const diff = Math.min(0, e.touches[0].clientX - startX);
                      setSwipeOffset(diff);
                    };
                    const handleEnd = () => {
                      if (swipeOffset < -50) {
                        setSwipeOffset(-120);
                      } else {
                        setSwipeOffset(0);
                      }
                      document.removeEventListener('touchmove', handleMove);
                      document.removeEventListener('touchend', handleEnd);
                    };
                    document.addEventListener('touchmove', handleMove);
                    document.addEventListener('touchend', handleEnd);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-white" />
                    <div>
                      <p className="text-white font-medium">Message Title</p>
                      <p className="text-gray-400 text-sm">Swipe left to see actions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Pull to Refresh */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="relative bg-zinc-950 backdrop-blur-xl p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-6">Pull to Refresh</h3>
              
              <div className="bg-zinc-900 rounded-xl overflow-hidden">
                <div
                  className="relative cursor-grab active:cursor-grabbing touch-pan-x select-none"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    const startY = e.clientY;
                    const handleMove = (e: MouseEvent) => {
                      const diff = Math.max(0, Math.min(80, e.clientY - startY));
                      setPullToRefresh(diff);
                    };
                    const handleUp = () => {
                      if (pullToRefresh > 60) {
                        setPullToRefresh(80);
                        setTimeout(() => setPullToRefresh(0), 1000);
                      } else {
                        setPullToRefresh(0);
                      }
                      document.removeEventListener('mousemove', handleMove);
                      document.removeEventListener('mouseup', handleUp);
                    };
                    document.addEventListener('mousemove', handleMove);
                    document.addEventListener('mouseup', handleUp);
                  }}
                  onTouchStart={(e) => {
                    const startY = e.touches[0].clientY;
                    const handleMove = (e: TouchEvent) => {
                      const diff = Math.max(0, Math.min(80, e.touches[0].clientY - startY));
                      setPullToRefresh(diff);
                    };
                    const handleEnd = () => {
                      if (pullToRefresh > 60) {
                        setPullToRefresh(80);
                        setTimeout(() => setPullToRefresh(0), 1000);
                      } else {
                        setPullToRefresh(0);
                      }
                      document.removeEventListener('touchmove', handleMove);
                      document.removeEventListener('touchend', handleEnd);
                    };
                    document.addEventListener('touchmove', handleMove);
                    document.addEventListener('touchend', handleEnd);
                  }}
                >
                  <div 
                    className="flex items-center justify-center transition-all duration-300"
                    style={{ height: `${pullToRefresh}px`, opacity: pullToRefresh / 80 }}
                  >
                    <RefreshCw className={`w-6 h-6 text-white ${pullToRefresh > 60 ? 'animate-spin' : ''}`} />
                  </div>
                  
                  <div className="p-4 space-y-3">
                    {['Item 1', 'Item 2', 'Item 3'].map((item) => (
                      <div key={item} className="p-3 bg-zinc-800 rounded-lg">
                        <p className="text-gray-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Toast Notification */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="relative bg-zinc-950 backdrop-blur-xl p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500 overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-6">Toast Message</h3>
              
              <button
                onClick={() => {
                  setShowToast(true);
                  setTimeout(() => setShowToast(false), 3000);
                }}
                className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all duration-300"
              >
                Show Toast
              </button>
              
              <div className={`absolute top-20 left-6 right-6 bg-white p-4 rounded-xl shadow-2xl transition-all duration-500 ${
                showToast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
              }`}>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <p className="text-black font-medium">Success message!</p>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Floating Action Button */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.7s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="relative bg-zinc-950 backdrop-blur-xl p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-6">Floating Button</h3>
              
              <div className="relative h-48 bg-zinc-900 rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveCard(activeCard === 7 ? null : 7)}
                  className="absolute bottom-4 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <Plus className={`w-6 h-6 text-black transition-transform duration-300 ${
                    activeCard === 7 ? 'rotate-45' : ''
                  }`} />
                </button>
                
                {activeCard === 7 && (
                  <div className="absolute bottom-20 right-4 space-y-3">
                    {[Image, Mail, Share2].map((Icon, i) => (
                      <button
                        key={i}
                        className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center animate-scale-in hover:bg-zinc-700 active:scale-95 transition-all"
                        style={{ animationDelay: `${i * 50}ms` }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 8. Loading Skeleton */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="relative bg-zinc-950 backdrop-blur-xl p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-6">Loading State</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 rounded-full animate-shimmer bg-[length:200%_100%]" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 rounded animate-shimmer bg-[length:200%_100%]" />
                    <div className="h-4 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 rounded animate-shimmer bg-[length:200%_100%] w-2/3" />
                  </div>
                </div>
                
                <div className="h-32 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 rounded-xl animate-shimmer bg-[length:200%_100%]" />
              </div>
            </div>
          </div>

          {/* 9. Progress Indicators */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.9s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="relative bg-zinc-950 backdrop-blur-xl p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-6">Progress</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Uploading</span>
                    <span className="text-gray-400">65%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full transition-all duration-1000" style={{ width: '65%' }}>
                      <div className="h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16">
                    <svg className="w-16 h-16 -rotate-90">
                      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" className="text-zinc-800" />
                      <circle 
                        cx="32" 
                        cy="32" 
                        r="28" 
                        stroke="currentColor" 
                        strokeWidth="4" 
                        fill="none" 
                        strokeDasharray="176" 
                        strokeDashoffset="44"
                        className="text-white transition-all duration-1000" 
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">75%</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm">Processing...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 10. Chip Selection */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '1.0s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="relative bg-zinc-950 backdrop-blur-xl p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-6">Chip Filter</h3>
              
              <div className="flex flex-wrap gap-2">
                {['All', 'Design', 'Code', 'Video'].map((chip, i) => (
                  <button
                    key={chip}
                    onClick={() => setActiveCard(activeCard === i ? null : i)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeCard === i 
                        ? 'bg-white text-black scale-105' 
                        : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                    }`}
                  >
                    {chip}
                  </button>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-zinc-900 rounded-xl">
                <p className="text-gray-400 text-sm">
                  Selected: <span className="text-white font-medium">
                    {activeCard !== null ? ['All', 'Design', 'Code', 'Video'][activeCard] : 'None'}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* 11. Card Stack */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '1.1s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="relative bg-zinc-950 backdrop-blur-xl p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-6">Card Stack</h3>
              
              <div className="relative h-48">
                {[2, 1, 0].map((index) => (
                  <div
                    key={index}
                    className="absolute inset-0 bg-zinc-900 rounded-xl border border-white/10 p-4 transition-all duration-500 group-hover:translate-y-0"
                    style={{
                      transform: `translateY(${index * -8}px) scale(${1 - index * 0.05})`,
                      zIndex: 10 - index,
                      opacity: 1 - index * 0.2,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Card {3 - index}</p>
                        <p className="text-gray-400 text-sm">Stack animation</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 12. Quick Actions Grid */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '1.2s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="relative bg-zinc-950 backdrop-blur-xl p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Zap, label: 'Speed' },
                  { icon: Heart, label: 'Likes' },
                  { icon: Star, label: 'Stars' },
                  { icon: Download, label: 'Save' },
                  { icon: Share2, label: 'Share' },
                  { icon: Settings, label: 'Settings' },
                ].map(({ icon: Icon, label }, i) => (
                  <button
                    key={label}
                    className="flex flex-col items-center gap-2 p-3 bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-all duration-300 hover:scale-105"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                    <span className="text-xs text-gray-400">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
