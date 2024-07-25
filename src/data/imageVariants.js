// Варианты анимации для изображения
const imageVariant = {
	initial: { opacity: 0, x: 100 },
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1.5,
			ease: 'easeInOut',
		},
	},
}

export default imageVariant
