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
				<CloseIcon onClick={toggleSideBar} />
			</Icon>

			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about" onClick={toggleSideBar}>
						Ceremony
					</SidebarLink>

					<SidebarLink to="discover" onClick={toggleSideBar}>
						Story
					</SidebarLink>

					<SidebarLink to="services" onClick={toggleSideBar}>
						Photos
					</SidebarLink>

					<SidebarLink to="signup" onClick={toggleSideBar}>
						Contact
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
