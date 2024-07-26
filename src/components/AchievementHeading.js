// components/AchievementHeading.js
const AchievementHeading = ({ text, dark }) => {
	return (
		<h2
			className={`text-xl font-medium capitalize ${
				dark
					? 'text-dark/40 dark:text-light dark:opacity-30'
					: 'text-dark/75 dark:text-light'
			} lg:text-sm`}
		>
			{text}
		</h2>
	)
}

export default AchievementHeading
