import type { NextPage } from 'next'
import Head from 'next/head'

import Hero from '@components/Hero'
import Story from '@components/Story'
import Navbar from '@components/Navbar'
import { useToggle } from '@hooks'
import Footer from '@components/Footer'
import Info from '@components/Info'
import CountDown from '@components/CountDown'
import { sectionID } from '@libs/data'
import Sidebar from '@components/Sidebar'

const Home: NextPage = () => {
    const [isOpen, setIsOpen] = useToggle(false)
    const toggleSideBar = () => setIsOpen(!isOpen)

    return (
        <>
            <Head>
                <title>Duc & Kha | Home</title>
            </Head>
            <Navbar toggleSideBar={toggleSideBar} />
            <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />
            <Hero />
            <CountDown />
            <Info id={sectionID[0]} />
            <Story id={sectionID[1]} />
            <Footer />
        </>
    )
}

export default Home
