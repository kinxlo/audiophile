import React, { createContext, useReducer } from 'react'
import { CartReducer } from './Reducers/CartReducer'

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, [
    // {
    //   id: 1,
    //   name: 'speaker',
    //   amount: 0,
    //   quantity: 1,
    //   image:
    //     'https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958922/audiophile/assets/cart/image-xx99-mark-two-headphones_gvsccy.jpg',
    // },
  ])

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
