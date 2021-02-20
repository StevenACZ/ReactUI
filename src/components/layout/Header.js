import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container__buttons">
        <button className="btn">Inicio</button>
        <button className="btn active">Hoy</button>
        <button className="btn">Siguiendo</button>
      </div>

      <div className="header-container__input">
        <i className="ri-search-line"></i>
        <input placeholder="Buscar" />
      </div>

      <div className="header-container__icons">
        <i className="ri-notification-2-fill"></i>
        <i className="ri-message-2-fill"></i>
        <i className="ri-user-3-fill"></i>
      </div>
    </header>
  )
}

export default Header
