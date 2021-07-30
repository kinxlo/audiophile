export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: 2,
          item: action.payload.product,
          quantity: action.payload.quantity,
        },
      ]
    default:
      return state
  }
}
