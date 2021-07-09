import React from 'react'
import { Link } from 'react-router-dom'
import DetailNavbar from '../components/DetailNavbar'
import '../style/DetailPage.scss'

const Details = () => {
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
              <input type='text' value='1' />
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
      <section className='img-grid cc-container'>
        <div class='grid'>
          {/* <div> */}
          <img
            className='img-top'
            src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958944/audiophile/assets/shared/desktop/image-best-gear_a5jy1y.jpg'
            alt=''
          />
          {/* </div> */}
          <div class='span-row-2'>
            {/* <div> */}
            <img
              className='img-right'
              src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958944/audiophile/assets/shared/desktop/image-best-gear_a5jy1y.jpg'
              alt=''
            />
            {/* </div> */}
          </div>
          <div>
            {/* <div> */}
            <img
              className='img-bottom'
              src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958944/audiophile/assets/shared/desktop/image-best-gear_a5jy1y.jpg'
              alt=''
            />
            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Details
