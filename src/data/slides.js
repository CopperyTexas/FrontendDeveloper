// Данные для проектов
// Импорт изображений проектов
import AngularImage from '../images/projects/Angular.png'
import NextJSImage from '../images/projects/NextJS.png'
import ReactImage from '../images/projects/React.png'
import ReduxImage from '../images/projects/Redux.png'
import AngularImage1 from '../images/projects/angular/image1.jpg'
import AngularImage2 from '../images/projects/angular/image2.jpg'
import NextImage3 from '../images/projects/next/About.png'
import NextImage5 from '../images/projects/next/About_desktop.png'
import NextImage7 from '../images/projects/next/About_tablet.png'
import NextImage1 from '../images/projects/next/Home.png'
import NextImage2 from '../images/projects/next/Home_light.png'
import NextImage6 from '../images/projects/next/Home_tablet.png'
import NextImage4 from '../images/projects/next/Project.png'
import NextImage8 from '../images/projects/next/Project_tablet.png'
import ReactImage1 from '../images/projects/react/image1.jpg'
import ReactImage2 from '../images/projects/react/image2.jpg'
import ReduxImage1 from '../images/projects/redux/image1.jpg'
import ReduxImage2 from '../images/projects/redux/image2.jpg'

// Массив с данными о слайдах проектов
const slides = [
	{
		id: 1,
		name: 'Angular Project: Task Manager',
		description: `
      Проект Task Manager – это веб-приложение, разработанное на базе Angular, предназначенное для управления задачами и проектами.
      Приложение позволяет пользователям создавать, ред	актировать и удалять задачи, а также отслеживать их выполнение.
      Основная цель проекта – предоставить удобный инструмент для организации работы и повышения продуктивности.
    `,
		src: AngularImage,
		srcGit: 'https://github.com/',
		images: [AngularImage1, AngularImage2],
	},
	{
		id: 2,
		name: 'Next.js Project: Portfolio Website',
		description: `
Проект Portfolio Website – это современный и адаптивный веб-сайт портфолио, разработанный с использованием Next.js.
			Основные функции сайта включают:
			- Презентацию проектов и работ с использованием слайдера
			- Детальную информацию о каждом проекте
			- Ссылки на репозитории GitHub для просмотра исходного кода
			- Контактную информацию и форму обратной связи
			Основная цель проекта – продемонстрировать навыки и проекты разработчика в удобном и привлекательном формате.
			Используемые технологии: Next.js, React, Tailwind CSS, Framer Motion.
    `,
		src: NextJSImage,
		srcGit: 'https://github.com/',
		images: [
			NextImage1,
			NextImage2,
			NextImage3,
			NextImage4,
			NextImage5,
			NextImage6,
			NextImage7,
			NextImage8,
		],
	},
	{
		id: 3,
		name: 'React Project: E-commerce Platform',
		description: `
      Проект E-commerce Platform – это мощное веб-приложение, разработанное на базе React, предназначенное для создания интернет-магазинов.
      Приложение предоставляет все необходимые инструменты для управления продуктами, заказами и клиентами.
      Основная цель проекта – предоставить гибкую и масштабируемую платформу для торговли в интернете.
    `,
		src: ReactImage,
		srcGit: 'https://github.com/',
		images: [ReactImage1, ReactImage2],
	},
	{
		id: 4,
		name: 'Redux Project: Expense Tracker',
		description: `
      Проект Expense Tracker – это удобное веб-приложение, разработанное на базе Redux и React, предназначенное для отслеживания расходов.
      Приложение позволяет пользователям вести учет своих доходов и расходов, анализировать финансовое состояние и планировать бюджет.
      Основная цель проекта – предоставить эффективный инструмент для управления личными финансами.
    `,
		src: ReduxImage,
		srcGit: 'https://github.com/',
		images: [ReduxImage1, ReduxImage2],
	},
]

export default slides
