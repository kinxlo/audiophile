import React, { useState, useContext } from 'react'
import CheckoutModal from '../components/CheckoutModal'
import DetailNavbar from '../components/DetailNavbar'
import { CartContext } from '../contexts/CartContext'
import '../style/CheckoutForm.scss'

const CheckoutForm = () => {
  return (
    <div>
      <DetailNavbar />
      <section className='form-background'>
        <h1 className='cc-container'>go back</h1>
        <form className='form-summary cc-container'>
          <div className='form-container'>
            <h1>CHECKOUT</h1>
            {/* billing form */}
            <aside>
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
            </aside>

            {/* shipping info */}
            <aside>
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
            </aside>

            {/* payment details */}
            <aside>
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
              <section className='wallet-info'>
                <div>
                  <img src='' alt='wallet' />
                </div>
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </section>
            </aside>
          </div>
          <SummarySection />
        </form>
      </section>
    </div>
  )
}

export default CheckoutForm

const SummarySection = () => {
  const { cart, total } = useContext(CartContext)
  const [shipping] = useState(50)
  const [VAT] = useState(1079)

  // console.log(cart)

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
        {cart.map((cartItem) => {
          return <SummaryItem key={cartItem.id} {...cartItem} />
        })}
      </section>
      <section className='summary-detail'>
        <div>
          <p>Total</p>
          <p>${total}</p>
        </div>
        <div>
          <p>shipping</p>
          <p>${shipping}</p>
        </div>
        <div>
          <p>vat(included)</p>
          <p>${VAT}</p>
        </div>
        <div>
          <p>Grand Total</p>
          <p>${total + shipping + VAT}</p>
        </div>
      </section>
      <button onClick={showModal}>continue & pay</button>
      <CheckoutModal handleClose={hideModal} show={show} cart={cart} />
    </div>
  )
}

export const SummaryItem = ({ id, name, price, image, quantity }) => {
  // console.log(id)
  return (
    <>
      <div key={id} className='item'>
        <div className='img-price'>
          <img src={image} alt={name} />
          <div>
            <p className='product-name'>
              {name.slice(0, 4).trim('').toUpperCase()}
            </p>
            <p className='price'>{price}</p>
          </div>
        </div>
        <h6>x{quantity}</h6>
      </div>
    </>
  )
}
