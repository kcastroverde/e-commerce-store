import {useCallback, useMemo, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router'
import {clearCart} from "../redux/actions/cartActions";
import {addOrder} from "../redux/actions/orderActions";


import './Checkout.css'

const Checkout = () => {
  const userInfo = useSelector(state => state.user.userDetails)

  
  const [Address, setAddress] = useState({})
  const history = useHistory()
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const cartItems = useMemo(() => cart.products, [cart])
  console.log("cartItems", cartItems)

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2)
  }


  function loadScript(src) {
    return new Promise(resolve => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }


  return (
    <div className="Checkout">
      <div className="container">
        <div className="Checkout__header">
          <h1 style={{flexGrow: 1}}>Shipping</h1>

        </div>

        <p>Please enter your shipping details.</p>
        <hr />
        <div className="form">
          <div className="fields ">
            <label className="field">
              <span className="field__label" htmlFor="lastname">
                FullName
              </span>
              <input
                className="field__input"
                type="text"
                id="lastname"
                value={userInfo.fullName || Address.fullName}
                onChange={(e) => {
                    setAddress({...Address, fullName: e.target.value})
                }}
              />
            </label>
          </div>
          <label className="field">
            <span className="field__label" htmlFor="address">
              Address
            </span>
            <input
              className="field__input"
              type="text"
              id="address"
              value={userInfo.Address||Address.address}
              onChange={e => setAddress({...Address, address: e.target.value})}
            />
          </label>
          <label className="field">
            <span className="field__label" htmlFor="country">
              Country
            </span>
            <input
              className="field__input"
              id="country"
              value={userInfo.country||Address.country}
              onChange={e => setAddress({...Address, country: e.target.value})}
            >

            </input>
          </label>
          <div className="fields fields--3">
            <label className="field">
              <span className="field__label" htmlFor="zipcode">
                Zip code
              </span>
              <input
                className="field__input"
                type="text"
                id="zipcode"
                value={userInfo.zipcode||Address.zipcode}
                onChange={e =>
                  setAddress({...Address, zipcode: e.target.value})
                }
              />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="city">
                City
              </span>
              <input
                className="field__input"
                type="text"
                id="city"
                value={userInfo.city||Address.city}
                onChange={e => setAddress({...Address, city: e.target.value})}
              />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="state">
                State
              </span>
              <input
                className="field__input"
                id="state"
                value={userInfo.state||Address.state}
                onChange={e => setAddress({...Address, state: e.target.value})}
              ></input>
            </label>
          </div>
<br/>
<h1 style={{flexGrow: 1}}>Cart</h1>
        {cartItems.map((item, index )=> (
            <div className="fields fields--3" key={index}>
            <label className="field">
              <span className="field__label" htmlFor="zipcode">
                Producto
              </span>
              <div
                className="field__input">
                    {item.name}
                </div>
            </label>
            <label className="field">
              <span className="field__label" htmlFor="city">
                precio
              </span>
              <div
                className="field__input">
                    {item.price}
                </div>
            </label>
            <label className="field">
              <span className="field__label" htmlFor="state">
                qt
              </span>
              <div
                className="field__input">
                    {item.qty}
                </div>
            </label>
          </div>
                ))}


        </div>
        <hr />
        <button className="button">
          Save Order
        </button>
      </div>
    </div>
  )
}

export default Checkout
