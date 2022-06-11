import { memo } from 'react'
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'

import { routePaths } from '@/src/constants/routes'
import * as Pages from '@/src/pages'
import { RoomProvider } from '@/src/providers'

function BasePublicRoutes () {
	return (
		<Routes>
			<Route element={<RoomProvider />}>
				{/* <Route path={routePaths.game} element={<Pages.Game />} /> */}
				<Route path={routePaths.room} element={<Pages.Room />} />
				<Route path={routePaths.newRoom} element={<Pages.NewGame />} />
				<Route path="*" element={<Navigate to={routePaths.newRoom} />} />
			</Route>
		</Routes>
	)
}

export const PublicRoutes = memo(BasePublicRoutes)