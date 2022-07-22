import React, {useCallback, useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './signIn.css';
import { fetchSignIn } from '../../redux/actions/userAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Index() {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const {loading, loginSuccess, error, errorMsg } = user;

  const _handleSubmit = () => {
    // callback
    if (email.length > 2 && password.length > 2) {
      dispatch(fetchSignIn({email, password}));
    }
  }

  useEffect(() => {
    if (loginSuccess) {
      navigate('/')
    }
  }, [loginSuccess, navigate])

  useEffect(() => {
    if (error) {
      alert(errorMsg)
    }
  }, [error, errorMsg])


  console.log("user",user);

  if (loading) return <h1>Loading.....</h1>
  return (
    <div className="signinscreen">
      <div className="container">
        <div className="innerContainer">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              // backgroundColor: 'red',
            }}
          >
            <div style={{cursor: 'pointer'}} onClick={() => navigate('/')}>
              <i className="fas fa-arrow-circle-left fa-5x"></i>
            </div>
            <p>Sign In</p>
          </div>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="lname"
            name="email"
            placeholder="Your email.."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="lname"
            name="password"
            placeholder="Your Password.."
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Link to="/signup" className="link">
            <span>Creat a new account ?</span>
          </Link>
          <br />

          <input type="submit" value="Sign in" onClick={()=>_handleSubmit()} />
        </div>
      </div>
    </div>
  )
}

export default Index
