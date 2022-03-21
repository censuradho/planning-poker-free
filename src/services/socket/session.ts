import socket from '@/src/lib/socket'
import { User } from '@/src/types/User'

export const connectSocket = () => {
	socket.connect()
}