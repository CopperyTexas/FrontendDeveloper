import Head from 'next/head'
import React from 'react'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import SkillTree from '../components/SkillTree'

const SkillsPage = () => {
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
					<SkillTree />
				</Layout>
			</main>
		</>
	)
}

export default SkillsPage
