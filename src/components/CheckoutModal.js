import { FaCheckCircle } from 'react-icons/fa'
import { SummaryItem } from '../pages/CheckoutForm'
import '../style/CheckoutModal.scss'

const CheckoutModal = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className='checkout-modal'>
        <FaCheckCircle className='checked-icon' />
        <div className='checkout-message'>
          <p>
            thank you <br /> for your order
          </p>
          <p>You will receive an email confirmation shortly.</p>
        </div>
        <div className='checkout-display'>
          <div className='item-display'>
            <SummaryItem />
            <hr />
            <p>and 2 other item(s)</p>
          </div>
          <div className='grand-total'>
            <p>GRAND TOTAL</p>
            <p>$5,446</p>
          </div>
        </div>
        <button onClick={handleClose}>BACK TO HOME</button>
      </section>
    </div>
  )
}

export default CheckoutModal
