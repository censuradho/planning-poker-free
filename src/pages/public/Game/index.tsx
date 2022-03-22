import * as Styles from './styles'

import { AdminView, Button } from '@/src/components'
import { CardList, CardReval, RegisterUser, Header } from './components'

import { Flex } from '@/src/styles'

import { useBoardContext } from '@/src/providers'
import { restartGame, showCards } from '@/src/services/socket/gameboard'
import { useParams } from 'react-router-dom'

export function Game () {
	const params = useParams<{ id: string }>()

	const context = useBoardContext()

	const renderParticipants = context?.participants
		?.filter(value => value.id !== context.participant?.id)
		?.map(value =>  (
			<Flex 
				key={value.id}
				flexDirection="column" 
				gap="sm" 
				alignItems="center" 
				justifyContent="center"
			>
				<CardReval disabled={!value.vote} label={value.vote} />
				<Styles.CardUsername>{value.username}</Styles.CardUsername>
			</Flex>
		))

	const canShowCards = context?.participants?.map(value => !!value.vote) || [true]

	const handleRevelCards = () => {
		if (!params?.id) return
		showCards(params?.id)
	}

	const handleRestartGame = () => {
		if (!params?.id) return
		restartGame(params?.id)
	}
	
	return (
		<Styles.Main>
			<Header />
			<RegisterUser />
			<Flex flexDirection="column" gap="lg" flex={1} fullWidth justifyContent="center" alignItems="center">
				<Styles.List>{renderParticipants}</Styles.List>
				<AdminView isAdmin={context?.participant?.isAdmin}>
					{!context.isPlaying && !context.isReval && (
						<Button disabled={canShowCards.includes(false)} onClick={handleRevelCards}>show cards</Button>
					)}
				</AdminView>
				{context.isPlaying && !context.isReval && <Styles.Count>{context.countDown}</Styles.Count>}
				<AdminView isAdmin={context?.participant?.isAdmin}>
					{context.countDown === 0 && <Button variant="base" onClick={handleRestartGame}>start new game</Button>}
				</AdminView>
				<CardReval disabled={!context?.currentCard} label={context.currentCard?.label || ''} />
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
