import type { NextPage } from 'next'
import Head from 'next/head'

import Hero from '@components/Hero'
import Story from '@components/Story'
import Navbar from '@components/Navbar'
import { useToggle } from '@hooks'
import Footer from '@components/Footer'
import Info from '@components/Info'

const Home: NextPage = () => {
    const [isOpen, setIsOpen] = useToggle(false)
    const toggleSideBar = () => setIsOpen(!isOpen)

    return (
        <>
            <Head>
                <title>Duc & Kha | Home</title>
            </Head>
            <Navbar toggleSideBar={toggleSideBar} />
            <Hero />
            <Info />
            <Footer />
        </>
    )
}

export default Home
