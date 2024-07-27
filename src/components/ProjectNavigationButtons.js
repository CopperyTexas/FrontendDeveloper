// Импортируем React
import React from 'react'

// Компонент для кнопок навигации между проектами
const ProjectNavigationButtons = ({ handlePrevProject, handleNextProject }) => {
	return (
		<div className='row-start-4 col-span-2 mx-auto h-min self-end xl:row-start-5'>
			{/* Кнопка для перехода к предыдущему проекту */}
			<button
				onClick={handlePrevProject}
				className='bg-light text-dark rounded-full m-2 border-2 border-solid border-dark w-16 h-16 hover:bg-primaryDark font-bold hover:scale-90 transition-transform ease-in-out'
			>
				&lt;
			</button>
			{/* Кнопка для перехода к следующему проекту */}
			<button
				onClick={handleNextProject}
				className='bg-light text-dark p-2 rounded-full m-2 border-2 border-solid border-dark w-16 h-16 hover:bg-primaryDark font-bold hover:scale-90 transition-transform ease-in-out'
			>
				&gt;
			</button>
		</div>
	)
}

export default ProjectNavigationButtons
