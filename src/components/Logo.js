import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import LogoGD from '../images/LogoGD.svg'

const MotionLink = motion(Link)

const Logo = () => {
	return (
		<div className='flex items-center justify-center mt-2'>
			<MotionLink
				href='/'
				whileHover={{
					scale: 1.5,
				}}
			>
				<Image src={LogoGD} alt='Logo' width={100} height={100} />
			</MotionLink>
		</div>
	)
}
export default Logo
