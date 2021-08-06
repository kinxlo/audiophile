import { useState, useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import '../style/CartModal.scss'

const CartModal = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  const { cart, dispatch } = useContext(CartContext)

  let total = 0
  cart.forEach((item) => {
    total = total + item.amount * item.quantity
    return total
  })

  const removeAll = () => {
    dispatch({ type: 'REMOVE_ALL' })
  }

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <article>
          <div className='cart-title'>
            <h3>Cart ( {cart.length} )</h3>
            <small onClick={removeAll}>Remove all</small>
          </div>
          <div className='cart-overflow'>
            <CartDetails cart={cart} dispatch={dispatch} />
          </div>
        </article>
        <article>
          <div className='total'>
            <p>TOTAL</p>
            <p>${total}</p>
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

const CartDetails = ({ cart, dispatch }) => {
  // const [quantitys, setQuantitys] = useState(item.quantity)

  return cart.map((item, index) => {
    let itemQuantity = item.quantity
    // *product distructuring
    const { name, image, amount } = item

    const handleDecrement = (e) => {
      let quantity = --e.target.nextElementSibling.textContent
      if (quantity <= 1) {
        quantity = 1
      }
    }

    const handleIncrement = (e) => {
      let quantity = parseInt(++e.target.previousElementSibling.textContent)

      const product = {
        name: name,
        amount: amount,
        quantity: quantity,
        image: image,
      }
      dispatch({
        type: 'UPDATE_EXISTING_QUANTITY',
        payload: product,
      })
      // console.log(image)
    }

    return (
      <div key={index} className='cart-detail'>
        <div className='img-price'>
          <img src={item.image} alt='' />
          <div>
            <p className='product-name'>{item.name}</p>
            <p className='price'>{item.amount}</p>
          </div>
        </div>
        <form className='counter-form'>
          <section className='counter'>
            <span className='minus-btn' onClick={handleDecrement}>
              -
            </span>
            <span className='num-value'>{itemQuantity}</span>
            <span className='plus-btn' onClick={handleIncrement}>
              +
            </span>
          </section>
          {/* <button>add to cart</button> */}
        </form>
      </div>
    )
  })
}
