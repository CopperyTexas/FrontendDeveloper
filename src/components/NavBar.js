import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
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

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
	const router = useRouter()

	const handleClick = () => {
		toggle()
		router.push(href)
	}

	return (
		<button
			href={href}
			className={`${className} relative group text-light dark:text-dark my-2`}
			onClick={handleClick}
		>
			{title}
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

/**
 * Компонент NavBar
 * Отображает навигационную панель с логотипом и ссылками на социальные сети
 */
const NavBar = () => {
	const [mode, setMode] = useThemeSwitcher()
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}
	2
	return (
		<header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative md:px-8 lg:px-16 '>
			<button
				className='hidden flex-col justify-center items-center lg:flex'
				onClick={handleClick}
			>
				<span
					className={`bg-dark dark:bg-primaryDark transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
						isOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-0.5'
					}`}
				></span>
				<span
					className={`bg-dark dark:bg-primaryDark transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
						isOpen ? 'opacity-0' : 'opacity-100'
					}`}
				></span>
				<span
					className={`bg-dark dark:bg-primaryDark transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5  ${
						isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
					}`}
				></span>
			</button>

			<div className='w-full flex justify-between items-center lg:hidden'>
				<nav>
					<CustomLink href='/' title='Home' className='mr-4 text-lg' />
					<CustomLink href='/about' title='About' className='mx-4 text-lg' />
					<CustomLink
						href='/projects'
						title='Projects'
						className='ml-4 text-lg'
					/>
				</nav>
			</div>
			{isOpen ? (
				<motion.div
					initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
					animate={{ scale: 1, opacity: 1 }}
					className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/70 rounded-lg backdrop-blur-md py-32'
				>
					<nav className='flex items-center flex-col justify-center'>
						<CustomMobileLink
							href='/'
							title='Home'
							className=' text-lg'
							toggle={handleClick}
						/>
						<CustomMobileLink
							href='/about'
							title='About'
							className=' text-lg'
							toggle={handleClick}
						/>
						<CustomMobileLink
							href='/projects'
							title='Projects'
							className='text-lg'
							toggle={handleClick}
						/>
					</nav>
					<nav className='flex items-center justify-center flex-wrap'>
						<motion.a
							href='https://github.com/CopperyTexas'
							target={'_blank'}
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.9 }}
							className='w-6 mx-3  bg-light rounded-full dark:bg-dark sm:mx-1'
						>
							<GithubIcon />
						</motion.a>
						<motion.a
							href='https://careers.linkedin.cn/'
							target={'_blank'}
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.9 }}
							className='w-6 mx-3 sm:mx-1'
						>
							<LinkedInIcon />
						</motion.a>
						<motion.a
							href='https://vk.com'
							target={'_blank'}
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.9 }}
							className='w-6 mx-3 sm:mx-1'
						>
							<VkontakteIcon />
						</motion.a>
						<motion.a
							href='https://telegram.org/'
							target={'_blank'}
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.9 }}
							className='w-6 mx-3 sm:mx-1'
						>
							<TGIcon />
						</motion.a>

						<button
							onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
							className={`ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1 ${
								mode === 'light'
									? 'dark:bg-primaryDark text-light'
									: 'bg-light text-dark'
							}`}
						>
							{mode === 'dark' ? (
								<SunIcon className={'fill-dark'} />
							) : (
								<MoonIcon className={'fill-dark'} />
							)}
						</button>
					</nav>
				</motion.div>
			) : null}
			{/* Логотип */}
			<div className='absolute left-[50%] top-2 translate-x-[-50%] z-10'>
				<Logo />
			</div>

			<nav className='flex items-center justify-center lg:hidden'>
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
						mode === 'light'
							? 'dark:bg-primaryDark text-light'
							: 'bg-light text-dark'
					}`}
				>
					{mode === 'dark' ? (
						<SunIcon className={'text-dark'} />
					) : (
						<MoonIcon className={'text-dark'} />
					)}
				</button>
			</nav>
		</header>
	)
}

export default NavBar
