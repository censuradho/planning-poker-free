import { useAutState } from '@/src/hooks'
import {  User } from 'firebase/auth'
import { createContext, ReactNode, useContext, useEffect } from 'react'

import { auth } from '@/src/lib/firebase'
import { signInAnonymously } from '@/src/lib/firebase/auth'
import { deletePlayer } from '@/src/services/firebase'
import { useParams } from 'react-router-dom'

interface Auth {
  user: User
}

const AuthContext = createContext({} as Auth)

interface AuthProviderProps {
  children: ReactNode
}
export function AuthProvider ({ children }: AuthProviderProps) {
	const { id: room_id } = useParams()
	
	const { user } = useAutState(auth, {
		...(room_id && { onBeforeUserLogout: user => deletePlayer(room_id, user.uid) })
	})

	useEffect(() => {
		if (!user) signInAnonymously()
	}, [user])

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