import { Button, Flex, Modal, TextField } from '@/src/components'

import { useBooleanToggle } from '@/src/hooks'
import { useToast } from '@/src/providers'

import { memo, ReactNode } from 'react'

interface ShareModalProps {
  children: ReactNode
}

function BaseShareModal ({ children }: ShareModalProps) {
	const { openNotification } = useToast()

	const [isOpen, toggleIsOpen] = useBooleanToggle(false)

	const handleCopyClipBoard = () => {
		navigator.clipboard.writeText(window.location.href)

		openNotification({
			icon: {
				name: 'done',
				color: 'green'
			},
			title: 'Invitation link copied to clipboard!',
			description: 'Share it to your teammates and start playing!'
		})
		toggleIsOpen()
	}

	const handleOpen = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		event.stopPropagation()
		toggleIsOpen()
	}

	return (
		<>
			<div onClick={handleOpen}>
				{children}
			</div>
			{isOpen && (
				<Modal open={isOpen}>
					<Flex gap={1} flexDirection="column">
						<TextField value={window.location.href} />
						<Button 
							onClick={handleCopyClipBoard} 
							fullWidth>Copy link</Button>
					</Flex>
				</Modal>
			)}
		</>
	)
}

export const ShareModal = memo(BaseShareModal)