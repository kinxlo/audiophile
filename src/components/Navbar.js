import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import '../style/Navbar.scss'

function Navbar() {
  return (
    <>
      <nav className='cc-container'>
        <Link to='/'>
          <img
            src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958945/audiophile/assets/shared/desktop/logo_usidfy.svg'
            alt='LOGO'
          />
        </Link>

        <div>
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
        </div>

        <Link to='/'>
          <img
            src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958942/audiophile/assets/shared/desktop/icon-cart_reoqc1.svg'
            alt='Cart'
          />
        </Link>
      </nav>
      <hr className='cc-container' />
    </>
  )
}

export default Navbar