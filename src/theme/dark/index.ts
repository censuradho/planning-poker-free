
import { createTheme  } from '@/stitches.config'
import { darken, lighten } from 'polished'

export const darkTheme = createTheme('dark-theme', {
	colors: {
		background: '#121212',
		backgroundDark: darken(0.4, '#121212'),
		backgroundLight: darken(0.4, '#121212'),
		foreground: '#212121',
		foregroundDark: darken(0.4, '#212121'),
		foregroundLight: lighten(0.4, '#212121'),
		text: '#A0A0A0',
		textDark: darken(0.4, '#A0A0A0'),
		title: '#E0E0E0',
		boxShadow: 'rgba(0, 0, 0, .3)',
		green: '#48BB78',
		primary: '#0BC5EA',
		primaryDark: darken(.1, '#0BC5EA'),
		primaryLight: lighten(.1, '#0BC5EA'),
		red: '#E53E3E',
	},
})