import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from './Logo'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import {
	GithubIcon,
	LinkedInIcon,
	MoonIcon,
	SunIcon,
	TGIcon,
	VkontakteIcon,
} from './icons'

/**
 * Компонент CustomLink
 * Создает настраиваемую ссылку с анимацией перехода
 */
const CustomLink = ({ href, title, className = '' }) => {
	const router = useRouter()

	return (
		<Link href={href} className={`${className} relative group`}>
			{title}
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

/**
 * Компонент NavBar
 * Отображает навигационную панель с логотипом и ссылками на социальные сети
 */
const NavBar = () => {
	const [mode, setMode] = useThemeSwitcher()
	return (
		<header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
			{/* Основная навигация */}
			<nav>
				<CustomLink href='/' title='Home' className='mr-4 text-lg' />
				<CustomLink href='/about' title='About' className='mx-4 text-lg' />
				<CustomLink
					href='/projects'
					title='Projects'
					className='ml-4 text-lg'
				/>
			</nav>

			{/* Логотип */}
			<div className='absolute left-[50%] top-2 translate-x-[-50%]'>
				<Logo />
			</div>

			{/* Социальные сети */}
			<nav className='flex items-center justify-center flex-wrap'>
				<motion.a
					href='https://github.com/CopperyTexas'
					target={'_blank'}
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.9 }}
					className='w-6 mx-3'
				>
					<GithubIcon />
				</motion.a>
				<motion.a
					href='https://careers.linkedin.cn/'
					target={'_blank'}
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.9 }}
					className='w-6 mx-3'
				>
					<LinkedInIcon />
				</motion.a>
				<motion.a
					href='https://vk.com'
					target={'_blank'}
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.9 }}
					className='w-6 mx-3'
				>
					<VkontakteIcon />
				</motion.a>
				<motion.a
					href='https://telegram.org/'
					target={'_blank'}
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.9 }}
					className='w-6 mx-3'
				>
					<TGIcon />
				</motion.a>

				<button
					onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
					className={`ml-3 flex items-center justify-center rounded-full p-1 ${
						mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
					}`}
				>
					{mode === 'dark' ? (
						<SunIcon className={'fill-dark'} />
					) : (
						<MoonIcon className={'fill-dark'} />
					)}
				</button>
			</nav>
		</header>
	)
}

export default NavBar
