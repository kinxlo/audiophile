import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../contexts/StoreContext'
import DetailNavbar from '../components/DetailNavbar'
import FooterBanner from '../components/FooterBanner'
import Category from '../components/Category'
import '../style/DetailPage.scss'

const Details = (props) => {
  const { products } = useContext(StoreContext)

  const productSlug = props.match.params.slug

  // const productDetails = products.filter((product) => {
  //   return product.slug === productSlug
  // })

  // console.log(productDetails[0].name)

  return (
    <div>
      <DetailNavbar />
      <span>go back</span>
      <section className='cc-container item-box'>
        <div>
          <img
            src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958944/audiophile/assets/shared/desktop/image-xx99-mark-two-headphones_cxn7zg.jpg'
            alt='headphone'
          />
        </div>
        <article className='item-description'>
          <div>
            <h3>New Product</h3>
            <h1>XX99 Mark II Headphones</h1>
            <p className='cc-hero-desc'>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <h4>$ 2,999</h4>
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
      <section className='features-and-box cc-container'>
        <article className='features'>
          <h2>features</h2>
          <div className='p-group'>
            <p>
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you’re taking a business call or just in your
              own personal space, the auto on/off and pause features ensure that
              you’ll never miss a beat. <br />
              <br />
              The advanced Active Noise Cancellation with built-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5. 0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound, cutting-edge technology, and
              a modern design aesthetic.
            </p>
          </div>
        </article>
        <article className='in-box'>
          <h2>In the box</h2>
          <div className='p-group'>
            <p>
              <span className='list-bullet'>1x</span> Headphone Unit
            </p>
            <p>
              <span className='list-bullet'>1x</span> Replacement Earcups
            </p>
            <p>
              <span className='list-bullet'>1x</span> User Manual
            </p>
            <p>
              <span className='list-bullet'>1x</span> 3.5mm 5m Audio Cable
            </p>
            <p>
              <span className='list-bullet'>1x</span> Travel Bag
            </p>
          </div>
        </article>
      </section>
      <section className='cc-container'>
        <div className='img-grid'>
          <div className='item-1 item'>
            <img
              src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958934/audiophile/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1_ctzbil.jpg'
              alt='img-logo'
            />
          </div>
          <div className='item-2 item'>
            <img
              src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958935/audiophile/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3_mq4nf4.jpg'
              alt='img-logo'
            />
          </div>
          <div className='item-3 item'>
            <img
              src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958934/audiophile/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2_xxc8rb.jpg'
              alt='img-logo'
            />
          </div>
        </div>
      </section>
      <section className='cc-container suggestion-section'>
        <h2>you may also like</h2>
        <div className='suggestion-item-container'>
          <article>
            <div>
              <img
                src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958944/audiophile/assets/shared/desktop/image-xx99-mark-one-headphones_jtnhue.jpg'
                alt='logo'
              />
            </div>
            <h4>XX99 MARK I</h4>
            <Link to='/'>
              <button>See product</button>
            </Link>
          </article>
          <article>
            <div>
              <img
                src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958944/audiophile/assets/shared/desktop/image-xx59-headphones_upcy2f.jpg'
                alt='logo'
              />
            </div>
            <h4>XX59</h4>
            <Link to='/'>
              <button>See product</button>
            </Link>
          </article>
          <article>
            <div>
              <img
                src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958945/audiophile/assets/shared/desktop/image-zx9-speaker_vypqdj.jpg'
                alt='logo'
              />
            </div>
            <h4>ZX9 SPEAKER</h4>
            <Link to='/'>
              <button>See product</button>
            </Link>
          </article>
        </div>
      </section>
      <Category />
      <FooterBanner />
    </div>
  )
}

export default Details
