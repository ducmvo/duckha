import { useSignOut, useUser } from '@hooks/useAuth'
import { nameTag } from '@libs/data'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import {
    MobileIcon,
    NameTag,
    Nav,
    NavbarContainer,
    NavBtn,
    NavBtnLink,
    NavLinks,
    NavLogo,
    NavMenu,
} from './NavbarElements'

type NavbarProps = {
    toggleSideBar: () => void
    display?: boolean
    section?: string[]
}
const Navbar: FC<NavbarProps> = (props) => {
    const { toggleSideBar, section = [] } = props
    const [scrollNav, setScrollNav] = useState(true)
    const [showMenuItems, setShowMenuItems] = useState(true)
    const router = useRouter()
    const user = useUser()
    const signOut = useSignOut()

    let display = false
    if (router.pathname !== '/') display = true
    useEffect(() => {
        if (router.pathname !== '/rsvp') setShowMenuItems(true)
        else {
            setShowMenuItems(!!user)
        }
    }, [user, router.pathname])

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
                    {showMenuItems &&
                        section.map((s, i) => (
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
                    {!user ? (
                        <NavBtnLink href="/rsvp">RSVP</NavBtnLink>
                    ) : (
                        <div onClick={signOut}>
                            <NavBtnLink href="/">LOGOUT</NavBtnLink>
                        </div>
                    )}
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
