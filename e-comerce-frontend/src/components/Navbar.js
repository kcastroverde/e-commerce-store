import './Navbar.css';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import { getUserDetails, logOut } from '../redux/actions/userAction';
import { getToken } from '../utils/localstorage';
import { fetchCart, logoutCart } from '../redux/actions/cartActions';
import { fetchStore } from '../redux/actions/storeActions';
import { fetchOrder } from '../redux/actions/orderActions';
import { fetchProducts } from '../redux/actions/productActions';
import { fetchCategory } from '../redux/actions/categoryAction';
import DropdownCategory from './DropdownCategory';


const Navbar = ({click}) => {
  const cart = useSelector(state => state.cart)
  const history = useNavigate()
  const user = useSelector(state => state.user)
  const store = useSelector(state => state.store)
  const dispatch = useDispatch()
  // console.log({user})
  const {storeName, discount, StoreLoaded} = store
  const {products, cartLoaded} = cart
  const {loginSuccess, userDetails} = user


  const getCartCount = () => {
    return products.reduce((qty, item) => Number(item.qty) + qty, 0)
  }

  const [cartloadedsuccess, setCartloadedsuccess] = useState(false)

  const _handleLogout = () => {
    // console.log('click')
    dispatch(logoutCart())
    dispatch(logOut())
    history('/')
  }

  useEffect(() => {
    if(!StoreLoaded){
    dispatch(fetchStore());
    dispatch(fetchCategory());
    dispatch(fetchProducts());
    }
  }, [dispatch, StoreLoaded])

  useEffect(() => {
    const token = getToken();
    if(token)
    dispatch(getUserDetails());
  }, [dispatch])

  useEffect(() => {
    if(loginSuccess){
      dispatch(fetchCart());
      dispatch(fetchOrder());
    }
  }, [dispatch, loginSuccess])

  useEffect(() => {
    if(cartLoaded){
      setCartloadedsuccess(true)
    }
  }, [cartLoaded])




  
  return (
    <nav className="navbar-component">
      <div className="navbar__logo">
        <Link to="/">
        <h2>{StoreLoaded?
          storeName: 'loading...' 
        }</h2>
        </Link>
      </div>
 
    

      <ul className="navbar__links">
        <DropdownCategory/>
      {loginSuccess? userDetails.role === "admin" ?
      <li>
          <Link to="/admin" className='admin__link'>
          Admin 
          </Link>
      </li>
      : null : null}
        <li>
          <Link to="/orders" className='orders__link'>
            {loginSuccess? 'Orders' : null}
          </Link>
        </li>
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
