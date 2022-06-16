import { memo, ReactNode } from 'react'

import * as Styles from './styles'

interface ModalProps {
  open?: boolean;
	onOpenChange?: (state?: boolean) => void;
  children: ReactNode
}

function BaseModal ({ children, open, onOpenChange }: ModalProps) {
	if (!open) return null
	
	return (
		<Styles.Root  open={open} onOpenChange={onOpenChange}>
			<Styles.Portal>
				<Styles.Overlay/>
				<Styles.Content onCloseAutoFocus={() => onOpenChange?.(!open)}>{children}</Styles.Content>
			</Styles.Portal>
		</Styles.Root>
	)
}

export const Modal = memo(BaseModal)