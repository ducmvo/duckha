import React, { FC } from 'react'
import styled from 'styled-components'
import LinkR from 'next/link'
import { LinkProps } from '@type/Link'

type HeroProps = {
    scroll?: boolean
}

export const Section = styled.div<HeroProps>`
    font-family: 'Zen Kaku Gothic New';
    padding: 2rem;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.2rem;
    color: ${({ theme }) => theme.colors.text};
`

export const Names = styled.div<HeroProps>`
    font-family: 'HighSpirited';
    font-size: clamp(0.5rem, 19vw, 8rem);
    margin-bottom: 1rem;
`
export const BigDate = styled.div<HeroProps>`
    font-family: inherit;
    font-size: clamp(0.5rem, 5vw, 1rem);
    letter-spacing: 0.1rem;
    text-transform: uppercase;
`
export const Location = styled.div<HeroProps>`
    font-family: inherit;
    font-size: clamp(0.5rem, 5vw, 1rem);
    letter-spacing: 0.1rem;
    margin-bottom: 2rem;
`

export const StyledRSVPButton = styled.div<HeroProps>`
    font-family: inherit;
    margin: 0.5rem 0;
    text-transform: uppercase;
    text-align: center;
    font-size: clamp(0.5rem, 5vw, 1.5rem);
    letter-spacing: 0.2rem;
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.text};
    box-shadow: 2px 3px 6px #b0b0b0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.white};
        box-shadow: 5px 5px 15px #808080;
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
