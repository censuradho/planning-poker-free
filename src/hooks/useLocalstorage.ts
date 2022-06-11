import { useCallback, useEffect, useState } from 'react'

export function useLocalStorage<T>(
	key: string,
	initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  
  
	const _isBrowser = typeof window !== 'undefined'
	const [storedValue, setStoredValue] = useState<T>(initialValue)

  
	const setValue = (value: T | ((val: T) => T)) => {
		try {
      
			const valueToStore =
        value instanceof Function ? value(storedValue) : value
      
			setStoredValue(valueToStore)
      
			_isBrowser && window.localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (error) {
      
			console.log(error)
		}
	} 

	const handleGetInitialData = useCallback(() => {
		setStoredValue(() => {
			try {
        
				const item = window.localStorage.getItem(key)
        
				return item ? JSON.parse(item) : initialValue
			} catch (error) {
        
				console.log(error)
				return initialValue
			}
		})
	}, [initialValue, key])

	useEffect(() => {
		handleGetInitialData()
	}, [])

	return [storedValue, setValue]
}