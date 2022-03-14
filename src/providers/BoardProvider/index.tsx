import { useInterval } from '@/src/hooks'
import { memo, ReactNode, useContext, createContext, useState, useEffect, Dispatch } from 'react'


interface BoardProviderProps {
  children: ReactNode
}

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
  isCount?: boolean;
  countDown: number
}

const BoardContext = createContext({} as BoardContextProps)


function BaseBoardProvider ({ children }: BoardProviderProps) {
	const [currentCard, setCurrentCard] = useState<Card | null>(null)
	
	const [isReval, setIsRevail] = useState(false)
	const [isCount, setIsCount] = useState(false)

	const [countDown, setCountDown] = useState(4)

	const revalCards = () => {
		if (countDown === 1) setIsRevail(true)

		setIsCount(true)
		setCountDown(prevState => prevState > 0 ? prevState - 1 : 0)
	}

	const restartVoting = () => {
		setCountDown(3)
		setIsRevail(false)
		setIsCount(false)
	}

	useInterval(revalCards, isCount ? 1500 : null)

	return (
		<BoardContext.Provider 
			value={{
				setCurrentCard,
				currentCard,
				isReval,
				revalCards,
				isCount,
				restartVoting,
				countDown
			}}>
			{children}
		</BoardContext.Provider>
	)
}

export const useBoardContext = () => useContext(BoardContext)

export const BoardProvider = memo(BaseBoardProvider)