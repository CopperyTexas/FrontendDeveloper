// slides.js

// Статический импорт фоновых превью
import LandingPreview     from '/public/assets/images/projects/LandingPages.png'
import Game2048Preview    from '/public/assets/images/projects/Game2048.png'
import FitnessPreview     from '/public/assets/images/projects/FintessLanding.png'
import HeroVersePreview   from '/public/assets/images/projects/HeroVerse.png'
import InterSeisPreview   from '/public/assets/images/projects/InterSeis.png'

// Статический импорт галерейных изображений
import LP1 from '/public/assets/images/projects/LandingPages/image1.png'
import LP2 from '/public/assets/images/projects/LandingPages/image2.png'
import LP3 from '/public/assets/images/projects/LandingPages/image3.png'
import LP4 from '/public/assets/images/projects/LandingPages/image4.png'
import LP5 from '/public/assets/images/projects/LandingPages/image5.png'
import LP6 from '/public/assets/images/projects/LandingPages/image6.png'
import LP7 from '/public/assets/images/projects/LandingPages/image7.jpeg'
import LP8 from '/public/assets/images/projects/LandingPages/image8.jpeg'

import G1 from '/public/assets/images/projects/Game2048/image1.png'
import G2 from '/public/assets/images/projects/Game2048/image2.png'

import F1 from '/public/assets/images/projects/FitnessLanding/image1.png'
import F2 from '/public/assets/images/projects/FitnessLanding/image2.png'
import F3 from '/public/assets/images/projects/FitnessLanding/image3.png'

import H1 from '/public/assets/images/projects/HeroVerse/image1.png'
import H2 from '/public/assets/images/projects/HeroVerse/image2.png'
import H3 from '/public/assets/images/projects/HeroVerse/image3.png'
import H4 from '/public/assets/images/projects/HeroVerse/image4.png'

import I1 from '/public/assets/images/projects/InterSeis/image1.png'
import I2 from '/public/assets/images/projects/InterSeis/image2.png'
import I3 from '/public/assets/images/projects/InterSeis/image3.png'
import I4 from '/public/assets/images/projects/InterSeis/image4.png'

const slides = [
	{
		id: 1,
		name: 'Landing Pages Collection',
		description: `
      Коллекция адаптивных лендингов, созданных вручную для отработки навыков вёрстки. Каждый лендинг разработан с учётом современных требований к дизайну: чистая сетка, отзывчивый интерфейс и кроссбраузерная совместимость.
      В проектах использовались HTML, CSS и Tailwind CSS. Все страницы адаптированы под мобильные устройства и десктопы.

      Что реализовано:
      • Адаптивная вёрстка
      • Макеты в стиле промо и презентационных страниц
      • Чистая структура и семантический код

      Цель:
      Повысить уровень владения вёрсткой, потренироваться в создании интерфейсов «с нуля» и соблюдать pixel-perfect.
    `,
		src: LandingPreview,
		srcGit: 'https://github.com/CopperyTexas/Book-shop',
		images: [LP1, LP2, LP3, LP4, LP5, LP6, LP7, LP8],
	},
	{
		id: 2,
		name: '2048 Game',
		description: `
      Реализация классической игры 2048 на чистом JavaScript, HTML и CSS. Игра полностью повторяет механику оригинала, а также включает дополнительные функции: переключение темы (день/ночь), плавные анимации, сохранение результатов и таблицу лидеров.

      Что реализовано:
      • Игровое поле 4×4 с динамической генерацией плиток
      • Управление с клавиатуры
      • Анимации перемещения и слияния плиток
      • Подсчёт очков и таблица лидеров (сохраняется в localStorage)
      • Переключение между светлой и тёмной темой
      • Чистый, адаптивный интерфейс без фреймворков

      Цель:
      Развить навыки работы с DOM, логикой игры и пользовательским интерфейсом. Этот проект стал отличной практикой в реализации взаимодействия компонентов, хранения данных и создания UI с нуля.
    `,
		src: Game2048Preview,
		srcGit: 'https://github.com/CopperyTexas/2048',
		images: [G1, G2],
	},
	{
		id: 3,
		name: 'Fitness Landing — лендинг для фитнес-тренера',
		description: `
      Современный лендинг, созданный для продвижения услуг персонального фитнес-тренера. Сайт выполнен в виде SPA на React с Tailwind CSS и Swiper, задеплоен на Netlify.

      Что реализовано:
      • Адаптивная вёрстка (мобильные, планшеты, десктоп)
      • Слайдеры с отзывами и преимуществами
      • Плавные анимации при скролле
      • Структурированный и чистый код
      • CI/CD-деплой на Netlify
      • SEO-основа и базовая производительность

      Цель проекта:
      Отработать создание современного лендинга с нуля, пройти все этапы: от дизайна и вёрстки до сборки и публикации. Этот проект показал мой подход к созданию интерфейсов и понимание полного цикла разработки и запуска.
    `,
		src: FitnessPreview,
		srcGit: 'https://github.com/CopperyTexas/personal-trainer',
		images: [F1, F2, F3],
	},
	{
		id: 4,
		name: 'HeroVerse — мини-социальная сеть',
		description: `
      HeroVerse — учебный проект социальной сети с фронтендом на Angular и бэкендом на Node.js + MongoDB. В приложении реализованы: регистрация и вход по JWT, настройка профиля, список друзей, подписки, личные чаты и поиск пользователей.

      Технологии: Angular, NgRx, RxJS, Node.js, Express, MongoDB, JWT

      Что реализовано:
      • Аутентификация и защита маршрутов
      • Редактирование профиля и аватара
      • Поиск и подписки
      • Личные чаты и список друзей
      • Полноценный REST API
    `,
		src: HeroVersePreview,
		srcGit: 'https://github.com/CopperyTexas/HeroVerse',
		images: [H1, H2, H3, H4],
	},
	{
		id: 5,
		name: 'InterSeis — десктопное приложение',
		description: `
      Приложение для построения и редактирования графов обработки сейсмоданных, созданное на базе Angular и Electron. Интерфейс позволяет загружать, настраивать и сохранять цепочки фильтров в формате .ips. Разработано как внутренняя альтернатива устаревшим инженерным утилитам.

      Технологии: Angular, Electron, TypeScript, Tailwind CSS

      Что реализовано:
      • Десктопное приложение с drag-and-drop интерфейсом
      • Загрузка и сохранение конфигураций
      • Дерево папок, диалоги настроек фильтров
      • Поддержка запуска внешних программ
    `,
		src: InterSeisPreview,
		srcGit: 'https://github.com/CopperyTexas/InterSeis',
		images: [I1, I2, I3, I4],
	},
]

export default slides
