import * as Styles from './styles'

import { CardList, CardReval } from './components'

import { Flex } from '@/src/styles'

import { BoardProvider, useBoardContext } from '@/src/providers'
import { withContext } from '@/src/hoc'

function BaseGame () {
	const context = useBoardContext()

	return (
		<Styles.Main>
			<Flex flex={1} fullWidth justifyContent="center" alignItems="center">
				<CardReval label={context.currentCard?.label || ''} />
			</Flex>	
			<Flex fullWidth flexDirection="column" alignItems="center" justifyContent="center">
				<Styles.CardBoardTitle>Choose your card 👇</Styles.CardBoardTitle>
				<Styles.CardBoard>
					<CardList />
				</Styles.CardBoard>
			</Flex>

		</Styles.Main>
	)
}

export const Game = withContext(BaseGame, BoardProvider)