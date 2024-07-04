import React from 'react'

function SkillModal({ skill, onClose }) {
	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
			<div className='bg-white p-6 rounded-lg max-w-sm w-full text-center'>
				<h2 className='text-xl font-bold mb-4'>{skill.name}</h2>
				<p className='mb-4'>{skill.description}</p>
				<button
					className='bg-blue-500 text-white py-2 px-4 rounded'
					onClick={onClose}
				>
					Close
				</button>
			</div>
		</div>
	)
}

export default SkillModal
