import { memo,  useContext, createContext, useState, Dispatch, useEffect } from 'react'
import { Outlet } from 'react-router-dom'


import { LOCAL_STORAGE } from '@/src/constants/localStorage'
import { useInterval, useLocalStorage } from '@/src/hooks'
import { Participant, ParticipantRoom, Room, VoteResponse } from '@/src/types/boardgame'

import { useSocket } from '@/src/hooks/useSocket'
import { showCards } from '@/src/services/socket/gameboard'
import socket from '@/src/lib/socket'

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
	room?: Room;
}

const BoardContext = createContext({} as BoardContextProps)

const baseCountDown = 3

function BaseBoardProvider () {

	const [participantJoined] = useSocket<ParticipantRoom | null>('room:join:response')
	const [participantsVote] = useSocket<VoteResponse | null>('room:select-card:response')
	const [participantsJoin] = useSocket<Participant[] | null>('room:join-participant:response')

	const [participant, setParticipant] = useLocalStorage<Participant | null>(LOCAL_STORAGE.user, null)
	const [participants, setParticipants] = useState<Participant[]>([])

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
		setParticipants(prevStatet => 
			prevStatet.map(value => ({
				...value,
				vote: ''
			}))
		)
	}
	
	useInterval(revalCards, isPlaying ? 1000  : null)

	useEffect(() => {
		if (!participantJoined) return

		setParticipant(participantJoined.participant)
	}, [participantJoined])

	useEffect(() => {
		if (!participantsJoin) return
		
		setParticipants(participantsJoin)
	}, [participantsJoin])

	useEffect(() => {
		if (!participantsVote) return
		setParticipants(participantsVote.participants)
	}, [participantsVote])

	useEffect(() => {
		socket.on('room:show-card:response', () => {
			setIsPlaying(true)
		})
	}, [])

	useEffect(() => {
		socket.on('room:restart-game:response', () => {
			restartVoting()
		})
	}, [])

	return (
		<BoardContext.Provider 
			value={{
				room: participantJoined?.room,
				setCurrentCard,
				currentCard,
				isReval,
				setIsPlaying,
				isPlaying,
				restartVoting,
				countDown,
				setParticipant,
				participant,
				status: !!participantJoined,
				participants: participants
			}}>
			<Outlet />
		</BoardContext.Provider>
	)
}

export const useBoardContext = () => useContext(BoardContext)

export const BoardProvider = memo(BaseBoardProvider)