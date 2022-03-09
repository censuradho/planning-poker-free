import { styled } from '@/stitches.config'

export const Container = styled('div', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignImtems: 'center',
  justifyContent: 'center',
  background: '$background',

  '& svg': {
    width: '7rem',
    fill: '$primary',
  }
})