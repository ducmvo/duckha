import LinkR from 'next/link'
import { LinkProps } from '@type/Link'
import { Link as LinkS } from 'react-scroll'
import { FC } from 'react'
import styled from 'styled-components'

type NavProps = {
	scrollNav: boolean
	theme: any
}
export const Nav = styled.nav`
	background: ${({ scrollNav, theme }: NavProps) =>
		scrollNav ? '#000' : theme.colors.bg};
	height: 80px;
	margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;
	transition: all 0.8s ease;

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
	color: ${({ theme }) => theme.colors.primary || '#000'};
	justify-self: flex-start;
	cursor: pointer;
	font-size: 0.8rem;
	font-family: 'Amelaryas';
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;
	text-transform: uppercase;
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
`
export const NavMenu = styled.div`
	color: ${({ theme, scrollNav }: NavProps) =>
		scrollNav ? theme.colors.primary : '#000'};
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
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		border-bottom: 3px solid ${(props) => props.theme.main};
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
	border-radius: 50px;
	background: ${({ theme }) => theme.colors.main};
	white-space: nowrap;
	padding: 10px 22px;
	color: white;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: transparent;
		border: 1px solid ${({ theme }) => theme.colors.main};
		color: ${({ theme }) => theme.colors.main};
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
