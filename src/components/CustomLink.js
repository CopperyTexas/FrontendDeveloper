// Импорты из библиотек
import Link from 'next/link'
import { useRouter } from 'next/router'

// Компонент CustomLink
const CustomLink = ({ href, title, className = '' }) => {
	const router = useRouter()

	return (
		<Link href={href} className={`${className} relative group`}>
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
		</Link>
	)
}

export default CustomLink
