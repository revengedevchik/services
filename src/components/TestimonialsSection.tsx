'use client';

import { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Алексей Иванов',
    position: 'CEO, TechStart',
    avatar: 'АИ',
    rating: 5,
    text: 'Отличная работа! Мобильное приложение получилось именно таким, как мы хотели. Все сроки соблюдены, качество на высоте.',
    project: 'iOS/Android приложение',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-500/10 to-cyan-500/10'
  },
  {
    id: 2,
    name: 'Мария Петрова',
    position: 'Founder, BeautyApp',
    avatar: 'МП',
    rating: 5,
    text: 'Профессиональный подход к делу. Сайт работает быстро, дизайн современный. Спасибо за отзывчивость и терпение!',
    project: 'Веб-сайт',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'from-pink-500/10 to-rose-500/10'
  },
  {
    id: 3,
    name: 'Дмитрий Соколов',
    position: 'CTO, FinanceHub',
    avatar: 'ДС',
    rating: 5,
    text: 'Сложный проект был реализован в срок. Отличная коммуникация, все наши пожелания были учтены. Рекомендую!',
    project: 'Веб-приложение',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-500/10 to-emerald-500/10'
  },
  {
    id: 4,
    name: 'Елена Волкова',
    position: 'Marketing Director',
    avatar: 'ЕВ',
    rating: 5,
    text: 'Результат превзошел ожидания! UI/UX на высшем уровне. Пользователи в восторге от нового дизайна.',
    project: 'UI/UX дизайн',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'from-purple-500/10 to-violet-500/10'
  },
  {
    id: 5,
    name: 'Игорь Смирнов',
    position: 'Owner, FoodDelivery',
    avatar: 'ИС',
    rating: 5,
    text: 'Быстро, качественно, профессионально. Приложение работает стабильно, клиенты довольны.',
    project: 'Мобильное приложение',
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-500/10 to-red-500/10'
  },
  {
    id: 6,
    name: 'Анна Козлова',
    position: 'HR Manager, JobFind',
    avatar: 'АК',
    rating: 5,
    text: 'Отличная работа с обратной связью. Все этапы согласовывались, правки вносились быстро. Очень довольны!',
    project: 'Веб-платформа',
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'from-teal-500/10 to-cyan-500/10'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [clickedCard, setClickedCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = currentTouch - touchStart;
    setDragOffset(diff);
    setTouchEnd(currentTouch);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (!touchStart || !touchEnd) {
      setDragOffset(0);
      return;
    }
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 100;
    const isRightSwipe = distance < -100;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
    setTouchStart(0);
    setTouchEnd(0);
    setDragOffset(0);
  };

  const handleCardClick = (id: number) => {
    setClickedCard(id);
    setTimeout(() => setClickedCard(null), 150);
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Отзывы клиентов
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Что говорят о нашей работе
            </p>
          </div>
        </AnimatedSection>

        {/* Carousel */}
        <div className="relative">
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex gap-6 transition-transform ease-out"
              style={{
                transform: `translateX(${dragOffset}px)`,
                transitionDuration: isDragging ? '0ms' : '500ms'
              }}
            >
              {getVisibleTestimonials().map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${currentIndex}`}
                  className={`min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] transition-all duration-700 ${
                    index === 0 ? 'opacity-100 scale-100' : 'opacity-40 scale-90'
                  }`}
                >
                  <div 
                    className={`relative h-full cursor-pointer transition-all duration-150 ${
                      clickedCard === testimonial.id ? 'scale-95' : 'scale-100'
                    }`}
                    onClick={() => handleCardClick(testimonial.id)}
                  >
                    <div className="relative bg-zinc-950 backdrop-blur-xl p-8 rounded-2xl border-2 border-white/10 h-full overflow-hidden">
                      {/* Quote icon */}
                      <div className="absolute top-6 right-6 opacity-5">
                        <Quote className="w-16 h-16 text-white" />
                      </div>

                      {/* Avatar & Author Header */}
                      <div className="flex items-start gap-4 mb-4 relative z-10">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                          {testimonial.avatar}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-400 mb-2">{testimonial.position}</p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4 relative z-10">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-5 h-5 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>

                      {/* Review text */}
                      <p className="text-gray-300 leading-relaxed mb-6 text-lg relative z-10">
                        "{testimonial.text}"
                      </p>

                      {/* Divider */}
                      <div className="h-px w-full mb-6 bg-white/10" />

                      {/* Project tag */}
                      <div className="relative z-10">
                        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r ${testimonial.color} text-white`}>
                          <div className="w-2 h-2 rounded-full bg-white" />
                          {testimonial.project}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-white' 
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <AnimatedSection delay={800}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '50+', label: 'Проектов' },
              { value: '100%', label: 'Довольных клиентов' },
              { value: '5.0', label: 'Средняя оценка' },
              { value: '24/7', label: 'Поддержка' }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 bg-zinc-950 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
