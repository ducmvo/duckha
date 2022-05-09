import React from 'react'
import Countdown from 'react-countdown'
import { BigDay } from '@libs/data'
import styled from 'styled-components'
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
    /* margin-top: 5px; */
    background-color: inherit;
    /* transform: translate(-5px, -15px); */
    min-width: 375px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    /* font-size: 1rem; */
    @media (max-width: 700px) {
        flex-direction: column;
    }
`
const CountDownElement = styled.div`
    /* font-family: 'URWGothic'; */
    background-color: inherit;
    font-size: 2.5rem;
    letter-spacing: 0.5rem;
    text-align: center;
`

const CountDownLabel = styled(CountDownElement)`
    font-family: 'URWGothic';
    background-color: inherit;
    font-size: 1rem;
    letter-spacing: 0.2rem;
    padding-top: 18px;
    padding-right: 2rem;
    @media (max-width: 700px) {
        padding: 0;
    }
`
