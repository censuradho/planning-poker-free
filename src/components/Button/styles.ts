import { styled } from '@/stitches.config'

export const Button = styled('button', {
	fontWeight: 500,
	borderRadius: '$sm',
	transition: '0.2s',
	textDecoration: 'none',
	outline: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
  
	variants: {
		color: {
			underline: {
				color: '$text',
				padding: '0.2rem',
				height: 'max-content',

				'&:hover, &:focus': {
					background: '$foreground',
					color: '$title',
					textDecoration: 'underline',
				}
			},
			base: {
				color: '$text',
				height: '2.4rem',
				padding: '0.8rem',

				'&:hover, &:focus': {
					background: '$foreground',
					color: '$title',
				}
			},
			primary: {
				color: '#fff',
				background: '$primary',
				padding: '0 0.8rem',
				minHeight: '2.4rem',
				minWidth: '7.5rem',

				'&:hover, &:focus': {
					background: '$primaryDark'
				},

				'&:disabled': {
					background: '$primaryLight',
					opacity: '0.5',
					cursor: 'auto'
				}

			}
		},
		fullWidth: {
			true: {
				width: '100%'
			},
			false: {
				width: 'auto'
			}
		}
	},
	defaultVariants: {
		color: 'primary'
	}
})