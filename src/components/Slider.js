import { motion } from 'framer-motion'
import { useState } from 'react'
import { GithubIcon } from './icons'

const slides = [
	{
		id: 1,
		name: 'Angular Project: Task Manager',
		description:
			'Проект Task Manager – это веб-приложение, разработанное на базе Angular, предназначенное для управления задачами и проектами. Приложение позволяет пользователям создавать, редактировать и удалять задачи, а также отслеживать их выполнение. Основная цель проекта – предоставить удобный инструмент для организации работы и повышения продуктивности.',
		src: '/images/projects/Angular.png',
		srcGit: 'https://github.com/',
	},
	{
		id: 2,
		name: 'Next.js',
		description: 'Проект на технологии Next.js',
		src: '/images/Next.jpeg',
		srcGit: 'https://github.com/',
	},
	{
		id: 3,
		name: 'React',
		description: 'Проект на технологии React',
		src: '/images/React.jpg',
		srcGit: 'https://github.com/',
	},
	{
		id: 4,
		name: 'Redux',
		description: 'Проект на технологии Redux',
		src: '/images/Redux.jpg',
		srcGit: 'https://github.com/',
	},
]

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const handleNext = () => {
		setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))
	}

	const handlePrev = () => {
		setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))
	}

	return (
		<div
			className='relative w-full slider-height overflow-hidden border-2 border-solid border-dark rounded-2xl bg-cover bg-center grid grid-cols-2 items-center justify-center'
			style={{ backgroundImage: `url(${slides[currentSlide].src})` }}
		>
			<div
				className='w-2/3 m-auto col-span-1 flex flex-col items-start
			 justify-center  p-6 rounded-xl bg-dark bg-opacity-90'
			>
				<h3 className='font-bold text-6xl mb-6 text-light'>
					{slides[currentSlide].name}
				</h3>
				<p className='text-light'>{slides[currentSlide].description}</p>
				<div className='mt-6 flex item-center justify-center'>
					<motion.a
						href='https://github.com/CopperyTexas'
						target={'_blank'}
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
						className='w-16'
					>
						<GithubIcon />
					</motion.a>
					<button className='w-full h-full font-medium border-2 border-solid border-light m-2 rounded-2xl text-light bg-dark hover:bg-primaryDark hover:text-dark hover:scale-95 hover:border-dark'>
						See more
					</button>
				</div>
			</div>
			<div className='col-span-1'>dfsd</div>
			<button
				onClick={handlePrev}
				className='absolute bottom-5 left-1/2 transform -translate-y-1/2 bg-light text-dark  rounded-full m-2 border-2 border-solid border-dark w-16 h-16  hover:bg-primaryDark font-bold hover:scale-90 transition-transform ease-in-out'
			>
				&gt;
			</button>
			<button
				onClick={handleNext}
				className='absolute bottom-5 right-1/2 transform -translate-y-1/2 bg-light text-dark p-2 rounded-full m-2 border-2 border-solid border-dark w-16 h-16 hover:bg-primaryDark font-bold hover:scale-90 transition-transform ease-in-out'
			>
				&lt;
			</button>
		</div>
	)
}

export default Slider
