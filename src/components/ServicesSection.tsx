'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import OrderFormModal from './OrderFormModal';

const services = [
  {
    id: 1,
    title: 'Мобильное приложение',
    description: 'iOS и Android приложения с нативным UX',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    basePrice: 300000,
    features: ['React Native / Flutter', 'Push уведомления', 'Интеграция API', 'App Store + Google Play']
  },
  {
    id: 2,
    title: 'Веб-сайт',
    description: 'Лендинги и корпоративные сайты',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    basePrice: 50000,
    features: ['Адаптивный дизайн', 'SEO оптимизация', 'Быстрая загрузка', 'Админ панель']
  },
  {
    id: 3,
    title: 'Веб-приложение',
    description: 'SaaS платформы и сложные системы',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    basePrice: 500000,
    features: ['React / Next.js', 'Аутентификация', 'База данных', 'Real-time функции']
  },
  {
    id: 4,
    title: 'UI/UX Дизайн',
    description: 'Современный дизайн интерфейсов',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    basePrice: 80000,
    features: ['Figma прототипы', 'Адаптивные макеты', 'UI Kit', 'Анимации']
  }
];

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
  basePrice: number;
  features: string[];
}

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string>('standard');
  const [showOrderForm, setShowOrderForm] = useState(false);

  const additionalFeatures = [
    { id: 'auth', name: 'Авторизация', price: 50000 },
    { id: 'payment', name: 'Платёжная система', price: 100000 },
    { id: 'admin', name: 'Админ панель', price: 80000 },
    { id: 'api', name: 'API интеграции', price: 60000 },
    { id: 'analytics', name: 'Аналитика', price: 40000 },
    { id: 'chat', name: 'Чат/Мессенджер', price: 120000 }
  ];

  const timelines = [
    { id: 'standard', name: 'Стандартный (2-3 месяца)', multiplier: 1 },
    { id: 'fast', name: 'Ускоренный (1 месяц)', multiplier: 1.5 },
    { id: 'urgent', name: 'Срочный (2 недели)', multiplier: 2 }
  ];

  const calculateTotal = () => {
    if (!selectedService) return 0;
    const featuresPrice = selectedFeatures.reduce((sum, featureId) => {
      const feature = additionalFeatures.find(f => f.id === featureId);
      return sum + (feature?.price || 0);
    }, 0);
    const timelineMultiplier = timelines.find(t => t.id === timeline)?.multiplier || 1;
    return Math.round((selectedService.basePrice + featuresPrice) * timelineMultiplier);
  };

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev =>
      prev.includes(featureId) ? prev.filter(id => id !== featureId) : [...prev, featureId]
    );
  };

  const openCalculator = (service: Service) => {
    setSelectedService(service);
    setSelectedFeatures([]);
    setTimeline('standard');
    document.body.style.overflow = 'hidden';
  };

  const closeCalculator = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="services" className="min-h-screen py-20 px-4 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '0s', animationDuration: '10s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-float" 
             style={{ animationDelay: '3s', animationDuration: '12s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Услуги
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Разрабатываю современные цифровые продукты от идеи до запуска
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 100}>
              <div
                className="group relative"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => openCalculator(service)}
              >
              {/* Card */}
              <div className={`
                relative h-full p-6 rounded-2xl cursor-pointer
                bg-white/5 backdrop-blur-xl border border-white/10
                transition-all duration-300 active:scale-95 text-white
                ${hoveredCard === service.id ? 'border-white/20 shadow-lg shadow-white/10' : ''}
              `}>
                {/* Icon */}
                <div className="w-14 h-14 mb-6 rounded-xl flex items-center justify-center bg-white/10 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-sm mb-6 text-gray-400">{service.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-2xl font-bold">{service.basePrice.toLocaleString('ru-RU')} ₽</span>
                  <span className="text-sm ml-2 text-gray-500">от</span>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center gap-2 text-sm"
                    >
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>

      {/* Calculator Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] w-screen h-screen" style={{ animation: 'menu-fade-in 0.25s ease-out' }}>
          <div className="absolute inset-0 w-full h-full bg-black/95 backdrop-blur-3xl" onClick={closeCalculator} />
          
          {/* Close button */}
          <button
            onClick={closeCalculator}
            className="absolute top-8 right-8 z-20 p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 active:scale-95 transition-all"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute top-0 left-0 w-full h-full overflow-y-auto z-10 p-4 md:p-8">
            <div className="max-w-4xl mx-auto py-8 md:py-12">
              {/* Header */}
              <div className="text-center mb-8 md:mb-12" style={{ animation: 'fade-in-up 0.4s ease-out' }}>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">{selectedService.title}</h2>
                <p className="text-base md:text-xl text-gray-400">Настройте параметры проекта</p>
              </div>

              {/* Features Selection */}
              <div className="mb-8 md:mb-12" style={{ animation: 'fade-in-up 0.5s ease-out 0.1s backwards' }}>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Дополнительные функции</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                  {additionalFeatures.map((feature, idx) => (
                    <button
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`p-4 md:p-6 rounded-xl md:rounded-2xl text-left transition-all active:scale-95 ${
                        selectedFeatures.includes(feature.id)
                          ? 'bg-white text-black'
                          : 'bg-white/10 backdrop-blur-xl border border-white/20 text-white'
                      }`}
                      style={{
                        animation: 'scale-in 0.4s ease-out forwards',
                        animationDelay: `${idx * 0.05}s`,
                        opacity: 0
                      }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="font-bold text-sm md:text-base">{feature.name}</span>
                        <div className={`w-4 h-4 md:w-5 md:h-5 rounded border-2 flex items-center justify-center transition-all ${
                          selectedFeatures.includes(feature.id) ? 'bg-black border-black scale-110' : 'border-white/30'
                        }`}>
                          {selectedFeatures.includes(feature.id) && (
                            <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className={`text-xs md:text-sm ${selectedFeatures.includes(feature.id) ? 'text-gray-700' : 'text-gray-400'}`}>
                        +{feature.price.toLocaleString('ru-RU')} ₽
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-8 md:mb-12" style={{ animation: 'fade-in-up 0.5s ease-out 0.2s backwards' }}>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Сроки выполнения</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  {timelines.map((t, idx) => (
                    <button
                      key={t.id}
                      onClick={() => setTimeline(t.id)}
                      className={`p-4 md:p-6 rounded-xl md:rounded-2xl text-center transition-all active:scale-95 ${
                        timeline === t.id
                          ? 'bg-white text-black'
                          : 'bg-white/10 backdrop-blur-xl border border-white/20 text-white'
                      }`}
                      style={{
                        animation: 'scale-in 0.4s ease-out forwards',
                        animationDelay: `${idx * 0.1}s`,
                        opacity: 0
                      }}
                    >
                      <div className="font-bold mb-2 text-sm md:text-base">{t.name}</div>
                      {t.multiplier > 1 && (
                        <span className={`text-xs md:text-sm ${timeline === t.id ? 'text-gray-700' : 'text-gray-400'}`}>
                          ×{t.multiplier}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Total */}
              <div className="sticky bottom-0 p-4 md:p-8 rounded-2xl md:rounded-3xl bg-white/10 backdrop-blur-2xl border-2 border-white/30" style={{ animation: 'fade-in-up 0.5s ease-out 0.3s backwards' }}>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                  <div>
                    <p className="text-gray-400 mb-2 text-sm md:text-base">Итоговая стоимость</p>
                    <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
                      {calculateTotal().toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      console.log('Opening form with data:', {
                        selectedService,
                        selectedFeatures,
                        timeline,
                        additionalFeatures: selectedFeatures.map(featureId => {
                          const feature = additionalFeatures.find(f => f.id === featureId);
                          console.log('Feature:', featureId, feature);
                          return feature;
                        })
                      });
                      setShowOrderForm(true);
                    }}
                    className="w-full md:w-auto px-6 md:px-8 py-4 md:py-5 bg-white text-black rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-gray-200 active:scale-95 transition-all"
                  >
                    Оставить заявку
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Order Form Modal */}
      {showOrderForm && selectedService && (
        <OrderFormModal
          isOpen={showOrderForm}
          onClose={() => setShowOrderForm(false)}
          orderData={{
            serviceName: selectedService.title,
            serviceType: selectedService.id.toString(),
            basePrice: selectedService.basePrice,
            additionalFeatures: selectedFeatures.map(featureId => {
              const feature = additionalFeatures.find(f => f.id === featureId);
              return feature || { id: '', name: '', price: 0 };
            }),
            timeline: timelines.find(t => t.id === timeline) || timelines[0],
            totalPrice: calculateTotal(),
          }}
        />
      )}
    </section>
  );
}
