import { Notification } from '@/src/components'

import { Routes } from './routes'

import { ThemeProvider } from './providers'

function App() {
	return (
		<ThemeProvider>
			<Routes />
			<Notification />
		</ThemeProvider>
	)
}

export default App
