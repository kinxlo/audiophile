import React from 'react'
import Button from '../components/Button'
import '../style/Banner.scss'

const Banner = () => {
  return (
    <section className='banner cc-container'>
      <section className='banner-a'>
        <img
          src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958929/audiophile/assets/home/desktop/image-speaker-zx9_wm9giq.png'
          alt='Speaker'
        />
        <article>
          <h1>
            ZX9 <br /> Speaker
          </h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound
          </p>
          <Button />
        </article>
      </section>

      <section className='banner-b'>
        <article>
          <h1>ZX7 Speaker</h1>
          <Button />
        </article>
      </section>

      <section className='banner-c'>
        <div className='banner-c-img'></div>
        <div className='banner-c-text'>
          <h1>YX1 earphones</h1>
          <Button />
        </div>
      </section>
    </section>
  )
}

export default Banner
