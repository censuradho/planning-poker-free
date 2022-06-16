import { browserSessionPersistence, setPersistence, signInAnonymously as signInAnonymouslySdk } from 'firebase/auth'

import { auth } from '.'



export async function signInAnonymously () {
	setPersistence(auth, browserSessionPersistence)
	return signInAnonymouslySdk(auth)
}