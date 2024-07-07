import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
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
	const [showSkills, setShowSkills] = useState(false)

	const openModal = skill => {
		setSelectedSkill(skill)
	}

	const closeModal = () => {
		setSelectedSkill(null)
	}

	const handleButtonClick = () => {
		setShowSkills(!showSkills)
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
						className='mb-16 text-center'
					/>
					<div className='grid w-full grid-cols-8 gap-16'>
						<div className='col-span-3 flex flex-col items-start justify-start'>
							<p className='font-medium text-lg'>
								<span className='p-4 font-bold text-xl text-dark/75'>
									Привет!
								</span>
								Меня зовут Денис, я - увлеченный и целеустремленный
								фронтенд-разработчик. Моя специализация - создание интерактивных
								и отзывчивых веб-приложений с использованием современных
								технологий. Я постоянно стремлюсь к профессиональному росту и
								освоению новых инструментов и методологий.
							</p>
							<p className='my-4 font-medium text-lg'>
								<span className='p-4 font-bold text-xl text-dark/75'>
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
							<p className='my-4 font-medium text-lg'>
								<span className='p-4 font-bold text-xl text-dark/75'>
									Мой подход
								</span>
								Я верю в важность чистого и читаемого кода, а также в постоянное
								обучение и совершенствование. В своей работе я всегда стараюсь
								использовать лучшие практики и искать оптимальные решения для
								поставленных задач. Я придерживаюсь следующих принципов: Чистый
								код: Пишу код, который легко читать и поддерживать, следуя
								принципам SOLID и DRY. Тестирование: Активно использую
								юнит-тестирование и интеграционное тестирование для обеспечения
								надежности и качества приложений. Документация: Понимаю важность
								документации и стараюсь всегда оставлять понятные комментарии и
								писать подробные README файлы.
							</p>
							<p className='my-4 font-medium text-lg'>
								<span className='p-4 font-bold text-xl text-dark/75'>Цели</span>
								В ближайшем будущем я планирую углубить свои знания в области
								разработки на TypeScript, что позволит мне писать еще более
								надежный и масштабируемый код. Моя главная цель - создавать
								качественные и полезные продукты, которые приносят пользу
								пользователям и решают их реальные проблемы. Я стремлюсь к тому,
								чтобы каждый проект, над которым я работаю, был выполнен на
								высшем уровне и приносил удовлетворение как мне, так и моим
								клиентам и пользователям.
							</p>
							<p className='font-medium text-lg'>
								<span className='p-4 font-bold text-xl text-dark/75'>
									Немного о себе
								</span>
								Помимо программирования, я увлекаюсь чтением литературы и
								путешествиями. Я считаю, что разнообразие интересов помогает
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

						<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 '>
							<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'></div>
							<motion.div
								initial='initial'
								animate='animate'
								variants={imageVariant}
							>
								<Image
									src={profilePic}
									alt='GlebovDenis'
									className='w-full h-auto rounded-2xl'
								/>
							</motion.div>
						</div>
						<div className='col-span-2 flex flex-col justify-between'>
							<div className='flex flex-col items-end justify-center'>
								<AchievementColor />
								<span className='inline-block text-7xl font-bold'>
									<AnimatedNumbers value={5} />+
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/75'>
									Выполненых проектов
								</h2>
							</div>
							<div className='flex flex-col items-end justify-center'>
								<AchievementMono />
								<span className='inline-block text-7xl font-bold text-dark/40'>
									<AnimatedNumbers value={100} />+
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/40'>
									Довольных клиентов
								</h2>
							</div>
							<div className='flex flex-col items-end justify-center'>
								<AchievementMono />
								<span className='inline-block text-7xl font-bold text-dark/40'>
									<AnimatedNumbers value={3} />+
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/40'>
									Опыт работы
								</h2>
							</div>
						</div>
					</div>
					<AnimatedText
						text='Каждый навык — шаг к успеху'
						className='mb-16 mt-32 text-center'
					/>
					<div className='w-full h-full flex justify-center items-center'>
						<motion.div
							className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6'
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
							{skills.map((skill, index) => (
								<motion.div
									key={skill.id}
									className='flex flex-col items-center cursor-pointer border-2 border-solid border-dark rounded-full p-6 shadow-lg transition-transform duration-150'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: index * 0.6 }}
									whileHover={{
										scale: 0.95,
										boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
									}}
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
									<h2 className='text-lg font-medium'>{skill.name}</h2>
								</motion.div>
							))}
						</motion.div>
						{selectedSkill && (
							<SkillModal skill={selectedSkill} onClose={closeModal} />
						)}
					</div>
				</Layout>
			</main>
		</>
	)
}
export default About
