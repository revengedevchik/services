'use client';

import { useState } from 'react';

const options = {
  type: [
    { id: 'mobile', name: 'Мобильное приложение', price: 300000 },
    { id: 'website', name: 'Веб-сайт', price: 50000 },
    { id: 'webapp', name: 'Веб-приложение', price: 500000 },
    { id: 'design', name: 'UI/UX Дизайн', price: 80000 }
  ],
  features: [
    { id: 'auth', name: 'Авторизация', price: 50000 },
    { id: 'payment', name: 'Платёжная система', price: 100000 },
    { id: 'admin', name: 'Админ панель', price: 80000 },
    { id: 'api', name: 'API интеграции', price: 60000 },
    { id: 'analytics', name: 'Аналитика', price: 40000 },
    { id: 'chat', name: 'Чат/Мессенджер', price: 120000 }
  ],
  timeline: [
    { id: 'standard', name: 'Стандартный (2-3 месяца)', multiplier: 1 },
    { id: 'fast', name: 'Ускоренный (1 месяц)', multiplier: 1.5 },
    { id: 'urgent', name: 'Срочный (2 недели)', multiplier: 2 }
  ]
};

export default function PriceCalculator() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>('standard');

  const calculateTotal = () => {
    const typePrice = options.type.find(t => t.id === selectedType)?.price || 0;
    const featuresPrice = selectedFeatures.reduce((sum, featureId) => {
      const feature = options.features.find(f => f.id === featureId);
      return sum + (feature?.price || 0);
    }, 0);
    const timelineMultiplier = options.timeline.find(t => t.id === selectedTimeline)?.multiplier || 1;
    
    return Math.round((typePrice + featuresPrice) * timelineMultiplier);
  };

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev =>
      prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '1s', animationDuration: '11s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Калькулятор
          </h2>
          <p className="text-xl text-gray-400">
            Узнайте примерную стоимость вашего проекта
          </p>
        </div>

        {/* Calculator */}
        <div className="space-y-8">
          {/* Type Selection */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold text-white mb-6">Тип проекта</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {options.type.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`
                    p-6 rounded-2xl text-left transition-all active:scale-95
                    ${selectedType === type.id
                      ? 'bg-white text-black border-2 border-white'
                      : 'bg-white/5 backdrop-blur-xl border-2 border-white/10 text-white hover:bg-white/10'
                    }
                  `}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-lg">{type.name}</span>
                    {selectedType === type.id && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-sm ${selectedType === type.id ? 'text-gray-700' : 'text-gray-400'}`}>
                    от {type.price.toLocaleString('ru-RU')} ₽
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Features Selection */}
          {selectedType && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-white mb-6">Дополнительные функции</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {options.features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => toggleFeature(feature.id)}
                    className={`
                      p-6 rounded-2xl text-left transition-all active:scale-95
                      ${selectedFeatures.includes(feature.id)
                        ? 'bg-white text-black border-2 border-white'
                        : 'bg-white/5 backdrop-blur-xl border-2 border-white/10 text-white hover:bg-white/10'
                      }
                    `}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-bold">{feature.name}</span>
                      <div className={`
                        w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0
                        ${selectedFeatures.includes(feature.id)
                          ? 'bg-black border-black'
                          : 'border-white/30'
                        }
                      `}>
                        {selectedFeatures.includes(feature.id) && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className={`text-sm ${selectedFeatures.includes(feature.id) ? 'text-gray-700' : 'text-gray-400'}`}>
                      +{feature.price.toLocaleString('ru-RU')} ₽
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Timeline Selection */}
          {selectedType && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-white mb-6">Сроки выполнения</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {options.timeline.map((timeline) => (
                  <button
                    key={timeline.id}
                    onClick={() => setSelectedTimeline(timeline.id)}
                    className={`
                      p-6 rounded-2xl text-center transition-all active:scale-95
                      ${selectedTimeline === timeline.id
                        ? 'bg-white text-black border-2 border-white'
                        : 'bg-white/5 backdrop-blur-xl border-2 border-white/10 text-white hover:bg-white/10'
                      }
                    `}
                  >
                    <div className="font-bold mb-2">{timeline.name}</div>
                    {timeline.multiplier > 1 && (
                      <span className={`text-sm ${selectedTimeline === timeline.id ? 'text-gray-700' : 'text-gray-400'}`}>
                        ×{timeline.multiplier}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Total Price */}
          {selectedType && (
            <div className="sticky bottom-8 animate-fade-in">
              <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border-2 border-white/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-gray-400 mb-2">Итоговая стоимость</p>
                    <p className="text-5xl md:text-6xl font-bold text-white">
                      {calculateTotal().toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                  <button className="px-8 py-5 bg-white text-black rounded-2xl font-bold text-lg hover:bg-gray-200 active:scale-95 transition-all whitespace-nowrap">
                    Оставить заявку
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="mt-12 text-center text-gray-500 text-sm animate-fade-in">
          <p>* Это примерная стоимость. Финальная цена определяется после детального обсуждения проекта</p>
        </div>
      </div>
    </section>
  );
}
