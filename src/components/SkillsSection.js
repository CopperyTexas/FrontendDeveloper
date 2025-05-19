// Импорт фреймворков
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Импорт компонентов
import Image from 'next/image'
import AnimatedText from './AnimatedText'
import SkillModal from './SkillModal'

// Импорт SVG-фона
import Svg from '/public/assets/images/code-type.svg'

const SkillsSection = ({ skills, openModal, selectedSkill, closeModal }) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<div ref={ref} className="w-full grid grid-cols-2 grid-rows-[auto,1fr]">
			{/* Заголовок */}
			<div className="col-span-2">
				<AnimatedText
					text="Каждый навык — шаг к успеху"
					className="mt-32 !text-7xl !text-center xl:!text-5xl lg:!text-5xl md:!text-5xl sm:!text-3xl"
				/>
			</div>

			{/* SVG-иллюстрация */}
			<div className="col-span-1 flex justify-center items-center lg:col-span-2">
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					animate={isInView ? { opacity: 1, x: 0 } : {}}
					transition={{ delay: 0.3, duration: 0.6 }}
					className="w-full h-full lg:w-1/2"
				>
					<Svg />
				</motion.div>
			</div>

			{/* Список навыков */}
			<motion.div
				className="col-span-1 flex justify-center items-start my-auto lg:col-span-2"
				initial={{ opacity: 0, x: 100 }}
				animate={isInView ? { opacity: 1, x: 0 } : {}}
				transition={{ delay: 0.3, duration: 0.6 }}
			>
				<motion.div
					className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-4 2xl:grid-cols-4 gap-8 m-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1 },
					}}
				>
					{skills.map(skill => (
						<motion.div
							key={skill.id}
							className="flex flex-col items-center cursor-pointer border-2 border-solid border-dark rounded-md p-2 dark:border-light px-10"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							whileHover={{
								scale: 0.95,
								boxShadow: '0px 4px 15px rgba(146, 227, 169, 1)',
							}}
							whileTap={{ scale: 0.9 }}
							onClick={() => openModal(skill)}
						>
							<div className="relative w-16 h-16 mb-2 xl:w-8 xl:h-8">
								<Image
									src={skill.logo}
									alt={skill.name}
									priority
									unoptimized
									fill
									placeholder="blur"
									sizes="64px"
									className="object-contain"
								/>
							</div>
							<h2 className="text-lg font-medium dark:text-light 2xl:text-sm xl:text-xs">
								{skill.name}
							</h2>
						</motion.div>
					))}
				</motion.div>

				{/* Модальное окно */}
				{selectedSkill && (
					<SkillModal skill={selectedSkill} onClose={closeModal} />
				)}
			</motion.div>
		</div>
	)
}

export default SkillsSection
