import React, { FC } from 'react'
import styled from 'styled-components'
import LinkR from 'next/link'
import { LinkProps } from '@type/Link'

type HeroProps = {
    scroll?: boolean
}

export const Section = styled.div<HeroProps>`
    font-family: 'URWGothic';
    padding: 2rem;
    height: 800px;
    border-bottom: 1px solid black;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    gap: 0.2rem;
    transition: all 0.2s ease-in;
    color: ${({ theme }) => theme.colors.text};
    opacity: ${({ scroll }) => (scroll ? 0 : 1)};
`

export const Names = styled.div<HeroProps>`
    font-family: 'HighSpirited';
    font-size: 6rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 468px) {
        font-size: 3rem;
    }
`
export const BigDate = styled.div<HeroProps>`
    font-family: inherit;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    transition: all 0.2s ease;
    @media screen and (max-width: 468px) {
        font-size: 0.8rem;
    }
`
export const Location = styled.div<HeroProps>`
    font-family: inherit;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    @media screen and (max-width: 468px) {
        font-size: 0.8rem;
    }
`

export const StyledRSVPButton = styled.button<HeroProps>`
    font-family: inherit;
    margin: 0.5rem 0;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    width: 100px;
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.text};
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.white};
    }

    @media screen and (max-width: 468px) {
        font-size: 0.8rem;
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
