import React from 'react'
import Countdown from 'react-countdown'
import { BigDay } from '@libs/data'
import {
    CountDownWrapper,
    CountDownElement,
    CountDownLabel,
} from './CountDownElements'

import Section from '@components/Section'

const Completionist = () => <span>We did it!</span>
const renderer = ({ days, hours, minutes, completed }: any) => {
    if (completed) {
        // Render a completed state
        return <Completionist />
    } else {
        // Render a countdown
        return (
            <CountDownWrapper suppressHydrationWarning>
                <CountDownElement> {days}</CountDownElement>
                <CountDownLabel>{days > 1 ? 'DAYS' : 'DAY'}</CountDownLabel>
                <CountDownElement>{hours}</CountDownElement>
                <CountDownLabel>{hours > 1 ? 'HOURS' : 'HOUR'}</CountDownLabel>
                <CountDownElement>{minutes}</CountDownElement>
                <CountDownLabel>{minutes > 1 ? 'MINS' : 'MIN'}</CountDownLabel>
            </CountDownWrapper>
        )
    }
}

const CountDown = () => {
    return (
        <Section skew>
            <Countdown
                date={BigDay}
                intervalDelay={0}
                precision={3}
                renderer={renderer}
            />
        </Section>
    )
}

export default CountDown
