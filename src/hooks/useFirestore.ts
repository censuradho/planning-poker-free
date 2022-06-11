import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'

import { firestore } from '@/src/lib/firebase/firestore'

type Option<T> = {
  initialState?: T
}

const initialState = {}

export function useFirestore <T = typeof initialState>(path: string, options?: Option<T>) {
	const [data, setData] = useState<T>(options?.initialState || initialState as T)

	useEffect(() => {
		const unSubscribe = onSnapshot(doc(firestore, path), (doc) => {
			setData((doc.data() || {}) as T)
		})

		return () => unSubscribe()
	}, [path])

	return {
		data,
	}
}