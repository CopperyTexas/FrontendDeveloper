/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			transitionProperty: {
				bg: 'background-color',
				text: 'color',
			},
			transitionDuration: {
				300: '300ms',
			},
			transitionTimingFunction: {
				'ease-in-out': 'ease-in-out',
			},
			fontFamily: {
				mont: ['var(--font-mont)', ...fontFamily.sans],
			},
			colors: {
				dark: '#1f2937',
				light: '#f5f5f5',
				primary: '#B63E96',
				primaryDark: '#92E3A9',
			},
			animation: {
				'spin-slow': 'spin 8s linear infinite',
			},
		},
		screens: {
			'3xl': { max: '1800px' },
			'2xl': { max: '1535px' },
			xl: { max: '1279px' },
			lg: { max: '1023px' },
			md: { max: '767px' },
			sm: { max: '639px' },
			xs: { max: '479px' },
		},
	},
	plugins: [],
}
