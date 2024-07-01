import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
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
	const springValue = useSpring(motionValue, { duration: 3000 })
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

const about = () => {
	return (
		<>
			<Head>
				<title>GlebovDenis | AboutPage</title>
				<meta name='description' content='any description' />
			</Head>
			<main className='flex w-full flex-col items-center justify-center'>
				<Layout className='pt-16'>
					<AnimatedText
						text='Целеустремленность ведет к достижениям!'
						className='mb-16'
					/>
					<div className='grid w-full grid-cols-8 gap-16'>
						<div className='col-span-3 flex flex-col items-start justify-start'>
							<p className='font-medium'>
								<span className='p-4 font-bold text-lg text-dark/75'>
									Привет!
								</span>{' '}
								Меня зовут Денис, я - увлеченный и целеустремленный
								фронтенд-разработчик. Моя специализация - создание интерактивных
								и отзывчивых веб-приложений с использованием современных
								технологий. Я постоянно стремлюсь к профессиональному росту и
								освоению новых инструментов и методологий.
							</p>
							<p className='my-4 font-medium'>
								<span className='p-4 font-bold text-lg text-dark/75'>
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
							<p className='my-4 font-medium'>
								<span className='p-4 font-bold text-lg text-dark/75'>
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
							<p className='my-4 font-medium'>
								<span className='p-4 font-bold text-lg text-dark/75'>Цели</span>
								В ближайшем будущем я планирую углубить свои знания в области
								разработки на TypeScript, что позволит мне писать еще более
								надежный и масштабируемый код. Моя главная цель - создавать
								качественные и полезные продукты, которые приносят пользу
								пользователям и решают их реальные проблемы. Я стремлюсь к тому,
								чтобы каждый проект, над которым я работаю, был выполнен на
								высшем уровне и приносил удовлетворение как мне, так и моим
								клиентам и пользователям.
							</p>
							<p className='font-medium'>
								<span className='p-4 font-bold text-lg text-dark/75'>
									Немного о себе
								</span>
								Помимо программирования, я увлекаюсь чтением литературы и
								путешествиями. Я считаю, что разнообразие интересов помогает
								оставаться креативным и находить нестандартные решения в работе.
								Я также активно занимаюсь спортом, что помогает мне поддерживать
								физическую форму и ментальное здоровье. Я убежден, что здоровый
								образ жизни положительно влияет на продуктивность и качество
								работы. Буду рад новым возможностям и интересным проектам! Если
								у вас есть идеи или предложения, не стесняйтесь связаться со
								мной.
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
						<div className='col-span-2 flex flex-col items-end justify-between'>
							<div className='flex flex-col items-end justify-center'>
								<span className='inlin-block text-7xl font-bold'>
									<AnimatedNumbers value={5} />+
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/75'>
									Выполненых проектов
								</h2>
							</div>
							<div className='flex flex-col items-end justify-center'>
								<span className='inlin-block text-7xl font-bold'>
									<AnimatedNumbers value={100} />+
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/75'>
									Довольных клиентов
								</h2>
							</div>
							<div className='flex flex-col items-end justify-center'>
								<span className='inlin-block text-7xl font-bold'>
									<AnimatedNumbers value={3} />+
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/75'>
									Опыт работы
								</h2>
							</div>
						</div>
					</div>
				</Layout>
			</main>
		</>
	)
}
export default about
