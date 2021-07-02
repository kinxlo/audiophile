import React from 'react'
import { Link } from 'react-router-dom'
import { GrFacebook, GrTwitter, GrInstagram } from 'react-icons/gr'
import '../style/Footer.scss'

function Footer() {
  return (
    <footer>
      <section className='cc-container'>
        <nav>
          <Link to='/'>
            <img
              src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958945/audiophile/assets/shared/desktop/logo_usidfy.svg'
              alt='LOGO'
            />
          </Link>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>Headphones</Link>
            </li>
            <li>
              <Link to='/'>Speakers</Link>
            </li>
            <li>
              <Link to='/'>Earphones</Link>
            </li>
          </ul>
        </nav>
        <div className='footer-text'>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className='footer-socials'>
            <Link to='/'>
              <GrFacebook />
            </Link>
            <Link to='/'>
              <GrTwitter />
            </Link>
            <Link to='/'>
              <GrInstagram />
            </Link>
          </div>
          <small>Copyright 2021. All Rights Reserved</small>
        </div>
      </section>
    </footer>
  )
}

export default Footer
