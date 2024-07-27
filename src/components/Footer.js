// Импорты из библиотек
import React from 'react'

// Компонент Footer
const Footer = () => {
	return (
		<footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light md:text-sm px-4'>
			<div className='py-8 flex items-center justify-between'>
				{/* Текущий год и сообщение о копирайте */}
				<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
				{/* Ссылка на ресурс Storyset */}
				<a
					href='https://storyset.com/work'
					target='_blank'
					rel='noopener noreferrer'
					className='border-2 border-solid border-dark p-2 rounded-full hover:text-dark hover:bg-primaryDark hover:scale-90 transition transform duration-300 ease-in-out font-medium dark:border-light dark:hover:border-dark md:w-full md:text-center'
				>
					Idea illustrations by Storyset
				</a>
			</div>
		</footer>
	)
}

export default Footer
