import React from 'react'

const Footer = () => {
	return (
		<footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light md:text-sm px-4'>
			<div className='py-8 flex items-center justify-between'>
				<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
				<a
					href='https://storyset.com/work'
					target='_blank'
					className=' border-2 border-solid border-dark p-2 rounded-full hover:text-dark hover:bg-primaryDark hover:scale-90 transition transform duration-300 ease-in-out font-medium dark:border-light dark:hover:border-dark md:w-full md:text-center'
				>
					Idea illustrations by Storyset
				</a>
			</div>
		</footer>
	)
}

export default Footer
