import * as Styles from './styles'

import { AdminView, Button } from '@/src/components'
import { CardList, CardReval, RegisterUser, Header } from './components'

import { Flex } from '@/src/styles'

import { useRoom } from '@/src/providers'

import { useEffect, useMemo, useState } from 'react'
import { useTimeout } from '@/src/hooks'

export function Room () {
	const context = useRoom()
	const [isMounted, setIsMounted] = useState(false)

	const renderParticipants = useMemo(() => context?.participants
		?.map(value =>  (
			<Flex 
				key={value.id}
				flexDirection="column" 
				gap="sm" 
				alignItems="center" 
				justifyContent="center"
			>
				<CardReval 
					isSpectator={value?.isSpectator} 
					disabled={!value.vote} 
					label={value.vote} 
				/>
				<Styles.CardUsername>{value.name}</Styles.CardUsername>
			</Flex>
		)), [context?.participants])
	
	useTimeout(() => {
		setIsMounted(true)
	}, 1000)

	return (
		<Styles.Main>
			<Header />
			{isMounted && <RegisterUser />}
			<Flex flexDirection="column" gap="lg" flex={1} fullWidth justifyContent="center" alignItems="center">
				<AdminView>
					{!context?.data?.isReveal && !context?.data?.isPlaying  && (
						<Button 
							disabled={!context.canReveal} 
							onClick={context?.reveal}
						>
						show cards
						</Button>
					)}
					{context.countDown === 0 && context?.data?.isPlaying &&  <Button variant="base" onClick={context?.restart}>start new game</Button>}
				</AdminView>
				{context?.data?.isPlaying && context?.countDown > 0 && <Styles.Count>{context.countDown}</Styles.Count>}
				<Styles.List>{renderParticipants}</Styles.List>
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
