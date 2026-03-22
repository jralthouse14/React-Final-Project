import React, { useState } from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
import { FaImdb, FaBars, FaX } from 'react-icons/fa6'
import Backdrop from '../Backdrop/Backdrop'

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="nav__container">
        <div className="nav__row">
            <figure className="logo">
                <FaImdb className="cinema__logo" />
            </figure>
            <div className="nav__list">
                <ul className="nav__links">
                  <Link to="/" className="nav__link">Home</Link>
                  <Link to="/browse" className="nav__link">Find Your Movie</Link>
                  <Link to="/contact" className="nav__link nav__link--primary">CONTACT</Link>
                </ul>
            </div>
            <button className="btn__menu menu--open">
                <FaBars className="fa-bars btn__menu" onClick={() => setIsMenuOpen(true)} />
                <Backdrop show={isMenuOpen} className="btn__menu btn__menu--close" onClick={() => setIsMenuOpen(false)} />
                    {isMenuOpen ? (
                        <div className="menu__backdrop">
                            <button class="btn__menu btn__menu--close">
                                <FaX className= "btn__menu menu--open" onClick={() => setIsMenuOpen(false)} />
                            </button>
                            <ul class="menu__links">
                                <li class="menu__list">
                                <Link to="/" className="menu__link">Home</Link>
                                </li>
                                <li class="menu__list">
                                <Link to="/browse" className="menu__link">Find Your Movie</Link>
                                </li>
                                <li class="menu__list">
                                <Link to="/contact" className="menu__link">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    ): null}
            </button>
        </div>
    </div>
  )
}

export default Nav
