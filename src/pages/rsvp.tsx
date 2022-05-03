import Head from 'next/head'
import React from 'react'
import PleaseReply from '@components/RSVP'
import ScrollToTop from '@components/Scroll/ScrollToTop'

const RSVP = () => {
	return (
		<>
			<Head>
				<title>Duc & Kha | RSVP</title>
			</Head>
			<ScrollToTop />
			<PleaseReply />
		</>
	)
}

export default RSVP
