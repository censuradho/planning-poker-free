import { memo } from 'react'

import * as Styles from './styles'

interface AvatarProps {
  uri?: string;
  alt: string
}

function BaseAvatar (props: AvatarProps) {
	const getInitials = (value?: string) => {
		const initial = value || 'Username'
		const _string = initial.split(' ')

		const initialA = _string[0].substring(0, 1)
		const initialB = _string && _string.length > 1 ? _string[1].substring(0, 1) : ''

		return `${initialA}${initialB}`

	}

	return (
		<Styles.Root>
			{ props?.uri && <Styles.Image src={props?.uri} alt={props?.alt} /> }
			{ !props?.uri && <Styles.Fallback>{getInitials(props?.alt)}</Styles.Fallback> }
		</Styles.Root>
	)
}

export const Avatar = memo(BaseAvatar)