import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedSvg from '../components/AnimatedSvg'
import AnimatedText from '../components/AnimatedText'
import CodeAnimation from '../components/CodeAnimation'
import HireMe from '../components/HireMe'
import Layout from '../components/Layout'
import { LinkArrow } from '../components/icons'
// Варианты анимации для изображения
const imageVariant = {
	initial: { opacity: 0, x: 100 },
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1.5,
			ease: 'easeInOut',
		},
	},
}

// Массив строк кода для отображения в компоненте CodeAnimation
const codeStrings = [
	`< !DOCTYPE html >`,
	`< html lang="ru" >`,
	`< head >`,
	`< meta charset="UTF-8" >`,
	`< title > Портфолио < /title >`,
	`< /head >`,
	`< body >`,
	`< h1 > Hello World! < /h1 >`,
	`< form >`,
	`< label > Фамилия: < /label >`,
	`< input type="text" value=" Глебов " >< /input >`,
	`< label > Имя: < /label >`,
	`< input type="text" value=" Денис " >< /input >`,
	`< label > Дата рождения: < /label >`,
	`< input type="text" value=" 18.10.1993 " >< /input >`,
	`< label > Должность: < /label >`,
	`< input type="text" value=" Frontend Developer ">< /input >`,
	`< button type="button"> Выслать оффер! < /button >`,
	`< /form >`,
	`< /body >`,
	`< /html >`,
]

export default function Home() {
	return (
		<>
			<Head>
				<title>Portfolio Frontend Developer</title>
				<meta name='description' content='Generated by create next app' />
			</Head>
			<main className='flex items-center justify-center text-dark w-full h-screen overflow-hidden dark:text-light'>
				<Layout className='pt-0 flex-grow full-viewport-height'>
					<div className='flex items-center justify-between w-full h-full'>
						{/* Левая часть с текстом и ссылками */}
						<div className='w-1/2 flex flex-col items-start justify-center pl-10'>
							<AnimatedText
								text='Воплощаю идеи в реальность с помощью кода'
								className='text-8xl text-left'
							/>
							<p className='my-5 text-xl font-medium'>
								Меня зовут Денис, и я - начинающий фронтенд разработчик, имею
								опыт работы с такими современными технологиями, как React и
								Angular. Несмотря на то, что у меня нет коммерческого опыта, я
								уже успел создать несколько интересных проектов, которые
								отражают мои навыки и стремление к совершенству. Пожалуйста,
								ознакомьтесь с моими работами, чтобы увидеть, как я воплощаю
								свои идеи в жизнь. Я открыт для новых возможностей и готов
								принять участие в интересных проектах.
							</p>
							<div className='flex items-center self-start mt-2'>
								<Link
									href='/resume.pdf'
									target='_blank'
									className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-primaryDark hover:text-dark border-2 border-solid border-transparent hover:border-dark transition-colors duration-300 ease-in-out
									dark:border-light dark:hover:border-dark'
									download={true}
								>
									Resume <LinkArrow className='w-6 ml-1' />
								</Link>
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
						<div className='w-1/2 h-full flex items-center justify-center ml-20'>
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

				<div className='absolute right-2 -bottom-14  w-96'>
					<AnimatedSvg
						svgPath='/images/animated.svg'
						className='w-full h-full animated'
						delay={0}
						initiallyVisible={true}
					/>
				</div>
			</main>
		</>
	)
}
