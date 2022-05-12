import { sectionHome } from '@libs/data'
import React, { FC } from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarLink,
    SidebarMenu,
    SidebarWrapper,
    SideBtnWrap,
    SidebarRoute,
} from './SidebarElements'

type SidebarProps = {
    toggleSideBar: () => void
    isOpen: boolean
    section?: string[]
}
const Sidebar: FC<SidebarProps> = (props) => {
    const { toggleSideBar, isOpen, section = [] } = props
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggleSideBar}>
            <Icon onClick={toggleSideBar}>
                <CloseIcon onClick={toggleSideBar} />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    {section.map((s, i) => (
                        <SidebarLink
                            key={i}
                            to={s}
                            smooth={true}
                            duration={800}
                            spy={true}
                            offset={-80}
                            onClick={toggleSideBar}
                        >
                            {s}
                        </SidebarLink>
                    ))}
                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute href="/rsvp">RSVP</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
