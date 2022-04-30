import React from 'react'
import Countdown from 'react-countdown'
const Completionist = () => <span>We did it!</span>
const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
	if (completed) {
		// Render a completed state
		return <Completionist />
	} else {
		// Render a countdown
		return (
			<>
				<div suppressHydrationWarning style={{ fontSize: '2rem' }}>
					{days} DAYS
				</div>
				<span suppressHydrationWarning>
					{hours} HOURS | {minutes} MINS | {seconds} SECS
				</span>
			</>
		)
	}
}
const CountDown = () => {
	return (
		<Countdown
			date={'2022-08-25T18:00:00'}
			intervalDelay={0}
			precision={3}
			renderer={renderer}
		/>
	)
}

export default CountDown
