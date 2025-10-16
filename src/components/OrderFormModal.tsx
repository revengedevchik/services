'use client';

import { useState } from 'react';

interface OrderFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: {
    serviceName: string;
    serviceType: string;
    basePrice: number;
    additionalFeatures: { id: string; name: string; price: number }[];
    timeline: { name: string; multiplier: number };
    totalPrice: number;
  };
}

export default function OrderFormModal({ isOpen, onClose, orderData }: OrderFormModalProps) {
  const [telegram, setTelegram] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const featuresPrice = orderData.additionalFeatures.reduce((sum, f) => sum + (f?.price || 0), 0);
      
      const payload = {
        serviceType: orderData.serviceType,
        serviceName: orderData.serviceName,
        basePrice: orderData.basePrice,
        additionalFeatures: orderData.additionalFeatures.filter(f => f && f.name).map(f => ({
          name: f.name,
          price: f.price
        })),
        featuresPrice,
        timeline: {
          name: orderData.timeline.name,
          multiplier: orderData.timeline.multiplier
        },
        totalPrice: orderData.totalPrice,
        customerTelegram: telegram,
      };

      console.log('Sending payload:', payload);

      const response = await fetch('/api/submit-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setTelegram('');
          setSubmitStatus('idle');
        }, 2500);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] w-screen h-screen" style={{ animation: 'menu-fade-in 0.25s ease-out' }}>
      <div className="absolute inset-0 w-full h-full bg-black/95 backdrop-blur-3xl" onClick={onClose} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md z-10">
        <div className="p-6 md:p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border-2 border-white/30" style={{ animation: 'scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
          {/* Close button */}
          {!isSubmitting && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all"
              style={{ animation: 'fade-in-up 0.3s ease-out 0.2s backwards' }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div 
                className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center"
                style={{ animation: 'scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
              >
                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" style={{ 
                    strokeDasharray: 100,
                    strokeDashoffset: 100,
                    animation: 'draw-check 0.6s ease-out 0.3s forwards'
                  }} />
                </svg>
              </div>
              <h3 
                className="text-2xl md:text-3xl font-bold text-white mb-2"
                style={{ animation: 'fade-in-up 0.4s ease-out 0.4s backwards' }}
              >
                Заявка отправлена!
              </h3>
              <p 
                className="text-gray-400"
                style={{ animation: 'fade-in-up 0.4s ease-out 0.5s backwards' }}
              >
                Скоро с вами свяжутся в Telegram
              </p>
            </div>
          ) : isSubmitting ? (
            <div className="text-center py-12">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
                <div 
                  className="absolute inset-0 rounded-full border-4 border-white border-t-transparent"
                  style={{ animation: 'spin 0.8s linear infinite' }}
                ></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Отправка...</h3>
              <p className="text-gray-400 text-sm">Подождите пару секунд</p>
            </div>
          ) : (
            <>
              <h3 
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                style={{ animation: 'fade-in-up 0.4s ease-out' }}
              >
                Оставить заявку
              </h3>
              <p 
                className="text-gray-400 mb-6 text-sm md:text-base"
                style={{ animation: 'fade-in-up 0.4s ease-out 0.1s backwards' }}
              >
                Введите ваш Telegram для связи
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div style={{ animation: 'fade-in-up 0.4s ease-out 0.2s backwards' }}>
                  <label className="block text-white font-semibold mb-2 text-sm md:text-base">
                    Ваш Telegram
                  </label>
                  <input
                    type="text"
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                    placeholder="@username или username"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 focus:scale-[1.02] transition-all"
                  />
                </div>

                {/* Order Summary */}
                <div 
                  className="p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10"
                  style={{ animation: 'fade-in-up 0.4s ease-out 0.3s backwards' }}
                >
                  <p className="text-xs md:text-sm text-gray-400 mb-2">Итого к оплате:</p>
                  <p className="text-3xl md:text-4xl font-bold text-white">
                    {orderData.totalPrice.toLocaleString('ru-RU')} ₽
                  </p>
                </div>

                {submitStatus === 'error' && (
                  <div 
                    className="p-4 rounded-xl bg-red-500/20 border border-red-500/30"
                    style={{ animation: 'scale-in 0.3s ease-out' }}
                  >
                    <p className="text-red-400 text-sm">Ошибка при отправке. Попробуйте ещё раз.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !telegram}
                  className="w-full px-6 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-200 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ animation: 'fade-in-up 0.4s ease-out 0.4s backwards' }}
                >
                  Отправить заявку
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
