import socket from '@/src/lib/socket'
import { useEffect, useRef } from 'react'

export function useSocketEffect <T = any>(channel: string, callback: (value?: T) => void) {
	const callbackRef = useRef(callback)

	useEffect(() => {
		callbackRef.current = callback
	}, [callback])

	useEffect(() => {
		socket.on(channel, callbackRef.current)
	}, [callbackRef])
}