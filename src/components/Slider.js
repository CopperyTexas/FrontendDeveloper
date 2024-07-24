import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import slides from '../data/slides'
import SvgProject from '../images/project.svg'
import { GithubIcon } from './icons'
const imageVariant = {
	initial: { opacity: 0, x: 100 },
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1.5,
			ease: 'easeInOut',
		},
	},
}
const variants = {
	disappear: { x: '-100%', opacity: 0 },
	moveLeft: { x: '-100%', opacity: 1 },
	center: { x: '0%', opacity: 1 },
	appear: { x: '-100%', opacity: 0 },
	exit: { x: '100%', opacity: 1 },
}

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isAnimating, setIsAnimating] = useState(false)
	const [currentImage, setCurrentImage] = useState(0)
	const [direction, setDirection] = useState('')

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
				<div className='w-full h-3/4 flex items-center justify-center relative border-2 border-solid border-dark rounded-lg overflow-hidden'>
					<AnimatePresence
						initial={false}
						custom={direction}
						onExitComplete={onAnimationComplete}
					>
						<motion.div
							key={currentImage}
							className='relative w-full h-full'
							initial='disappear'
							animate='center'
							variants={variants}
							transition={{ duration: 1 }}
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
					</AnimatePresence>
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
			</div>
			<motion.div
				className='col-start-2 row-start-3 w-1/2 h-1/2 ml-auto'
				initial='initial'
				animate='animate'
				variants={imageVariant}
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
		</div>
	)
}

export default Slider
