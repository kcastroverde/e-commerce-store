ORDER_INITIAL_STATE = {
    loading: false,
    error: false,
    errorMsg: '',
    orderLoaded: false,
    orders: [],
}

const orderReducer = (state = ORDER_INITIAL_STATE, actions) => {
    switch (actions.type) {
        case 'REQUEST_ORDER':
            return {
                ...state,
                loading: true,
            }
        case 'RECEIVE_ORDER':
            return {
                ...state,
                loading: false,
                orderLoaded: true,
                error: false,
                errorMsg: '',
                orders: actions.payload,
            }
        case 'UPDATE_ORDER':
            return {
                ...state,
                loading: false,
                orderLoaded: true,
                error: false,
                orders: actions.payload,
            }
        case 'ERROR_ORDER':
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: actions.payload,
            }
        case 'LOGOUT_ORDER':
            return {
                ...state,
                loading: false,
                orderLoaded: false,
                error: false,
                errorMsg: '',
                orders: [],
            }
        default:
            return state
    }
}