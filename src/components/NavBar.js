import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from './Logo'

const CustomLink = ({ href, title, className = '' }) => {
	const router = useRouter()

	return (
		<Link href={href} className={`${className} relative group`}>
			{title}
			<span
				className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300 ${
				router.asPath === href ? 'w-full' : 'w-0'
			}`}
			>
				&nbsp;
			</span>
		</Link>
	)
}

const NavBar = () => {
	return (
		<header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
			<nav>
				<CustomLink href='/' title='Home' className='mr-4 text-lg' />
				<CustomLink href='/about' title='About' className='mx-4 text-lg' />
				<CustomLink
					href='/projects'
					title='Projects'
					className='mx-4 text-lg'
				/>
				<CustomLink href='/skills' title='Skills' className='ml-4 text-lg' />
			</nav>

			<div>
				<Logo />
			</div>
		</header>
	)
}
export default NavBar
