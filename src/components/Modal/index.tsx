import { memo, ReactNode } from 'react'

import * as Styles from './styles'

interface ModalProps {
  open?: boolean
  children: ReactNode
}

function BaseModal ({ children, open }: ModalProps) {
	return (
		<Styles.Root open={open}>
			<Styles.Portal>
				<Styles.Overlay/>
				<Styles.Content>{children}</Styles.Content>
			</Styles.Portal>
		</Styles.Root>
	)
}

export const Modal = memo(BaseModal)