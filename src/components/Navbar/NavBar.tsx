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
import CountDown from '@components/CountDown'

type NavbarProps = {
    toggleSideBar: () => void
    display?: boolean
}
const Navbar: FC<NavbarProps> = (props) => {
    const { toggleSideBar, display = false } = props
    const [scrollNav, setScrollNav] = useState(false)

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
                    <NameTag>D&K</NameTag>
                    <CountDown />
                </NavLogo>

                <MobileIcon onClick={toggleSideBar}>
                    <FaBars />
                </MobileIcon>

                {!display && (
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                            >
                                INFO
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks
                                to="discover"
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                            >
                                STORY
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks
                                to="services"
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                            >
                                PHOTOS
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks
                                to="signup"
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                            >
                                CONTACT
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                )}
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
