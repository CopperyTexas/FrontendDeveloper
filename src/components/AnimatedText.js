import { motion } from 'framer-motion'

// Анимационные настройки для всего текста (цитаты)
const quote = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.1, // Задержка между анимациями слов
		},
	},
}

// Анимационные настройки для каждого отдельного слова
const singleWord = {
	initial: {
		opacity: 0,
		y: 30,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.5,
			ease: 'easeInOut',
		},
	},
}

// Компонент для отображения анимированного текста
const AnimatedText = ({ text, className = '' }) => {
	return (
		<div className='w-full mx-auto flex items-center justify-center text-center overflow-hidden'>
			<motion.h2
				className={`inline-block w-full text-dark font-bold text-8xl ${className}`}
				variants={quote} // Применяем анимационные настройки для всей цитаты
				initial='initial'
				animate='animate'
			>
				{/* Разбиваем текст на отдельные слова и анимируем каждое слово */}
				{text.split(' ').map((word, index) => (
					<motion.span
						key={word + '-' + index}
						className='inline-block'
						variants={singleWord} // Применяем анимационные настройки для каждого слова
					>
						{word}&nbsp;
					</motion.span>
				))}
			</motion.h2>
		</div>
	)
}

export default AnimatedText
