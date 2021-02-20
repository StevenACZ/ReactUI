import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Link from '../Link'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container__buttons">
        <Link
          text='Inicio'
        />
        <Link
          text='Hoy'
          active={ true }
        />
        <Link
          text='Siguiendo'
        />
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
