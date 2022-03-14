import { memo } from 'react'
import {
	BrowserRouter, Routes as Switch, Route, Navigate
} from 'react-router-dom'
import { routePaths } from '../constants/routes'


import { PublicRoutes } from './PublicRoutes'

function BaseRoutes () {

	return (
		<BrowserRouter>
			<Switch>
				<Route path="/*" element={<PublicRoutes />} />
			</Switch>
		</BrowserRouter>
	)
}

export const Routes = memo(BaseRoutes)