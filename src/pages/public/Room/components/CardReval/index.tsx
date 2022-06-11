import { useBoardContext } from '@/src/providers'
import { memo } from 'react'

import * as Styles from './styles'

interface CardRevalProps {
  label: string;
	disabled?: boolean
}

function BaseCardReval ({ label, disabled }: CardRevalProps) {
	const context = useBoardContext()
  
	return (
		<Styles.Card isReval={context?.isReval}>
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