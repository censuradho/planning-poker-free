import { useEffect } from 'react'

import * as Styles from './styles'

import { Button } from '@/src/components'
import { CardList, CardReval, RegisterUser, Header } from './components'

import { Flex } from '@/src/styles'

import { useBoardContext } from '@/src/providers'

export function Game () {

	const context = useBoardContext()

	const renderParticipants = context?.participants?.map((value, index) => (
		<li key={value.id}>{`${index}:${value.username}`}</li>
	))


	return (
		<Styles.Main>
			<Header />
			<RegisterUser />
			<Flex flexDirection="column" gap="lg" flex={1} fullWidth justifyContent="center" alignItems="center">
				<ul>{renderParticipants}</ul>
				{!context.isPlaying && !context.isReval && (
					<Button disabled={!context?.currentCard} onClick={context.revalCards}>Revelar</Button>
				)}
				{context.isPlaying && !context.isReval && <Styles.Count>{context.countDown}</Styles.Count>}
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
