import RSVP from '@components/RSVP'
import ScrollToTop from '@components/Scroll/ScrollToTop'
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
            <RSVP />
        </>
    )
}

export default RSVPPage
