// Основной компонент для отображения абзаца текста с заголовком
const Paragraph = ({ title, text }) => {
	return (
		<p className='mt-4 font-medium text-lg 2xl:text-sm xl:text-xs'>
			{/* Заголовок абзаца */}
			<span className='p-1 pr-2 font-bold text-xl text-dark bg-primaryDark м-2 ml-0 rounded-lg 2xl:text-sm'>
				{title}
			</span>
			{/* Текст абзаца */}
			{text}
		</p>
	)
}

export default Paragraph
