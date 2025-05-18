// Данные для проектов
// Импорт изображений проектов
import LandingPages from '/public/assets/images/projects/LandingPages.png'
import Game2048 from '/public/assets/images/projects/Game2048.png'
import FintessLanding from '/public/assets/images/projects/FintessLanding.png'
import HeroVerse from '/public/assets/images/projects/HeroVerse.png'
import LandingPage1 from '/public/assets/images/projects/LandingPages/image1.png'
import LandingPage2 from '/public/assets/images/projects/LandingPages/image2.png'
import LandingPage3 from '/public/assets/images/projects/LandingPages/image3.png'
import LandingPage4 from '/public/assets/images/projects/LandingPages/image4.png'
import LandingPage5 from '/public/assets/images/projects/LandingPages/image5.png'
import LandingPage6 from '/public/assets/images/projects/LandingPages/image6.png'
import LandingPage7 from '/public/assets/images/projects/LandingPages/image7.jpeg'
import LandingPage8 from '/public/assets/images/projects/LandingPages/image8.jpeg'
import Game1 from '/public/assets/images/projects/Game2048/image1.png'
import Game2 from '/public/assets/images/projects/Game2048/image2.png'
import FintessLanding1 from '/public/assets/images/projects/FitnessLanding/image1.png'
import FintessLanding2 from '/public/assets/images/projects/FitnessLanding/image2.png'
import FintessLanding3 from '/public/assets/images/projects/FitnessLanding/image3.png'
import HeroVerse1 from '/public/assets/images/projects/HeroVerse/image1.png'
import HeroVerse2 from '/public/assets/images/projects/HeroVerse/image2.png'
import HeroVerse3 from '/public/assets/images/projects/HeroVerse/image3.png'
import HeroVerse4 from '/public/assets/images/projects/HeroVerse/image4.png'


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
		src: LandingPages,
		srcGit: 'https://github.com/CopperyTexas/Book-shop',
		images: [LandingPage1, LandingPage2, LandingPage3,LandingPage4,LandingPage5,LandingPage6,LandingPage7,LandingPage8],
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
		src: Game2048,
		srcGit: 'https://github.com/CopperyTexas/2048',
		images: [
	Game1, Game2
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
		src: FintessLanding,
		srcGit: 'https://github.com/CopperyTexas/personal-trainer',
		images: [FintessLanding1, FintessLanding2, FintessLanding3],
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
		src: HeroVerse,
		srcGit: 'https://github.com/CopperyTexas/HeroVerse',
		images: [HeroVerse1, HeroVerse2,HeroVerse3, HeroVerse4],
	},
]

export default slides
