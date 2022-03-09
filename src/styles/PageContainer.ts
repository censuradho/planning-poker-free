import { styled } from '@/stitches.config'

export const PageContainer = styled('div', {
  marginTop: '3rem',
  width: '100%',
  maxWidth: '34rem',
  margin: '0 auto',
  padding: '1rem',

  '@md': {
    maxWidth: '49rem',
  },

  '@lg': {
    maxWidth: '68rem',
  },

  variants: {
    size: {
      md: {
        maxWidth: '44rem',
        margin: 0,
        
        '@md': {
          padding: '1rem 1rem 1rem 3rem'
        } 
      }
    }
  }
  
})