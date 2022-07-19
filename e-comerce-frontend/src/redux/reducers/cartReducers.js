const CART_INITIAL_STATE = {
  cart: [],
  loading: false,
  error: false,
  errorMsg: '',
}

const cartReducer = (state = CART_INITIAL_STATE, payload) => {
  switch (payload.type) {
    case 'REQUEST_CART':
      return {
        ...state,
        loading: true,
      }
    case 'RECEIVE_CART':
      return {
        ...state,
        loading: false,
        cart: payload.payload,
      }
    case 'UPDATE_CART':
      return {
        ...state,
        cart: payload.payload,
      }
    case 'ERROR_CART':
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: payload.payload,
      }
    default:
      return state
  }
}

export default cartReducer;
