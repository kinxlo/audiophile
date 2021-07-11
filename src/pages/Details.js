import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import DetailNavbar from '../components/DetailNavbar'
import FooterBanner from '../components/FooterBanner'
import Category from '../components/Category'
import '../style/DetailPage.scss'

const Details = () => {
  //  * using the useLocation hook, we get the details of the current data
  const { state } = useLocation()
  console.log(state)

  return (
    <div>
      <DetailNavbar />
      <section className='cc-container'>
        <div className='back'>go back</div>
        <section className='item-box'>
          <div>
            <img src={state.image.desktop} alt={state.name} />
          </div>
          <article className='item-description'>
            <div>
              <h3>New Product</h3>
              <h1>{state.name}</h1>
              <p className='cc-hero-desc'>{state.description}</p>
              <h4>${state.price}</h4>
              <div className='number'>
                <span className='minus'>-</span>
                <input type='text' defaultValue='1' />
                <span className='plus'>+</span>
              </div>
              <Link to='/'>
                <button>Add to cart</button>
              </Link>
            </div>
          </article>
        </section>
      </section>
      <section className='features-and-box cc-container'>
        <article className='features'>
          <h2>features</h2>
          <div className='p-group'>
            <p>{state.features}</p>
          </div>
        </article>
        <article className='in-box'>
          {/*  conditional rendering and mapping is needed here */}
          <h2>In the box</h2>
          <div className='p-group'>
            {/* map throught the product quantity and output a list of jsx */}
            {state.includes.map((product, index) => {
              return (
                <p key={index}>
                  <span className='list-bullet'>
                    {product.quantity}x
                  </span>
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
            <img src={state.gallery.first.desktop} alt='img-logo' />
          </div>
          <div className='item-2 item'>
            <img src={state.gallery.third.desktop} alt='img-logo' />
          </div>
          <div className='item-3 item'>
            <img src={state.gallery.second.desktop} alt='img-logo' />
          </div>
        </div>
      </section>
      <section className='cc-container suggestion-section'>
        <h2>you may also like</h2>
        <div className='suggestion-item-container'>
          {/* map throught the product quantity and output a list of jsx */}
          {state.others.map((product, index) => {
            return (
              <article key={index}>
                <div>
                  <img src={product.image.desktop} alt='logo' />
                </div>
                <h4>{product.name}</h4>
                <Link to='/'>
                  <button>See product</button>
                </Link>
              </article>
            )
          })}
        </div>
      </section>
      <Category />
      <FooterBanner />
    </div>
  )
}

export default Details
