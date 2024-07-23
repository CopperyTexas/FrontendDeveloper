import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import slides from '../data/slides'
import { GithubIcon } from './icons'

const variants = {
	disappear: { x: '-100%', opacity: 0 },
	moveLeft: { x: '-100%', opacity: 1 },
	center: { x: '0%', opacity: 1 },
	appear: { x: '-100%', opacity: 0 },
}

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isAnimating, setIsAnimating] = useState(false)
	const [direction, setDirection] = useState('')
	const [slideOrder, setSlideOrder] = useState(slides.map((_, index) => index))

	const handleNext = () => {
		if (isAnimating) return
		setDirection('next')
		setIsAnimating(true)
		setCurrentSlide(prev => (prev + 1) % slides.length)

		setTimeout(() => {
			const newOrder = [...slideOrder]
			const first = newOrder.shift()
			newOrder.push(first)
			setSlideOrder(newOrder)
			setIsAnimating(false)
		}, 500) // duration of the animation
	}

	const handlePrev = () => {
		if (isAnimating) return
		setDirection('prev')
		setIsAnimating(true)
		setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)

		setTimeout(() => {
			const newOrder = [...slideOrder]
			const last = newOrder.pop()
			newOrder.unshift(last)
			setSlideOrder(newOrder)
			setIsAnimating(false)
		}, 500) // duration of the animation
	}

	const handleSlideClick = index => {
		setCurrentSlide(index)
	}

	const onAnimationComplete = () => {
		setIsAnimating(false)
	}

	return (
		<div className='relative w-full slider-height md:h-1/2  rounded-2xl bg-cover bg-center grid grid-cols-2 grid-rows-[auto_100px] items-center justify-center border-2 border-solid border-dark dark:border-light p-4 overflow-hidden'>
			<AnimatePresence initial={false} custom={direction}>
				<motion.div
					key={currentSlide}
					className='absolute inset-0 bg-cover bg-center filter blur-md -z-10'
					style={{ backgroundImage: `url(${slides[currentSlide].src})` }}
					initial='disappear'
					animate='center'
					exit='disappear'
					variants={variants}
					transition={{ duration: 0.5 }}
				/>
			</AnimatePresence>

			<motion.div
				className='w-2/3 m-auto col-span-1 xl:col-span-2 xl:w-full flex flex-col items-start justify-center p-6 rounded-xl bg-dark bg-opacity-90 md:self-start'
				key={currentSlide}
				initial='appear'
				animate='center'
				exit='exit'
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
						target={'_blank'}
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
						className='w-16  bg-light rounded-full'
					>
						<GithubIcon />
					</motion.a>
					<button className='w-full h-full font-medium border-2 border-solid border-light m-2 rounded-2xl text-light bg-dark hover:bg-primaryDark hover:text-dark hover:scale-95 hover:border-dark'>
						See more
					</button>
				</div>
			</motion.div>

			<div className='w-full h-1/2 xl:h-64 xl:col-span-2 xl:m-auto col-span-1 flex gap-4 xl:gap-1.5 justify-start self-end -ml-6 md:hidden'>
				{slideOrder.map((index, i) => {
					const offset =
						(i - currentSlide + slideOrder.length) % slideOrder.length
					const xOffset = offset * 100 // Расстояние между слайдами

					return (
						<motion.div
							key={slides[index].id}
							className='w-1/3 flex-shrink-0 bg-cover bg-center rounded-lg cursor-pointer border-4 border-solid border-dark'
							style={{
								backgroundImage: `url(${slides[index].src})`,
							}}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5 }}
							onAnimationComplete={onAnimationComplete}
						/>
					)
				})}
			</div>
			<div className='col-span-2 mx-auto xl:self-end'>
				<button
					onClick={handlePrev}
					className='bg-light text-dark rounded-full m-2 border-2 border-solid border-dark w-16 h-16 hover:bg-primaryDark font-bold hover:scale-90 transition-transform ease-in-out'
				>
					&lt;
				</button>
				<button
					onClick={handleNext}
					className='bg-light text-dark p-2 rounded-full m-2 border-2 border-solid border-dark w-16 h-16 hover:bg-primaryDark font-bold hover:scale-90 transition-transform ease-in-out'
				>
					&gt;
				</button>
			</div>
		</div>
	)
}

export default Slider
