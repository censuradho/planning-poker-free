import { useRoom } from '@/src/providers'
import { updatePlayer } from '@/src/services/firebase'
import { memo, ReactNode } from 'react'
import { Flex } from '../Flex'
import { Switch } from '../Form'
import { Icon } from '../icons'

import * as Styles from './styles'

interface Item {
  label: string
}

interface DropDownProps {
  children: ReactNode;
}

function BaseDropDown ({ children }: DropDownProps) {
	const context = useRoom()
  
	const handleToggleSpectatorMode = async () => {
		if (!context?.player || !context?.data?.id) return
    
		await updatePlayer(context?.data?.id, context?.player?.id, {
			isSpectator: !context?.player?.isSpectator,
			...(!context?.player?.isSpectator && ({ vote: '' }))
		})
	}

	return (
		<Styles.Root>
			<Styles.Trigger asChild>
				{children}
			</Styles.Trigger>
			<Styles.Content 
				sideOffset={5} 
			>
				<Flex flexDirection="column" gap={0.5} fullWidth>
					<Styles.Item onSelect={event => event.preventDefault()}>
						<Flex gap={1} alignItems="center"  fullWidth>
							<Icon name="settings" />
							<Styles.Label>Configurações</Styles.Label>
						</Flex>
					</Styles.Item>
					<Styles.Item onSelect={event => event.preventDefault()}>
						<Flex gap={1} alignItems="center" fullWidth>
							<Icon name="eye" />
							<Styles.Label>Spectator mode</Styles.Label>
						</Flex>
						<Switch 
							checked={context?.player?.isSpectator} 
							onCheckedChange={handleToggleSpectatorMode} 
						/>
					</Styles.Item>
				</Flex>
			</Styles.Content>
		</Styles.Root>
	)
}

export const DropDown = memo(BaseDropDown)