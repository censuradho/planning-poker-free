import { styled } from '@/stitches.config'

export const Button = styled('button', {
  background: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  padding: '0.5rem',
  maxWidth: 'max-content',

  '&:hover': {
    background: '$foreground',
  },

  variants: {
    size: {
      sm: {
        minWidth: '2.4rem',
        minHeight: '2.4rem',
      }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
})