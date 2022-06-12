import { Outlet } from 'react-router-dom'
import { createContext, useMemo, useContext, useState, useEffect } from 'react'

import type { 
	RoomSchema, 
	StorageRoom,
	PlayerSchema
} from '@/src/types/game'

import { useFirestore, useInterval, useLocalStorage } from '@/src/hooks'

import { COLLECTION_ROOM, STORAGE_COLLECTION_ROOM } from '@/src/constants/firestore'
import { updatePlayer, updateRoom } from '@/src/services/firebase'

interface Room {
	data: RoomSchema | null;
	player: PlayerSchema | null;
	participants: PlayerSchema[];
	canReveal: boolean;
	setStorageRoom: (value: StorageRoom) => void;
	storageRoom: StorageRoom | null;
	countDown: number;
	restart: () => Promise<void>;
	reveal: () => Promise<void>;
}

const RoomContext = createContext({} as Room)
const baseCountDown = 3

export function RoomProvider () {
	const [storageRoom, setStorageRoom] = useLocalStorage<StorageRoom | null>(STORAGE_COLLECTION_ROOM, null)

	const { data } = useFirestore<RoomSchema | null>(`/${COLLECTION_ROOM}/${storageRoom?.room_id}`, 
		{ 
			initialState : null,
			onNotFound: () => setStorageRoom(null)
		}
	)

	const [countDown, setCountDown] = useState(baseCountDown)

	const player = useMemo(() => {
		const result = Object
			.entries(data?.players || {})
			.find(([key, value]) => value.id === storageRoom?.player_id)

		if (!result) return null

		const [_, player] = result
    
		return player
	}, [data?.players, storageRoom])
  
	const participants = useMemo(() => {
		const result = Object
			.entries(data?.players || {})
			.filter(([key, value]) => value.id !== player?.id)
		
		if (!result) return []

		return result.map(([key, value]) => value)
	}, [player, data?.players])

	const handleRevealCards = async () => {
		if (!data?.id) return
		
		await updateRoom(data?.id, {
			isPlaying: true
		})
	}

	const handleRestart = async () => {
		if (!data?.id || !player) return

		await updateRoom(data?.id, {
			isPlaying: false,
			isReveal: false
		})

		for (const participant of participants) {
			await updatePlayer(data?.id, participant.id, {
				vote: ''
			})
		}

		await updatePlayer(data?.id, player.id, {
			vote: ''
		})
	}

	const revealCards = async () => {
		if (countDown === 1 && data?.id && player?.isAdm) {
			await updateRoom(data?.id, {
				isReveal: true
			})
		}

		setCountDown(prevState => prevState > 0 ? prevState - 1 : 0)
	}
	
	useInterval(revealCards, data?.isPlaying ? 1000  : null)

	const canReveal = useMemo(() => {
		const participantsVote = participants?.map(value => !!value.vote)

		return participantsVote.length > 0 && !participantsVote.includes(false) && !!player?.vote
	}, [participants, player?.vote])

	useEffect(() => {
		if (data?.isReveal) return

		setCountDown(baseCountDown)
	}, [data?.isReveal])

	return (
		<RoomContext.Provider 
			value={{
				countDown,
				data,
				player,
				participants,
				reveal: handleRevealCards,
				restart: handleRestart,
				canReveal,
				setStorageRoom,
				storageRoom,
			}}>
			<Outlet />
		</RoomContext.Provider>
	)
}

export const useRoom = () => useContext(RoomContext)
