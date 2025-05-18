// Данные для проектов

// Массив с данными о слайдах проектов
const slides = [
	{
		id: 1,
		name: 'Landing Pages Collection',
		description: `
      Коллекция адаптивных лендингов, созданных вручную для отработки навыков вёрстки. Каждый лендинг разработан с учётом современных требований к дизайну: чистая сетка, отзывчивый интерфейс и кроссбраузерная совместимость.
В проектах использовались HTML, CSS и Tailwind CSS. Все страницы адаптированы под мобильные устройства и десктопы.
Что реализовано:
\t•\tАдаптивная вёрстка
\t•\tМакеты в стиле промо и презентационных страниц
\t•\tЧистая структура и семантический код

Цель:
Повысить уровень владения вёрсткой, потренироваться в создании интерфейсов «с нуля» и соблюдении pixel-perfect.
    `,
		src: '/assets/images/projects/LandingPages.png',
		srcGit: 'https://github.com/CopperyTexas/Book-shop',
		images: [
			'/assets/images/projects/LandingPages/image1.png',
			'/assets/images/projects/LandingPages/image2.png',
			'/assets/images/projects/LandingPages/image3.png',
			'/assets/images/projects/LandingPages/image4.png',
			'/assets/images/projects/LandingPages/image5.png',
			'/assets/images/projects/LandingPages/image6.png',
			'/assets/images/projects/LandingPages/image7.jpeg',
			'/assets/images/projects/LandingPages/image8.jpeg'
		],
	},
	{
		id: 2,
		name: '2048 Game',
		description: `
Реализация классической игры 2048 на чистом JavaScript, HTML и CSS. Игра полностью повторяет механику оригинала, а также включает дополнительные функции: переключение темы (день/ночь), плавные анимации, сохранение результатов и таблицу лидеров.

Что реализовано:
\t•\tИгровое поле 4×4 с динамической генерацией плиток
\t•\tУправление с клавиатуры
\t•\tАнимации перемещения и слияния плиток
\t•\tПодсчёт очков и таблица лидеров (сохраняется в localStorage)
\t•\tПереключение между светлой и тёмной темой
\t•\tЧистый, адаптивный интерфейс без фреймворков

Цель:
Развить навыки работы с DOM, логикой игры и пользовательским интерфейсом. Этот проект стал отличной практикой в реализации взаимодействия компонентов, хранения данных и создания UI с нуля.
    `,
		src: '/assets/images/projects/Game2048.png',
		srcGit: 'https://github.com/CopperyTexas/2048',
		images: [
			'/assets/images/projects/Game2048/image1.png',
			'/assets/images/projects/Game2048/image2.png'
		],
	},
	{
		id: 3,
		name: ' Fitness Landing — лендинг для фитнес-тренера',
		description: `Современный лендинг, созданный для продвижения услуг персонального фитнес-тренера. Сайт выполнен в виде одностраничного приложения с плавными анимациями, слайдерами и полностью адаптивным интерфейсом. Проект разработан на React с использованием Tailwind CSS и Swiper, задеплоен на Netlify .
Что реализовано:
\t•\tАдаптивная вёрстка (мобильные, планшеты, десктоп)
\t•\tСлайдеры с отзывами и преимуществами
\t•\tПлавные анимации при скролле
\t•\tСтруктурированный и чистый код
\t•\tCI/CD-деплой на Netlify
\t•\tSEO-основа и базовая производительность

Цель проекта:
Отработать создание современного лендинга с нуля, пройти все этапы: от дизайна и вёрстки до сборки и публикации. Этот проект показал мой подход к созданию интерфейсов и понимание полного цикла разработки и запуска.
    `,
		src: '/assets/images/projects/FintessLanding.png',
		srcGit: 'https://github.com/CopperyTexas/personal-trainer',
		images: [
			'/assets/images/projects/FitnessLanding/image1.png',
			'/assets/images/projects/FitnessLanding/image2.png',
			'/assets/images/projects/FitnessLanding/image3.png'
		],
	},
	{
		id: 4,
		name: 'HeroVerse — мини-социальная сеть с серверной частью',
		description: `
     HeroVerse — учебный проект социальной сети с фронтендом на Angular и сервером на Node.js + MongoDB. В приложении реализованы: регистрация и вход по JWT, настройка профиля, список друзей, подписки, личные чаты и поиск пользователей.

Технологии: Angular, NgRx, RxJS, Node.js, Express, MongoDB, JWT

Что реализовано:
\t•\tАутентификация и защита маршрутов
\t•\tРедактирование профиля и аватара
\t•\tПоиск и подписки
\t•\tЛичные чаты и список друзей
\t•\tПолноценный REST API

Чему я научился:
\t•\tОрганизовывать архитектуру клиент-серверного приложения
\t•\tРаботать с токенами и защищать маршруты
\t•\tИспользовать MongoDB для хранения структурированных данных
\t•\tРазрабатывать SPA с Angular и управлением состоянием (NgRx)
    `,
		src: '/assets/images/projects/HeroVerse.png',
		srcGit: 'https://github.com/CopperyTexas/HeroVerse',
		images: [
			'/assets/images/projects/HeroVerse/image1.png',
			'/assets/images/projects/HeroVerse/image2.png',
			'/assets/images/projects/HeroVerse/image3.png',
			'/assets/images/projects/HeroVerse/image4.png'
		],
	},
	{
		id: 5,
		name: 'InterSeis — десктопное приложение для сейсморазведки',
		description: `
     Приложение для построения и редактирования графов обработки сейсмоданных, созданное на базе Angular и Electron. Интерфейс позволяет загружать, настраивать и сохранять цепочки фильтров в формате .ips. Разработано как внутренняя альтернатива устаревшим инженерным утилитам.

Технологии: Angular, Electron, TypeScript, Tailwind CSS

Что реализовано:
\t•\tДесктопное приложение с drag-and-drop интерфейсом
\t•\tЗагрузка и сохранение конфигураций
\t•\tДерево папок, диалоги настроек фильтров
\t•\tПоддержка запуска внешних программ
    `,
		src: '/assets/images/projects/InterSeis.png',
		srcGit: 'https://github.com/CopperyTexas/HeroVerse',
		images: [
			'/assets/images/projects/InterSeis/image1.png',
			'/assets/images/projects/InterSeis/image2.png',
			'/assets/images/projects/InterSeis/image3.png',
			'/assets/images/projects/InterSeis/image4.png'
		],
	},
]

export default slides
