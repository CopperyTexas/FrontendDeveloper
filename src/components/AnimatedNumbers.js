// Импорт необходимых функций из фреймворка Framer Motion
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

// Компонент для анимации чисел
const AnimatedNumbers = ({ value }) => {
	const ref = useRef(null) // Ссылка на DOM элемент для отображения числа

	// Значение, которое будет анимироваться
	const motionValue = useMotionValue(0)

	// Используем пружинную анимацию для значения
	const springValue = useSpring(motionValue, { duration: 5000 })

	// Определяем, находится ли элемент в поле зрения
	const isInView = useInView(ref, { once: true })

	// Устанавливаем конечное значение анимации, когда элемент попадает в поле зрения
	useEffect(() => {
		if (isInView) {
			motionValue.set(value)
		}
	}, [isInView, value, motionValue])

	// Обновляем текстовый контент элемента при изменении значения анимации
	useEffect(() => {
		// Подписываемся на изменения springValue
		const unsubscribe = springValue.on('change', latest => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0) // Обновляем текст
			}
		})

		// Отписываемся при размонтировании компонента
		return () => unsubscribe()
	}, [springValue, value])

	// Возвращаем элемент span с рефом
	return <span ref={ref}></span>
}

export default AnimatedNumbers
