import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import SkillModal from '../components/SkillModal'
import skills from '../data/skills'

const SkillsPage = () => {
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
				<title>GlebovDenis | SkillsPage</title>
				<meta name='description' content='any description' />
			</Head>
			<main className='flex w-full flex-col items-center justify-center'>
				<Layout className='pt-16'>
					<AnimatedText text='Каждый навык — шаг к успеху' className='mb-16' />
					<div className='min-h-screen bg-gray-100 flex justify-center items-center'>
						<div className='relative'>
							<button
								className='w-24 h-24 bg-dark font-bold text-2xl text-light rounded-full flex justify-center items-center shadow-lg transform transition-transform hover:scale-110'
								onClick={handleButtonClick}
							>
								GD
							</button>
							{showSkills && (
								<div className='absolute inset-0 flex justify-center items-center'>
									{skills.map((skill, index) => (
										<div
											key={skill.id}
											className={`skill-circle absolute w-12 h-12 text-dark flex justify-center items-center rounded-full transition-transform duration-500 ease-out border-2 border-solid border-dark`}
											style={{
												animation: `flyout 0.5s ease-out forwards ${
													index * 0.1
												}s`,
												transform: `rotate(${
													(360 / skills.length) * index
												}deg) translate(${
													100 + Math.random() * 100
												}px) rotate(-${(360 / skills.length) * index}deg)`,
											}}
											onClick={() => openModal(skill)}
										>
											<div className='relative w-8 h-8'>
												<Image
													src={skill.logo}
													alt={skill.name}
													layout='fill'
													objectFit='contain'
												/>
											</div>
										</div>
									))}
								</div>
							)}
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
