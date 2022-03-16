import { LOCAL_STORAGE } from '@/src/constants/localStorage'
import { useInterval, useLocalStorage } from '@/src/hooks'
import { useSocket } from '@/src/hooks/useSocket'
import { JoinRoomResponse, Participant } from '@/src/types/boardgame'
import { memo,  useContext, createContext, useState, Dispatch, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

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
	status?: boolean;
	setStatus: (value: React.SetStateAction<boolean>) => void
}

const BoardContext = createContext({} as BoardContextProps)

const baseCountDown = 4

function BaseBoardProvider () {
	const { data: joinData } = useSocket<JoinRoomResponse>('room:join')

	const [participant, setParticipant] = useState<Participant | null>(null)

	const [status, setStatus] = useState(false)
	
	const [currentCard, setCurrentCard] = useState<Card | null>(null)
	
	const [isReval, setIsRevail] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false)

	const [countDown, setCountDown] = useState(baseCountDown)

	const revalCards = () => {
		if (countDown === 1) setIsRevail(true)

		setIsPlaying(true)
		setCountDown(prevState => prevState > 0 ? prevState - 1 : 0)
	}
	
	const restartVoting = () => {
		setCountDown(baseCountDown)
		setIsRevail(false)
		setIsPlaying(false)
		setCurrentCard(null)
	}

	useInterval(revalCards, isPlaying ? 1000  : null)

	useEffect(() => {
		setStatus(!!joinData)

		if (joinData) setParticipant(joinData._participant)
		
	}, [joinData])
	
	return (
		<BoardContext.Provider 
			value={{
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
				setStatus
			}}>
			<Outlet />
		</BoardContext.Provider>
	)
}

export const useBoardContext = () => useContext(BoardContext)

export const BoardProvider = memo(BaseBoardProvider)