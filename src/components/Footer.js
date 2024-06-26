import { motion } from 'framer-motion'
import Layout from './Layout'
import { GithubIcon, LinkedInIcon, TGIcon, VkontakteIcon } from './icons'

const Footer = () => {
	return (
		<footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
			<Layout className='py-8 flex items-center justify-between'>
				<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
				<nav className='flex items-center justify-center flex-wrap'>
					<motion.a
						href='https://github.com/CopperyTexas'
						target={'_blank'}
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
						className='w-6 mx-3'
					>
						<GithubIcon />
					</motion.a>
					<motion.a
						href='https://careers.linkedin.cn/'
						target={'_blank'}
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
						className='w-6 mx-3'
					>
						<LinkedInIcon />
					</motion.a>
					<motion.a
						href='https://vk.com'
						target={'_blank'}
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
						className='w-6 mx-3'
					>
						<VkontakteIcon />
					</motion.a>
					<motion.a
						href='https://telegram.org//'
						target={'_blank'}
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
						className='w-6 mx-3'
					>
						<TGIcon />
					</motion.a>
				</nav>
			</Layout>
		</footer>
	)
}
export default Footer
