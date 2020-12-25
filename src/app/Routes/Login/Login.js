/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import './Login.css';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getPosts } from '../../../features/User/userPostsSlice';
import {
  getUser,
  selectIsLoggedIn,
} from '../../../features/User/getUserSlice';
import renderLoginForm from './renderLoginForm';

function Login() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    renderLoginForm(
      getPosts,
      getUser,
      userName,
      password,
      setUserName,
      setPassword,
      isLoggedIn,
      Redirect,
      dispatch,
    )
  );
}

export default Login;
