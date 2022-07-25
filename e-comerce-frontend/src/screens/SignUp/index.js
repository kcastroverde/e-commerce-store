import React, {useCallback, useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './signup.css'
import { fetchSignUp } from '../../redux/actions/userAction';

function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const user = useSelector(state => state.user);
  const {userDetails, loginSuccess, loading} = user;

  const _handleSubmit =  () => {
    if (fullName.length > 2 && email.length > 2 && password.length > 2) {
      dispatch(fetchSignUp(fullName, email, password));
      }
    }

  useEffect(() => {
    if (loginSuccess) {
      navigate('/')
    }
  }, [loginSuccess, navigate])


  if (loading) return <h1>Loading...</h1>
  return (
    <div className="signupscreen">
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
            <p>Signup</p>
          </div>

          <label htmlFor="fname">Full Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your full name.."
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />

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

          <Link to="/signin" className="link">
            <span>Already have an account ?</span>
          </Link>
          <br />

          <input type="submit" value="Sign up" onClick={_handleSubmit} />
        </div>
      </div>
    </div>
  )
}

export default Index
