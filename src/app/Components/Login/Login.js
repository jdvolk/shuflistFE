import React, { useState } from 'react';
import './Login.css';
import { useSelector, useDispatch } from "react-redux";
import { 
  getUser,
  login,
  selectIsLoggedIn,

}  from '../../../features/User/getUserSlice'

function Login() {

  const dispatch = useDispatch();
  
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <form
      className='login-form'
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(getUser({'userName': userName, 'password': password}));
      }}
    >
      <h1>Login</h1>
      <label>User Name </label>
      <input
        type='text'
        name='text-input'
        className='user-name-input text-input'
        onChange={(e) => {
          setUserName(e.target.value)
        }}
        value={userName}
      ></input>
      <label>Password </label>
      <input
        type='text'
        name='text-input'
        className='password-input text-input'
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        value={password}
      ></input>
      <button
        className="login-button"
        value='login'
        name='login-button'
        label={'Login'}
        onClick={
          getUser({'userName': userName, 'password': password})
        }
      >
        Login
      </button>

    </form>
  );
};

export default Login;
