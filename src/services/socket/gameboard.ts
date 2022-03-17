import socket from '@/src/lib/socket'
import { CreateRoom } from '@/src/types/boardgame'
import { connectSocket } from './session'

export function createRoom (payload: CreateRoom) {
	connectSocket({ username: payload.username })
	socket.emit('room:create:request', payload)
}

