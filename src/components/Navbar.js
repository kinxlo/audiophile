import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.scss'

import CartModal from './CartModal'

function Navbar() {
  // *set modal State in details page to false
  const [show, isShown] = useState(false)
  // handle button event to show the modal
  const showModal = (e) => {
    e.preventDefault()
    isShown(true)
  }

  const hideModal = () => {
    isShown(false)
  }
  return (
    <>
      <nav className='cc-container'>
        <CartModal show={show} handleClose={hideModal} />
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
            <Link to='/headphones'>Headphones</Link>
          </li>
          <li>
            <Link to='/speakers'>Speakers</Link>
          </li>
          <li>
            <Link to='/earphones'>Earphones</Link>
          </li>
        </div>

        <img
          onClick={showModal}
          src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958942/audiophile/assets/shared/desktop/icon-cart_reoqc1.svg'
          alt='Cart'
        />
      </nav>
      <hr className='cc-container' />
    </>
  )
}

export default Navbar
