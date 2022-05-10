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
import { sectionID, nameTag } from '@libs/data'

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
                    <NameTag>{nameTag}</NameTag>
                </NavLogo>

                <MobileIcon onClick={toggleSideBar}>
                    <FaBars />
                </MobileIcon>

                {!display && (
                    <NavMenu>
                        <NavLinks
                            to={sectionID[0]}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                        >
                            {sectionID[0]}
                        </NavLinks>

                        <NavLinks
                            to={sectionID[1]}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                        >
                            {sectionID[1]}
                        </NavLinks>

                        <NavLinks
                            to={sectionID[2]}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                        >
                            {sectionID[2]}
                        </NavLinks>

                        <NavLinks
                            to={sectionID[3]}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                        >
                            {sectionID[3]}
                        </NavLinks>
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
