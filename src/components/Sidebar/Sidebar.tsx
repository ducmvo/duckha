import React, { FC } from 'react'
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarLink,
	SidebarMenu,
	SidebarWrapper,
	SideBtnWrap,
	SidebarRoute
} from './SidebarElements'

type SidebarProps = {
	toggleSideBar: () => void
	isOpen: boolean
}
const Sidebar: FC<SidebarProps> = (props) => {
	const { toggleSideBar, isOpen } = props
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggleSideBar}>
			<Icon onClick={toggleSideBar}>
				<CloseIcon />
			</Icon>

			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about" onClick={toggleSideBar}>
						About
					</SidebarLink>

					<SidebarLink to="discover" onClick={toggleSideBar}>
						Discover
					</SidebarLink>

					<SidebarLink to="services" onClick={toggleSideBar}>
						Services
					</SidebarLink>

					<SidebarLink to="signup" onClick={toggleSideBar}>
						Sign Up
					</SidebarLink>
				</SidebarMenu>

				<SideBtnWrap>
					<SidebarRoute href="/rsvp">RSVP</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	)
}

export default Sidebar
