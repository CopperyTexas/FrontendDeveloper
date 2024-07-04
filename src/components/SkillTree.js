import * as d3 from 'd3' // Импортируем библиотеку D3.js
import React, { useEffect } from 'react'

// Массив объектов, представляющих навыки и их связи
const skills = [
	{ id: 1, name: 'HTML', children: [2, 3, 4] },
	{ id: 2, name: 'CSS', children: [5, 6, 7] },
	{ id: 3, name: 'JavaScript', children: [8, 9] },
	{ id: 4, name: 'Version Control', children: [10] },
	{ id: 5, name: 'SASS', children: [] },
	{ id: 6, name: 'Tailwind CSS', children: [] },
	{ id: 7, name: 'Bootstrap', children: [] },
	{ id: 8, name: 'React', children: [11, 12] },
	{ id: 9, name: 'Angular', children: [] },
	{ id: 10, name: 'Git', children: [] },
	{ id: 11, name: 'Redux', children: [] },
	{ id: 12, name: 'Next.js', children: [] },
]

const SkillTree = () => {
	useEffect(() => {
		const width = window.innerWidth
		const height = window.innerHeight
		const svg = d3
			.select('#skillTree') // Выбираем SVG элемент с id 'skillTree'
			.attr('width', width) // Устанавливаем ширину SVG равной ширине окна
			.attr('height', height) // Устанавливаем высоту SVG равной высоте окна

		// Очистка всех существующих элементов в SVG, чтобы избежать дублирования
		svg.selectAll('*').remove()

		// Настройка симуляции с использованием сил
		const simulation = d3
			.forceSimulation()
			.force(
				'link',
				d3
					.forceLink()
					.id(d => d.id)
					.distance(100) // Связующая сила, устанавливающая длину ссылок
			)
			.force('charge', d3.forceManyBody().strength(-500)) // Сила отталкивания между узлами
			.force('center', d3.forceCenter(width / 2, height / 2)) // Центрирование силы для размещения узлов в центре

		// Создаем массив узлов из массива навыков
		const nodes = skills.map(skill => ({ id: skill.id, name: skill.name }))
		const links = []
		skills.forEach(skill => {
			skill.children.forEach(child => {
				links.push({ source: skill.id, target: child }) // Создаем массив ссылок между узлами
			})
		})

		// Создаем элементы 'line' для ссылок между узлами
		const link = svg
			.append('g')
			.selectAll('line')
			.data(links)
			.enter()
			.append('line')
			.attr('stroke', '#999')
			.attr('stroke-width', 2)

		// Создаем элементы 'circle' для узлов
		const node = svg
			.append('g')
			.selectAll('circle')
			.data(nodes)
			.enter()
			.append('circle')
			.attr('r', 20) // Радиус окружностей
			.attr('fill', '#69b3a2') // Цвет заливки
			.call(
				d3
					.drag()
					.on('start', dragstarted) // Начало перетаскивания
					.on('drag', dragged) // Во время перетаскивания
					.on('end', dragended) // Окончание перетаскивания
			)

		// Добавляем текстовые элементы для названий узлов
		const text = svg
			.append('g')
			.selectAll('text')
			.data(nodes)
			.enter()
			.append('text')
			.attr('dy', 4)
			.attr('text-anchor', 'middle') // Выравнивание текста по центру
			.text(d => d.name)

		// Запуск симуляции
		simulation.nodes(nodes).on('tick', ticked)

		simulation.force('link').links(links)

		// Функция, вызываемая на каждом шаге симуляции
		function ticked() {
			link
				.attr('x1', d => d.source.x)
				.attr('y1', d => d.source.y)
				.attr('x2', d => d.target.x)
				.attr('y2', d => d.target.y)

			node.attr('cx', d => d.x).attr('cy', d => d.y)

			text.attr('x', d => d.x).attr('y', d => d.y)
		}

		// Функции для обработки событий перетаскивания
		function dragstarted(event, d) {
			if (!event.active) simulation.alphaTarget(0.3).restart() // Увеличение альфа-значения симуляции
			d.fx = d.x // Фиксация координаты x
			d.fy = d.y // Фиксация координаты y
		}

		function dragged(event, d) {
			d.fx = event.x // Обновление координаты x во время перетаскивания
			d.fy = event.y // Обновление координаты y во время перетаскивания
		}

		function dragended(event, d) {
			if (!event.active) simulation.alphaTarget(0) // Сброс альфа-значения симуляции
			d.fx = null // Отпускание фиксации координаты x
			d.fy = null // Отпускание фиксации координаты y
		}

		// Добавляем масштабирование и панорамирование
		const zoom = d3
			.zoom()
			.scaleExtent([0.5, 5]) // Ограничиваем уровни масштабирования
			.on('zoom', event => {
				svg.attr('transform', event.transform) // Применяем преобразование масштабирования
			})

		d3.select('#svg-container').call(zoom)
	}, []) // Пустой массив зависимостей, чтобы эффект выполнялся только один раз при монтировании

	return (
		<div id='svg-container' className='h-full overflow-auto'>
			<svg id='skillTree' className='w-full h-full'></svg>
		</div>
	)
}

export default SkillTree // Экспортируем компонент SkillTree
