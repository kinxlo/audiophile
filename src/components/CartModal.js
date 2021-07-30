import { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import '../style/CartModal.scss'

const CartModal = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  const { user } = useContext(UserContext)

  console.log(user)

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <article>
          <div className='cart-title'>
            <h3>Cart ({user.length})</h3>
            <small>Remove all</small>
          </div>
          <CartDetails />
        </article>
        <article>
          <div className='total'>
            <p>TOTAL</p>
            <p>$5,396</p>
          </div>
          <button className='check' type='button' onClick={handleClose}>
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
  const [quantity, setQuantity] = useState(1)

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
      <form className='counter-form'>
        <section className='counter'>
          <span
            className='minus-btn'
            onClick={() =>
              quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1)
            }
          >
            -
          </span>
          <span className='num-value'>{quantity}</span>
          <span className='plus-btn' onClick={() => setQuantity(quantity + 1)}>
            +
          </span>
        </section>
        {/* <button>add to cart</button> */}
      </form>
    </div>
  )
}
