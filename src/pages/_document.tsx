import { Fragment } from 'react'
import Document, {
    Html,
    DocumentContext,
    Head,
    Main,
    NextScript,
    DocumentInitialProps,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72&family=Cormorant+Garamond:wght@300;400;500;600&display=swap"
                        rel="stylesheet"
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
                    sheet.collectStyles(<App {...props} />),
            })

        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            styles: [
                <Fragment key="styles">
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </Fragment>,
            ],
        }
    } finally {
        sheet.seal()
    }
}

export default MyDocument
