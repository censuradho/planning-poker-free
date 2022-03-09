import { styled } from '@/stitches.config'
import { Link } from 'react-router-dom'


export const Anchor = styled(Link, {
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
      base: {
        color: '$text',
        padding: '0.2rem',
        height: 'max-content',

        '&:hover, &:focus': {
          background: '$foreground',
          color: '$textDark',
          textDecoration: 'underline',
        }
      },
    }
  },
  defaultVariants: {
    color: 'base'
  }
})