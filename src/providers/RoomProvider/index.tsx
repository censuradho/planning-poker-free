import { ReactNode, createContext, useState } from 'react'

import { RoomSchema } from '@/src/types/game'
import { Outlet } from 'react-router-dom'

interface RoomProps {
  children: ReactNode
}

interface Room {
 data?: RoomSchema
}

const RoomContext = createContext({} as Room)

export function RoomProvider () {
	const [data, setData] = useState<RoomSchema>()

	return (
		<RoomContext.Provider value={{
			data,
		}}>
			<Outlet />
		</RoomContext.Provider>
	)
}

