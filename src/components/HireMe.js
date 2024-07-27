// Импорты из библиотек
import Link from 'next/link'

// Импорты компонентов
import { CircularText } from './icons'

// Компонент кнопки "Hire Me" с анимацией и ссылкой на контакт
const HireMe = () => {
	return (
		<div className='fixed left-4 -bottom-4 flex items-center justify-center overflow-hidden xs:right-0 xs:left-auto md:top-0 xs:bottom-auto xs:absolute xl:hidden xs:inline-block'>
			{/* Обёртка для кнопки и анимированного текста */}
			<div className='w-52 h-auto flex items-center justify-center relative md:w-40'>
				{/* Анимированный текст по кругу */}
				<CircularText
					className={'fill-dark animate-spin-slow dark:fill-light'}
				/>

				{/* Кнопка "Hire Me" с ссылкой на почту */}
				<Link
					href='mailto:dengleboff@yandex.ru'
					className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-2 border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-primaryDark hover:text-dark transition-colors duration-300 ease-in-out dark:border-light dark:hover:border-dark md:w-16 md:h-16 md:text-sm'
				>
					Hire me
				</Link>
			</div>
		</div>
	)
}

export default HireMe
