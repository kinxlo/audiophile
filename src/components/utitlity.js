const getResponsiveImage = () => {
  const screen = window.innerWidth
  const mobile = screen <= 375
  const tablet = screen > 375 && screen <= 768
  const desktop = screen > 768 && screen <= 1440

  if (mobile) {
    return (
      <img
        src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958929/audiophile/assets/home/mobile/image-speaker-zx9_knxyz0.png'
        alt='Speaker'
      />
    )
  }
  if (tablet) {
    return (
      <img
        src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958929/audiophile/assets/home/desktop/image-speaker-zx9_wm9giq.png'
        alt='Speaker'
      />
    )
  }
  if (desktop) {
    return (
      <img
        src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958929/audiophile/assets/home/desktop/image-speaker-zx9_wm9giq.png'
        alt='Speaker'
      />
    )
  }
}




let check_index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      )
      check_index++
      console.log(check_index)

      if (check_index !== 0) {
        ++state.cart[check_index].quantity
        console.log('Quantity updated:', state.cart)
        return { ...state, cart: [state.cart[check_index]] }
      } else {
        state.cart.find((p) => p.id === action.payload.id)
        console.log('The product has been added to cart:', action.payload)
        return { ...state, cart: [...state.cart, action.payload] }
      }
    // break