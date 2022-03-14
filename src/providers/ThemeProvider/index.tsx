import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react'

import { darkTheme, lightTheme } from '@/src/theme'
import { DARK_THEME, LIGHT_THEME  } from '@/src/constants/theme'
import { globalStyle } from '@/stitches.config'

interface ThemeContextData {
  toggleTheme: () => void;
  theme: Pick<(typeof lightTheme), 'colors'>;
  currentTheme: string
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider ({ children }: ThemeProviderProps) {
	const THEME_KEY = '@planningPoker:theme'

	const mapTheme = useMemo(() => ({
		[DARK_THEME]: darkTheme,
		[LIGHT_THEME]: lightTheme
	}), [])

	const isDarkThemePreferences = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

	const savedTheme = 
    localStorage.getItem(THEME_KEY) 
    || (!isDarkThemePreferences ? DARK_THEME : LIGHT_THEME)

	const [currentTheme, setCurrentTheme] = useState(savedTheme)
	const [theme, setTheme] = useState(mapTheme[currentTheme as keyof typeof mapTheme])

	useEffect(() => {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
			const newColorScheme = event.matches ? DARK_THEME : LIGHT_THEME
			setCurrentTheme(newColorScheme)
		})
	}, [])



	const toggleTheme = useCallback(() => {    
		setCurrentTheme(prevState => prevState === DARK_THEME ? LIGHT_THEME : DARK_THEME)
	}, [])

	const handleSavePreference = () => {
		localStorage.setItem(THEME_KEY, currentTheme)
	}

	useEffect(() => {
		document.body.classList.remove('theme-default', darkTheme)
		document.body.classList.add(mapTheme[currentTheme as keyof typeof mapTheme])

		setTheme(mapTheme[currentTheme as keyof typeof mapTheme])
		handleSavePreference()
	}, [currentTheme])

	useEffect(() => {
		globalStyle()
	}, [])


	return (
		<ThemeContext.Provider value={{ 
			toggleTheme, 
			theme, 
			currentTheme 
		}}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => useContext(ThemeContext)

