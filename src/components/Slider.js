import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import slides from '../data/slides'
import { GithubIcon } from './icons'

const variants = {
	disappear: { y: '-100%', opacity: 0 },
	moveToCenter: { x: 0, opacity: 1 },
}

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [slideOrder, setSlideOrder] = useState([0, 1, 2])
	const [isAnimating, setIsAnimating] = useState(false)
	const [direction, setDirection] = useState(null)

	const handleNext = () => {
		if (isAnimating) return
		setDirection('next')
		setIsAnimating(true)
		setTimeout(() => {
			setSlideOrder(prev => {
				const newOrder = [...prev]
				const first = newOrder.shift()
				newOrder.push(first)
				return newOrder
			})
			setIsAnimating(false)
		}, 500)
	}

	const handlePrev = () => {
		if (isAnimating) return
		setDirection('prev')
		setIsAnimating(true)
		setTimeout(() => {
			setSlideOrder(prev => {
				const newOrder = [...prev]
				const last = newOrder.pop()
				newOrder.unshift(last)
				return newOrder
			})
			setIsAnimating(false)
		}, 500)
	}

	const handleSlideClick = index => {
		setCurrentSlide(index)
	}

	return (
		<div className='relative w-full slider-height overflow-hidden rounded-2xl bg-cover bg-center grid grid-cols-2 grid-rows-[auto_100px] items-center justify-center border-2 border-solid border-dark'>
			<AnimatePresence>
				<motion.div
					key={currentSlide}
					className='absolute inset-0 bg-cover bg-center filter blur-sm -z-10'
					style={{ backgroundImage: `url(${slides[currentSlide].src})` }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				/>
			</AnimatePresence>

			<motion.div
				className='w-2/3 m-auto col-span-1 flex flex-col items-start justify-center p-6 rounded-xl bg-dark bg-opacity-90'
				key={currentSlide}
				initial='enter'
				animate='center'
				exit='exit'
				variants={variants}
				transition={{ duration: 0.5 }}
			>
				<h3 className='font-bold text-6xl mb-6 text-light'>
					{slides[currentSlide].name}
				</h3>
				<p className='text-light'>{slides[currentSlide].description}</p>
				<div className='mt-6 flex item-center justify-center'>
					<motion.a
						href={slides[currentSlide].srcGit}
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
			</motion.div>

			<div className='w-full h-1/2 col-span-1 flex justify-center space-x-4 pr-4 self-end'>
				{slideOrder.map((slideIndex, index) => {
					return (
						<motion.div
							key={slideIndex}
							className='w-full h-full bg-cover bg-center rounded-lg cursor-pointer border-4 border-solid border-dark'
							style={{ backgroundImage: `url(${slides[slideIndex].src})` }}
							onClick={() => handleSlideClick(slideIndex)}
							initial={{ x: '0%', opacity: 1 }}
							animate={
								isAnimating && direction === 'next' && index === 0
									? 'disappear'
									: 'moveToCenter'
							}
							whileHover={{ scale: 1.05 }}
							variants={variants}
							transition={{ duration: 0.5 }}
						/>
					)
				})}
			</div>
			<div className='col-span-2 m-auto'>
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
