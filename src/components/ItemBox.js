import React from 'react'
import '../style/ItemBox.scss'
import { Link } from 'react-router-dom'

const ItemBox = (props) => {
  const { name, description, image, slug } = props.item

  // const handleClick = () => {
  //   console.log(props.item)
  // }

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
            <Link to={`/details/${slug}`}>
              <button>See product</button>
            </Link>
          </div>
        </article>
      </section>
    </>
  )
}

export default ItemBox
// https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958923/audiophile/assets/category-earphones/desktop/image-yx1-earphones_opop5w.jpg
