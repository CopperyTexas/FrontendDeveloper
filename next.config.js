/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'export',
	assetPrefix:
		process.env.NODE_ENV === 'production' ? '/frontenddeveloper/' : '',
	basePath: process.env.NODE_ENV === 'production' ? '/frontenddeveloper' : '',
	trailingSlash: true,
	webpack(config, options) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})

		return config
	},
}

module.exports = nextConfig
