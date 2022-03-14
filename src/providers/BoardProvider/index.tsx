import useBooleanToggle from '@/src/hooks/useBooleanToggle'
import { memo, ReactNode, useContext, createContext, useState } from 'react'


interface BoardProviderProps {
  children: ReactNode
}

export interface Card {
  value: string | number,
  label: string
}

interface BoardContextProps {
  setCurrentCard: (card: Card | null) => void;
  currentCard: Card | null,
  isReval?: boolean,
  toggleIsReval: () => void
}

const BoardContext = createContext({} as BoardContextProps)


function BaseBoardProvider ({ children }: BoardProviderProps) {
	const [currentCard, setCurrentCard] = useState<Card | null>(null)

	const [isReval, toggleIsReval] = useBooleanToggle()

	return (
		<BoardContext.Provider 
			value={{
				setCurrentCard,
				currentCard,
				isReval,
				toggleIsReval
			}}>
			{children}
		</BoardContext.Provider>
	)
}

export const useBoardContext = () => useContext(BoardContext)

export const BoardProvider = memo(BaseBoardProvider)