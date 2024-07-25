import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import slides from '../data/slides'
import SvgProject from '../images/project.svg'
import { GithubIcon } from './icons'

const variants = {
	disappear: { x: '-100%', opacity: 0 },
	center: { x: '0%', opacity: 1 },
	appear: { x: '100%', opacity: 0 },
	initial: { opacity: 0, x: '100%' },
}

const modalVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
	exit: { opacity: 0, scale: 0.8 },
}

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isAnimating, setIsAnimating] = useState(false)
	const [currentImage, setCurrentImage] = useState(0)
	const [direction, setDirection] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleNextProject = () => {
		if (isAnimating) return
		setDirection('next')
		setIsAnimating(true)
		setCurrentSlide(prev => (prev + 1) % slides.length)
		setCurrentImage(0) // Reset image index when changing project
	}

	const handlePrevProject = () => {
		if (isAnimating) return
		setDirection('prev')
		setIsAnimating(true)
		setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
		setCurrentImage(0) // Reset image index when changing project
	}

	const handleNextImage = () => {
		setCurrentImage(prev => (prev + 1) % slides[currentSlide].images.length)
	}

	const handlePrevImage = () => {
		setCurrentImage(
			prev =>
				(prev - 1 + slides[currentSlide].images.length) %
				slides[currentSlide].images.length
		)
	}

	const onAnimationComplete = () => {
		setIsAnimating(false)
	}

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div className='relative w-full slider-height md:h-max rounded-2xl bg-cover bg-center grid grid-cols-2 grid-rows-4 gap-4 items-center justify-center border-2 border-solid border-dark dark:border-light p-4 overflow-hidden'>
			{/* Левая часть с информацией о проекте */}
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
					variants={variants}
					transition={{ duration: 0.5 }}
				>
					<div style={{ position: 'relative', width: '100%', height: '100%' }}>
						<Image
							src={slides[currentSlide].src}
							alt={slides[currentSlide].name}
							fill
							style={{ objectFit: 'cover' }}
							priority
						/>
					</div>
				</motion.div>
			</AnimatePresence>

			<motion.div
				className='w-2/3 h-full justify-center m-auto  col-span-1 row-span-3 xl:col-span-2 xl:w-full flex flex-col items-start  p-6 rounded-xl bg-dark bg-opacity-90 md:self-start'
				key={currentSlide}
				initial='disappear'
				animate='center'
				exit='disappear'
				variants={variants}
				transition={{ duration: 0.5 }}
			>
				<h3 className='font-bold text-6xl mb-6 text-light md:text-xl'>
					{slides[currentSlide].name}
				</h3>
				<p className='text-light md:text-sm'>
					{slides[currentSlide].description}
				</p>
				<div className='mt-6 flex item-center justify-center'>
					<motion.a
						href={slides[currentSlide].srcGit}
						target='_blank'
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
						className='w-16 bg-light rounded-full'
					>
						<GithubIcon />
					</motion.a>
				</div>
			</motion.div>

			{/* Правая часть с изображениями */}
			<div className='relative w-full h-full flex flex-col items-center justify-center col-span-1 col-start-2 row-start-1 row-span-3'>
				<div
					className='w-full h-3/4 flex items-center justify-center relative border-2 border-solid border-dark rounded-lg overflow-hidden cursor-pointer'
					onClick={openModal}
				>
					<motion.div
						key={currentSlide}
						className='absolute inset-0 bg-cover bg-center '
						initial='appear'
						animate='center'
						variants={variants}
						transition={{ duration: 0.5 }}
					>
						<Image
							src={slides[currentSlide].images[currentImage]}
							alt={`${slides[currentSlide].name} image ${currentImage + 1}`}
							fill
							style={{ objectFit: 'cover' }}
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							priority
						/>
					</motion.div>
					<button
						onClick={e => {
							e.stopPropagation()
							handlePrevImage()
						}}
						className='bg-light text-dark rounded-full m-2 border-2 border-solid border-dark w-8 h-8 hover:bg-primaryDark font-bold hover:scale-90 transition-transform ease-in-out absolute top-1/2 left-0 transform -translate-y-1/2'
					>
						&lt;
					</button>
					<button
						onClick={e => {
							e.stopPropagation()
							handleNextImage()
						}}
						className='bg-light text-dark rounded-full m-2 border-2 border-solid border-dark w-8 h-8 hover:bg-primaryDark font-bold hover:scale-90 transition-transform ease-in-out absolute top-1/2 right-0 transform -translate-y-1/2'
					>
						&gt;
					</button>
				</div>
			</div>

			<motion.div
				className='col-start-2 row-start-3 w-1/2 h-1/2 ml-auto'
				initial='initial'
				animate='center'
				variants={variants}
			>
				<SvgProject />
			</motion.div>
			{/* Кнопки переключения проектов */}
			<div className='row-start-4 col-span-2 mx-auto h-min self-end'>
				<button
					onClick={handlePrevProject}
					className='bg-light text-dark rounded-full m-2 border-2 border-solid border-dark w-16 h-16 hover:bg-primaryDark font-bold hover:scale-90 transition-transform ease-in-out'
				>
					&lt;
				</button>
				<button
					onClick={handleNextProject}
					className='bg-light text-dark p-2 rounded-full m-2 border-2 border-solid border-dark w-16 h-16 hover:bg-primaryDark font-bold hover:scale-90 transition-transform ease-in-out'
				>
					&gt;
				</button>
			</div>

			{/* Модальное окно */}
			<AnimatePresence>
				{isModalOpen && (
					<motion.div
						className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'
						initial='hidden'
						animate='visible'
						exit='exit'
						variants={modalVariants}
						onClick={closeModal}
					>
						<motion.div
							className='relative w-3/4 h-3/4 bg-white rounded-lg overflow-hidden'
							onClick={e => e.stopPropagation()}
						>
							<div className='absolute top-2 right-2'>
								<button
									onClick={closeModal}
									className='bg-red-500 text-white rounded-full p-2'
								>
									X
								</button>
							</div>
							<div className='relative w-full h-full'>
								<Image
									src={slides[currentSlide].images[currentImage]}
									alt={`${slides[currentSlide].name} image ${currentImage + 1}`}
									fill
									style={{ objectFit: 'cover' }}
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									priority
								/>
								<button
									onClick={handlePrevImage}
									className='bg-light text-dark rounded-full m-2 border-2 border-solid border-dark w-8 h-8 hover:bg-primaryDark font-bold hover:scale-90 transition-transform ease-in-out absolute top-1/2 left-0 transform -translate-y-1/2'
								>
									&lt;
								</button>
								<button
									onClick={handleNextImage}
									className='bg-light text-dark rounded-full m-2 border-2 border-solid border-dark w-8 h-8 hover:bg-primaryDark font-bold hover:scale-90 transition-transform ease-in-out absolute top-1/2 right-0 transform -translate-y-1/2'
								>
									&gt;
								</button>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Slider
