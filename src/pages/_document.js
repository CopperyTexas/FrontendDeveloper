// Импорт фреймворков
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			{' '}
			{/* Установка атрибута языка для HTML документа */}
			<Head />{' '}
			{/* Место для добавления мета-тегов и других элементов в <head> */}
			<body>
				<script id='theme-switcher' strategy='beforeInteractive'>
					{`  
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}`}
				</script>{' '}
				{/* Скрипт для управления темой до интерактивного рендеринга */}
				<Main /> {/* Основное содержимое страницы */}
				<NextScript /> {/* Вставка скриптов, необходимых для работы Next.js */}
			</body>
		</Html>
	)
}
