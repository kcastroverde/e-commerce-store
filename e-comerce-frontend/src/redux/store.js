import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// Reducers
import productReducer from './reducers/productReducers'
import cartReducer from './reducers/cartReducers'
import userReducer from './reducers/userReducer'
import storeReducer from './reducers/storeReducer'
import orderReducer from './reducers/orderReducer'
import categoryReducer from './reducers/categoryReducer'

const reducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  user: userReducer,
  store: storeReducer,
  orders: orderReducer,
  category: categoryReducer
})

const middleware = [thunk]





const store = createStore(
  reducer,
  
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
