import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import '../styles/globals.css'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-mont',
})

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main
				className={`${montserrat.variable} font-mont bg-light w-full flex flex-col`}
			>
				<NavBar />
				<div className='flex-grow flex flex-col'>
					<Component {...pageProps} />
				</div>
				<Footer />
			</main>
		</>
	)
}
