# 🎨 Гайд по добавлению Spline анимации

## Вариант 1: Через React компонент (рекомендуется)

### Шаг 1: Установка пакета
Откройте терминал в VS Code (Ctrl + `) и выполните:
```bash
npm install @splinetool/react-spline
```

### Шаг 2: Создание 3D сцены
1. Зайдите на **https://spline.design**
2. Зарегистрируйтесь/войдите (бесплатно)
3. Создайте новую сцену или выберите из шаблонов
4. Настройте 3D объекты, анимации, интерактивность
5. Нажмите **Export** → **Code Export** → **React**
6. Скопируйте ссылку (примерно так: `https://prod.spline.design/xxxxxxxx/scene.splinecode`)

### Шаг 3: Добавление в проект
В файле `src/components/HeroSection.tsx`:
1. Раскомментируйте строку с импортом:
   ```tsx
   import Spline from '@splinetool/react-spline';
   ```
2. Раскомментируйте и замените ссылку:
   ```tsx
   <Spline scene="https://prod.spline.design/ТВОЯ_ССЫЛКА/scene.splinecode" />
   ```
3. Закомментируйте `<iframe>` блок

---

## Вариант 2: Через iframe (работает сразу)

### Шаг 1: Экспорт со Spline
1. Создайте сцену на **spline.design**
2. Нажмите **Share** → **Get embed code**
3. Скопируйте ссылку из iframe (например: `https://my.spline.design/untitled-xxxxx/`)

### Шаг 2: Вставка в код
В файле `src/components/HeroSection.tsx` замените ссылку в iframe:
```tsx
<iframe 
  src='ТВОЯ_ССЫЛКА'
  frameBorder='0'
  width='100%'
  height='100%'
/>
```

---

## Популярные шаблоны Spline для лендингов:

1. **3D Gradient Orb** - абстрактные сферы с градиентами
2. **Floating Phone Mockup** - летающий телефон для демо приложения
3. **Abstract Geometry** - геометрические фигуры
4. **Particles Effect** - частицы и волны
5. **Low Poly Scene** - минималистичные 3D сцены

## Советы по оптимизации:

- Используйте **низкополигональные** модели для лучшей производительности
- Включите **lazy loading** через Suspense (уже добавлено)
- Ограничьте размер сцены до **5-10 МБ**
- На мобильных можно показывать статичную картинку вместо 3D

---

## Текущий статус:
✅ Компонент HeroSection создан  
✅ Интеграция с iframe готова (работает)  
⏳ Установите пакет для использования React компонента  
⏳ Создайте свою 3D сцену на spline.design
