import { styled } from '@/stitches.config'

export const Root = styled('div', {
  background: '$foreground',
  borderRadius: '50%',
  position: 'relatove',

  variants: {
    size: {
      sm: {
        width: '2.4rem',
        height: '2.4rem',
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