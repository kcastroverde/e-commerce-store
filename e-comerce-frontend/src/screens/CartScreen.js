import './CartScreen.css'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'

// Components
import CartItem from '../components/CartItem'

// Actions
import { modifyCart, removeFromCart} from '../redux/actions/cartActions'


const CartScreen = () => {
  const dispatch = useDispatch()
  const history = useNavigate()
  const cart = useSelector(state => state.cart)
  const user = useSelector(state => state.user)
  const {loginSuccess} = user
  const {cartLoaded, products} = cart

  const qtyChangeHandler = (id, qty) => {
    console.log("triger data",id, qty)
    dispatch(modifyCart(id, qty))
  }

  const removeFromCartHandler = item => {
    console.log("remove data", item)
    dispatch(removeFromCart(item._id))
  }

  const getCartCount = () => {
    return products.reduce((qty, item) => Number(item.qty) + qty, 0)
  }

  const getCartSubTotal = () => {
    return products
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2)
  }
  const navigateToCheckout = () => {
    products.length > 0 ? history('/checkout') : alert('Cart is empty')
  }

  console.log("cart", cart)

  if (!cartLoaded) return <h1>Loading.....</h1>
  else if (cartLoaded)
    return (
      <>
        <div className="cartscreen">
          <div className="cartscreen__left">
            <h2>Shopping Cart</h2>

            {products.length === 0 ? (
              <div>
                Your Cart Is Empty <Link to="/">Go Back</Link>
              </div>
            ) : (
              products.map(item => (
                <CartItem
                  key={item.product}
                  item={item}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={() => removeFromCartHandler(item)}
                />
              ))
            )}
          </div>

          <div className="cartscreen__right">
            <div className="cartscreen__info">
              <p>Subtotal ({getCartCount()}) items</p>
              <p>${getCartSubTotal()}</p>
            </div>
            <div>
              <button
              onClick={navigateToCheckout}
              >
                
                Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </>
    )
}

export default CartScreen
