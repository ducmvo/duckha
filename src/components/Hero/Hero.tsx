import React, { FC, useEffect, useState } from 'react'
import { BigDay, months, days } from '@libs/data'
import styled from 'styled-components'
import LinkR from 'next/link'
import { LinkProps } from '@type/Link'

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
        <Section>
            <Names scroll={scrollNav}>Duc & Kha</Names>
            <BigDate>
                {day} {month} {date}, {year}
            </BigDate>
            <Location>Hue, Vietnam</Location>
            <RSVPButton href="/rsvp" scroll={scrollNav}>
                RSVP
            </RSVPButton>
        </Section>
    )
}

export default Hero

type HeroProps = {
    scroll?: boolean
}

export const Section = styled.div`
    padding: 3rem;
    height: 800px;
    border-bottom: 1px solid black;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    gap: 0.2rem;
    color: ${({ theme }) => theme.colors.text};
`

export const Names = styled.div<HeroProps>`
    font-family: 'HighSpirited';
    font-size: ${({ scroll }) => (scroll ? `1.5rem` : `5rem`)};
    opacity: ${({ scroll }) => (scroll ? 0 : 1)};

    transform: ${({ scroll }) =>
        scroll ? `translate(0px, -50px)` : `translate(0px, 0px)`};
    transition: all 0.5s ease;
    @media screen and (max-width: 468px) {
        font-size: 3rem;
        transform: ${({ scroll }) =>
            scroll ? `translate(0px, -50px)` : `translate(0px, 0px)`};
    }
`
export const BigDate = styled.div`
    /* text-transform: uppercase; */
    font-family: 'URWGothic';
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    @media screen and (max-width: 468px) {
        font-size: 0.6rem;
    }
`
export const Location = styled.div`
    /* text-transform: uppercase; */
    font-family: 'URWGothic';
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    @media screen and (max-width: 468px) {
        font-size: 0.6rem;
    }
`

export const StyledRSVPButton = styled.button<HeroProps>`
    margin: 0.5rem 0;
    text-transform: uppercase;
    font-family: 'URWGothic';
    font-size: 1rem;
    letter-spacing: 0.1rem;
    width: 100px;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease-in-out;
    transition: transform 0.5s ease, opacity 0.5s ease;
    border: 1px solid ${({ theme }) => theme.colors.text};
    cursor: pointer;
    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.white};
    }

    opacity: ${({ scroll }) => (scroll ? 0 : 1)};

    transform: ${({ scroll }) =>
        scroll ? `translate(800px, -80px)` : `translate(0px, 0px)`};

    @media screen and (max-width: 468px) {
        font-size: 0.6rem;
        transform: none;
    }
`

type RSVPButtonLinkProps = LinkProps & {
    children?: React.ReactNode
} & HeroProps
export const RSVPButton: FC<RSVPButtonLinkProps> = (props) => {
    const { href, children, scroll } = props
    return (
        <LinkR href={href} passHref>
            <StyledRSVPButton scroll={scroll}>{children}</StyledRSVPButton>
        </LinkR>
    )
}
