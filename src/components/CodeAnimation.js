import Typewriter from 'typewriter-effect'

const CodeAnimation = ({ codeStrings, typewriterOptions }) => {
	return (
		<div className='bg-gray-900 rounded-lg shadow-lg w-full h-full flex flex-col overflow-hidden'>
			<div className='bg-gray-800 px-4 py-2 flex items-center justify-between'>
				<div className='flex space-x-2'>
					<span className='w-3 h-3 bg-red-500 rounded-full'></span>
					<span className='w-3 h-3 bg-yellow-500 rounded-full'></span>
					<span className='w-3 h-3 bg-green-500 rounded-full'></span>
				</div>
				<div className='text-gray-400 text-xs'>code.html</div>
			</div>
			<div className='flex-grow overflow-y-auto p-4'>
				<div
					className='whitespace-pre-wrap text-lg text-gray-100 h-full'
					id='typewriter'
				>
					<Typewriter
						options={{
							autoStart: true,
							loop: false,
							delay: 75,
							deleteSpeed: 50,
							cursor: '|',
							...typewriterOptions,
						}}
						onInit={typewriter => {
							codeStrings.forEach((line, index) => {
								typewriter
									.typeString(`${line}\n`)
									.pauseFor(index === codeStrings.length - 1 ? 1000 : 500)
							})
							typewriter.start()
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default CodeAnimation
