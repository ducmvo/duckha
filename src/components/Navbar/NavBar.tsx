import React, { FC, useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {
    MobileIcon,
    NameTag,
    Nav,
    NavbarContainer,
    NavBtn,
    NavBtnLink,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu,
} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'
import { sectionHome, nameTag } from '@libs/data'
import { useRouter } from 'next/router'

type NavbarProps = {
    toggleSideBar: () => void
    display?: boolean
    section?: string[]
}
const Navbar: FC<NavbarProps> = (props) => {
    const { toggleSideBar, section = [] } = props
    const [scrollNav, setScrollNav] = useState(true)
    const router = useRouter()

    let display = false
    if (router.pathname !== '/') display = true

    const changeNav = () => setScrollNav(window.scrollY >= 200 ? true : false)

    const toggleHome = () => scroll.scrollToTop()

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const nav = (
        <Nav
            scrollNav={display || scrollNav}
            className={(scrollNav && 'active') || ''}
        >
            <NavbarContainer>
                <NavLogo href="/" onClick={toggleHome}>
                    <NameTag>{nameTag}</NameTag>
                </NavLogo>

                <MobileIcon onClick={toggleSideBar}>
                    <FaBars />
                </MobileIcon>

                <NavMenu>
                    {section.map((s, i) => (
                        <NavLinks
                            key={i}
                            to={s}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                        >
                            {s}
                        </NavLinks>
                    ))}
                </NavMenu>

                <NavBtn>
                    <NavBtnLink href="/rsvp">RSVP</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    )
    return (
        <IconContext.Provider value={{ color: '#000' }}>
            {nav}
        </IconContext.Provider>
    )
}

export default Navbar
