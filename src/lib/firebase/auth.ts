import { signInAnonymously as signInAnonymouslySdk } from 'firebase/auth'

import { auth } from '.'

auth.setPersistence({
	type: 'SESSION'
})

export function signInAnonymously () {
	return signInAnonymouslySdk(auth)
}