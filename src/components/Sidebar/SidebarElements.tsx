import { LinkProps } from '@type/Link'
import LinkR from 'next/link'
import { FC } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'
import styled from 'styled-components'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;

    width: 100%;
    height: 100%;

    background: #141312fa;
    display: grid;

    align-items: center;

    top: 0;
    left: 0;

    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: ${({ theme }) => theme.colors.bg};
    background: transparent;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    /* color: white;
    background: transparent; */
    /* border: 1px solid red; */
    background: transparent;
`

export const SidebarMenu = styled.ul`
    background: inherit;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkS)`
    background: inherit;
    display: flex;
    align-items: center;

    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    color: white;
    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        transition: all 0.2s ease-in-out;
    }
`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: inherit;
`

const StyledSidebarRoute = styled.div`
    font-family: 'URWGothic';
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    padding: 0.5rem 3rem;
    border-radius: 50px;
    letter-spacing: 0.3rem;
    transition: all 0.2s ease-in;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.primary};
        color: white;
        transform: translate(0px, -3px);
        box-shadow: 2px 2px 15px gray;
    }
`

export const SidebarRoute: FC<LinkProps> = (props) => {
    const { href, children } = props
    return (
        <LinkR href={href} passHref>
            <StyledSidebarRoute>{children}</StyledSidebarRoute>
        </LinkR>
    )
}
