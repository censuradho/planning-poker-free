import { memo } from 'react'

import * as Styles from './styles'

interface CardListProps {}

function BaseCardList (props: CardListProps) {
  const fibonacci = ['0', '1', '3', '5', '8', '13', '21', '34', '55', '89', '?']

  const renderCards = fibonacci.map((value, index) => (
    <Styles.Card key={index}>
      <Styles.Button>{value}</Styles.Button>
    </Styles.Card>
  ))
  
  return (
    <Styles.List>{renderCards}</Styles.List>
  )
}

export const CardList = memo(BaseCardList)