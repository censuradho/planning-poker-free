
import { createTheme  } from '@/stitches.config'
import { darken, lighten } from 'polished'

export const darkTheme = createTheme('dark-theme', {
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
})