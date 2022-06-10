import { styled } from '@/stitches.config'

export const Container = styled('div', {
	width: '100%',
	position: 'relative',
	display: 'flex',
	alignItems: 'center'
})

export const Label = styled('label', {
	color: '$text',
	display: 'block',
	marginBottom: '1rem'
})

export const LeftIcon = styled('button', {
	position: 'absolute',
	left: '0.85rem',
	display: 'flex',
	alignItems: 'center',
})

export const RightIcon = styled('button', {
	position: 'absolute',
	right: '0.85rem',
	display: 'flex',
	alignItems: 'center',
})

export const Input = styled('input', {
	color: '$text',
	width: '100%',
	padding: '0.85rem 1rem',
	borderRadius: '$sm',
	outline: 'none',
	border: '2px solid transparent',
	background: '$foreground',
	fontSize: '0.85rem',
	fontWeight: 500,
  
	'&:focus': {
		border: '2px solid $primary'
	},

	variants: {
		withIcon: {
			true: {
				paddingRight: '2.4rem',
				paddingLeft: '2.4rem'
			}
		}
	}
})