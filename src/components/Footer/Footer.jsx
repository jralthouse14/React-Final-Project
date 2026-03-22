import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="container__footer">
            <img className="footer__img" src="https://i.fbcd.co/products/resized/resized-750-500/4170e6ab0f6d30dca42c2df7cf52fb999351cb63d11203175d4ddb638955e9c2.jpg"></img>
            <div className="footer__copyright--full">
                <div className="footer__copyright">
                    Copyright &copy; 2026
                </div>
                <div className="footer__copyright">
                    Justin Althouse productions.
                </div>
                <div className="footer__copyright">
                    All rights reserved.
                </div>
            </div>
            <ul className="nav__links2">
                <Link to="/" className="nav__link2">Home</Link>
                <Link to="/browse" className="nav__link2">Find Your Movie</Link>
                <Link to="/contact" className="nav__link2">Contact</Link>
            </ul>    
    </div>
  )
}

export default Footer
