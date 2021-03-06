import { styled } from '@/stitches.config'

export const Main = styled('main', {
	width: '100%',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start'
})

export const CardBoard = styled('div', {
	padding: '1rem 0 1rem 1.5rem',
	width: '100%',
})

export const CardBoardTitle = styled('span', {
	color: '$text'
})

export const Count = styled('strong', {
	fontSize: '$md',
	color: '$primary'
})


export const List = styled('ul', {
	display: 'flex',
	gap: '$md'
})

export const CardUsername = styled('span', {
	color: '$text'
}) 