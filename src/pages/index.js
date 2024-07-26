// Импорт фреймворков
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'

// Импорт компонентов
import AnimatedText from '../components/AnimatedText'
import CodeAnimation from '../components/CodeAnimation'
import Layout from '../components/Layout'
import TransitionEffect from '../components/TransitionEffect'
import { LinkArrow } from '../components/icons'

// Импорт данных и изображений
import codeStrings from '../data/codeStrings'
import imageVariant from '../data/imageVariants'
import SvgHome from '../images/animated.svg'

// Динамический импорт компонента HireMe с ленивой загрузкой
const HireMe = dynamic(() => import('../components/HireMe'), {
	loading: () => <p>Loading...</p>, // Сообщение о загрузке компонента
	ssr: false, // Отключение серверного рендеринга для компонента
})

export default function Home() {
	return (
		<>
			<Head>
				<title>Portfolio Frontend Developer</title>
				<meta
					name='description'
					content='Frontend Developer Portfolio of Denis Glebov'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta property='og:title' content='Portfolio Frontend Developer' />
				<meta
					property='og:description'
					content='Frontend Developer Portfolio of Denis Glebov'
				/>
			</Head>
			<TransitionEffect />
			<main className='flex items-center justify-center text-dark w-full h-screen overflow-hidden dark:text-light'>
				<Layout className='pt-0 flex-grow full-viewport-height md:pt-16 sm:pt-8'>
					<div className='flex items-center justify-between w-full h-full'>
						{/* Левая часть с текстом и ссылками */}
						<div className='w-1/2 flex flex-col items-start justify-center pl-10 lg:w-full md:pl-2'>
							<AnimatedText
								text='Воплощаю идеи в реальность с помощью кода'
								className='!text-7xl !text-left xl:!text-5xl lg:!text-7xl md:!text-5xl sm:!text-3xl'
							/>
							<p className='my-5 text-xl font-medium 2xl:text-sm xl:text-base'>
								Меня зовут Денис, и я - начинающий фронтенд разработчик, имею
								опыт работы с такими современными технологиями, как React и
								Angular. Несмотря на то, что у меня нет коммерческого опыта, я
								уже успел создать несколько интересных проектов, которые
								отражают мои навыки и стремление к совершенству. Пожалуйста,
								ознакомьтесь с моими работами, чтобы увидеть, как я воплощаю
								свои идеи в жизнь. Я открыт для новых возможностей и готов
								принять участие в интересных проектах.
							</p>
							<div className='flex items-center self-start mt-2 lg:self-center'>
								{/* Ссылка на резюме */}
								<Link
									href='/resume.pdf'
									target='_blank'
									className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-primaryDark hover:text-dark border-2 border-solid border-transparent hover:border-dark transition-colors duration-300 ease-in-out dark:border-light dark:hover:border-dark'
									download={true}
								>
									Resume <LinkArrow className='w-6 ml-1' />
								</Link>
								{/* Ссылка для контакта по электронной почте */}
								<Link
									href='mailto:dengleboff@yandex.ru'
									target='_blank'
									className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light'
								>
									Contact
								</Link>
							</div>
						</div>
						{/* Правая часть с анимацией кода */}
						<div className='w-1/2 h-full flex items-center justify-center ml-20 lg:hidden'>
							<motion.div
								initial='initial'
								animate='animate'
								variants={imageVariant}
								className='mt-10 w-full'
							>
								<CodeAnimation codeStrings={codeStrings} />
							</motion.div>
						</div>
					</div>
				</Layout>
				<HireMe />
				<div className='absolute right-2 -bottom-14 w-96 2xl:w-60 2xl:-bottom-10 xl:w-48 md:-bottom-24 xl:-bottom-8  xs:hidden'>
					<motion.div
						initial='initial'
						animate='animate'
						variants={imageVariant}
					>
						<SvgHome />
					</motion.div>
				</div>
			</main>
		</>
	)
}
