import { memo,  useContext, createContext, useState, Dispatch, useEffect } from 'react'
import { Outlet } from 'react-router-dom'


import { LOCAL_STORAGE } from '@/src/constants/localStorage'
import { useInterval, useLocalStorage } from '@/src/hooks'
import { Participant, ParticipantRoom, Room } from '@/src/types/boardgame'

import { useEventListener } from '@/src/hooks/useEventListener'
import { useSocket } from '@/src/hooks/useSocket'


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
	room?: Room;
}

const BoardContext = createContext({} as BoardContextProps)

const baseCountDown = 4

function BaseBoardProvider () {
	const [participantJoined] = useSocket<ParticipantRoom | null>('room:join:response')

	const [participant, setParticipant] = useLocalStorage<Participant | null>(LOCAL_STORAGE.user, null)
	
	const [currentCard, setCurrentCard] = useState<Card | null>(null)
	
	const [isReval, setIsRevail] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false)

	const [countDown, setCountDown] = useState(baseCountDown)

	const revalCards = () => {
		if (!participant) return
		setIsPlaying(true)

		if (countDown === 1) setIsRevail(true)
		setCountDown(prevState => prevState > 0 ? prevState - 1 : 0)
	}
	
	const restartVoting = () => {
		if (!participant) return
	}
	
	useInterval(revalCards, isPlaying ? 1000  : null)

	useEffect(() => {
		if (!participantJoined) return

		setParticipant(participantJoined.participant)

	}, [participantJoined])

	return (
		<BoardContext.Provider 
			value={{
				room: participantJoined?.room,
				setCurrentCard,
				currentCard,
				isReval,
				revalCards,
				isPlaying,
				restartVoting,
				countDown,
				setParticipant,
				participant,
				status: !!participantJoined,
				participants: participantJoined?.room.participants
			}}>
			<Outlet />
		</BoardContext.Provider>
	)
}

export const useBoardContext = () => useContext(BoardContext)

export const BoardProvider = memo(BaseBoardProvider)