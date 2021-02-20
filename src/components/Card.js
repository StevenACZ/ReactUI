import React from 'react'

const Card = ({
  description,
  img,
  title
}) => {
  return (
    <div className="card">
      <img className="card__img" src={ img }/>

      <div className="card__info">
        <p>{ title }</p>
        <h2>{ description }</h2>
      </div>
    </div>
  )
}

export default Card
