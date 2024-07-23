import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const AnimatedSvgHome = ({
	svgPath,
	className,
	delay = 2000,
	initiallyVisible = false,
}) => {
	const [svgContent, setSvgContent] = useState('')
	const [isVisible, setIsVisible] = useState(initiallyVisible)
	const { ref, inView } = useInView({
		triggerOnce: true, // Анимация запускается только один раз
		threshold: 0.1, // Порог видимости 10%
	})

	useEffect(() => {
		if (inView || initiallyVisible) {
			const timer = setTimeout(
				() => {
					const fetchSvg = async () => {
						try {
							const response = await fetch(svgPath)
							if (!response.ok) {
								throw new Error(
									`Ошибка при загрузке SVG: ${response.statusText}`
								)
							}
							const svgText = await response.text()
							setSvgContent(svgText)
						} catch (error) {
							console.error(error)
						}
					}
					fetchSvg()
					setIsVisible(true)
				},
				initiallyVisible ? 0 : delay
			) // Задержка при скролле или нет задержки при начальной видимости

			return () => clearTimeout(timer) // Очистка таймера при размонтировании компонента
		}
	}, [inView, svgPath, delay, initiallyVisible])

	return (
		<div ref={ref} className={className}>
			{isVisible && <div dangerouslySetInnerHTML={{ __html: svgContent }} />}
		</div>
	)
}

export default AnimatedSvgHome
