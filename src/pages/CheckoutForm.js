import React from 'react'
import DetailNavbar from '../components/DetailNavbar'
import '../style/CheckoutForm.scss'

const CheckoutForm = () => {
  return (
    <div>
      <DetailNavbar />
      <section className='form-background'>
        <h1>texting...</h1>
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
            <form action=''></form>
            {/* payment details */}
            <form action=''></form>
          </div>
          <div className='summary-container'>Item 2</div>
        </div>
      </section>
    </div>
  )
}

export default CheckoutForm
