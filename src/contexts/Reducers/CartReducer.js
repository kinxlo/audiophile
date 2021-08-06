export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload]

    case 'UPDATE_EXISTING_QUANTITY':
      const updatedItem = state.filter((item) => {
        return item.name !== action.payload.name
      })
      return [...updatedItem, action.payload]

    case 'REMOVE_ALL':
      return []
    default:
      return state
  }
}
