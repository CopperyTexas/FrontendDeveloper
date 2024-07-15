import Image from 'next/image'
import React, { useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'

const SkillModal = ({ skill, onClose }) => {
	const handleKeyDown = useCallback(
		event => {
			if (event.key === 'Escape') {
				onClose()
			}
		},
		[onClose]
	)

	useEffect(() => {
		const originalStyle = window.getComputedStyle(document.body).overflow
		const scrollBarWidth =
			window.innerWidth - document.documentElement.clientWidth

		document.addEventListener('keydown', handleKeyDown)

		// Заблокировать прокрутку и компенсировать ширину полосы прокрутки
		document.body.style.overflow = 'hidden'
		document.body.style.paddingRight = `${scrollBarWidth}px`

		return () => {
			document.removeEventListener('keydown', handleKeyDown)

			// Восстановить прокрутку и убрать компенсацию
			document.body.style.overflow = originalStyle
			document.body.style.paddingRight = '0px'
		}
	}, [handleKeyDown])

	return createPortal(
		<div className='fixed inset-0 bg-dark bg-opacity-50 flex items-center justify-center z-50 fade-in dark:bg-light dark:bg-opacity-50'>
			<div className='bg-light border-2 border-solid border-dark p-2 rounded-lg w-1/3 h-1/6 text-center items-center relative grid grid-cols-2 grid-rows-3 slide-in dark:border-light dark:bg-dark dark:text-light'>
				<div className='relative w-full h-full mx-auto col-span-1 row-span-3'>
					<Image
						src={skill.logo}
						alt={skill.name}
						objectFit='contain'
						layout='fill'
					/>
				</div>
				<p className='mb-6 font-bold col-span-1 text-3xl'>{skill.name}</p>
				<p className='mb-6 col-span-1'>{skill.description}</p>
				<button
					className='m-auto w-1/2 border-2 border-solid border-dark text-light py-2 px-4 rounded-lg font-medium bg-dark hover:bg-primaryDark hover:text-dark transition-colors duration-300 ease-in-out dark:border-light dark:hover:border-dark'
					onClick={onClose}
				>
					Закрыть
				</button>
			</div>
		</div>,
		document.body
	)
}

export default SkillModal
