/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Добавлены jsx и tsx
	theme: {
		extend: {
			fontFamily: {
				mont: ['var(--font-mont)', ...fontFamily.sans], // Закрыта скобка
			},
			colors: {
				dark: '#1f2937',
				light: '#f5f5f5',
				primary: '#B63E96', // 240,86,199
				primaryDark: '#92E3A9', // 80,230,217
			},
			animation: {
				'spin-slow': 'spin 8s linear infinite',
			},
		},
	},
	plugins: [],
}
