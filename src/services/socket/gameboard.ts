import socket from '@/src/lib/socket'
import { CreateRoom, JoinRoom } from '@/src/types/boardgame'

export function createRoom (payload: CreateRoom) {
	socket.emit('room:create', payload)
}

export function joinRoom (payload: JoinRoom) {
	socket.emit('room:join', payload)
}

