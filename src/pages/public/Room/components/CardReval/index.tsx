import { Icon } from '@/src/components'
import { useRoom } from '@/src/providers'
import { memo } from 'react'

import * as Styles from './styles'

interface CardRevalProps {
  label: string;
	disabled?: boolean;
	isSpectator?: boolean
}

function BaseCardReval ({ label, disabled, isSpectator }: CardRevalProps) {
	const context = useRoom()
  
	return (
		<Styles.Card isReval={context?.data?.isReveal}>
			<Styles.InnerCard>
				<Styles.Front disabled={disabled}></Styles.Front>
				<Styles.Back>
					{isSpectator ? (
						<Styles.Label>
							<Icon name="eye" color="primary" />
						</Styles.Label>
					): (
						<Styles.Label>{label}</Styles.Label>
					)}
				</Styles.Back>
			</Styles.InnerCard>
		</Styles.Card>
	)
}

export const CardReval = memo(BaseCardReval)