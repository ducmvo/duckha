import RSVPButton from '@components/Button'
import { BigDay, location, names } from '@libs/data'
import { getTextFromDate } from '@libs/utils'
import React, { useEffect, useState } from 'react'
import { BigDate, Location, Names, Section } from './HeroElements'

const Hero = () => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => setScrollNav(window.scrollY >= 200 ? true : false)

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const [day, date, month, year] = getTextFromDate(BigDay)

    return (
        <Section scroll={scrollNav}>
            <Names>{names}</Names>
            <BigDate>
                {month} {date}, {year}
            </BigDate>
            <Location>{location}</Location>
            <RSVPButton href="/rsvp">RSVP</RSVPButton>
        </Section>
    )
}

export default Hero
