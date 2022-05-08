import Head from 'next/head'
import React from 'react'
import PleaseReply from '@components/RSVP'
import ScrollToTop from '@components/Scroll/ScrollToTop'
import Navbar from '@components/Navbar'
import useToggle from '@hooks/useToggle'

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
        </>
    )
}

export default RSVP
