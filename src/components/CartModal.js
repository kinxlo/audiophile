import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import '../style/CartModal.scss'

const CartModal = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  const { cart, totalQuantity, total, removeAll } = useContext(CartContext)

  return (
    <div onClick={handleClose} className={showHideClassName}>
      <section className='modal-main'>
        <article>
          <div className='cart-title'>
            <h3>Cart ({totalQuantity})</h3>
            <small onClick={removeAll}>Remove all</small>
          </div>
          <div className='cart-overflow'>
            {cart.map((cartItem) => {
              return <CartItems key={cartItem.id} {...cartItem} />
            })}
          </div>
        </article>
        <article>
          <div className='total'>
            <p>TOTAL</p>
            <p>${total}</p>
          </div>
          <Link to='/checkout'>
            <button className='check' type='button'>
              Check out
            </button>
          </Link>
        </article>
      </section>
    </div>
  )
}

export default CartModal

// *CART DETAILS

const CartItems = ({ id, image, price, abbr, name, quantity }) => {
  const { increase, decrease } = useContext(CartContext)

  return (
    <div className='cart-detail'>
      <div className='img-price'>
        <img src={image} alt={name} />
        <div>
          <p className='product-name'>{name.slice(0, 4).trim('').toUpperCase()}</p>
          <p className='price'>{price}</p>
        </div>
      </div>
      <form className='counter-form'>
        <section className='counter'>
          <span
            className='minus-btn'
            onClick={() => {
              decrease(id)
            }}
          >
            -
          </span>
          <span className='num-value'>{quantity}</span>
          <span
            className='plus-btn'
            onClick={() => {
              increase(id)
            }}
          >
            +
          </span>
        </section>
        {/* <button>add to cart</button> */}
      </form>
    </div>
  )
}
