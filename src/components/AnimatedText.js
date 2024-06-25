import { motion } from 'framer-motion'

const quote = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.3, // Уменьшена задержка
			staggerChildren: 0.05, // Уменьшен интервал между анимациями слов
		},
	},
}

const singleWord = {
	initial: {
		opacity: 0,
		y: 30, // Уменьшено значение для плавности
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7, // Уменьшена длительность
		},
	},
}

const AnimatedText = ({ text, className = '' }) => {
	return (
		<div className='w-full mx-auto flex items-center justify-center text-center overflow-hidden'>
			<motion.h2
				className={`inline-block w-full text-dark font-bold text-8xl ${className}`}
				variants={quote}
				initial='initial'
				animate='animate'
			>
				{text.split(' ').map((word, index) => (
					<motion.span
						key={word + '-' + index}
						className='inline-block'
						variants={singleWord}
					>
						{word}&nbsp;
					</motion.span>
				))}
			</motion.h2>
		</div>
	)
}

export default AnimatedText
