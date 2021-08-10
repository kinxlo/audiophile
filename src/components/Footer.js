import React from 'react'
import { Link } from 'react-router-dom'
import { GrFacebook, GrTwitter, GrInstagram } from 'react-icons/gr'
import '../style/Footer.scss'

function Footer() {
  return (
    <footer>
      <section className='cc-container'>
        <nav className='footer-nav'>
          <ul>
            <Link to='/'>
              <img
                src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958945/audiophile/assets/shared/desktop/logo_usidfy.svg'
                alt='LOGO'
              />
            </Link>
            <span>
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
            </span>
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
              <GrFacebook className = "icon"/>
            </Link>
            <Link to='/'>
              <GrTwitter className = "icon"/>
            </Link>
            <Link to='/'>
              <GrInstagram className = "icon"/>
            </Link>
          </div>
          <h6>Copyright 2021. All Rights Reserved</h6>
        </div>
      </section>
    </footer>
  )
}

export default Footer
