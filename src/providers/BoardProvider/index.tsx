import { memo,  useContext, createContext, useState, Dispatch, useEffect, useCallback } from 'react'
import { Outlet } from 'react-router-dom'


import { LOCAL_STORAGE } from '@/src/constants/localStorage'
import { useInterval, useLocalStorage } from '@/src/hooks'
import { JoinRoomResponse, Participant, Room } from '@/src/types/boardgame'
import { useSocket } from '@/src/hooks/useSocket'
import { leaveRoom, newGame, startCount } from '@/src/services/socket/gameboard'
import socket from '@/src/lib/socket'
import { useEventListener } from '@/src/hooks/useEventListener'


export interface Card {
  value: string | number,
  label: string
}

interface BoardContextProps {
  setCurrentCard: Dispatch<React.SetStateAction<Card | null>>;
  currentCard: Card | null,
  isReval?: boolean,
  revalCards: () => void
  restartVoting: () => void
  isPlaying?: boolean;
  countDown: number;
	setParticipant: (participant: Participant) => void;
	participant?: Participant | null;
	participants?: Participant[] | null;
	status?: boolean;
	setStatus: (value: React.SetStateAction<boolean>) => void
	room?: Room;
}

const BoardContext = createContext({} as BoardContextProps)

const baseCountDown = 4

function BaseBoardProvider () {
	const { data: joinData } = useSocket<JoinRoomResponse>('room:join')
	const [room, setRoom] = useState<Room | undefined>(undefined)

	const { data: participants } = useSocket<Participant[]>('room:participant-join')
	
	const [participant, setParticipant] = useLocalStorage<Participant | null>(LOCAL_STORAGE.user, null)

	const [status, setStatus] = useState(false)
	
	const [currentCard, setCurrentCard] = useState<Card | null>(null)
	
	const [isReval, setIsRevail] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false)

	const [countDown, setCountDown] = useState(baseCountDown)

	const revalCards = () => {
		if (!participant) return

		startCount({
			room_id: participant?.room_id
		})

		if (countDown === 1) setIsRevail(true)
		setCountDown(prevState => prevState > 0 ? prevState - 1 : 0)
	}
	
	const restartVoting = () => {
		if (!participant) return
		newGame({ 
			room_id: participant?.room_id
		})
	}

	useInterval(revalCards, isPlaying ? 1000  : null)
	useEventListener('beforeunload', () => participant && leaveRoom({
		room_id: participant?.room_id,
		user_id: participant?.id,
	}))

	useEffect(() => {
		setStatus(!!joinData)

		if (joinData) {
			setParticipant(joinData._participant)
			setRoom(joinData._room)
		}

	}, [joinData])

	useEffect(() => {
		socket.on('room:restart-game', () => {
			setCountDown(baseCountDown)
			setIsRevail(false)
			setIsPlaying(false)
			setCurrentCard(null)
		})
	}, [])

	useEffect(() => {
		socket.on('room:start-count-client', () => {

			setIsPlaying(true)
		})
	}, [])

	return (
		<BoardContext.Provider 
			value={{
				room,
				setCurrentCard,
				currentCard,
				isReval,
				revalCards,
				isPlaying,
				restartVoting,
				countDown,
				setParticipant,
				participant,
				status,
				setStatus,
				participants
			}}>
			<Outlet />
		</BoardContext.Provider>
	)
}

export const useBoardContext = () => useContext(BoardContext)

export const BoardProvider = memo(BaseBoardProvider)