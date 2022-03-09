import { createStitches } from '@stitches/react';
import { darken, lighten } from 'polished';


export const { styled: Styled, globalCss, getCssText, theme, css, keyframes, createTheme } = createStitches({
  theme: {
    colors: {
      background: '#F7FAFC',
      backgroundDark: darken(0.4, '#F7FAFC'),
      backgroundLight: darken(0.4, '#F7FAFC'),
      foreground: '#EDF2F7',
      foregroundDark: darken(0.4, '#EDF2F7'),
      foregroundLight: lighten(0.4, '#EDF2F7'),
      text: '#4A5568',
      textDark: darken(0.4, '#4A5568'),
      title: '#1A202C',
      boxShadow: 'rgba(0, 0, 0, .3)',
      green: '#48BB78',
      primary: '#0BC5EA',
      primaryDark: darken(.1, '#0BC5EA'),
      primaryLight: lighten(.1, '#0BC5EA'),
      red: '#E53E3E',
    },
    radii: {
      sm: '.4rem'
    },
    space: {
      xs: '0.85rem',
      sm: '1.5rem',
      md: '3rem',
      lg: '4.3rem',
      xlg: '5rem',
    },
    fontSizes: {
      xs: '0.85rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xlg: '2.5rem',
    },
  },
  media: {
    xs: '(min-width: 28.125rem)',
    sm: '(min-width: 40rem)',
    md: '(min-width: 45.625rem)',
    lg: '(min-width: 64rem)',
    dark: "(prefers-color-scheme: dark)",
  },
})

export const globalStyle =  globalCss({
  '*': {
    padding: '0',
    margin: '0',
    boxSizing: 'border-box',
    fontFamily: 'Poppins, sans-serif',
  },
  body: {
    backgroundColor: '$background',
    width: '100%',
    height: '100%'
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  h1: {
    fontWeight: '500',
    color: '$text',
  },

  hr: {
    width: '100%',
    height: 1,
    background: '$foreground',
    border: 'none'
  },
  li: {
    listStyle: 'none'
  }
})


export const styled = Styled