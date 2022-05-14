import LinkR from 'next/link'
import { LinkProps } from '@type/Link'
import { Link as LinkS } from 'react-scroll'
import { FC } from 'react'
import styled from 'styled-components'

type NavProps = {
    scrollNav: boolean
    theme?: any
}
export const Nav = styled.nav`
    background: ${({ theme }: NavProps) => theme.colors.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0px;
    z-index: 10;
    opacity: ${({ scrollNav }: NavProps) => (scrollNav ? 1 : 0)};
    transition: all 0.3s ease;
    &.active {
        opacity: 1;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    padding: 0 35px;
`

export const NameTag = styled.div`
    font-family: 'HighSpirited';
    font-size: 3.5rem;
    text-align: center;
    height: 100%;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    margin-top: -0.5rem;
`
export const StyledNavLogo = styled.a`
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`

export const NavLogo: FC<LinkProps> = (props) => {
    const { href, children, onClick } = props
    return (
        <LinkR href={href} passHref>
            <StyledNavLogo onClick={onClick}>{children}</StyledNavLogo>
        </LinkR>
    )
}

export const MobileIcon = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li``

export const NavLinks = styled(LinkS)`
    height: 100%;
    min-width: 130px;
    letter-spacing: 0.3rem;
    font-size: 0.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 1.4rem 1rem; */
    text-transform: uppercase;
    font-family: 'Zen Kaku Gothic New';

    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
        font-weight: bold;
        transform: translate(0px, -5px);
    }
    &.active {
        border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const StyledNavBtnLink = styled.div`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.text};
    white-space: nowrap;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    font-family: 'Zen Kaku Gothic New';
    outline: none;
    letter-spacing: 0.1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;

    &:hover {
        background: ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.white};
    }
`

type NavBtnLinkProps = LinkProps & { children?: React.ReactNode }
export const NavBtnLink: FC<NavBtnLinkProps> = (props) => {
    const { href, children } = props
    return (
        <LinkR href={href} passHref>
            <StyledNavBtnLink>{children}</StyledNavBtnLink>
        </LinkR>
    )
}
