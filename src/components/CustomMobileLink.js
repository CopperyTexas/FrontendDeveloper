// Импорты из библиотек
import { useRouter } from 'next/router'

// Компонент CustomMobileLink
const CustomMobileLink = ({ href, title, className = '', toggle }) => {
	const router = useRouter()

	// Обработчик клика, закрывающий меню и перенаправляющий на новую страницу
	const handleClick = () => {
		toggle()
		router.push(href)
	}

	return (
		<button
			className={`${className} relative group text-light dark:text-dark my-2`}
			onClick={handleClick}
		>
			{title}
			{/* Анимационная полоса под текстом */}
			<span
				className={`h-[2px] inline-block bg-primaryDark absolute left-0 -bottom-0.5 
				group-hover:w-full transition-[width] ease duration-300 ${
					router.asPath === href ? 'w-full' : 'w-0'
				}`}
			>
				&nbsp;
			</span>
		</button>
	)
}

export default CustomMobileLink
