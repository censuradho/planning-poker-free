import { v4 as uuid } from 'uuid'

import { firestore } from '@/src/lib/firebase'

import type { CreatePlayer, CreateRoom, PlayerSchema, RoomSchema, UpdatePlayer, UpdateRoom } from '@/src/types/game'

import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'

import { COLLECTION_ROOM } from '@/src/constants/firestore'

export async function createRoom  (payload: CreateRoom) {
	const id = uuid()

	const { name } = payload

	await setDoc(doc(firestore, COLLECTION_ROOM, id), {
		id,
		name
	})

	return (await getDoc(doc(firestore, COLLECTION_ROOM, id))).data() as RoomSchema
}

export async function updateRoom (gameId: string, payload: UpdateRoom) {
	await updateDoc(doc(firestore, COLLECTION_ROOM, gameId), payload)
}

export async function createPlayer (payload: CreatePlayer) {
	const id = uuid()

	const {
		name,
		room_id
	} = payload

	const player: PlayerSchema = {
		id,
		name,
		room_id,
		vote: ''
	}

	const gameResponse = await getDoc(doc(firestore, COLLECTION_ROOM, room_id))
	const gameData = gameResponse.data() as RoomSchema

	await updateDoc(doc(firestore, COLLECTION_ROOM, room_id), { 
		players: {
			...(gameData?.players || {}),
			[id]: player
		}
	})

	return player
}

export async function updatePlayer (gameId: string, playerId: string, payload: UpdatePlayer) {
	const data = (await getDoc(doc(firestore, COLLECTION_ROOM, gameId))).data() as RoomSchema | null

	if (!data) throw new Error('Game not found')

	const player = data?.players?.[playerId]

	if (!player) throw new Error('Player not found')

	const newPlayerData: PlayerSchema = {
		...player,
		...payload
	}

	const room: UpdateRoom = {
		players: {
			...(data?.players || {}),
			[player.id]: newPlayerData
		}
	}
	await updateRoom(gameId, room)
}