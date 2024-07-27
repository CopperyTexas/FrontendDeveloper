import React from 'react'

// Компонент для отображения заголовка достижения
const AchievementHeading = ({ text, dark }) => {
	return (
		<h2
			className={`text-xl font-medium capitalize ${
				dark
					? 'text-dark/40 dark:text-light dark:opacity-30' // Темная тема с низкой прозрачностью
					: 'text-dark/75 dark:text-light' // Светлая тема с большей прозрачностью
			} lg:text-sm`}
		>
			{text}
		</h2>
	)
}

export default AchievementHeading
