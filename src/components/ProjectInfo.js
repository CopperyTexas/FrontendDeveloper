// Импорт фреймворков
import { motion } from 'framer-motion'

// Импорт иконок
import { GithubIcon } from './icons'

// Основной компонент для отображения информации о проекте
const ProjectInfo = ({ name, description, srcGit }) => {
	return (
		<motion.div
			className='w-full h-max justify-around m-auto col-span-1 row-span-3 xl:col-span-2 xl:row-start-1 xl:row-span-2 flex flex-col items-start p-6 rounded-xl bg-dark bg-opacity-90 md:row-span-4'
			initial='disappear'
			animate='center'
			exit='disappear'
			variants={{
				disappear: { opacity: 0, x: -100 },
				center: { opacity: 1, x: 0 },
			}}
			transition={{ duration: 0.5 }}
		>
			{/* Название проекта */}
			<h3 className='font-bold text-6xl mb-6 text-light md:text-xl lg:text-2xl'>
				{name}
			</h3>
			{/* Описание проекта */}
			<div className='text-light md:text-sm lg:text-sm'>
				{description.split('\n').map((line, index) => (
					<p key={index}>{line.trim()}</p>
				))}
			</div>
			{/* Ссылка на GitHub */}
			<div className='mt-6 flex item-center justify-center'>
				<motion.a
					href={srcGit}
					target='_blank'
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.9 }}
					className='w-16 bg-light rounded-full xl:w-10'
				>
					<GithubIcon />
				</motion.a>
			</div>
		</motion.div>
	)
}

export default ProjectInfo
