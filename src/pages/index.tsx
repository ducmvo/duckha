import type { NextPage } from 'next'
import Head from 'next/head'

import Hero from '@components/Hero'
import Story from '@components/Story'
import Navbar from '@components/Navbar'
import { useToggle } from '@hooks'
import Footer from '@components/Footer'
import Info from '@components/Info'
import CountDown from '@components/CountDown'
import { sectionHome } from '@libs/data'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Duc & Kha | Home</title>
            </Head>
            <Hero />
            <CountDown />
            <Info id={sectionHome[0]} />
            <Story id={sectionHome[1]} />
        </>
    )
}

export default Home
