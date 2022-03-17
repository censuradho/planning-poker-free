import socket from '@/src/lib/socket'
import { CreateRoom, CreateVote, JoinRoom, CreteGame, LeaveRoom } from '@/src/types/boardgame'
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

export function startCount (payload: CreteGame) {
	socket.emit('room:start-count-server', payload)
}

export function voteRoom (payload: CreateVote) {
	socket.emit('room:vote', payload)
} 

export function newGame (payload: CreteGame) {
	socket.emit('room:new-game', payload)
} 

export function leaveRoom (payload: LeaveRoom) {
	socket.emit('room:leave')
}