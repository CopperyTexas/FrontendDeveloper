// Импорт фреймворков
import {motion} from 'framer-motion'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import {useState} from 'react'

// Импорт компонентов
import AchievementHeading from '../components/AchievementHeading'
import AnimatedNumbers from '../components/AnimatedNumbers'
import AnimatedText from '../components/AnimatedText'
import {AchievementColor, AchievementMono} from '../components/icons'
import Layout from '../components/Layout'
import Paragraph from '../components/Paragraph'
import SkillsSection from '../components/SkillsSection'
import TransitionEffect from '../components/TransitionEffect'
import aboutData from '../data/aboutData'

// Импорт данных и изображений
import imageVariant from '../data/imageVariants'
import skills from '../data/skills'
import profilePic from '/public/assets/images/photo_me.jpg'

// Динамический импорт компонента SkillModal
const SkillModal = dynamic(() => import('../components/SkillModal'), {
	loading: () => <p>Loading...</p>,
	ssr: false, // Отключение серверного рендеринга для компонента
})

const About = () => {
	const [selectedSkill, setSelectedSkill] = useState(null)

	// Функция для открытия модального окна с выбранным навыком
	const openModal = skill => {
		setSelectedSkill(skill)
	}

	// Функция для закрытия модального окна
	const closeModal = () => {
		setSelectedSkill(null)
	}

	return (
		<>
			<Head>
				<title>About Denis Glebov - Frontend Developer</title>
				<meta
					name='description'
					content='Learn more about Denis Glebov, a dedicated frontend developer.'
				/>
				<meta
					property='og:title'
					content='About Denis Glebov - Frontend Developer'
				/>
				<meta
					property='og:description'
					content='Learn more about Denis Glebov, a  dedicated frontend developer.'
				/>
			</Head>

			<TransitionEffect />
			<main className='flex w-full flex-col items-center justify-center'>
				<Layout className='pt-16'>
					{/* Анимированный текст */}
					<AnimatedText
						text='Целеустремленность ведет к достижениям'
						className=' !text-7xl !text-center xl:!text-5xl lg:!text-center lg:!text-5xl md:!text-5xl sm:!text-3xl'
					/>
					<div className='grid w-full grid-cols-8 gap-16 mt-16 sm:gap-8'>
						<div className='col-span-3 flex flex-col items-start justify-start mt-4 dark:text-light xl:col-span-4  2xl:col-span-4 lg:col-span-8'>
							{/* Описание и информация о себе */}
							<Paragraph title='Привет!' text={aboutData.intro} />
							<Paragraph title='Опыт и навыки' text={aboutData.experience} />
							<Paragraph title='Мой подход' text={aboutData.approach} />
							<Paragraph title='Цели' text={aboutData.goals} />
							<Paragraph title='Немного о себе вне кода' text={aboutData.aboutMe} />
						</div>

						<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 md:p-4 xl:p-6 mt-4 dark:bg-dark dark:border-primaryDark  xl:col-span-4 lg:col-span-5 2xl:col-span-4'>
							<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-primaryDark dark:bg-opacity-60'></div>
							{/* Анимированное изображение */}
							<motion.div
								initial='initial'
								animate='animate'
								variants={imageVariant}
							>
								<img
									src={profilePic}
									alt='GlebovDenis'
									className='w-full h-auto rounded-2xl'

									sizes='(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw'
								
								/>
							</motion.div>
						</div>
						<div className='col-span-2 flex flex-col justify-between mt-4 dark:text-light 2xl:col-span-8 2xl:flex-row 3xl:col-span-8 3xl:flex-row lg:col-span-3 lg:flex-col '>
							{/* Блок с достижениями */}
							<div className='flex flex-col items-end justify-center'>
								<AchievementColor />
								<span className='inline-block text-7xl font-bold lg:text-4xl'>
									<AnimatedNumbers value={5} />+
								</span>
								<AchievementHeading text='Выполненных проектов' />
							</div>
							<div className='flex flex-col items-end justify-center'>
								<AchievementMono />
								<span className='inline-block text-7xl font-bold text-dark/40 dark:text-light dark:opacity-30 lg:text-4xl'>
									<AnimatedNumbers value={100} />+
								</span>
								<AchievementHeading text='Довольных клиентов' dark />
							</div>
							<div className='flex flex-col items-end justify-center'>
								<AchievementMono />
								<span className='inline-block text-7xl font-bold text-dark/40 dark:text-light dark:opacity-30 lg:text-4xl'>
									<AnimatedNumbers value={3} />+
								</span>
								<AchievementHeading text='Опыт работы' dark />
							</div>
						</div>
					</div>

					{/* Раздел с навыками */}
					<SkillsSection
						skills={skills}
						openModal={openModal}
						selectedSkill={selectedSkill}
						closeModal={closeModal}
					/>
				</Layout>
			</main>
		</>
	)
}

export default About
