import { initializeApp } from 'firebase/app'

import { firebaseConfig } from '@/src/config/firebase'

import { getAuth } from 'firebase/auth'

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { app, auth }

export * from './firestore'