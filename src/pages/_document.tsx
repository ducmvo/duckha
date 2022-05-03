import React from 'react'
import Document, {
	Html,
	DocumentContext,
	Head,
	Main,
	NextScript,
	DocumentInitialProps
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Dosis:wght@400;700&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="preload"
						href="/assets/fonts/Amelaryas.otf"
						as="font"
						type="font/otf"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/assets/fonts/DiamondFlowers.ttf"
						as="font"
						type="font/ttf"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/assets/fonts/URWGothic.ttf"
						as="font"
						type="font/ttf"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/assets/fonts/HighSpirited.ttf"
						as="font"
						type="font/ttf"
						crossOrigin="anonymous"
					/>

					<link
						rel="preload"
						href="/assets/fonts/BemboStd.otf"
						as="font"
						type="font/otf"
						crossOrigin="anonymous"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

MyDocument.getInitialProps = async (
	ctx: DocumentContext
): Promise<DocumentInitialProps> => {
	const sheet = new ServerStyleSheet()
	const originalRenderPage = ctx.renderPage

	try {
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) =>
					sheet.collectStyles(<App {...props} />)
			})

		const initialProps = await Document.getInitialProps(ctx)
		return {
			...initialProps,
			styles: [
				<>
					{initialProps.styles}
					{sheet.getStyleElement()}
				</>
			]
		}
	} finally {
		sheet.seal()
	}
}

export default MyDocument
