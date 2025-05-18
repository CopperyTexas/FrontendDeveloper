// Импорт необходимых библиотек и компонентов
import {motion} from 'framer-motion'
import imageVariant from '../data/imageVariants'

/**
 * Компонент ImageSlider
 * Отображает слайдер изображений с кнопками для переключения изображений и возможностью открытия модального окна.
 *
 */
const ImageSlider = ({
	slideName, // Имя текущего слайда
	currentImage, // Индекс текущего изображения
	images, // Массив изображений
	handlePrevImage, // Функция для переключения на предыдущее изображение
	handleNextImage, // Функция для переключения на следующее изображение
	openModal, // Функция для открытия модального окна
}) => {
	return (
		<div className='relative w-full h-full flex flex-col items-center justify-center col-span-1 col-start-2 row-start-1 row-span-3 xl:col-span-2 xl:row-start-3 xl:row-span-2 md:hidden'>
			<div
				className='w-full h-3/4 bg-white bg-opacity-70 flex items-center justify-center relative border-2 border-solid border-dark rounded-lg overflow-hidden cursor-pointer hover:border-primaryDark'
				onClick={openModal}
			>
				{/* Анимированное изображение */}
				<motion.div
					key={currentImage} // Используем currentImage как ключ
					className='absolute inset-0 bg-cover bg-center'
					initial='appear'
					animate='center'
					variants={imageVariant}
					transition={{ duration: 0.5 }}
				>
					<img
						src={images[currentImage]}
						alt={`${slideName} image ${currentImage + 1}`} // Используем slideName для alt текста
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						style={{ objectFit: 'contain' }}


					/>
				</motion.div>
				{/* Кнопка для переключения на предыдущее изображение */}
				<button
					onClick={e => {
						e.stopPropagation()
						handlePrevImage()
					}}
					className='bg-light text-dark rounded-full m-2 border-2 border-solid border-dark w-8 h-8 hover:bg-primaryDark font-bold hover:scale-90 transition-transform ease-in-out absolute top-1/2 left-0 transform -translate-y-1/2'
				>
					&lt;
				</button>
				{/* Кнопка для переключения на следующее изображение */}
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
