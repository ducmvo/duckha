import React, { FC } from 'react'
import { LayoutContainer, LayoutContent } from './LayoutElements'
type LayoutProps = {
    children: React.ReactNode
}
const Layout: FC<LayoutProps> = (props) => {
    const { children } = props
    return (
        <LayoutContainer>
            <LayoutContent>{children}</LayoutContent>
        </LayoutContainer>
    )
}

export default Layout
