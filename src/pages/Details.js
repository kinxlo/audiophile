import React, { useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import DetailNavbar from '../components/DetailNavbar'
import FooterBanner from '../components/FooterBanner'
import Category from '../components/Category'
import '../style/DetailPage.scss'
// import Button from '../components/Button'
import Sugestion from '../components/Sugestion'
import { CartContext } from '../contexts/CartContext'
// import CartModal from '../components/CartModal'

const Details = ({ products }) => {
  //  * using the useLocation hook, we get the details of the current data
  // const { products } = useContext(ProductsContext)
  const { state } = useLocation()

  let productDetails = products.filter((product) => {
    return product.slug === state
  })

  return (
    <div>
      <DetailNavbar />
      {/* the modal of the cart  */}

      <section className='cc-container'>
        <div className='back'>go back</div>
        <section className='item-box'>
          <div>
            <img
              src={productDetails[0].image.desktop}
              alt={productDetails[0].name}
            />
          </div>
          <article className='item-description'>
            <div>
              <h3>New Product</h3>
              <h1>{productDetails[0].name}</h1>
              <p className='cc-hero-desc'>{productDetails[0].description}</p>
              <h4>${productDetails[0].price}</h4>
              {/* counter */}
              <Counter product={productDetails[0]} />
              {/* counter */}
            </div>
          </article>
        </section>
      </section>
      <section className='features-and-box cc-container'>
        <article className='features'>
          <h2>features</h2>
          <div className='p-group'>
            <p>{productDetails[0].features}</p>
          </div>
        </article>
        <article className='in-box'>
          {/* conditional rendering and mapping is needed here */}
          <h2>In the box</h2>
          <div className='p-group'>
            {/* map throught the product quantity and output a list of jsx */}
            {productDetails[0].includes.map((product, index) => {
              return (
                <p key={index}>
                  <span className='list-bullet'>{product.quantity}x</span>
                  {product.item}
                </p>
              )
            })}
          </div>
        </article>
      </section>
      <section className='cc-container'>
        <div className='img-grid'>
          <div className='item-1 item'>
            <img src={productDetails[0].gallery.first.desktop} alt='img-logo' />
          </div>
          <div className='item-2 item'>
            <img src={productDetails[0].gallery.third.desktop} alt='img-logo' />
          </div>
          <div className='item-3 item'>
            <img
              src={productDetails[0].gallery.second.desktop}
              alt='img-logo'
            />
          </div>
        </div>
      </section>
      <Sugestion state={productDetails[0]} />
      <Category />
      <FooterBanner />
    </div>
  )
}

export default Details

export const Counter = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useContext(CartContext)

  const { id, name, image, price } = product
  const { desktop } = image
  // console.log(id, name, price, desktop)

  const item = {
    id: id,
    name: name,
    image: desktop,
    price: price,
    quantity: quantity,
  }

  const increment = () => {
    setQuantity(quantity + 1)
  }
  const decrement = () => {
    setQuantity(quantity - 1)
  }

  return (
    <form className='counter-form'>
      <section className='counter'>
        <span className='minus-btn' onClick={decrement}>
          -
        </span>
        <span className='num-value'>{quantity}</span>
        <span className='plus-btn' onClick={increment}>
          +
        </span>
      </section>
      <button onClick={(e) => addItem(item, e)}>add to cart</button>
    </form>
  )
}
