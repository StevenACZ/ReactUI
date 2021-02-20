import React from 'react'
import CardsContainer from '../CardsContainer'
import { store } from '../../data/store'

const Main = () => {
  return (
    <main className="main">
      {
        store.map( ({ id, date, cards }) => (
          <CardsContainer
            key={ id }
            date={ date }
            cards={ cards }
          />
        ))
      }
    </main>
  )
}

export default Main
