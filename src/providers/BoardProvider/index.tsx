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

	const [countDown, setCountDown] = useState(3)

	const [idInterval, setIdInterval] = useState<NodeJS.Timer | null>(null)

	const revalCards = () => {
		setIsCount(true)
		const idTimer = setInterval(() => {
			setCountDown(prevState => prevState > 0 ? prevState - 1 : 0)

			
			if (countDown === 0) setIsRevail(true)
		}, 1200)
		setIdInterval(idTimer)
	}

	const restartVoting = () => {
		setCountDown(3)
		setIsRevail(false)
		setIsCount(false)
		setCurrentCard(null)
	}

	useEffect(() => {
		if (countDown > 0) return
		setIsRevail(true)
		idInterval && clearInterval(idInterval)
	}, [countDown])

	console.log(currentCard)

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