import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'

const App = (props: AppProps) => {
	const { Component, pageProps } = props
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App
