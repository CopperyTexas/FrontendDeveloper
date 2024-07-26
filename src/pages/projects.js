// Импорт фреймворков
import Head from 'next/head'

// Импорт компонентов
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import TransitionEffect from '../components/TransitionEffect'
const Projects = () => {
	return (
		<>
			<Head>
				<title>GlebovDenis | Project</title>
				<meta name='description' content='Completed projects by Denis Glebov' />
			</Head>
			<TransitionEffect />
			<main className='flex w-full flex-col items-center justify-center'>
				<Layout className='pt-16'>
					<AnimatedText
						text='Каждый проект - новая вершина'
						className='mb-10 !text-7xl !text-center xl:!text-5xl lg:!text-center lg:!text-7xl md:!text-5xl sm:!text-3xl'
					/>
					<div className='w-full slider-height md:h-screen'>
						<Slider />
					</div>
				</Layout>
			</main>
		</>
	)
}

export default Projects
