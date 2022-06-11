import { getFirestore } from 'firebase/firestore'
import { app } from '@/src/lib/firebase'

export const firestore = getFirestore(app)