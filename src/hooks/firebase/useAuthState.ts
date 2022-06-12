import {  onAuthStateChanged, User, Auth } from 'firebase/auth'
import { useEffect, useState } from 'react'

export function useAutState (auth: Auth) {
	const [user, setUser] = useState<User | null>(auth.currentUser)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		const unListener = onAuthStateChanged(auth, (user) => {
			if (user) setUser(user)
		}, setError)

		return () => unListener()
	}, [])

	return {
		user,
		error
	}
}