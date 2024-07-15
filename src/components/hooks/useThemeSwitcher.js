import { useCallback, useEffect, useState } from 'react'

const useThemeSwitcher = () => {
	const preferDarkQuery = '(prefers-color-scheme: dark)'
	const [mode, setMode] = useState('')

	const updateTheme = useCallback(theme => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
			document.documentElement.classList.remove('light')
		} else {
			document.documentElement.classList.add('light')
			document.documentElement.classList.remove('dark')
		}
	}, [])

	useEffect(() => {
		const mediaQuery = window.matchMedia(preferDarkQuery)
		const userPref = window.localStorage.getItem('theme')
		const handleChange = () => {
			if (userPref) {
				const theme = userPref === 'dark' ? 'dark' : 'light'
				setMode(theme)
				updateTheme(theme)
			} else {
				const theme = mediaQuery.matches ? 'dark' : 'light'
				setMode(theme)
				updateTheme(theme)
			}
		}

		mediaQuery.addEventListener('change', handleChange)
		handleChange()
		return () => mediaQuery.removeEventListener('change', handleChange)
	}, [updateTheme])

	useEffect(() => {
		if (mode) {
			window.localStorage.setItem('theme', mode)
			updateTheme(mode)
		}
	}, [mode, updateTheme])

	return [mode, setMode]
}

export default useThemeSwitcher
