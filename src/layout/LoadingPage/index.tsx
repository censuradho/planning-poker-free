import { memo } from 'react'

import Logo from '@/src/assets/logo.svg?component'

import * as Styles from './styles'

interface LoadingPageProps {}

function BaseLoadingPage (props: LoadingPageProps) {
  return (
    <Styles.Container>
      <Logo />
    </Styles.Container>
  )
}

export const LoadingPage = memo(BaseLoadingPage)