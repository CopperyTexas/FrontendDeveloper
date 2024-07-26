import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'

const Modal = ({
	isOpen,
	onClose,
	images,
	currentImage,
	handlePrevImage,
	handleNextImage,
	slideName,
}) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className='fixed inset-0 flex items-center justify-center bg-dark dark:bg-light dark:bg-opacity-70 bg-opacity-70 z-50'
					initial='hidden'
					animate='visible'
					exit='exit'
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1 },
						exit: { opacity: 0 },
					}}
					onClick={onClose}
				>
					<motion.div
						className='relative w-3/4 h-3/4 bg-white rounded-lg overflow-hidden border-2 border-solid border-dark'
						onClick={e => e.stopPropagation()}
					>
						<div className='absolute top-2 right-20 z-20'>
							<button
								className='m-auto w-full border-2 border-solid border-dark text-light py-2 px-4 rounded-lg font-medium bg-dark hover:bg-primaryDark hover:text-dark transition-colors duration-300 ease-in-out dark:border-light dark:hover:border-dark'
								onClick={onClose}
							>
								Закрыть
							</button>
						</div>
						<div className='relative w-full h-full'>
							<Image
								src={images[currentImage]}
								alt={`${slideName} image ${currentImage + 1}`}
								fill
								style={{ objectFit: 'cover' }}
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								priority
							/>
							<button
								onClick={handlePrevImage}
								className='bg-light bg-opacity-50 text-dark rounded-md border-2 border-solid border-dark w-16 h-full hover:bg-primaryDark font-bold hover:bg-opacity-50 transition-transform ease-in-out absolute top-1/2 left-0 transform -translate-y-1/2'
							>
								&lt;
							</button>
							<button
								onClick={handleNextImage}
								className='bg-light bg-opacity-50 text-dark rounded-md border-2 border-solid border-dark w-16 h-full hover:bg-primaryDark hover:bg-opacity-50 font-bold transition-transform ease-in-out absolute top-1/2 right-0 transform -translate-y-1/2'
							>
								&gt;
							</button>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default Modal
