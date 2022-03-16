import { styled } from '@/stitches.config'

export const Root = styled('div', {
	background: '$foreground',
	borderRadius: '50%',
	position: 'relatove',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
  
	variants: {
		size: {
			sm: {
				width: '3rem',
				height: '3rem',
			},
		}
	},
	defaultVariants: {
		size: 'sm'
	}
})

export const Image = styled('img', {
	width: '100%',
	height: '100%',
	borderRadius: '50%',
	objectFit: 'cover',
	objectPosition: 'center'
})

export const Fallback = styled('span', {
	fontWeight: 500
})