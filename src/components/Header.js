import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import '../style/Header.scss'
import Button from './Button'

function Header({ headphones }) {
  const xx99 = headphones.filter(
    (headphone) => headphone.slug === 'xx99-mark-two-headphones'
  )

  return (
    <header className='home-header'>
      <Navbar />
      <div className='cc-hero-text cc-container'>
        {xx99.map((headphone) => {
          return (
            <section key={headphone.id}>
              <h3>New product</h3>
              <h1>XX99 Mark II Headphones</h1>
              <p className='cc-hero-desc'>
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              {/* <button>See product</button> */}
              <Link
                to={{
                  pathname: `/details/${headphones.slug}`,
                  state: headphone.slug,
                }}
              >
                <Button />
              </Link>
            </section>
          )
        })}
      </div>
    </header>
  )
}

export default Header
//
