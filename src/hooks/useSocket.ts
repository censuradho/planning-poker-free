import { useEffect, useState } from 'react'
import socket from '@/src/lib/socket'


export function useSocket <T>(channel: string, defaultValue?: T) {
	const [data, setData] = useState<T | null>(defaultValue || null)

	useEffect(() => {
		socket.on(channel, (payload: T) => {
			setData(payload)
		})
	}, [])

	return [data]
}