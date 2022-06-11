import { styled } from '@/stitches.config'

export const List = styled('ul', {
	display: 'flex',
	gap: '$sm',
	paddingTop: '1rem',
	paddingRight: '1.5rem',
	overflow: 'auto',
	userSelect: 'none',
	'@md': {
		justifyContent: 'center'
	}
})

export const Card = styled('li', {
	minWidth: '3.2rem',
	minHeight: '5.4rem',
	whiteSpace: 'nowrap',
	borderRadius: '$sm',
	'&:hover': {
		transform: 'translateY(-10px)'
	},
	transition: 'transform, .2s',

	'@md': {
		minWidth: '2.8rem',
		minHeight: '4.5rem',
	},

	variants: {
		isSelected: {
			true: {
				transform: 'translateY(-10px)',
				background: '$primary',

				'& button': {
					color: 'white',
				}
			}
		}
	}
})

export const Button = styled('button', {
	border: '2px solid $primary',
	display: 'block',
	width: '100%',
	height: '100%',
	borderRadius: '$sm',
	color: '$primary',
	fontSize: '$xs',
	fontWeight: 600,
})