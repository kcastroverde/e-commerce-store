const USER_INITIAL_STATE = {
    loading: false,
    error : false,
    errorMsg: '',
    userDetails: [],
    loginSuccess: false,
}

const userReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_USER_DETAILS':
      return {
        ...state,
        loading: true,
      }
    case 'RECEIVE_USER_DETAILS':
      return {
        ...state,
        loading: false,
        loginSuccess: true,
        userDetails: action.payload.userDetails,
        error: false,
        errorMsg: '',
      }
    case 'ERROR_USER_DETAILS':
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload,
      }
    case 'LOG_OUT_USER':
      return {
        ...state,
        loading: false,
        loginSuccess: false,
        userDetails: [],
        error: false,
        errorMsg: '',
        
      }
    default:
      return state


  }
}

export default userReducer;