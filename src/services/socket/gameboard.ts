import socket from '@/src/lib/socket'
import { CreateRoom, CreateVote, JoinRoom } from '@/src/types/boardgame'
import { connectSocket } from './session'

export function createRoom (payload: CreateRoom) {
	socket.emit('room:create', payload)
}

export function joinRoom (payload: JoinRoom) {
	connectSocket({
		username: payload.username
	})
	socket.emit('room:join', payload)
}


export function voteRoom (payload: CreateVote) {
	socket.emit('room:vote', payload)
} 