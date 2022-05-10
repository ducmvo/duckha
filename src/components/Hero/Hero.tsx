import React, { useEffect, useState } from 'react'
import { BigDay, months, days, names, location } from '@libs/data'
import { BigDate, Names, Section, Location } from './HeroElements'
import RSVPButton from '@components/Button'

const Hero = () => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => setScrollNav(window.scrollY >= 200 ? true : false)

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const day = days[BigDay.getDay()]
    const date = BigDay.getDate()
    const month = months[BigDay.getMonth()]
    const year = BigDay.getFullYear()

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
