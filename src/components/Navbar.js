import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
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
      <CartModal show={show} handleClose={hideModal} />
      <nav className='navbar navbar-expand-lg cc-container'>
        <NavLink to='/' className='navbar-brand'>
          <img
            src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958945/audiophile/assets/shared/desktop/logo_usidfy.svg'
            alt='LOGO'
          />
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FaBars />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav m-auto'>
            {/* <div> */}
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
            {/* </div> */}
          </ul>
          <img
            onClick={showModal}
            src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958942/audiophile/assets/shared/desktop/icon-cart_reoqc1.svg'
            alt='Cart'
          />
        </div>
      </nav>
      <hr className='cc-container' />
    </>
  )
}

export default Navbar
