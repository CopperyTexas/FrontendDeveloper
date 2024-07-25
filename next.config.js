/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
	webpack(config, { isServer }) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})

		if (!isServer) {
			const TerserPlugin = require('terser-webpack-plugin')
			const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

			config.optimization.minimizer.push(
				new TerserPlugin({
					terserOptions: {
						compress: {
							drop_console: true,
						},
					},
				}),
				new CssMinimizerPlugin({
					minimizerOptions: {
						preset: [
							'default',
							{
								discardComments: { removeAll: true },
							},
						],
					},
				})
			)
		}

		return config
	},
	images: {
		domains: ['your-image-domain.com'], // Добавьте домены, с которых вы загружаете изображения
	},
	compress: true, // Включение сжатия ответа сервера
	reactStrictMode: true,
}

module.exports = withBundleAnalyzer(nextConfig)
