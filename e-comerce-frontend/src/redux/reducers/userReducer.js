const USER_INITIAL_STATE = {
  userInfo: {
    isLogin: false,
    loading: false,
    error : false,
    errorMsg: '',
    userDetails: [],
  },
}

const userReducer = (state = USER_INITIAL_STATE, payload) => {
  switch (payload.type) {
    case 'REQUEST_USER_DETAILS':
      return {
        ...state,
        loading: true,
      }
    case 'RECEIVE_USER_DETAILS':
      return {
        ...state,
        loading: false,
        userDetails: payload.payload,
      }
    case 'ERROR_USER_DETAILS':
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: payload.payload,
      }
    case 'LOG_OUT_USER':
      return {
        USER_INITIAL_STATE
      }
    default:
      return state


  }
}

export default userReducer;