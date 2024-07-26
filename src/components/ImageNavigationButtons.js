import React from 'react'

const ImageNavigationButtons = ({ handlePrevImage, handleNextImage }) => {
	return (
		<>
			<button
				onClick={handlePrevImage}
				className='bg-light bg-opacity-50 text-dark rounded-md border-2 border-solid border-dark w-16 h-full hover:bg-primaryDark font-bold hover:bg-opacity-50 transition-transform ease-in-out absolute top-1/2 left-0 transform -translate-y-1/2'
			>
				&lt;
			</button>
			<button
				onClick={handleNextImage}
				className='bg-light bg-opacity-50 text-dark rounded-md border-2 border-solid border-dark w-16 h-full hover:bg-primaryDark hover:bg-opacity-50 font-bold transition-transform ease-in-out absolute top-1/2 right-0 transform -translate-y-1/2'
			>
				&gt;
			</button>
		</>
	)
}

export default ImageNavigationButtons
