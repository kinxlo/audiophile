// const getResponsiveImage = () => {
//   const screen = window.innerWidth
//   const mobile = screen <= 375
//   const tablet = screen > 375 && screen <= 768
//   const desktop = screen > 768 && screen <= 1440

//   if (mobile) {
//     return (
//       <img
//         src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958929/audiophile/assets/home/mobile/image-speaker-zx9_knxyz0.png'
//         alt='Speaker'
//       />
//     )
//   }
//   if (tablet) {
//     return (
//       <img
//         src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958929/audiophile/assets/home/desktop/image-speaker-zx9_wm9giq.png'
//         alt='Speaker'
//       />
//     )
//   }
//   if (desktop) {
//     return (
//       <img
//         src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958929/audiophile/assets/home/desktop/image-speaker-zx9_wm9giq.png'
//         alt='Speaker'
//       />
//     )
//   }
// }




// let check_index = state.cart.findIndex(
//         (item) => item.id === action.payload.id
//       )
//       check_index++
//       console.log(check_index)

//       if (check_index !== 0) {
//         ++state.cart[check_index].quantity
//         console.log('Quantity updated:', state.cart)
//         return { ...state, cart: [state.cart[check_index]] }
//       } else {
  //         state.cart.find((p) => p.id === action.payload.id)
  //         console.log('The product has been added to cart:', action.payload)
  //         return { ...state, cart: [...state.cart, action.payload] }
  //       }
  //     // break



  // ===============================================================================
  
//  Don't store the itemsCount and cartTotalAmount values in state, these are easily derived from state data. Storing duplicate or derived data is anti-pattern.

// const initialState = {
//   itemsCount : 0, // <-- easily computed from cart items
//   cartItems:[],
//   cartTotalAmount:0, // <-- easily computed from cart items
// }
// Don't mutate your state by pushing directly into your cartItems array.

// state.cartItems.push(cart); // <-- mutates state reference


// ==========================

// You need to search the cartItems first to see if you've already added a cart item.

  
//     case ADD_TO_CART:
//   const {
//     itemId,
//     itemImg,
//     itemPrice,
//     itemTitle,
//     quantity,
//   } = action.payload;

//   // search if item is already in cart by item id
//   const inCart = state.cartItems.some(item => item.id === itemId);

//   if (inCart) {
//     // already in cart, shallow copy cart items
//     return {
//       ...state,
//       cartItems: state.cartItems.map(item => item.id === itemId ? {
//         // found item, shallow copy item and update quantity property
//         ...item,
//         quantity: item.quantity + 1,
//       } : item),
//     }
//   } else {
//     return {
//       ...state,
//       cartItems: [
//         // shallow copy cart items
//         ...state.cartItems,
//         // add new cart item
//         {
//           id: itemId,
//           quantity: quantity,
//           name: itemTitle,
//           image: itemImg,
//           price: itemPrice,
//         }
//       ],
//     }
//   } ...

// =============================================================================

// You can apply similar updating patterns for other action types that update the cart items.

// To compute the itemsCount in your UI

// const itemsCount = cartItems.reduce((count, { quantity }) => count + quantity, 0)
// To compute the cartTotalAmount

// const cartTotalAmount = cartItems.reduce(
//   (totalAmount, { price, quantity }) => totalAmount + quantity * price,
//   0,
// );
// These can be combined into a single calculation in a single pass

// const { cartTotalAmount, itemsCount } = cartItems.reduce(
//   ({ cartTotalAmount, itemsCount }, { price, quantity }) => ({
//     cartTotalAmount: cartTotalAmount + quantity * price,
//     itemsCount: itemsCount + quantity,
//   }),
//   {
//     cartTotalAmount: 0,
//     itemsCount: 0,
//   },
// );
