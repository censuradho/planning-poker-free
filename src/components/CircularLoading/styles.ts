import { styled } from '@/stitches.config'
import CircularLoadingSvg from '@/src/assets/circularLoading.svg?component'

export const Icon = styled(CircularLoadingSvg, {

  '& circle': {
    stroke: '$foreground'
  },
  '& circle:nth-child(2)': {
    stroke: '$primary'
  },

  variants: {
    size: {
      sm: {
        width: '2rem',
        height: '2rem',
      },
      md: {
        width: '3.5rem',
        height: '3.5rem',
      }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
})