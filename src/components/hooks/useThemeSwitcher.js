import { useCallback, useEffect, useState } from 'react'

// Хук для переключения темы (светлая/темная)
const useThemeSwitcher = () => {
	const preferDarkQuery = '(prefers-color-scheme: dark)'
	const [mode, setMode] = useState('')

	// Функция для обновления темы
	const updateTheme = useCallback(theme => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
			document.documentElement.classList.remove('light')
		} else {
			document.documentElement.classList.add('light')
			document.documentElement.classList.remove('dark')
		}
	}, [])

	// Эффект для установки начальной темы и слежения за изменениями предпочтений пользователя
	useEffect(() => {
		const mediaQuery = window.matchMedia(preferDarkQuery)
		const userPref = window.localStorage.getItem('theme')

		// Функция для обработки изменения темы
		const handleChange = () => {
			if (userPref) {
				// Если есть сохраненные предпочтения пользователя
				const theme = userPref === 'dark' ? 'dark' : 'light'
				setMode(theme)
				updateTheme(theme)
			} else {
				// Если предпочтения пользователя нет, используем системные настройки
				const theme = mediaQuery.matches ? 'dark' : 'light'
				setMode(theme)
				updateTheme(theme)
			}
		}

		// Добавляем слушателя на изменение предпочтений
		mediaQuery.addEventListener('change', handleChange)

		// Устанавливаем начальную тему при монтировании компонента
		handleChange()

		// Убираем слушателя при размонтировании компонента
		return () => mediaQuery.removeEventListener('change', handleChange)
	}, [preferDarkQuery, updateTheme])

	// Эффект для сохранения выбранной темы в localStorage и обновления класса темы
	useEffect(() => {
		if (mode) {
			window.localStorage.setItem('theme', mode)
			updateTheme(mode)
		}
	}, [mode, updateTheme])

	return [mode, setMode]
}

export default useThemeSwitcher
