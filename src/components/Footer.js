import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { GrFacebook, GrTwitter, GrInstagram } from 'react-icons/gr'
import '../style/Footer.scss'

function Footer() {
  return (
    <footer>
      <section className='cc-container'>
        <nav className='footer-nav'>
          <ul>
            <NavLink to='/'>
              <img
                src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958945/audiophile/assets/shared/desktop/logo_usidfy.svg'
                alt='LOGO'
              />
            </NavLink>
            <span>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/headphones'>Headphones</NavLink>
              </li>
              <li>
                <NavLink to='/speakers'>Speakers</NavLink>
              </li>
              <li>
                <NavLink to='/earphones'>Earphones</NavLink>
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
              <GrFacebook className='icon' />
            </Link>
            <Link to='/'>
              <GrTwitter className='icon' />
            </Link>
            <Link to='/'>
              <GrInstagram className='icon' />
            </Link>
          </div>
          <h6>Copyright 2021. All Rights Reserved</h6>
        </div>
      </section>
    </footer>
  )
}

export default Footer
