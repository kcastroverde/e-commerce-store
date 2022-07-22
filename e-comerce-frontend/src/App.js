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
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/checkout" component={Checkout}/>
          <Route exact path="/admin" component={AdminSite} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
