
import { Routes } from './routes'

import { ThemeProvider, ToastProvider } from './providers'
import { AuthProvider } from './providers'

function App() {
	return (
		<ThemeProvider>
			<ToastProvider>
				<AuthProvider>
					<Routes />
				</AuthProvider>
			</ToastProvider>
		</ThemeProvider>
	)
}

export default App
