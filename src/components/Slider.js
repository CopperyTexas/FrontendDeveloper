// Импорт фреймворков
import {AnimatePresence, motion} from 'framer-motion'
import Image from 'next/image'
import {useState} from 'react'

// Импорт компонентов
import Modal from '../components/ProjectModal'
import ImageSlider from './ImageSlider'
import ProjectInfo from './ProjectInfo'
import ProjectNavigationButtons from './ProjectNavigationButtons'

// Импорт данных и изображений
import imageVariant from '../data/imageVariants'
import slides from '../data/slides'
import SvgProject from '/public/assets/images/project.svg'

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isAnimating, setIsAnimating] = useState(false)
	const [currentImage, setCurrentImage] = useState(0)
	const [direction, setDirection] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false)

	// Функция для перехода к следующему проекту
	const handleNextProject = () => {
		if (isAnimating) return
		setDirection('next')
		setIsAnimating(true)
		setCurrentSlide(prev => (prev + 1) % slides.length)
		setCurrentImage(0) // Сброс индекса изображения при смене проекта
	}

	// Функция для перехода к предыдущему проекту
	const handlePrevProject = () => {
		if (isAnimating) return
		setDirection('prev')
		setIsAnimating(true)
		setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
		setCurrentImage(0) // Сброс индекса изображения при смене проекта
	}

	// Функция для перехода к следующему изображению
	const handleNextImage = () => {
		setCurrentImage(prev => (prev + 1) % slides[currentSlide].images.length)
	}

	// Функция для перехода к предыдущему изображению
	const handlePrevImage = () => {
		setCurrentImage(
			prev =>
				(prev - 1 + slides[currentSlide].images.length) %
				slides[currentSlide].images.length
		)
	}

	// Функция для завершения анимации
	const onAnimationComplete = () => {
		setIsAnimating(false)
	}

	// Функция для открытия модального окна
	const openModal = () => {
		setIsModalOpen(true)
	}

	// Функция для закрытия модального окна
	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div className='relative w-full slider-height rounded-2xl bg-cover bg-center grid grid-cols-2 grid-rows-4 xl:grid-rows-5 gap-4 items-center justify-center border-2 border-solid border-dark dark:border-light p-4 overflow-hidden md:h-full'>
			{/* Анимированное фоновое изображение */}
			<AnimatePresence
				initial={false}
				custom={direction}
				onExitComplete={onAnimationComplete}
			>
				<motion.div
					key={currentSlide}
					className='absolute inset-0 bg-cover bg-center filter blur-md -z-10'
					initial='disappear'
					animate='center'
					exit='disappear'
					variants={imageVariant}
					transition={{ duration: 0.5 }}
				>
					<div style={{ position: 'relative', width: '100%', height: '100%' }}>
						<Image
							src={slides[currentSlide].src}
							alt={slides[currentSlide].name}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							style={{ objectFit: 'cover' }}
							priority
							unoptimized
						/>
					</div>
				</motion.div>
			</AnimatePresence>

			{/* Информация о проекте */}
			<ProjectInfo
				name={slides[currentSlide].name}
				description={slides[currentSlide].description}
				srcGit={slides[currentSlide].srcGit}
			/>

			{/* Слайдер изображений */}
			<ImageSlider
				slideName={slides[currentSlide].name}
				currentImage={currentImage}
				images={slides[currentSlide].images}
				handlePrevImage={handlePrevImage}
				handleNextImage={handleNextImage}
				openModal={openModal}
			/>

			{/* Анимированное SVG изображение */}
			<motion.div
				className='absolute -bottom-16 2xl:-bottom-10 right-0 z-50 w-96 2xl:w-60 xl:w-48 xl:-bottom-8 md:hidden'
				initial='initial'
				animate='center'
				variants={imageVariant}
			>
				<SvgProject />
			</motion.div>

			{/* Кнопки переключения проектов */}
			<ProjectNavigationButtons
				handlePrevProject={handlePrevProject}
				handleNextProject={handleNextProject}
			/>

			{/* Модальное окно */}
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				images={slides[currentSlide].images}
				currentImage={currentImage}
				handleNextImage={handleNextImage}
				handlePrevImage={handlePrevImage}
				slideName={slides[currentSlide].name}
			/>
		</div>
	)
}

export default Slider