import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '@/src/config/firebase'

const app = initializeApp(firebaseConfig)

export { app }

export * from './firestore'