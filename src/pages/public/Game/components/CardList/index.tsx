import { Card, useBoardContext } from '@/src/providers'
import { voteRoom } from '@/src/services/socket/gameboard'
import { memo } from 'react'

import * as Styles from './styles'

interface CardListProps {}

function BaseCardList (props: CardListProps) {
	const context = useBoardContext()

	const fibonacci: Card[] = [
		{
			label: '0',
			value: '0'
		},
		{
			label: '1',
			value: '1'
		},
		{
			label: '3',
			value: '3'
		},
		{
			label: '5',
			value: '5'
		},
		{
			label: '8',
			value: '8'
		},
		{
			label: '13',
			value: '13'
		},
		{
			label: '21',
			value: '21'
		},
		{
			label: '34',
			value: '34'
		},
		{
			label: '55',
			value: '55'
		},
		{
			label: '89',
			value: '89'
		},
		{
			label: '?',
			value: ''
		},
	]

	const toggleSelected = (value: Card) => {
		context.setCurrentCard(prevState => prevState === value ? null : value)
	}

	const handleVote = (card: Card) => {
		if (!context.participant) return

		voteRoom({
			room_id: context.participant?.room_id,
			user_id: context?.participant.id,
			vote: card.label
		})
		toggleSelected(card)
	}
	const renderCards = fibonacci?.map((value, index) => (
		<Styles.Card isSelected={value.value === context?.currentCard?.value} key={index}>
			<Styles.Button onClick={() => handleVote(value)}>{value.label}</Styles.Button>
		</Styles.Card>
	))
  
	return (
		<Styles.List>{renderCards}</Styles.List>
	)
}

export const CardList = memo(BaseCardList)