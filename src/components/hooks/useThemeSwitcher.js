import { useCallback, useEffect, useState } from 'react'

const useThemeSwitcher = () => {
	const preferDarkQuery = '(prefer-color-scheme: dark)'
	const [mode, setMode] = useState('')
	const updateTheme = useCallback(check => {
		if (check === 'dark') {
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
				let check = userPref === 'dark' ? 'dark' : 'light'
				setMode(check)
				updateTheme(check)
			} else {
				let check = mediaQuery.matches ? 'dark' : 'light'
				setMode(check)
				updateTheme(check)
			}
		}
		mediaQuery.addEventListener('change', handleChange)
		handleChange()
		return () => mediaQuery.removeEventListener('change', handleChange)
	}, [updateTheme])

	useEffect(() => {
		if (mode === 'dark') {
			window.localStorage.setItem('theme', 'dark')
			updateTheme('dark')
		} else {
			window.localStorage.setItem('theme', 'light')
			updateTheme('light')
		}
	}, [mode, updateTheme])

	return [mode, setMode]
}

export default useThemeSwitcher
