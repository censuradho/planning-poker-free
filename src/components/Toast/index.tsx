import { useToast } from '@/src/providers'
import { memo } from 'react'
import { Flex } from '../Flex'
import { Icon } from '../icons'

import * as Styles from './styles'

function BaseToast () {
	const { context, isOpen, setIsOpen } = useToast()

	return (
		<Styles.Root 
			open={isOpen} 
			onOpenChange={setIsOpen}
		>
			<Flex alignItems="center" gap={1}>
				{context?.icon && <Icon {...context?.icon} />}
				<Flex flexDirection="column">
					<Styles.Title>{context?.title}</Styles.Title>
					<Styles.Description>{context?.description}</Styles.Description>
				</Flex>
			</Flex>
		</Styles.Root>
	)
}

export const Toast = memo(BaseToast)