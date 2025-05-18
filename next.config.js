const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const nextConfig = {
	output: 'export',
	webpack(config, { isServer }) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})

		if (!isServer) {
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
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'your-image-domain.com',
				port: '',
				pathname: '/**',
			},
		],
	},
	compress: true, // Включение сжатия ответа сервера
	reactStrictMode: true,
}

module.exports = nextConfig
