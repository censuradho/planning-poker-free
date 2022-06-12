import { useAutState } from '@/src/hooks'
import {  User } from 'firebase/auth'
import { createContext, ReactNode, useContext, useEffect } from 'react'

import { auth } from '@/src/lib/firebase'
import { signInAnonymously } from '@/src/lib/firebase/auth'

interface Auth {
  user: User
}

const AuthContext = createContext({} as Auth)

interface AuthProviderProps {
  children: ReactNode
}
export function AuthProvider ({ children }: AuthProviderProps) {
	const { user } = useAutState(auth)

	useEffect(() => {
		if (!user) signInAnonymously()
	}, [user, auth])

	if (!user) return null

	return (
		<AuthContext.Provider 
			value={{
				user
			}}
		>{children}</AuthContext.Provider>
	)
}

export const useAuthContext = () => useContext(AuthContext)