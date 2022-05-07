import React, { useEffect, useState } from 'react'
import { BigDay, months, days } from '@libs/data'
import { BigDate, Names, RSVPButton, Section, Location } from './HeroElements'

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
            <Names>Duc & Kha</Names>
            <BigDate>
                {day} {month} {date}, {year}
            </BigDate>
            <Location>Hue, Vietnam</Location>
            <RSVPButton href="/rsvp">RSVP</RSVPButton>
        </Section>
    )
}

export default Hero
