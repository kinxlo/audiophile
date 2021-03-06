import React from 'react'
import '../style/ItemBox.scss'
import { Link } from 'react-router-dom'
import Button from './Button'

const ItemBox = (props) => {
  const { name, description, image, slug } = props.product

  return (
    <>
      <section className='cc-container item-box'>
        <div>
          <img src={image.desktop} alt='headphone' />
        </div>
        <article className='item-description'>
          <div>
            <h3>New product</h3>
            <h1>{name}</h1>
            <p className='cc-hero-desc'>{description}</p>
            <Link
              to={{
                pathname: `/details/${slug}`,
                state: props.product.slug,
              }}
            >
              <Button />
            </Link>
          </div>
        </article>
      </section>
    </>
  )
}

export default ItemBox
// https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958923/audiophile/assets/category-earphones/desktop/image-yx1-earphones_opop5w.jpg
