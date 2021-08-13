import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { CartContext } from '../contexts/CartContext'
import '../style/Navbar.scss'

import CartModal from './CartModal'

function Navbar() {
  // *set modal State in details page to false
  const [show, isShown] = useState(false)
  const { totalQuantity } = useContext(CartContext)
  // handle button event to show the modal
  const showModal = (e) => {
    e.preventDefault()
    isShown(true)
  }

  const hideModal = () => {
    isShown(false)
  }

  const showQuantity = (totalQuantity) => {
    if (totalQuantity === 0) {
      return null
    } else {
      return (
        <div className='circle'>
          <div>{totalQuantity}</div>
        </div>
      )
    }
  }

  return (
    <>
      <CartModal show={show} handleClose={hideModal} />
      <nav className='navbar navbar-expand-lg cc-container'>
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
        <NavLink to='/' className='navbar-brand'>
          <img
            src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958945/audiophile/assets/shared/desktop/logo_usidfy.svg'
            alt='LOGO'
          />
        </NavLink>
        <div className='mobile-cart cart' onClick={showModal}>
          <img
            src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958942/audiophile/assets/shared/desktop/icon-cart_reoqc1.svg'
            alt='Cart'
          />
          {showQuantity(totalQuantity)}
        </div>

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
        </div>
        <div className='desktop-cart cart' onClick={showModal}>
          <img
            src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958942/audiophile/assets/shared/desktop/icon-cart_reoqc1.svg'
            alt='Cart'
          />
          {showQuantity(totalQuantity)}
        </div>
      </nav>
      <hr className='cc-container' />
    </>
  )
}

export default Navbar
