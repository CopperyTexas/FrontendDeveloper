import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import React, { useState } from 'react'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'

const skills = [
	{ name: 'HTML', description: 'Hypertext Markup Language' },
	{ name: 'CSS', description: 'Cascading Style Sheets' },
	{
		name: 'JavaScript',
		description: 'Programming language for web development',
	},
	{
		name: 'React',
		description: 'JavaScript library for building user interfaces',
	},
	{ name: 'Angular', description: 'Framework for building web applications' },
	{
		name: 'Node.js',
		description: 'JavaScript runtime for server-side programming',
	},
]

const SkillsPage = () => {
	const [isExpanded, setIsExpanded] = useState(false)
	const [selectedSkill, setSelectedSkill] = useState(null)

	const handleCircleClick = skill => {
		setSelectedSkill(skill)
	}

	const handleCloseModal = () => {
		setSelectedSkill(null)
	}

	return (
		<>
			<Head>
				<title>GlebovDenis | SkillsPage</title>
				<meta name='description' content='any description' />
			</Head>
			<main className='flex w-full flex-col items-center justify-center'>
				<Layout className='pt-16'>
					<AnimatedText text='Каждый навык — шаг к успеху' className='mb-16' />
				</Layout>
				<div>
					<section className='relative flex items-center justify-center h-screen bg-gray-100'>
						<AnimatePresence>
							{!isExpanded && (
								<motion.button
									className='w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-lg'
									onClick={() => setIsExpanded(true)}
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									exit={{ scale: 0 }}
								>
									Нажми меня
								</motion.button>
							)}
						</AnimatePresence>

						{isExpanded && (
							<div className='absolute inset-0 flex items-center justify-center'>
								{skills.map((skill, index) => (
									<motion.div
										key={index}
										className='absolute flex items-center justify-center bg-blue-500 text-white rounded-full cursor-pointer'
										style={{
											width: `${100 + index * 20}px`,
											height: `${100 + index * 20}px`,
										}}
										initial={{ opacity: 0, x: 0, y: 0 }}
										animate={{
											opacity: 1,
											x: 200 * Math.cos((index * 2 * Math.PI) / skills.length),
											y: 200 * Math.sin((index * 2 * Math.PI) / skills.length),
										}}
										transition={{ duration: 1, ease: 'easeInOut' }}
										onClick={() => handleCircleClick(skill)}
									>
										{skill.name}
									</motion.div>
								))}
							</div>
						)}

						<AnimatePresence>
							{selectedSkill && (
								<motion.div
									className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<div className='bg-white p-8 rounded-lg'>
										<h2 className='text-2xl mb-4'>{selectedSkill.name}</h2>
										<p>{selectedSkill.description}</p>
										<button
											className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
											onClick={handleCloseModal}
										>
											Закрыть
										</button>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</section>
				</div>
			</main>
		</>
	)
}

export default SkillsPage
