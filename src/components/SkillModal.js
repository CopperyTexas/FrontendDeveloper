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
		<div className='fixed inset-0 bg-dark bg-opacity-50 flex items-center justify-center z-50'>
			<div className='bg-light border-2 border-solid border-dark p-6 rounded-lg max-w-md w-full text-center relative'>
				<div className='relative w-24 h-24 mb-4 mx-auto'>
					<Image
						src={skill.logo}
						alt={skill.name}
						objectFit='contain'
						layout='fill'
					/>
				</div>
				<p className='mb-4'>{skill.description}</p>
				<button
					className='border-2 border-solid border-dark text-light py-2 px-4 rounded-lg font-medium bg-dark hover:bg-primaryDark hover:text-dark'
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
