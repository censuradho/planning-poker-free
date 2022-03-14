import { useBoardContext } from '@/src/providers'
import { memo } from 'react'

import * as Styles from './styles'

interface CardRevalProps {
  label: string
}

function BaseCardReval ({ label }: CardRevalProps) {
	const context = useBoardContext()
  
	return (
		<Styles.Card isReval={context?.isReval} onClick={context?.toggleIsReval}>
			<Styles.InnerCard>
				<Styles.Front></Styles.Front>
				<Styles.Back>
					<Styles.Label>{label}</Styles.Label>
				</Styles.Back>
			</Styles.InnerCard>
		</Styles.Card>
	)
}

export const CardReval = memo(BaseCardReval)