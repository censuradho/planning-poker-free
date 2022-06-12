import { Button, Flex, Modal, TextField } from '@/src/components'

import { useBooleanToggle } from '@/src/hooks'
import { useToast } from '@/src/providers'

import { memo } from 'react'

function BaseShareModal () {
	const { openNotification } = useToast()

	const [isOpen, toggleIsOpen] = useBooleanToggle(true)

	const handleCopyClipBoard = () => {
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

	return (
		<Modal open={isOpen}>
			<Flex gap={1} flexDirection="column">
				<TextField value={window.location.href} />
				<Button 
					onClick={handleCopyClipBoard} 
					fullWidth>Copy link</Button>
			</Flex>
		</Modal>
	)
}

export const ShareModal = memo(BaseShareModal)