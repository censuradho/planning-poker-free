import { useEffect } from 'react'

import * as Styles from './styles'

import { AdminView, Button } from '@/src/components'
import { CardList, CardReval, RegisterUser, Header } from './components'

import { Flex } from '@/src/styles'

import { useBoardContext } from '@/src/providers'

export function Game () {

	const context = useBoardContext()

	const renderParticipants = context?.participants
		?.filter(value => value.id !== context.participant?.id)
		?.map(value =>  (
			<CardReval key={value.id} label={value.vote} />
		))

	
	return (
		<Styles.Main>
			<Header />
			<RegisterUser />
			<Flex flexDirection="column" gap="lg" flex={1} fullWidth justifyContent="center" alignItems="center">
				<Styles.List>{renderParticipants}</Styles.List>
				<AdminView isAdmin={context?.participant?.isAdmin}>
					{!context.isPlaying && !context.isReval && (
						<Button disabled={!context?.currentCard} onClick={context.revalCards}>Revelar</Button>
					)}
				</AdminView>
				{context.isPlaying && !context.isReval && <Styles.Count>{context.countDown}</Styles.Count>}
				<AdminView isAdmin={context?.participant?.isAdmin}>
					{context.countDown === 0 && <Button variant="base" onClick={context.restartVoting}>Comear nova votação</Button>}
				</AdminView>
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
