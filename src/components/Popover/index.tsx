import { memo } from 'react'

import * as Styles from './styles'

interface PopoverProps {}

function BasePopover (props: PopoverProps) {
	return (
		<Styles.Root>
      
		</Styles.Root>
	)
}

export const Popover = memo(BasePopover)