import React, { useState } from 'react'
import CheckoutModal from '../components/CheckoutModal'
import DetailNavbar from '../components/DetailNavbar'
import '../style/CheckoutForm.scss'

const CheckoutForm = () => {
  return (
    <div>
      <DetailNavbar />
      <section className='form-background'>
        <h1 className='cc-container'>go back</h1>
        <div className='form-summary cc-container'>
          <div className='form-container'>
            <h1>CHECKOUT</h1>
            {/* billing form */}
            <form>
              <h5 className='form-title'>Billing details</h5>
              <section className='billing-details'>
                <div>
                  <label htmlFor='name'>Name</label>
                  <br />
                  <input type='text' placeholder='Alexei Ward' />
                </div>
                <div>
                  <label htmlFor='email'>Email Address</label>
                  <br />
                  <input type='email' placeholder='alexei@mail.com' />
                </div>
                <div>
                  <label htmlFor='phone number'>Phone Number</label>
                  <br />
                  <input type='number' placeholder='+1 202-555-0136' />
                </div>
              </section>
            </form>

            {/* shipping info */}
            <form action=''>
              <h5 className='form-title'>Shipping Info</h5>
              <section className='shipping-details'>
                <div className='address'>
                  <label htmlFor='address'>Address</label>
                  <input type='text' placeholder='1137 Williams Avenue' />
                </div>
                <div>
                  <label htmlFor='zip-code'>Zip Code</label>
                  <br />
                  <input type='number' placeholder='10001' />
                </div>
                <div>
                  <label htmlFor='city'>City</label>
                  <br />
                  <input type='text' placeholder='New York' />
                </div>
                <div>
                  <label htmlFor='country'>Country</label>
                  <br />
                  <input type='text' placeholder='United State' />
                </div>
              </section>
            </form>

            {/* payment details */}
            <form action=''>
              <h5 className='form-title'>payment details</h5>
              <section className='payment-details'>
                <div className='payment-title'>payment method</div>
                <div className='span-row-2 radio'>
                  <input
                    type='radio'
                    id='html'
                    name='payment-type'
                    value='HTML'
                  />
                    <label htmlFor='html'>e-Money</label>
                </div>

                <div className='radio'>
                  <input
                    type='radio'
                    id='css'
                    name='payment-type'
                    value='CSS'
                  />
                    <label htmlFor='css'>Cash On Delivery</label>
                </div>
                <div>
                  <label htmlFor='e-money-number'>e-Money Number</label>
                  <br />
                  <input type='number' placeholder='238521993' />
                </div>
                <div>
                  <label htmlFor='pin'>e-Money PIN</label>
                  <br />
                  <input type='password' placeholder='6891' />
                </div>
              </section>
            </form>
          </div>
          <SummarySection />
        </div>
      </section>
    </div>
  )
}

export default CheckoutForm

const SummarySection = () => {
  // *set modal State in details page to false
  const [show, isShown] = useState(false)
  // handle button event to show the modal
  const showModal = (e) => {
    e.preventDefault()
    isShown(true)
  }

  const hideModal = () => {
    isShown(false)
  }

  return (
    <div className='summary-container'>
      <h3>summary</h3>
      <section className='cart-overflow'>
        <SummaryItem />
      </section>
      <section className='summary-detail'>
        <div>
          <p>Total</p>
          <p>$5,396</p>
        </div>
        <div>
          <p>shipping</p>
          <p>$50</p>
        </div>
        <div>
          <p>vat(included)</p>
          <p>$1,079</p>
        </div>
        <div>
          <p>Grand Total</p>
          <p>$5,446</p>
        </div>
      </section>
      <button onClick={showModal}>continue & pay</button>
      <CheckoutModal handleClose={hideModal} show={show} />
    </div>
  )
}

export const SummaryItem = () => {
  return (
    <div className='item'>
      <div className='img-price'>
        <img
          src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958922/audiophile/assets/cart/image-xx59-headphones_ityj1l.jpg'
          alt=''
        />
        <div>
          <p className='product-name'>name</p>
          <p className='price'>price</p>
        </div>
      </div>
      <h6>x1</h6>
    </div>
  )
}
