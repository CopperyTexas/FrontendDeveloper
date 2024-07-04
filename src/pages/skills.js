import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import SkillModal from '../components/SkillModal'
import skills from '../data/skills'

const SkillsPage = () => {
	const [selectedSkill, setSelectedSkill] = useState(null)

	const openModal = skill => {
		setSelectedSkill(skill)
	}

	const closeModal = () => {
		setSelectedSkill(null)
	}

	return (
		<>
			{/* Управление метаданными страницы */}
			<Head>
				<title>GlebovDenis | SkillsPage</title>
				<meta name='description' content='any description' />
			</Head>
			<main className='flex w-full flex-col items-center justify-center'>
				{/* Основной макет страницы */}
				<Layout className='pt-16'>
					{/* Анимированный текст заголовка */}
					<AnimatedText text='Каждый навык — шаг к успеху' className='mb-16' />
					<div className='min-h-screen bg-gray-100 p-4'>
						<h1 className='text-4xl font-bold mb-8 text-center'>Навыки</h1>
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
							{skills.map(skill => (
								<div
									key={skill.id}
									className='p-6 bg-white rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105 flex flex-col items-center'
									onClick={() => openModal(skill)}
								>
									<div className='relative w-16 h-16 mb-4'>
										<Image
											src={skill.logo}
											alt={skill.name}
											layout='fill'
											objectFit='contain'
										/>
									</div>
									<h2 className='text-xl font-semibold'>{skill.name}</h2>
								</div>
							))}
						</div>
						{selectedSkill && (
							<SkillModal skill={selectedSkill} onClose={closeModal} />
						)}
					</div>
				</Layout>
			</main>
		</>
	)
}

export default SkillsPage
