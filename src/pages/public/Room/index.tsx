import * as Styles from './styles'

import { AdminView, Button } from '@/src/components'
import { CardList, CardReval, RegisterUser, Header } from './components'

import { Flex } from '@/src/styles'

import { useParams } from 'react-router-dom'
import { useRoom } from '@/src/providers'

export function Room () {
	const params = useParams<{ id: string }>()
	const context = useRoom()
	// const context = useBoardContext()

	const renderParticipants = context?.participants
		?.map(value =>  (
			<Flex 
				key={value.id}
				flexDirection="column" 
				gap="sm" 
				alignItems="center" 
				justifyContent="center"
			>
				<CardReval disabled={!value.vote} label={value.vote} />
				<Styles.CardUsername>{value.name}</Styles.CardUsername>
			</Flex>
		))

	// const canShowCards = context?.participants?.map(value => !!value.vote) || [true]

	return (
		<Styles.Main>
			<Header />
			{/* <RegisterUser /> */}
			<Flex flexDirection="column" gap="lg" flex={1} fullWidth justifyContent="center" alignItems="center">
				<Styles.List>{renderParticipants}</Styles.List>
				{/* <AdminView>
					{!context.isPlaying && !context.isReval && (
						<Button disabled={canShowCards.includes(false)} onClick={handleRevelCards}>show cards</Button>
					)}
				</AdminView>
				{context.isPlaying && !context.isReval && <Styles.Count>{context.countDown}</Styles.Count>}
				<AdminView>
					{context.countDown === 0 && <Button variant="base" onClick={handleRestartGame}>start new game</Button>}
				</AdminView>
				<CardReval disabled={!context?.currentCard} label={context.currentCard?.label || ''} /> */}
			</Flex>	
			<Flex 
				fullWidth 
				flexDirection="column" 
				alignItems="center" 
				justifyContent="center"
			>
				<Styles.CardBoardTitle>Choose your card 👇</Styles.CardBoardTitle>
				<Styles.CardBoard>
					<CardList />
				</Styles.CardBoard>
			</Flex>

		</Styles.Main>
	)
}
