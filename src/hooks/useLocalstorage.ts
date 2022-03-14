import {
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
	useState,
} from 'react'

// See: https://usehooks-ts.com/react-hook/use-event-listener
import { useEventListener } from './useEventListener'

declare global {
  interface WindowEventMap {
    'local-storage': CustomEvent
  }
}

type SetValue<T> = Dispatch<SetStateAction<T>>


export function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
	const APP_BASE_KEY = import.meta.env.LOCAL_STORAGE_KEY || '@planningPoker'

	// Get from local storage then
	// parse stored json or return initialValue
	const baseKey = `${APP_BASE_KEY}:${key}`

	const readValue = useCallback((): T => {
		// Prevent build error "window is undefined" but keep keep working
		if (typeof window === 'undefined') {
			return initialValue
		}

		try {
			const item = window.localStorage.getItem(baseKey)
			return item ? (parseJSON(item) as T) : initialValue
		} catch (error) {
			console.warn(`Error reading localStorage key “${baseKey}”:`, error)
			return initialValue
		}
	}, [initialValue, baseKey])

	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState<T>(readValue)

	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue: SetValue<T> = useCallback(
		value => {
			// Prevent build error "window is undefined" but keeps working
			if (typeof window == 'undefined') {
				console.warn(
					`Tried setting localStorage key “${baseKey}” even though environment is not a client`,
				)
			}

			try {
				// Allow value to be a function so we have the same API as useState
				const newValue = value instanceof Function ? value(storedValue) : value

				// Save to local storage
				window.localStorage.setItem(baseKey, JSON.stringify(newValue))

				// Save state
				setStoredValue(newValue)

				// We dispatch a custom event so every useLocalStorage hook are notified
				window.dispatchEvent(new Event('local-storage'))
			} catch (error) {
				console.warn(`Error setting localStorage key “${baseKey}”:`, error)
			}
		},
		[baseKey, storedValue],
	)

	useEffect(() => {
		setStoredValue(readValue())
	}, [])

	const handleStorageChange = useCallback(() => {
		setStoredValue(readValue())
	}, [readValue])

	useEventListener('storage', handleStorageChange)

	useEventListener('local-storage', handleStorageChange)

	return [storedValue, setValue]
}


// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON<T>(value: string | null): T | undefined {
	try {
		return value === 'undefined' ? undefined : JSON.parse(value ?? '')
	} catch {
		console.log('parsing error on', { value })
		return undefined
	}
}