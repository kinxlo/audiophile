import React from 'react'
import '../style/ItemBox.scss'

const ItemBox = () => {
  return (
    <>
      <section className='cc-container item-box'>
        <div>
          <img
            src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958924/audiophile/assets/category-headphones/desktop/image-xx99-mark-two_lkqy5n.jpg'
            alt='headphone'
          />
        </div>
        <article className='item-description'>
          <div>
            <h3>New product</h3>
            <h1>XX99 Mark II Headphones</h1>
            <p className='cc-hero-desc'>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <button>See product</button>
          </div>
        </article>
      </section>
    </>
  )
}

export default ItemBox
