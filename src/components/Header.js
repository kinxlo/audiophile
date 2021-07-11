import React from 'react'
import Navbar from './Navbar'
import '../style/Header.scss'
import Button from './Button'

function Header() {
  return (
    <header className='home-header'>
      <Navbar />
      <div className='cc-hero-text cc-container'>
        <section>
          <h3>New product</h3>
          <h1>XX99 Mark II Headphones</h1>
          <p className='cc-hero-desc'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          {/* <button>See product</button> */}
          <Button />
        </section>
      </div>
    </header>
  )
}

export default Header
//
