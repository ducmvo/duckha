import type { NextPage } from 'next'
import Head from 'next/head'

import Hero from '@components/Hero'
import Story from '@components/Story'
import Navbar from '@components/Navbar'
import { useToggle } from '@hooks'
import Footer from '@components/Footer'
import Info from '@components/Info'
import CountDown from '@components/CountDown'

const Home: NextPage = () => {
    const [isOpen, setIsOpen] = useToggle(false)
    const toggleSideBar = () => setIsOpen(!isOpen)

    return (
        <>
            <Head>
                <title>Duc & Kha</title>
            </Head>
            <Navbar toggleSideBar={toggleSideBar} />
            <Hero />
            <CountDown />
            <Info id="info" />
            <Story id="story" />
            <Footer />
        </>
    )
}

export default Home
