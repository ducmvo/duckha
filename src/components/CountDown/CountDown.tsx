import Section from '@components/Section'
import { BigDay } from '@libs/data'
import dynamic from 'next/dynamic'
import {
    CountDownElement,
    CountDownLabel,
    CountDownWrapper,
} from './CountDownElements'

const Countdown = dynamic(() => import('react-countdown'), {
    ssr: false,
})

const MILI_SEC_PER_DAY = 1000 * 60 * 60 * 24

const anniverary = Math.ceil((Date.now() - BigDay.getTime()) / MILI_SEC_PER_DAY)

const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
        return (
            <CountDownWrapper>
                <CountDownLabel>{"IT'S BEEN"}</CountDownLabel>
                <CountDownElement>{anniverary}</CountDownElement>
                <CountDownLabel>
                    {anniverary > 1 ? 'DAYS' : 'DAY'}
                </CountDownLabel>
            </CountDownWrapper>
        )
    }
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

const CountDown = () => {
    return (
        <Section skew>
            <Countdown
                date={BigDay}
                intervalDelay={1000}
                precision={1000}
                renderer={renderer}
            />
        </Section>
    )
}

export default CountDown
