import socket from '@/src/lib/socket'
import { CreateRoom, JoinRoom, Vote } from '@/src/types/boardgame'

export function createRoom (payload: CreateRoom) {
	socket.emit('room:create:request', payload)
}

export function joinRoom (payload: JoinRoom) {
	socket.emit('room:join:request', payload)
}	

export function vote (payload: Vote) {
	socket.emit('room:select-card:request', payload)
}

export function showCards (room_id: string) {
	socket.emit('room:show-card:request', room_id)
}

export function restartGame (room_id: string) {
	socket.emit('room:restart-game:request', room_id)

}