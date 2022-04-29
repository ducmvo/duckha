import Head from 'next/head'
import React from 'react'
import SignIn from '@components/RSVP'
import ScrollToTop from '@components/Scroll/ScrollToTop'

const RSVP = () => {
	return (
		<>
			<Head>
				<title>RSVP</title>
			</Head>
			<ScrollToTop />
			<SignIn />
		</>
	)
}

export default RSVP
