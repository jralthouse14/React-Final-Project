import React, { useState, useEffect } from 'react'
import "./Contact.css"
import Nav from '../../components/Navigation/Nav'
import Footer from '../../components/Footer/Footer'
import { FaClapperboard, FaVideo } from 'react-icons/fa6'

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
        }, []);

    if (isLoading) {
    return (
    <>
    <Nav />
        <div className="loading__movies">
            <h1 className="loading__movies--message">Loading...</h1>
            <div className="loading__camera--container">
            <figure className="camera__figure">
                <FaClapperboard className="loading__camera" />
            </figure>
            <figure className="camera__figure">
                <FaClapperboard className="loading__camera" />
            </figure>
            <figure className="camera__figure">
                <FaClapperboard className="loading__camera" />
            </figure>
            </div>
        </div>
    <Footer />
    </>
    )
    }

  return (
    <div>
      <Nav />
      <div className="contact-container">
        <div className="video__image--contact">
            <FaVideo className="video__image--font" />
        </div>
        <div className="contact-card">
            <div className="contact-title">
                <h1 className="contact-name">CONTACT ME:</h1>
                <h2 className="contact-name1">JUSTIN ALTHOUSE</h2>
            </div>
            <div className="contact-title">
                <p className="contact-info"><b>ADDRESS:</b></p>
                <p className="contact-info">1234 Anywhere St.</p>
                <p className="contact-info">Dayton, OH 45458</p>
            </div>
            <div className="contact-title">
                <p className="contact-info"><b>PHONE:</b></p>
                <p className="contact-info">937-123-4567</p>
            </div>
            <div className="contact-title">
                <p className="contact-info"><b>EMAIL:</b></p>
                <p className="contact-info">justin.althouse@aol.com</p>
            </div>
        </div>
        <div className="video__image--contact video__image--contact2">
            <FaVideo className="video__image--font" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
