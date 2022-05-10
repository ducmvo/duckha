import styled from 'styled-components'
import LinkR from 'next/link'
import { Link as LinkS } from 'react-scroll'
import { LinkProps } from '@type/Link'
import { FC } from 'react'

export const StyledButton = styled.div`
    font-family: inherit;
    margin: 0.5rem 0;
    text-transform: uppercase;
    text-align: center;
    font-size: clamp(0.5rem, 5vw, 1.5rem);
    letter-spacing: 0.2rem;
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.text};
    box-shadow: 2px 3px 6px #b0b0b0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.white};
        box-shadow: 5px 5px 15px #808080;
    }
`

import { ButtonProps } from './Button'

export const Button: FC<ButtonProps & LinkProps> = (props) => {
    const { src, href, children, onClick, style } = props
    if (src)
        return (
            <LinkS to={src}>
                <StyledButton onClick={onClick}>{children}</StyledButton>
            </LinkS>
        )
    return (
        <LinkR href={href || ''} passHref>
            <StyledButton onClick={onClick} style={style}>
                {children}
            </StyledButton>
        </LinkR>
    )
}
