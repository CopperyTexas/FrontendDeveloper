import angularLogo from './logos/angular.png'
import bootstrapLogo from './logos/bootstrap.png'
import cssLogo from './logos/css.png'
import gitLogo from './logos/git.png'
import graphqlLogo from './logos/graphql.png'
import htmlLogo from './logos/html.png'
import jsLogo from './logos/javascript.png'
import jestLogo from './logos/jest.png'
import nextjsLogo from './logos/nextjs.png'
import reactLogo from './logos/react.png'
import reduxLogo from './logos/redux.png'
import restapiLogo from './logos/restapi.png'
import sassLogo from './logos/sass.png'
import tailwindLogo from './logos/tailwind.png'
import typescriptLogo from './logos/typescript.png'
import webpackLogo from './logos/webpack.png'

const skills = [
	{
		id: 1,
		name: 'HTML',
		description:
			'HTML (HyperText Markup Language) - это основной язык разметки для создания и структурирования контента веб-страниц.',
		logo: htmlLogo,
	},
	{
		id: 2,
		name: 'CSS',
		description:
			'CSS (Cascading Style Sheets) - это язык стилей, используемый для оформления и визуального представления веб-страниц, включая цвета, шрифты и макеты.',
		logo: cssLogo,
	},

	{
		id: 3,
		name: 'SASS',
		description:
			'SASS (Syntactically Awesome Stylesheets) - это расширение CSS, которое позволяет использовать переменные, вложенность и миксины для более эффективного и удобного написания стилей.',
		logo: sassLogo,
	},
	{
		id: 4,
		name: 'Tailwind CSS',
		description:
			'Tailwind CSS - это утилитарный CSS-фреймворк, который предоставляет готовые классы для быстрого и гибкого создания адаптивного дизайна без необходимости писать пользовательские стили.',
		logo: tailwindLogo,
	},
	{
		id: 5,
		name: 'JavaScript',
		description:
			'JavaScript - это язык программирования, используемый для создания интерактивных и динамических элементов на веб-страницах.',
		logo: jsLogo,
	},
	{
		id: 6,
		name: 'TypeScript',
		description:
			'TypeScript - это надстройка над JavaScript, добавляющая статическую типизацию и другие возможности, которые помогают разработчикам писать более надежный и масштабируемый код.',
		logo: typescriptLogo,
	},
	{
		id: 7,
		name: 'Bootstrap',
		description:
			'Bootstrap - это популярный CSS-фреймворк, который предоставляет готовые компоненты и стили для создания адаптивных и современных веб-сайтов.',
		logo: bootstrapLogo,
	},
	{
		id: 8,
		name: 'React',
		description:
			'React - это библиотека JavaScript для создания пользовательских интерфейсов, которая позволяет разработчикам строить компоненты и эффективно управлять состоянием приложения.',
		logo: reactLogo,
	},
	{
		id: 9,
		name: 'Next.js',
		description:
			'Next.js - это фреймворк для React, который позволяет создавать серверные рендеринг и статические веб-приложения с улучшенной производительностью и SEO.',
		logo: nextjsLogo,
	},
	{
		id: 10,
		name: 'Angular',
		description:
			'Angular - это платформенный фреймворк для разработки веб-приложений, который предоставляет инструменты для создания масштабируемых и поддерживаемых приложений.',
		logo: angularLogo,
	},
	{
		id: 11,
		name: 'Git',
		description:
			'Git - это система контроля версий, которая позволяет разработчикам отслеживать изменения в коде, сотрудничать и управлять версиями проектов.',
		logo: gitLogo,
	},
	{
		id: 12,
		name: 'Redux',
		description:
			'Redux - это библиотека для управления состоянием в JavaScript-приложениях, которая помогает предсказуемо обновлять состояние и упрощает отладку.',
		logo: reduxLogo,
	},

	{
		id: 13,
		name: 'RESTful API',
		description:
			'RESTful API - это архитектурный стиль для создания веб-сервисов, который использует HTTP методы для взаимодействия с ресурсами и обмена данными между клиентом и сервером.',
		logo: restapiLogo,
	},

	{
		id: 14,
		name: 'GraphQL',
		description:
			'GraphQL - это язык запросов для API, который позволяет клиентам запрашивать только те данные, которые им нужны, улучшая эффективность и гибкость взаимодействия с сервером.',
		logo: graphqlLogo,
	},
	{
		id: 15,
		name: 'Webpack',
		description:
			'Webpack - это модульный бандлер для JavaScript-приложений, который собирает все зависимости в единый файл для более эффективного управления и загрузки ресурсов.',
		logo: webpackLogo,
	},
	{
		id: 16,
		name: 'Jest',
		description:
			'Jest - это фреймворк для тестирования JavaScript, который позволяет легко создавать и запускать тесты, обеспечивая высокое покрытие кода и надежность приложений.',
		logo: jestLogo,
	},
]

export default skills
