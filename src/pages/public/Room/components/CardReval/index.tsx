import { useRoom } from '@/src/providers'
import { memo } from 'react'

import * as Styles from './styles'

interface CardRevalProps {
  label: string;
	disabled?: boolean
}

function BaseCardReval ({ label, disabled }: CardRevalProps) {
	const context = useRoom()
  
	return (
		<Styles.Card isReval={context?.data?.isReveal}>
			<Styles.InnerCard>
				<Styles.Front disabled={disabled}></Styles.Front>
				<Styles.Back>
					<Styles.Label>{label}</Styles.Label>
				</Styles.Back>
			</Styles.InnerCard>
		</Styles.Card>
	)
}

export const CardReval = memo(BaseCardReval)