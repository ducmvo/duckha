import RSVP from '@components/RSVP'
import ScrollToTop from '@components/Scroll/ScrollToTop'
import Section from '@components/Section'
import { names } from '@libs/data'
import Head from 'next/head'
import React from 'react'

const RSVPPage = () => {
    return (
        <>
            <Head>
                <title>{names} | RSVP</title>
            </Head>
            <ScrollToTop />
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
            {/* <RSVP /> */}
        </>
    )
}

export default RSVPPage
