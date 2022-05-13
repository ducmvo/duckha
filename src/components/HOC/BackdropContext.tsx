// https://github.com/lyulka/use-backdrop/blob/master/src/index.js
import React, { createContext, useState, useContext, FC } from 'react'
import styled from 'styled-components'

type IBackdrop = {
    closeBackdrop: () => void
    displayBackdrop: (Component: React.ReactElement) => void
}

const initialValues = {} as IBackdrop

export const BackdropContext = createContext<IBackdrop>(initialValues)

export const useBackdrop = () => useContext(BackdropContext)

type BackdropProviderProps = {
    children: React.ReactNode
}
export const BackdropProvider: FC<BackdropProviderProps> = (props) => {
    const { children } = props

    const [open, setOpen] = useState(false)
    const [component, setComponent] = useState<React.ReactElement | null>()

    const displayBackdrop = (component: React.ReactElement) => {
        setOpen(true)
        setComponent(component)
    }

    const closeBackdrop = () => {
        setOpen(false)
        setComponent(null)
    }

    const display = open && (
        <StyledBackdrop onClick={closeBackdrop}>{component}</StyledBackdrop>
    )

    return (
        <BackdropContext.Provider
            value={{
                closeBackdrop,
                displayBackdrop,
            }}
        >
            {children}
            {display}
        </BackdropContext.Provider>
    )
}

export default BackdropProvider

export const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;
`
