import { styled } from '@/stitches.config'

export const Header = styled('header', {
	width: '100%',
	padding: '1rem',
	display: 'flex',
	justifyContent: 'space-between'
})

export const Username = styled('span', {
	fontSize: '1rem',
	color: '$text',
	cursor: 'pointer'
})