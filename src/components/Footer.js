import React from 'react'
import Layout from '../components/Layout'

const Footer = () => {
	return (
		<footer className='w-full border-t-2 border-solid border-dark font medium text-lg'>
			<Layout className='py-8 flex items-center justify-between'>
				<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
				<a
					href='https://storyset.com/work'
					target='_blank'
					className='border-2 border-solid border-dark p-2 rounded-full hover:text-dark hover:bg-primaryDark hover:scale-90 transition transform duration-300 ease-in-out font-medium'
				>
					Idea illustrations by Storyset
				</a>
			</Layout>
		</footer>
	)
}

export default Footer
