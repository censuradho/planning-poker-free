import { Avatar, Switch } from '@/src/components'
import { LIGHT_THEME } from '@/src/constants/theme'
import { useBoardContext, useTheme } from '@/src/providers'
import { Flex } from '@/src/styles'
import { memo } from 'react'

import * as Styles from './styles'

function BaseHeader () {
	const { toggleTheme, currentTheme } = useTheme()
	const context = useBoardContext()

	return (
		<Styles.Header>
			<Flex gap="sm" alignItems="center">
				<Avatar alt={context.participant?.username || 'default'} />
				<Styles.Username>{context.participant?.username}</Styles.Username>
			</Flex>
			<Switch defaultChecked={currentTheme === LIGHT_THEME}  onCheckedChange={toggleTheme} label="switch theme dark" />
		</Styles.Header>
	)
}

export const Header = memo(BaseHeader)