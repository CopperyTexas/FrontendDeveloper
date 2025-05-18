// Импорт фреймворков и библиотек
import {motion} from 'framer-motion'
import {useState} from 'react'

// Импорт компонентов
import CustomLink from '../components/CustomLink'
import CustomMobileLink from '../components/CustomMobileLink'
import Logo from './Logo'
import useThemeSwitcher from './hooks/useThemeSwitcher'

// Импорт иконок
import {GithubIcon, MoonIcon, SunIcon, TGIcon, VkontakteIcon,} from './icons'

/**
 * Компонент NavBar
 * Отображает навигационную панель с логотипом и ссылками на социальные сети
 */
const NavBar = () => {
	const [mode, setMode] = useThemeSwitcher()
	const [isOpen, setIsOpen] = useState(false)

	/**
	 * Функция для переключения состояния меню
	 */
	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative md:px-8 lg:px-16 '>
			{/* Кнопка для мобильного меню */}
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

			{/* Навигация для десктопа */}
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

			{/* Мобильное меню */}
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
							className='text-lg'
							toggle={handleClick}
						/>
						<CustomMobileLink
							href='/about'
							title='About'
							className='text-lg'
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
							className='w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1'
						>
							<GithubIcon />
						</motion.a>
						<motion.a
							href='https://vk.com/denisglebovvk'
							target={'_blank'}
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.9 }}
							className='w-6 mx-3 sm:mx-1'
						>
							<VkontakteIcon />
						</motion.a>
						<motion.a
							href='https://t.me/@Glebov_denis'
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

			{/* Навигация и социальные иконки для десктопа */}
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
					href='https://vk.com/denisglebovvk'
					target={'_blank'}
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.9 }}
					className='w-6 mx-3'
				>
					<VkontakteIcon />
				</motion.a>
				<motion.a
					href='https://t.me/Glebov_denis'
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
