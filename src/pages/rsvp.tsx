import Head from 'next/head'
import React from 'react'

import ScrollToTop from '@components/Scroll/ScrollToTop'
import Navbar from '@components/Navbar'
import useToggle from '@hooks/useToggle'
import Footer from '@components/Footer'

import dynamic from 'next/dynamic'
const PleaseReply = dynamic(() => import('@components/RSVP'), {
    ssr: false,
})

const RSVP = () => {
    const [isOpen, setIsOpen] = useToggle(false)
    const toggleSideBar = () => setIsOpen(!isOpen)
    return (
        <>
            <Head>
                <title>Duc & Kha | RSVP</title>
            </Head>
            <Navbar toggleSideBar={toggleSideBar} display={true} />
            <ScrollToTop />
            <PleaseReply />
            <Footer />
        </>
    )
}

export default RSVP
