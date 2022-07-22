import CountDown from '@components/CountDown'
import Hero from '@components/Hero'
import Info from '@components/Info'
import Section from '@components/Section'
import Story from '@components/Story'
import { names, sectionHome } from '@libs/data'
import type { NextPage } from 'next'
import Head from 'next/head'

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>{names} | Home</title>
            </Head>
            <Hero />
            <CountDown />
            {/* <Info id={sectionHome[0]} /> */}
            <Story id={sectionHome[1]} />
        </>
    )
}

export default HomePage
