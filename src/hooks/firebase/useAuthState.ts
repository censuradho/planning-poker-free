import {  onAuthStateChanged, User, Auth } from 'firebase/auth'
import { useEffect, useState } from 'react'

interface Options {
	onBeforeUserLogout?: (user: User) => Promise<void> | void
}

export function useAutState (auth: Auth, options?: Options) {

	const [user, setUser] = useState<User | null>(auth.currentUser)
	const [error, setError] = useState<Error | null>(null)

	const handleSignOut = async () => {
		user && await options?.onBeforeUserLogout?.(user)
		setUser(null)
	}

	useEffect(() => {
		const unListener = onAuthStateChanged(auth, (_user) => {
			if (_user) {
				setUser(_user)
			} else {
				alert('adasd')
				handleSignOut()
			}
		}, setError)

		return () => unListener()
	}, [])

	return {
		user,
		error
	}
}