import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'
import GlobalStyle from '@styles/global'
import Layout from '@components/Layout'

import { useEffect } from 'react'

import { useRouter } from 'next/router'
import { pageview } from '@libs/gtag'
import GoogleAnalytics from '@components/Analytics'
import AuthProvider from '@components/HOC/AuthContext'

const App = (props: AppProps) => {
    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url: string) => {
            pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        router.events.on('hashChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
            router.events.off('hashChangeComplete', handleRouteChange)
        }
    }, [router.events])

    const { Component, pageProps } = props
    return (
        <>
            <GoogleAnalytics />
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <AuthProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </AuthProvider>
            </ThemeProvider>
        </>
    )
}

export default App
