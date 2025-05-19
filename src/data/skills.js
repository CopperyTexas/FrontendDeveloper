

// Импорт логотипов навыков
import HTMLLogo      from './logos/html.png'
import CSSLogo       from './logos/css.png'
import SASSLogo      from './logos/sass.png'
import TailwindLogo  from './logos/tailwind.png'
import JSLogo        from './logos/javascript.png'
import TSTypeLogo    from './logos/typescript.png'
import BootstrapLogo from './logos/bootstrap.png'
import ReactLogo     from './logos/react.png'
import NextLogo      from './logos/nextjs.png'
import AngularLogo   from './logos/angular.png'
import GitLogo       from './logos/git.png'
import ReduxLogo     from './logos/redux.png'
import ApiLogo       from './logos/restapi.png'
import GraphQLLogo   from './logos/graphql.png'
import WebpackLogo   from './logos/webpack.png'
import JestLogo      from './logos/jest.png'

const skills = [
	{
		id: 1,
		name: 'HTML',
		description:
			'HTML (HyperText Markup Language) — основной язык разметки для создания и структурирования содержимого веб-страниц.',
		logo: HTMLLogo,
	},
	{
		id: 2,
		name: 'CSS',
		description:
			'CSS (Cascading Style Sheets) — язык стилей для оформления веб-страниц: цвета, шрифты, макеты и адаптивность.',
		logo: CSSLogo,
	},
	{
		id: 3,
		name: 'SASS',
		description:
			'SASS (Syntactically Awesome Stylesheets) — расширение CSS с переменными, вложенностью и миксинами для более удобной разработки стилей.',
		logo: SASSLogo,
	},
	{
		id: 4,
		name: 'Tailwind CSS',
		description:
			'Tailwind CSS — утилитарный CSS-фреймворк для быстрой и гибкой вёрстки без написания пользовательских стилей.',
		logo: TailwindLogo,
	},
	{
		id: 5,
		name: 'JavaScript',
		description:
			'JavaScript — язык программирования для создания интерактивных и динамических элементов на веб-страницах.',
		logo: JSLogo,
	},
	{
		id: 6,
		name: 'TypeScript',
		description:
			'TypeScript — надстройка над JavaScript с поддержкой статической типизации и современными возможностями языка.',
		logo: TSTypeLogo,
	},
	{
		id: 7,
		name: 'Bootstrap',
		description:
			'Bootstrap — популярный CSS-фреймворк с готовыми компонентами и сеткой для адаптивных веб-сайтов.',
		logo: BootstrapLogo,
	},
	{
		id: 8,
		name: 'React',
		description:
			'React — библиотека для создания пользовательских интерфейсов на основе компонентов и эффективного управления состоянием.',
		logo: ReactLogo,
	},
	{
		id: 9,
		name: 'Next.js',
		description:
			'Next.js — фреймворк поверх React для SSR, SSG и оптимизации веб-приложений с улучшенной производительностью и SEO.',
		logo: NextLogo,
	},
	{
		id: 10,
		name: 'Angular',
		description:
			'Angular — платформенный фреймворк для создания масштабируемых веб-приложений с TypeScript и готовыми инструментами.',
		logo: AngularLogo,
	},
	{
		id: 11,
		name: 'Git',
		description:
			'Git — система контроля версий для отслеживания изменений, совместной работы и управления релизами проектов.',
		logo: GitLogo,
	},
	{
		id: 12,
		name: 'Redux',
		description:
			'Redux — библиотека управления состоянием в JavaScript-приложениях с единой глобальной хранилищем и предсказуемыми обновлениями.',
		logo: ReduxLogo,
	},
	{
		id: 13,
		name: 'REST API',
		description:
			'REST API — архитектурный стиль веб-сервисов, использующий HTTP-методы для взаимодействия между клиентом и сервером.',
		logo: ApiLogo,
	},
	{
		id: 14,
		name: 'GraphQL',
		description:
			'GraphQL — язык запросов к API, позволяющий клиентам запрашивать только необходимые данные и оптимизировать производительность.',
		logo: GraphQLLogo,
	},
	{
		id: 15,
		name: 'Webpack',
		description:
			'Webpack — модульный бандлер для объединения JavaScript, CSS и прочих ресурсов в оптимальные пакеты для веб-приложений.',
		logo: WebpackLogo,
	},
	{
		id: 16,
		name: 'Jest',
		description:
			'Jest — фреймворк для тестирования JavaScript-приложений с поддержкой снапшотов и высоких показателей покрытия кода.',
		logo: JestLogo,
	},
]

export default skills
