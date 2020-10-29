/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './Login.css';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  getUser,
  selectIsLoggedIn,
} from '../../../features/User/getUserSlice';

function Login() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(getUser({ userName, password }));
      }}
    >
      <h1>Login</h1>
      <label>
        User Name
        <input
          type="text"
          name="text-input"
          className="user-name-input text-input"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
        />
      </label>
      <label>Password </label>
      <input
        type="text"
        name="text-input"
        className="password-input text-input"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <button
        type="submit"
        className="login-button"
        value="login"
        name="login-button"
        label="Login"
        onClick={() => {
          dispatch(getUser({ userName, password }));
        }}
      >
        Login
      </button>
      {isLoggedIn && <Redirect to="/" />}
    </form>
  );
}

export default Login;
