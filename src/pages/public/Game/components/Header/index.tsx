import { Switch } from '@/src/components'
import { DARK_THEME, LIGHT_THEME } from '@/src/constants/theme'
import { useLocalStorage } from '@/src/hooks'
import { THEME_KEY, useTheme } from '@/src/providers'
import { memo } from 'react'

import * as Styles from './styles'

interface HeaderProps {}

function BaseHeader (props: HeaderProps) {
	const { toggleTheme, currentTheme } = useTheme()


	return (
		<Styles.Header>
			<Switch defaultChecked={currentTheme === LIGHT_THEME}  onCheckedChange={toggleTheme} label="switch theme dark" />
		</Styles.Header>
	)
}

export const Header = memo(BaseHeader)