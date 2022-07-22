import useSessionStorage from '@hooks/useSessionStorage'
import { User as PUser } from '@prisma/client'
import React, { useCallback } from 'react'
import { createContext, FC, useEffect, useState } from 'react'

const AUTH_USER_NAME = 'duckha-guest-name'

export type User = PUser & {
    companions: User[]
}

interface IAuth {
    user?: User
    signIn: (name: string) => Promise<void>
    signOut: () => void
}

const initialValues: IAuth = {} as IAuth

type AuthContextProps = {
    children: React.ReactNode
}

export const AuthContext = createContext<IAuth>(initialValues)

export const AuthProvider: FC<AuthContextProps> = (props) => {
    const { children } = props

    const [user, setUser] = useState<User>()
    const [username, setUsername] = useSessionStorage<string>(
        AUTH_USER_NAME,
        ''
    )

    const signOut = () => {
        setUsername('')
        setUser(undefined)
    }

    const signIn = useCallback(
        async (email: string) => {
            let url = '/api/user'
            const data = { email: email }
            let res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
            })

            try {
                const user = await res.json()
                setUser(user)
            } catch (err) {
                setUser(undefined)
                throw err
            }
            setUsername(email)
        },
        [setUsername]
    )

    useEffect(() => {
        if (!user && username) signIn(username)
    })

    const contextValue = { user, signIn, signOut }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
