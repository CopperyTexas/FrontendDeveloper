import Typewriter from 'typewriter-effect'

const CodeAnimation = () => {
	const codeStrings = [
		`< !DOCTYPE html >`,
		`< html lang="ru" >`,
		`< head >`,
		`  < meta charset="UTF-8" >`,
		`  < title >Портфолио< /title >`,
		`< /head >`,
		`< body >`,
		`  < h1 >Hello HR< /h1 >`,
		`  < form >`,
		`    < label >Фамилия:< /label >`,
		`    < input type="text" value="Глебов" >< /input >`,
		`    < label >Имя:< /label >`,
		`    < input type="text" value="Денис" >< /input >`,
		`    < label >Дата рождения:< /label >`,
		`    < input type="text" value="18.10.1993" >< /input >`,
		`    < label >Должность:< /label >`,
		`    < input type="text" value="Frontend Developer">< /input >`,
		`    < button type="button">Выслать оффер!< /button >`,
		`  < /form >`,
		`< /body >`,
		`< /html >`,
	]

	return (
		<div className='bg-gray-900 rounded-lg shadow-lg w-full h-full flex flex-col overflow-hidden'>
			<div className='bg-gray-800 px-4 py-2 flex items-center justify-between'>
				<div className='flex space-x-2'>
					<span className='w-3 h-3 bg-red-500 rounded-full'></span>
					<span className='w-3 h-3 bg-yellow-500 rounded-full'></span>
					<span className='w-3 h-3 bg-green-500 rounded-full'></span>
				</div>
				<div className='text-gray-400 text-xs'>portfolio.html</div>
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
						}}
						onInit={typewriter => {
							codeStrings.forEach(line => {
								typewriter.typeString(`${line}\n`).pauseFor(500)
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
