import { Avatar, DropDown, Switch } from '@/src/components'
import { LIGHT_THEME } from '@/src/constants/theme'
import { useRoom, useTheme } from '@/src/providers'
import { Flex } from '@/src/styles'
import { memo } from 'react'

import { ShareModal } from './components'

import * as Styles from './styles'

function BaseHeader () {
	const { toggleTheme, currentTheme } = useTheme()
	const context = useRoom()

	return (
		<>
			<ShareModal />
			<Styles.Header>
				<DropDown>
					<Flex gap="sm" alignItems="center">
						<Avatar alt={context.player?.name || 'default'} />
						<Styles.Username>{context.player?.name}</Styles.Username>
					</Flex>
				</DropDown>
				<Switch 
					defaultChecked={currentTheme === LIGHT_THEME}  
					onCheckedChange={toggleTheme} 
					label="🌒 switch dark theme" 
				/>
			</Styles.Header>
		</>
	)
}

export const Header = memo(BaseHeader)