import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Генерация ID заявки
    const orderId = Date.now();

    // Формирование списка функций
    let featuresText = '';
    if (data.additionalFeatures && data.additionalFeatures.length > 0) {
      featuresText = data.additionalFeatures
        .filter((f: any) => f && f.name)
        .map((f: any) => `  • ${f.name} — ${f.price.toLocaleString('ru-RU')} ₽`)
        .join('\n');
    }

    const message = `
╔═══════════════════════════
║  🆕 НОВАЯ ЗАЯВКА #${orderId}
╚═══════════════════════════

📱 <b>Услуга</b>
   ${data.serviceName}

💰 <b>Базовая стоимость</b>
   ${data.basePrice.toLocaleString('ru-RU')} ₽

${featuresText ? `🎯 <b>Дополнительные функции</b>\n${featuresText}\n   ─────────────────────\n   Доп. функций: ${data.featuresPrice.toLocaleString('ru-RU')} ₽\n` : ''}
⏱️ <b>Сроки выполнения</b>
   ${data.timeline.name}${data.timeline.multiplier > 1 ? ` (×${data.timeline.multiplier})` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━
💸 <b>ИТОГО:</b> ${data.totalPrice.toLocaleString('ru-RU')} ₽
━━━━━━━━━━━━━━━━━━━━━━━━━

👤 <b>Клиент:</b> @${data.customerTelegram.replace('@', '')}
📅 ${new Date().toLocaleString('ru-RU', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit', 
      minute: '2-digit'
    })}
    `.trim();

    // Отправка в Telegram
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    console.log('Sending to Telegram:', { botToken: botToken ? 'exists' : 'missing', chatId });

    if (botToken && chatId) {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      const result = await response.json();
      console.log('Telegram response:', result);

      if (!result.ok) {
        console.error('Telegram API error:', result);
      }
    } else {
      console.warn('Telegram credentials missing. Check .env.local file.');
    }

    return NextResponse.json({ 
      success: true, 
      orderId,
      message: 'Заявка успешно отправлена!' 
    });

  } catch (error: any) {
    console.error('Error processing order:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Ошибка при обработке заявки' },
      { status: 500 }
    );
  }
}
