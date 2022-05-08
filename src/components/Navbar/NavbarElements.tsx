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
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    opacity: ${({ scrollNav }: NavProps) => (scrollNav ? 1 : 0)};
    transition: all 0.5s ease;
    &.active {
        opacity: 1;
    }

    @media screen and (max-width: 960px) {
        transition: all 0.8s ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const StyledNavLogo = styled.a`
    color: ${({ theme }) => theme.colors.text};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    margin-left: 24px;
    padding-top: 10px;
    text-decoration: none;
    @media screen and (max-width: 468px) {
        margin-left: 10px;
        font-size: 2.5rem;
    }
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

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: 'URWGothic';
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    padding: 1.5rem 1rem 0.6rem 1rem;

    cursor: pointer;
    transition: all 0.2s ease-in;

    &.active {
        border-bottom: 1px solid ${(props) => props.theme.text};
    }
    &:hover {
        font-weight: bold;
        font-size: 1rem;
        transform: translate(0px, -5px);
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const StyledNavBtnLink = styled.a`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.text};

    white-space: nowrap;
    padding: 0.5rem 1.5rem;
    font-size: 16px;
    font-family: 'URWGothic';
    outline: none;
    letter-spacing: 0.1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
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

export const NameTag = styled.div`
    font-family: 'HighSpirited';
    padding-bottom: 15px;
`
