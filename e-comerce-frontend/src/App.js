import './App.css'
import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import SideDrawer from './components/SideDrawer'
import Backdrop from './components/Backdrop'

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCart} from './redux/actions/cartActions';
import { getUserDetails } from './redux/actions/userAction';
import Checkout from './screens/Checkout';
import AdminSite from './screens/AdminSite';
import Dashboard from './components/adminSite/Dasboard'
import AdminOrders from './components/adminSite/AdminOrders'
import Adminproducts from './components/adminSite/Adminproducts'
import AdminCategories from './components/adminSite/AdminCategories'
import OrderScreen from './screens/OrderScreen'
import OrderDetails from './components/Orders/OrdersDetail'
import AdminOrdersDetail from './components/adminSite/AdminOrdersDetail'


function App() {
  const [sideToggle, setSideToggle] = useState(false)
  const user = useSelector(state => state.user)
  const {loginSuccess, userDetails} = user
  // fetchCart
  const dispatch = useDispatch()
  useEffect(() => {
    if(localStorage.getItem('token')) {
    dispatch(fetchCart())
    dispatch(getUserDetails());
    }
  }, [dispatch])

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

      <main className="app">
        <Routes>
          <Route  path="/" element={<HomeScreen/>} />
          <Route  path="/product/:id" element={<ProductScreen/>} />
          <Route  path="/cart" element={<CartScreen/>} />
          <Route  path="/signup" element={<SignUp/>} />
          <Route  path="/signin" element={<SignIn/>} />
          <Route  path="/checkout" element={<Checkout/>}/>
          <Route  path="/orders" element={<OrderScreen/>}/>
          <Route  path="/order/:id" element={<OrderDetails/>}/> 
          <Route  path="/admin" element={<AdminSite/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/orders" element={<AdminOrders/>}/>
          <Route path="/admin/products" element={<Adminproducts/>}/>
          <Route path="/admin/category" element={<AdminCategories/>}/>
          <Route path="/admin/oders/:id" element={<AdminOrdersDetail/>}/>
          </Route>
        </Routes>
      </main>
    </Router>
  )
}

export default App
