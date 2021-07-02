import React from 'react'
import Navbar from './Navbar'
import '../style/Header.scss'

function Header() {
  return (
    <header>
      <Navbar />
      <div className='cc-hero-text cc-container'>
        <section>
          <h3>New product</h3>
          <h1>XX99 Mark II Headphones</h1>
          <p className='cc-hero-desc'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button>See product</button>
        </section>
      </div>
    </header>
  )
}

export default Header
