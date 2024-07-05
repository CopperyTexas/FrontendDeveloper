import Image from 'next/image'
import React from 'react'
import { createPortal } from 'react-dom'

const SkillModal = ({ skill, onClose }) => {
	return createPortal(
		<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
			<div className='bg-white p-6 rounded-lg max-w-md w-full text-center relative'>
				<button
					className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
					onClick={onClose}
				>
					&times;
				</button>
				<div className='relative w-24 h-24 mb-4 mx-auto'>
					<Image src={skill.logo} alt={skill.name} objectFit='contain' />
				</div>
				<p className='mb-4'>{skill.description}</p>
				<button
					className='bg-blue-500 text-white py-2 px-4 rounded'
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
