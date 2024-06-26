import Link from 'next/link'
import { CircularText } from './icons'

const HireMe = () => {
	return (
		<div className='fixed left-4 bottom-8 flex items-center justify-center overflow-hidden'>
			<div className='w-60 h-auto flex items-center justify-center relative'>
				<CircularText className={'fill-dark animate-spin-slow'} />

				<Link
					href='mailto:dengleboff@yandex.ru'
					className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-2 border-solid border-dark w-24 h-24 rounded-full font-semibold hover:bg-light hover:text-dark'
				>
					Hire me
				</Link>
			</div>
		</div>
	)
}
export default HireMe
