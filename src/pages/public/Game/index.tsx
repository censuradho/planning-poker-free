import * as Styles from './styles'

import { Button } from '@/src/components'
import { CardList, CardReval } from './components'

import { Flex } from '@/src/styles'

import { BoardProvider, useBoardContext } from '@/src/providers'
import { withContext } from '@/src/hoc'

function BaseGame () {
	const context = useBoardContext()

	return (
		<Styles.Main>
			<Flex flexDirection="column" gap="lg" flex={1} fullWidth justifyContent="center" alignItems="center">
				{!context.isCount && !context.isReval &&  <Button onClick={context.revalCards}>Revelar</Button>}
				{context.isCount && !context.isReval && <Styles.Count>{context.countDown}</Styles.Count>}
				{context.countDown === 0 && <Button variant="base" onClick={context.restartVoting}>Comear nova votação</Button>}
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