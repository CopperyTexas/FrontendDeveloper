import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import AnimatedSvg from '../components/AnimatedSvg'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import SkillModal from '../components/SkillModal'
import { AchievementColor, AchievementMono } from '../components/icons'
import skills from '../data/skills'
import profilePic from '../images/photo_me.jpg'

const imageVariant = {
	initial: { opacity: 0, y: 100 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.5,
			ease: 'easeInOut',
		},
	},
}

const AnimatedNumbers = ({ value }) => {
	const ref = useRef(null)

	const motionValue = useMotionValue(0)
	const springValue = useSpring(motionValue, { duration: 5000 })
	const isInView = useInView(ref, { once: true })

	useEffect(() => {
		if (isInView) {
			motionValue.set(value)
		}
	}, [isInView, value, motionValue])

	useEffect(() => {
		springValue.on('change', latest => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0)
			}
		})
	}, [springValue, value])
	return <span ref={ref}></span>
}

const About = () => {
	const [selectedSkill, setSelectedSkill] = useState(null)

	const openModal = skill => {
		setSelectedSkill(skill)
	}

	const closeModal = () => {
		setSelectedSkill(null)
	}

	return (
		<>
			<Head>
				<title>GlebovDenis | AboutPage</title>
				<meta name='description' content='any description' />
			</Head>
			<main className='flex w-full flex-col items-center justify-center'>
				<Layout className='pt-16'>
					<AnimatedText
						text='Целеустремленность ведет к достижениям'
						className=' !text-7xl !text-center xl:!text-5xl lg:!text-center lg:!text-7xl md:!text-5xl sm:!text-3xl'
					/>
					<div className='grid w-full grid-cols-8 gap-16 mt-16 sm:gap-8'>
						<div className='col-span-3 flex flex-col items-start justify-start mt-4 dark:text-light 2xl:col-span-4 '>
							<p className='font-medium text-lg 2xl:text-sm xl:text-xs '>
								<span className='p-1 pr-2 font-bold text-xl text-dark bg-primaryDark m-2 ml-0 rounded-lg 2xl:text-sm'>
									Привет!
								</span>
								Меня зовут Денис, я - увлеченный и целеустремленный
								фронтенд-разработчик. Моя специализация - создание интерактивных
								и отзывчивых веб-приложений с использованием современных
								технологий. Я постоянно стремлюсь к профессиональному росту и
								освоению новых инструментов и методологий.
							</p>
							<p className='mt-4 font-medium text-lg 2xl:text-sm xl:text-xs'>
								<span className='p-1 pr-2 font-bold text-xl text-dark bg-primaryDark m-2 ml-0 rounded-lg 2xl:text-sm'>
									Опыт и навыки
								</span>
								Хотя у меня еще нет коммерческого опыта, я компенсирую это своим
								огромным стремлением к саморазвитию и созданию собственных
								проектов. Я упорно работаю над улучшением своих навыков и
								освоением новых технологий, чтобы не отставать от текущих
								тенденций в мире веб-разработки. Мои проекты позволяют мне
								применять на практике знания, полученные из многочисленных
								обучающих материалов, книг и курсов.
							</p>
							<p className='mt-4 font-medium text-lg 2xl:text-sm xl:text-xs'>
								<span className='p-1 pr-2 font-bold text-xl text-dark bg-primaryDark m-2 ml-0 rounded-lg 2xl:text-sm'>
									Мой подход
								</span>
								Я верю в важность чистого и читаемого кода, а также в постоянное
								обучение и совершенствование. В своей работе я всегда стараюсь
								использовать лучшие практики и искать оптимальные решения для
								поставленных задач. Мои принципы включают чистый код,
								тестирование и документацию.
							</p>
							<p className='mt-4 font-medium text-lg 2xl:text-sm xl:text-xs'>
								<span className='p-1 pr-2 font-bold text-xl text-dark bg-primaryDark m-2 ml-0 rounded-lg 2xl:text-sm'>
									Цели
								</span>
								В ближайшем будущем я планирую углубить свои знания в области
								разработки на TypeScript, что позволит мне писать еще более
								надежный и масштабируемый код. Моя главная цель - создавать
								качественные и полезные продукты, которые приносят пользу
								пользователям и решают их реальные проблемы. Я стремлюсь к тому,
								чтобы каждый проект, над которым я работаю, был выполнен на
								высшем уровне и приносил удовлетворение как мне, так и моим
								клиентам и пользователям.
							</p>
							<p className='mt-4 font-medium text-lg 2xl:text-sm xl:text-xs'>
								<span className='p-1 pr-2 font-bold text-xl text-dark bg-primaryDark m-2 ml-0 rounded-lg 2xl:text-sm'>
									Немного о себе
								</span>
								Помимо программирования, мои увлечения включают чтение
								литературы и путешествия. Разнообразие интересов помогает мне
								оставаться креативным и находить нестандартные решения в работе.
								Я также активно занимаюсь спортом, что помогает мне поддерживать
								физическую форму и ментальное здоровье. Я убежден, что здоровый
								образ жизни положительно влияет на продуктивность и качество
								работы. Как видите, у меня еще есть цели, которых я не достиг,
								но я уверен, что сотрудничество с вашей компанией поможет мне
								развиваться и достигать новых высот. Буду рад, если смогу
								достичь своих первых значительных достижений вместе с вами,
								применяя и развивая свои навыки, а также внося вклад в создание
								качественных и инновационных продуктов.
							</p>
						</div>

						<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 mt-4 dark:bg-dark dark:border-primaryDark 2xl:col-span-4'>
							<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-primaryDark dark:bg-opacity-60'></div>
							<motion.div
								initial='initial'
								animate='animate'
								variants={imageVariant}
							>
								<Image
									src={profilePic}
									alt='GlebovDenis'
									className='w-full h-auto rounded-2xl'
									priority
									sizes='(max-width: 768px) 100vw,
									(max-width: 1200px) 50vw,
									33vw'
								/>
							</motion.div>
						</div>
						<div className='col-span-2 flex flex-col justify-between mt-4 dark:text-light 2xl:col-span-8 2xl:flex-row'>
							<div className='flex flex-col items-end justify-center'>
								<AchievementColor />
								<span className='inline-block text-7xl font-bold'>
									<AnimatedNumbers value={5} />+
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light'>
									Выполненых проектов
								</h2>
							</div>
							<div className='flex flex-col items-end justify-center'>
								<AchievementMono />
								<span className='inline-block text-7xl font-bold text-dark/40 dark:text-light dark:opacity-30'>
									<AnimatedNumbers value={100} />+
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/40 dark:text-light dark:opacity-30'>
									Довольных клиентов
								</h2>
							</div>
							<div className='flex flex-col items-end justify-center'>
								<AchievementMono />
								<span className='inline-block text-7xl font-bold text-dark/40 dark:text-light dark:opacity-30'>
									<AnimatedNumbers value={3} />+
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/40 dark:text-light dark:opacity-30'>
									Опыт работы
								</h2>
							</div>
						</div>
					</div>

					<div className='w-full full-viewport-height   grid grid-cols-2 grid-rows-[auto,1fr]'>
						{/* Верхняя строка с компонентом AnimatedText */}
						<div className='col-span-2'>
							<AnimatedText
								text='Каждый навык — шаг к успеху'
								className='mt-32 !text-7xl !text-center xl:!text-5xl lg:!text-center lg:!text-7xl md:!text-5xl sm:!text-3xl'
							/>
						</div>
						{/* Левый столбец с картинкой */}
						<div className='col-span-1 flex justify-center items-center'>
							<AnimatedSvg
								svgPath='/images/code-typing-animate.svg'
								className='w-full h-full animated m-16 mt-0'
								delay={1000}
								initiallyVisible={false}
							/>
						</div>
						{/* Правый столбец со списком умений */}
						<div className='col-span-1 flex justify-center items-start mt-16'>
							<motion.div
								className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-4'
								initial='hidden'
								whileInView='visible'
								viewport={{ once: true }}
								variants={{
									hidden: { opacity: 0 },
									visible: {
										opacity: 1,
										transition: {
											staggerChildren: 0.3,
										},
									},
								}}
							>
								{skills.map(skill => (
									<motion.div
										key={skill.id}
										className={`flex flex-col items-center cursor-pointer border-2 border-solid border-dark rounded-md p-6 dark:border-light`}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										whileHover={{
											scale: 0.95,
											boxShadow: '0px 4px 15px rgba(146, 227, 169, 1)',
										}}
										whileTap={{ scale: 0.9 }}
										onClick={() => openModal(skill)}
									>
										<div className='relative w-16 h-16 mb-2'>
											<Image
												src={skill.logo}
												alt={skill.name}
												layout='fill'
												objectFit='contain'
											/>
										</div>
										<h2 className='text-lg font-medium dark:text-light'>
											{skill.name}
										</h2>
									</motion.div>
								))}
							</motion.div>
							{selectedSkill && (
								<SkillModal skill={selectedSkill} onClose={closeModal} />
							)}
						</div>
					</div>
				</Layout>
			</main>
		</>
	)
}

export default About
