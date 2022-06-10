import { getFirestore } from 'firebase/firestore'
import { app } from '.'

export const firestore = getFirestore(app)