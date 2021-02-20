import React from 'react'
import Card from './Card'

function CardsContainer({ cards, date }) {
  return (
    <section className="cards-container">
      <h2>{ date }</h2>

      <div className="cards-content">
        {
          cards.map( card => (
            <Card
              key={ card.id }
              { ...card }
            />
          ))
        }
      </div>
    </section>
  )
}

export default CardsContainer
