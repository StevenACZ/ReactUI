import React from 'react'

const Link = ({
  text,
  active = false
}) => {
  return (
    <button
      className={ active ? 'btn active' : 'btn' }
    >
      { text }
    </button>
  )
}

export default Link
