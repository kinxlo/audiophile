import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import '../style/Banner.scss'

const Banner = ({ products }) => {

  
  const zx9_speaker = products.filter((product) => {
    return product.slug === 'zx9-speaker'
  })
  const zx7_speaker = products.filter((product) => {
    return product.slug === 'zx7-speaker'
  })
  const yx1_earphone = products.filter((product) => {
    return product.slug === 'yx1-earphones'
  })

  return (
    <section className='banner cc-container'>
      <section className='banner-a'>
        <img
          src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958929/audiophile/assets/home/desktop/image-speaker-zx9_wm9giq.png'
          alt='Speaker'
        />
        {zx9_speaker.map((product) => {
          return (
            <article key={product.id}>
              <h1>
                ZX9 <br /> Speaker
              </h1>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound
              </p>
              <Link
                to={{
                  pathname: `/details/${product.slug}`,
                  state: product.slug,
                }}
              >
                <Button />
              </Link>
            </article>
          )
        })}
      </section>

      <section className='banner-b'>
        {zx7_speaker.map((product) => {
          return (
            <article key={product.id}>
              <h1>ZX7 Speaker</h1>
              <Link
                to={{
                  pathname: `/details/${product.slug}`,
                  state: product.slug,
                }}
              >
                <Button />
              </Link>
            </article>
          )
        })}
      </section>

      <section className='banner-c'>
        <div className='banner-c-img'></div>

        {yx1_earphone.map((product, index) => {
          return (
            <div key={index} className='banner-c-text'>
              <h1>YX1 earphones</h1>
              <Link
                to={{
                  pathname: `/details/${product.slug}`,
                  state: product.slug,
                }}
              >
                <Button />
              </Link>
            </div>
          )
        })}
      </section>
    </section>
  )
}

export default Banner
