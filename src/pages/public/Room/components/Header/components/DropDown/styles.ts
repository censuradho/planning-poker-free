import { styled, keyframes } from '@/stitches.config'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

const slideUpAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(2px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(-2px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(-2px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(2px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' },
})

export const Root = styled(DropdownMenu.Root, {})

export const Trigger = styled(DropdownMenu.Trigger, {})

export const Content = styled(DropdownMenu.Content, {
	boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
	padding: '6px',
	background: '$background',
	borderRadius: '$sm',
	minWidth: '20rem',
	animationDuration: '400ms',
	animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
	animationFillMode: 'forwards',
	willChange: 'transform, opacity',

	'&[data-state="open"]': {
		'&[data-side="top"]': { animationName: slideDownAndFade },
		'&[data-side="right"]': { animationName: slideLeftAndFade },
		'&[data-side="bottom"]': { animationName: slideUpAndFade },
		'&[data-side="left"]': { animationName: slideRightAndFade },
	},
})

export const Label = styled(DropdownMenu.Label, {
	fontSize: '$xs',
	display: 'inline',
	lineHeight: '25px',
	color: '$text'
})

export const Item = styled(DropdownMenu.Item, {
	display: 'flex',
	alignItems: 'center',
	paddingLeft: 14,

	'&[data-disabled]': {
		color: 'rgba(0, 0, 0, .6)',
		pointerEvents: 'none',
	},

	'&:focus': {
		backgroundColor: '$foregroundDark',
		outlineColor: 'transparent',
		borderRadius: '$sm',
	},
})

export const Group = styled(DropdownMenu.Group, {})

export const Separator = styled(DropdownMenu.Separator, {})

export const ItemIndicator = styled(DropdownMenu.ItemIndicator , {})

export const Arrow = styled(DropdownMenu.Arrow , {
})



export const TriggerItem = styled(DropdownMenu.TriggerItem , {
})
