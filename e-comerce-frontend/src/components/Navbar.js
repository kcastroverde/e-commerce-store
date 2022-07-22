import './Navbar.css'
import {Link, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import { getUserDetails, logOut } from '../redux/actions/userAction'
import { getToken } from '../utils/localstorage'
import { fetchCart, logoutCart } from '../redux/actions/cartActions'


const Navbar = ({click}) => {
  const cart = useSelector(state => state.cart)
  const history = useHistory()
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  // console.log({user})

  const {products, cartLoaded} = cart
  const {loginSuccess} = user


  const getCartCount = () => {
    return products.reduce((qty, item) => Number(item.qty) + qty, 0)
  }

  const [cartloadedsuccess, setCartloadedsuccess] = useState(false)

  const _handleLogout = () => {
    // console.log('click')
    dispatch(logoutCart())
    dispatch(logOut())
    history.push('/')
  }

  useEffect(() => {
    const token = getToken();
    
    if(token)
    dispatch(getUserDetails());
  }, [dispatch])

  useEffect(() => {
    if(loginSuccess){
      dispatch(fetchCart())
    }
  }, [dispatch, loginSuccess])

  useEffect(() => {
    if(cartLoaded){
      setCartloadedsuccess(true)
    }
  }, [cartLoaded])



  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>JSOM-E-COMERCE</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{
              cartloadedsuccess? getCartCount(): 0
              }</span>
            </span>
          </Link>
        </li>

        <li>
          <Link to="/">Shop</Link>
        </li>

        {!user.loginSuccess ? (
          <li>
            <Link to="/signin">Login</Link>
          </li>
        ) : (
          <li>
            <p onClick={_handleLogout}>Logout</p>
          </li>
        )}
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar
