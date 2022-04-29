import React, { FC, useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {
	MobileIcon,
	Nav,
	NavbarContainer,
	NavBtn,
	NavBtnLink,
	NavItem,
	NavLinks,
	NavLogo,
	NavMenu
} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'

type NavbarProps = {
	toggleSideBar: () => void
}
const Navbar: FC<NavbarProps> = (props) => {
	const { toggleSideBar } = props
	const [scrollNav, setScrollNav] = useState(false)

	const changeNav = () => setScrollNav(window.scrollY >= 80 ? true : false)

	const toggleHome = () => scroll.scrollToTop()
	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	}, [])

	const nav = (
		<Nav scrollNav={scrollNav}>
			<NavbarContainer>
				<NavLogo href="/" onClick={toggleHome}>
					Duc & Kha
				</NavLogo>

				<MobileIcon onClick={toggleSideBar}>
					<FaBars />
				</MobileIcon>

				<NavMenu scrollNav={scrollNav}>
					<NavItem>
						<NavLinks
							to="about"
							smooth={true}
							duration={500}
							spy={true}
							offset={-80}
						>
							CEREMONY
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
							LOCATION
						</NavLinks>
					</NavItem>
				</NavMenu>

				<NavBtn>
					<NavBtnLink href="/rsvp">RSVP</NavBtnLink>
				</NavBtn>
			</NavbarContainer>
		</Nav>
	)
	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			{nav}
		</IconContext.Provider>
	)
}

export default Navbar
