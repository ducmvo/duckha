import React from 'react'
import Countdown from 'react-countdown'
import { BigDay } from '@libs/data'
import styled from 'styled-components'
const Completionist = () => <span>We did it!</span>
const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
        // Render a completed state
        return <Completionist />
    } else {
        // Render a countdown
        return (
            <div>
                <CountDownWrapper suppressHydrationWarning>
                    {days} days | {hours}.{minutes}.{seconds}
                </CountDownWrapper>
                <span suppressHydrationWarning></span>
            </div>
        )
    }
}
const CountDown = () => {
    return (
        <Countdown
            date={BigDay}
            intervalDelay={0}
            precision={3}
            renderer={renderer}
        />
    )
}

export default CountDown

const CountDownWrapper = styled.div`
    color: ${({ theme }) => theme.colors.text};
    margin-top: 5px;
    background: transparent;
    font-family: 'URWGothic';
    font-size: 0.8rem;
    transform: translate(-5px, -15px);
`
