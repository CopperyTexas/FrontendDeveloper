/**
 * Компонент Layout
 * Этот компонент оборачивает своих дочерних элементов в стилизованный div элемент.
 * Он предоставляет макет на всю ширину и высоту с отступами и светлым фоном.
 */
const Layout = ({ children, className = '' }) => {
	return (
		<div
			className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-2 ${className}`}
		>
			{children}
		</div>
	)
}

export default Layout
