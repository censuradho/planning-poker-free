import { memo } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import { routePaths } from '@/src/constants/routes';
import { Game } from '@/src/pages';

function BasePublicRoutes () {
  return (
    <Routes>
      <Route path={routePaths.app} element={<Game />} />
    </Routes>
  )
}

export const PublicRoutes = memo(BasePublicRoutes)