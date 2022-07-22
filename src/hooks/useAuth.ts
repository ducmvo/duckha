import { AuthContext } from '@components/HOC/AuthContext'
import { useContext } from 'react'

const useAuth = () => useContext(AuthContext)

export default useAuth

export const useUser = () => useContext(AuthContext).user

export const useSignIn = () => useContext(AuthContext).signIn

export const useSignOut = () => useContext(AuthContext).signOut
