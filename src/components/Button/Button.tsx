import { LinkProps } from '@type/Link'
import React, { CSSProperties, FC } from 'react'
import { Button as LinkedButton } from './ButtonElements'
export type ButtonProps = {
    href?: string
    src?: string
    children: React.ReactNode
    as?: string
    onClick?: React.MouseEventHandler
    style?: CSSProperties | undefined
}
const Button: FC<ButtonProps> = (props) => {
    const { children, href, ...rest } = props
    return (
        <LinkedButton href={href || ''} {...rest}>
            {children}
        </LinkedButton>
    )
}

export default Button
