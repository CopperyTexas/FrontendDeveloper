/**
 * Компонент Layout
 * Этот компонент оборачивает своих дочерних элементов в стилизованный div элемент.
 * Он предоставляет макет на всю ширину и высоту с отступами и светлым фоном.
 *
 * @param {Object} props - Свойства, переданные компоненту.
 * @param {React.ReactNode} props.children - Дочерние компоненты, которые будут отображаться внутри макета.
 * @param {string} [props.className=''] - Дополнительные классы для пользовательских стилей.
 */
const Layout = ({ children, className = '' }) => {
	return (
		<div
			className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark ${className}`}
		>
			{children}
		</div>
	)
}

export default Layout
