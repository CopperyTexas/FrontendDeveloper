import { motion } from 'framer-motion'
import Image from 'next/image'
import imageVariant from '../data/imageVariants'

const ImageSlider = ({
	slideName, // добавляем это свойство для имени слайда
	currentImage,
	images,
	handlePrevImage,
	handleNextImage,
	openModal,
}) => {
	return (
		<div className='relative w-full h-full flex flex-col items-center justify-center col-span-1 col-start-2 row-start-1 row-span-3 xl:col-span-2 xl:row-start-3 xl:row-span-2 md:hidden'>
			<div
				className='w-full h-3/4 flex items-center justify-center relative border-2 border-solid border-dark rounded-lg overflow-hidden cursor-pointer hover:border-primaryDark'
				onClick={openModal}
			>
				<motion.div
					key={currentImage} // изменяем на currentImage, так как это логичнее для уникальности ключа
					className='absolute inset-0 bg-cover bg-center'
					initial='appear'
					animate='center'
					variants={imageVariant}
					transition={{ duration: 0.5 }}
				>
					<Image
						src={images[currentImage]}
						alt={`${slideName} image ${currentImage + 1}`} // используем slideName
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
	)
}

export default ImageSlider
