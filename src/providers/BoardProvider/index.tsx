import { memo,  useContext, createContext, useState, Dispatch, useEffect } from 'react'
import { Outlet } from 'react-router-dom'


import { LOCAL_STORAGE } from '@/src/constants/localStorage'
import { useInterval, useLocalStorage, useSocketEffect } from '@/src/hooks'
import { Participant, Room } from '@/src/types/boardgame'

import { useSocket } from '@/src/hooks/useSocket'

export interface Card {
  value: string | number,
  label: string
}

interface BoardContextProps {
  setCurrentCard: Dispatch<React.SetStateAction<Card | null>>;
  currentCard: Card | null,
  isReval?: boolean,
  setIsPlaying: (value: boolean) => void
  restartVoting: () => void
  isPlaying?: boolean;
  countDown: number;
	setParticipant: (participant: Participant) => void;
	participant?: Participant | null;
	participants?: Participant[] | null;
	status?: boolean;
	room?: Room | null;
}

const BoardContext = createContext({} as BoardContextProps)

const baseCountDown = 3

function BaseBoardProvider () {

	const [ioParticipant] = useSocket<Participant | null>('room:participant')
	const [ioRoom] = useSocket<Room | null>('room:room')
	const [ioParticipants] = useSocket<Participant[] | null>('room:participants')

	const [participant, setParticipant] = useLocalStorage<Participant | null>(LOCAL_STORAGE.user, null)

	const [currentCard, setCurrentCard] = useState<Card | null>(null)
	
	const [isReval, setIsRevail] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false)

	const [countDown, setCountDown] = useState(baseCountDown)

	const revalCards = () => {
		if (countDown === 1) setIsRevail(true)
		setCountDown(prevState => prevState > 0 ? prevState - 1 : 0)
	}
	
	const restartVoting = () => {
		setIsPlaying(false)
		setIsRevail(false)
		setCurrentCard(null)
		setCountDown(baseCountDown)
	}
	
	useInterval(revalCards, isPlaying ? 1000  : null)

	useEffect(() => {
		if (!ioParticipant) return

		setParticipant(ioParticipant)
	}, [ioParticipant])

	useSocketEffect('room:restart-game', restartVoting)
	useSocketEffect('room:show-card', () => setIsPlaying(true))

	return (
		<BoardContext.Provider 
			value={{
				room: ioRoom,
				setCurrentCard,
				currentCard,
				isReval,
				setIsPlaying,
				isPlaying,
				restartVoting,
				countDown,
				setParticipant,
				participant,
				status: !!ioParticipant,
				participants: ioParticipants
			}}>
			<Outlet />
		</BoardContext.Provider>
	)
}

export const useBoardContext = () => useContext(BoardContext)

export const BoardProvider = memo(BaseBoardProvider)