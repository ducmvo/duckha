import useSessionStorage from '@hooks/useSessionStorage'
import { AUTH_USER_NAME } from '@libs/data'
import { User as PUser } from '@prisma/client'
import React, { useCallback } from 'react'
import { createContext, FC, useEffect, useState } from 'react'

export type User = PUser & {
    companions: User[]
}

interface IAuth {
    user?: User
    signIn: (name: string) => Promise<void>
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
    const signIn = useCallback(
        async (name: string) => {
            let url = '/api/user'
            const data = { name: name }
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
            setUsername(name)
        },
        [setUsername]
    )

    useEffect(() => {
        if (!user && username) signIn(username)
    })

    const contextValue = { user, signIn }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
