import Head from 'next/head'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import Slider from '../components/Slider'

const Projects = () => {
	return (
		<>
			<Head>
				<title>GlebovDenis | Project</title>
				<meta name='description' content='any description' />
			</Head>
			<main className='flex w-full flex-col items-center justify-center'>
				<Layout className='pt-16'>
					<AnimatedText
						text='Каждый проект - новая вершина'
						className=' !text-7xl !text-center xl:!text-5xl lg:!text-center lg:!text-7xl md:!text-5xl sm:!text-3xl'
					/>
					<div className='w-full slider-height'>
						<Slider />
					</div>
				</Layout>
			</main>
		</>
	)
}

export default Projects
