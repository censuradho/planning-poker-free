import { useEffect, useState } from 'react'
import { doc, FirestoreError, onSnapshot } from 'firebase/firestore'

import { firestore } from '@/src/lib/firebase/firestore'

type Option<T> = {
  initialState?: T,
	onError?: (error: FirestoreError) => void
	onNotFound?: () => void;
}

const initialState = {}

export function useFirestore <T = typeof initialState>(path: string, options?: Option<T>) {
	const [data, setData] = useState<T>(options?.initialState || initialState as T)
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		const unSubscribe = onSnapshot(doc(firestore, path), doc => {
			if (!doc.exists()) options?.onNotFound?.()
			
			setData((doc.data() || {}) as T)
			setIsLoaded(true)
		}, err => {
			console.log(err)
			options?.onError?.(err)
		})

		return () => unSubscribe()
	}, [path])

	return {
		data,
		isLoaded
	}
}