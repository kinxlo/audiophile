import { Counter } from '../pages/Details'
import '../style/CartModal.scss'

const CartModal = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <article>
          <div className='cart-title'>
            <h3>Cart (3)</h3>
            <small>Remove all</small>
          </div>
          <CartDetails />
        </article>
        <article>
          <div className='total'>
            <p>TOTAL</p>
            <p>$5,396</p>
          </div>
          <button className='checkout-btn' type='button' onClick={handleClose}>
            Check out
          </button>
        </article>
      </section>
    </div>
  )
}

export default CartModal

// *CART DETAILS

const CartDetails = () => {
  return (
    <div className='cart-detail'>
      <div className='img-price'>
        <img
          src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958922/audiophile/assets/cart/image-xx99-mark-two-headphones_gvsccy.jpg'
          alt=''
        />
        <div>
          <p className='product-name'>XX99 MK II</p>
          <p className='price'>$2,999</p>
        </div>
      </div>
      <Counter />
    </div>
  )
}
