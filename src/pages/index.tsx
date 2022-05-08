import type { NextPage } from 'next'
import Head from 'next/head'

import Hero from '@components/Hero'
import Story from '@components/Story'
import Navbar from '@components/Navbar'
import { useToggle } from '@hooks'
import Footer from '@components/Footer'

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
            {/* <div style={{ height: '1600px' }} /> */}
            <Footer />
        </>
    )
}

export default Home
