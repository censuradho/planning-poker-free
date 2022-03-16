import { useInterval } from '@/src/hooks'
import { Participant } from '@/src/types/boardgame'
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
}

const BoardContext = createContext({} as BoardContextProps)

const baseCountDown = 4

function BaseBoardProvider () {
	const [participant, setParticipant] = useState<Participant | null>(null)
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
				participant
			}}>
			<Outlet />
		</BoardContext.Provider>
	)
}

export const useBoardContext = () => useContext(BoardContext)

export const BoardProvider = memo(BaseBoardProvider)