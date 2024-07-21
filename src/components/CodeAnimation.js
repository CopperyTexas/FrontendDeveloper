import Typewriter from 'typewriter-effect'

// Компонент для отображения анимированного кода с использованием typewriter-эффекта
const CodeAnimation = ({ codeStrings, typewriterOptions }) => {
	return (
		<div className='bg-gray-900 rounded-lg shadow-lg w-full h-full flex flex-col overflow-hidden'>
			{/* Верхняя панель окна с имитацией кнопок управления */}
			<div className='bg-gray-800 border-4 border-solid border-dark dark:border-gray-900 px-4 py-2 flex items-center justify-between rounded-xl'>
				<div className='flex space-x-2'>
					<span className='w-3 h-3 bg-red-500 rounded-full'></span>
					<span className='w-3 h-3 bg-yellow-500 rounded-full'></span>
					<span className='w-3 h-3 bg-green-500 rounded-full'></span>
				</div>
				<div className='text-gray-400  text-xs'>Portfolio.html</div>
			</div>
			{/* Основная область с анимацией кода */}
			<div className='flex-grow overflow-y-auto p-4'>
				<div
					className='whitespace-pre-wrap text-lg text-primaryDark h-full xl:text-sm 2xl:text-sm'
					id='typewriter'
				>
					<Typewriter
						options={{
							autoStart: true, // Автоматический старт анимации
							loop: false, // Анимация не зацикливается
							delay: 75, // Задержка между печатью символов
							deleteSpeed: 50, // Скорость удаления символов
							cursor: '|', // Вид курсора
							...typewriterOptions, // Дополнительные опции, переданные через пропсы
						}}
						onInit={typewriter => {
							// Инициализация анимации для каждой строки кода
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
