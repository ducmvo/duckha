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
            <Section>
                <div style={{ textAlign: 'center' }}>
                    Thank you for visiting!
                    <br />
                    <br />
                    We are building our website,
                    <br />
                    Please come back for more info...
                </div>
            </Section>
            {/* <Info id={sectionHome[0]} /> */}
            {/* <Story id={sectionHome[1]} /> */}
        </>
    )
}

export default HomePage
