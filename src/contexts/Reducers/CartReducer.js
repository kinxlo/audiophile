export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.cart.length === 0) {
        return {
          ...state,
          cart: [action.payload],
        }
      }else{
        state.cart.map((item) => {
          if(item.name !== action.payload.name){
            return item
          }else{
            
          }
        })
      }
      break

    case 'INCREASE':
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, quantity: cartItem.quantity + 1 }
        }
        return cartItem
      })
      return { ...state, cart: tempCart }

    case 'DECREASE':
      let cart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, quantity: cartItem.quantity - 1 }
        }
        return cartItem
      })
      return { ...state, cart: cart }

    case 'GET_TOTALS':
      const { total, totalQuantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem
          // console.log(price, amount, cartTotal)
          cartTotal.totalQuantity += quantity
          cartTotal.total += price * quantity
          return cartTotal
        },
        {
          total: 0,
          totalQuantity: 0,
        }
      )

      return { ...state, total, totalQuantity }

    case 'REMOVE_ALL':
      return { ...state, cart: [] }
    default:
      return state
  }
}
