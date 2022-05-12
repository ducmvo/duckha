import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import Sidebar from '@components/Sidebar'
import { useToggle } from '@hooks'
import { sectionHome, sectionRSVP } from '@libs/data'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { LayoutContainer, LayoutContent } from './LayoutElements'
type LayoutProps = {
    children: React.ReactNode
}

const Layout: FC<LayoutProps> = (props) => {
    const { children } = props
    const router = useRouter()
    let section: string[] = []
    if (router.pathname === '/') section = sectionHome
    if (router.pathname === '/rsvp') section = sectionRSVP
    const [isOpen, setIsOpen] = useToggle(false)
    const toggleSideBar = () => setIsOpen(!isOpen)
    return (
        <LayoutContainer>
            <LayoutContent>
                <Sidebar
                    isOpen={isOpen}
                    toggleSideBar={toggleSideBar}
                    section={section}
                />
                <Navbar toggleSideBar={toggleSideBar} section={section} />
                {children}
                <Footer />
            </LayoutContent>
        </LayoutContainer>
    )
}

export default Layout
