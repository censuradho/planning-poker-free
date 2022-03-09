import { memo } from 'react'

import * as Styles from './styles'

function BaseCircularLoading () {
  return (
    <Styles.Icon />
  )
}

export const CircularLoading = memo(BaseCircularLoading)