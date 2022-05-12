import Render from '@components/HOC/Render'
import PleaseReply from '@components/RSVP'
import ScrollToTop from '@components/Scroll/ScrollToTop'
import Head from 'next/head'
import React from 'react'

const RSVP = () => {
    return (
        <>
            <Head>
                <title>Duc & Kha | RSVP</title>
            </Head>
            <ScrollToTop />
            <Render client>
                <PleaseReply />
            </Render>
        </>
    )
}

export default RSVP
