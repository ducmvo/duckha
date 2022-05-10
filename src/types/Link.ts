import { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'

export type LinkProps = NextLinkProps & {
    children?: React.ReactNode
    onClick?: React.MouseEventHandler
    src?: string
}
