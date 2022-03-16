import { memo } from 'react'
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'

import { routePaths } from '@/src/constants/routes'
import { Game, NewGame } from '@/src/pages'
import { BoardProvider } from '@/src/providers'

function BasePublicRoutes () {
	return (
		<Routes>
			<Route element={<BoardProvider />}>
				<Route path={routePaths.game} element={<Game />} />
				<Route path={routePaths.newGame} element={<NewGame />} />
				<Route path="*" element={<Navigate to={routePaths.newGame} />} />
			</Route>
		</Routes>
	)
}

export const PublicRoutes = memo(BasePublicRoutes)