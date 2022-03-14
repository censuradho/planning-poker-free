import * as SwitchPrimitive from '@radix-ui/react-switch'
import { styled } from '@/stitches.config'

export const Root = styled(SwitchPrimitive.Root, {
	all: 'unset',
	width: 42,
	height: 25,
	backgroundColor: '$foregroundDark',
	borderRadius: '9999px',
	position: 'relative',
	WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
	'&:focus': { boxShadow: '0 0 0 2px rgba(0, 0, 0, .3)' },
	'&[data-state="checked"]': { backgroundColor: '$primary' },
})

export const Thumb = styled(SwitchPrimitive.Thumb, {
	display: 'block',
	width: 21,
	height: 21,
	backgroundColor: '#FFF',
	borderRadius: '50%',
	boxShadow: '0 2px 2px $boxShadow',
	transition: 'transform 100ms',
	transform: 'translateX(2px)',
	willChange: 'transform',
	'&[data-state="checked"]': { 
		transform: 'translateX(19px)',
		backgroundColor: '#fff',
	},
})

export const Label = styled('label', {
	color: '$text',
	fontSize: '$xs',
	lineHeight: 1,
	userSelect: 'none',
	cursor: 'pointer'
})