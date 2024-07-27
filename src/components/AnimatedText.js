// Импорты из библиотек
import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

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
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	// Разбиваем текст на отдельные слова и заранее создаем список слов
	const words = text.split(' ').map((word, index) => (
		<motion.span
			key={`${word}-${index}`}
			className='inline-block'
			variants={singleWord} // Применяем анимационные настройки для каждого слова
		>
			{word}&nbsp;
		</motion.span>
	))

	return (
		<div
			className={`w-full mx-auto flex items-center justify-center overflow-hidden ${className}`}
			ref={ref}
		>
			{isInView && (
				<motion.h2
					className='inline-block w-full text-dark font-bold dark:text-primaryDark'
					variants={quote} // Применяем анимационные настройки для всей цитаты
					initial='initial'
					animate='animate'
				>
					{words}
				</motion.h2>
			)}
		</div>
	)
}

export default AnimatedText
