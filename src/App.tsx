import { Notification } from '@/src/components'

import { Routes } from './routes'

import { ThemeProvider } from './providers'
import { AuthProvider } from './providers'

function App() {
	return (
		<ThemeProvider>
			<AuthProvider>
				<Routes />
				<Notification />
			</AuthProvider>
		</ThemeProvider>
	)
}

export default App
