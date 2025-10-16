'use client';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Large Circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '0s', animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '2s', animationDuration: '10s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float" 
             style={{ animationDelay: '4s', animationDuration: '12s' }} />
        
        {/* Small Circles */}
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float" 
             style={{ animationDelay: '1s', animationDuration: '7s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float" 
             style={{ animationDelay: '3s', animationDuration: '9s' }} />
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-1/2 w-32 h-32 border-2 border-white/20 rounded-lg rotate-12 animate-spin-slow" />
        <div className="absolute bottom-32 right-1/4 w-24 h-24 border-2 border-white/20 rounded-full animate-pulse" 
             style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/2 left-20 w-20 h-20 bg-white/10 rounded-lg rotate-45 animate-float" 
             style={{ animationDelay: '2s', animationDuration: '6s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="relative">
            <h1 className="text-4xl md:text-8xl lg:text-9xl font-bold text-white animate-fade-in">
              <span className="inline-block animate-float" style={{ animationDelay: '0s', animationDuration: '4s' }}>Р</span>
              <span className="inline-block animate-float" style={{ animationDelay: '0.1s', animationDuration: '4.2s' }}>а</span>
              <span className="inline-block animate-float" style={{ animationDelay: '0.2s', animationDuration: '4.4s' }}>з</span>
              <span className="inline-block animate-float" style={{ animationDelay: '0.3s', animationDuration: '4.6s' }}>р</span>
              <span className="inline-block animate-float" style={{ animationDelay: '0.4s', animationDuration: '4.8s' }}>а</span>
              <span className="inline-block animate-float" style={{ animationDelay: '0.5s', animationDuration: '5s' }}>б</span>
              <span className="inline-block animate-float" style={{ animationDelay: '0.6s', animationDuration: '5.2s' }}>о</span>
              <span className="inline-block animate-float" style={{ animationDelay: '0.7s', animationDuration: '5.4s' }}>т</span>
              <span className="inline-block animate-float" style={{ animationDelay: '0.8s', animationDuration: '5.6s' }}>к</span>
              <span className="inline-block animate-float" style={{ animationDelay: '0.9s', animationDuration: '5.8s' }}>а</span>
            </h1>
            <div className="absolute -inset-4 bg-white/5 blur-3xl -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-3xl text-gray-400 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Мобильные приложения и сайты под ключ
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a 
              href="https://t.me/revenge_offical"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white text-black rounded-xl font-semibold overflow-hidden transition-all active:scale-95 hover:scale-105 tap-highlight flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
              <span className="relative z-10">Написать в Telegram</span>
              <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity" />
            </a>
            <a 
              href="#services"
              className="px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 active:bg-white/30 transition-all active:scale-95 hover:scale-105 tap-highlight"
            >
              Услуги
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
