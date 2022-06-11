import { Outlet } from 'react-router-dom'
import { createContext, useMemo, useContext } from 'react'

import type { 
	RoomSchema, 
	StorageRoom,
	PlayerSchema
} from '@/src/types/game'

import { useFirestore, useLocalStorage } from '@/src/hooks'

import { COLLECTION_ROOM, STORAGE_COLLECTION_ROOM } from '@/src/constants/firestore'

interface Room {
 data: RoomSchema | null;
 player: PlayerSchema | null;
 setStorageRoom: (value: StorageRoom) => void
}

const RoomContext = createContext({} as Room)

export function RoomProvider () {
	const [storageRoom, setStorageRoom] = useLocalStorage<StorageRoom | null>(STORAGE_COLLECTION_ROOM, null)

	const { data } = useFirestore<RoomSchema | null>(`/${COLLECTION_ROOM}/${storageRoom?.room_id}`, { initialState : null })

	const player = useMemo(() => {
		const result = Object
			.entries(data?.players || {})
			.find(([key, value]) => value.id === storageRoom?.player_id)

		if (!result) return null

		const [_, player] = result
    
		return player
	}, [data?.players, storageRoom])
  
	return (
		<RoomContext.Provider value={{
			data,
			player,
			setStorageRoom
		}}>
			<Outlet />
		</RoomContext.Provider>
	)
}

export const useRoom = () => useContext(RoomContext)
