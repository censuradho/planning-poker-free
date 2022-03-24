import socket from '@/src/lib/socket'
import { CreateRoom, JoinRoom, Vote } from '@/src/types/boardgame'

export function createRoom (payload: CreateRoom) {
	socket.emit('room:create', payload)
}

export function joinRoom (payload: JoinRoom) {
	socket.emit('room:join', payload)
}	

export function vote (payload: Vote) {
	socket.emit('room:select-card', payload)
}

export function showCards (room_id: string) {
	socket.emit('room:show-card', room_id)
}

export function restartGame (room_id: string) {
	socket.emit('room:restart-game', room_id)

}