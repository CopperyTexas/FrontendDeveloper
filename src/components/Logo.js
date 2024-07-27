// Импортируем необходимые модули и компоненты
import { motion } from 'framer-motion'
import Link from 'next/link'

// Создаем анимированный компонент Link с помощью framer-motion
const MotionLink = motion(Link)

/**
 * Компонент Logo
 * Отображает логотип с анимацией при наведении
 */
const Logo = () => {
	return (
		<div className='flex items-center justify-center mt-2'>
			<MotionLink
				href='/'
				className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold hover:bg-primaryDark hover:text-dark border-2 border-solid border-dark transition-colors duration-300 ease-in-out dark:border-light'
				whileHover={{
					scale: 1.3,
				}}
			>
				GD
			</MotionLink>
		</div>
	)
}

export default Logo
