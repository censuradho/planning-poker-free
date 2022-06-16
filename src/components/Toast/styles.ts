import { keyframes, styled } from '@/stitches.config'

import * as Toast from '@radix-ui/react-toast'

const VIEWPORT_PADDING = 25

const hide = keyframes({
	'0%': { opacity: 1 },
	'100%': { opacity: 0 },
})

const slideIn = keyframes({
	from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
	to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
	from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
	to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const Viewport = styled(Toast.Viewport, {
	position: 'fixed',
	bottom: 0,
	right: 0,
	display: 'flex',
	flexDirection: 'column',
	padding: VIEWPORT_PADDING,
	gap: 10,
	minWidth: '25rem',
	maxWidth: '100vw',
	margin: 0,
	listStyle: 'none',
	zIndex: 2147483647,
	outline: 'none',
})

export const Root = styled(Toast.Root, {
	borderRadius: '$sm',
	boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
	background: '$background',
	padding: '$sm',
  
	'@media (prefers-reduced-motion: no-preference)': {
		'&[data-state="open"]': {
			animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
		},
		'&[data-state="closed"]': {
			animation: `${hide} 100ms ease-in forwards`,
		},
		'&[data-swipe="move"]': {
			transform: 'translateX(var(--radix-toast-swipe-move-x))',
		},
		'&[data-swipe="cancel"]': {
			transform: 'translateX(0)',
			transition: 'transform 200ms ease-out',
		},
		'&[data-swipe="end"]': {
			animation: `${swipeOut} 100ms ease-out forwards`,
		},
	},
})

export const Title = styled(Toast.Title, {
	color: '$text',
	fontSize: '$md',
	fontWeight: 600,
})

export const Description = styled(Toast.Description, {
	color: '$text',
})

export const Action = styled(Toast.Action, {
  
})

export const Provider = styled(Toast.Provider, {
  
})

export const Close = styled(Toast.Close, {
  
})