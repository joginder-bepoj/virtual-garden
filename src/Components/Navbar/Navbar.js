import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { UserStore } from '../.././Storage/UserStorage'
import { FaSun } from 'react-icons/fa6'
import { BsFillMoonFill } from 'react-icons/bs'

function Navbar() {
  const { userLightTheme, setUserTheme } = UserStore()
  return (
    <nav className={`navbar ${userLightTheme ? "theme-bg-light" : "theme-bg-dark light-shadow"} sticky-top shadow navbar-expand-lg `}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          Virtual Garden
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${!userLightTheme && 'navbar-collapse-bg'} collapse navbar-collapse `} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="d-flex" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item align-self-center">
                <div className='cursor-pointer mb-1' onClick={() => setUserTheme(!userLightTheme)}> {!userLightTheme ? <FaSun className='icon' /> : <BsFillMoonFill className='icon' />}</div>

              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>


            </ul>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar