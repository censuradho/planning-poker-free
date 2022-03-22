import { styled } from '@/stitches.config'


export const InnerCard = styled('div', {
	position: 'relative',
	width: '100%',
	height: '100%',
	transformStyle: 'preserve-3d',
	transition: 'transform 0.8s',
	boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
	borderRadius: '$sm',

})

export const Base = styled('div', {
	position: 'absolute',
	width: '100%',
	height: '100%',
	backfaceVisibility: 'hidden',
	border: '2px solid $primary',
	borderRadius: '$sm',
})
export const Front = styled(Base, {
	background: '$primary',
	
	variants: {
		disabled: {
			true: {
				opacity: '0.4'
			}
		}
	}
})

export const Back = styled(Base, {
	background: 'transparent',
	transform: 'rotateY(180deg)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
})

export const Card = styled('div', {
	background: 'transparent',
	perspective: '1000px',

	width: '5rem',
	height: '7rem',
  
	variants: {
		isReval: {
			true: {
				[`& ${InnerCard}`]: {
					transform: 'rotateY(180deg)'
				}
			}
		},
	}
})


export const Label = styled('span', {
	color: '$primary'
})