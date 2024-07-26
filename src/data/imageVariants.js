// Варианты анимации для изображения
const imageVariant = {
	initial: { opacity: 0, x: '100%' },
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1.5,
			ease: 'easeInOut',
		},
	},
	disappear: { x: '-100%', opacity: 0 },
	center: { x: '0%', opacity: 1 },
	appear: { x: '100%', opacity: 0 },
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
	exit: { opacity: 0, scale: 0.8 },
}

export default imageVariant
