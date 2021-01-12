/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './Login.css';
import { useSelector, useDispatch } from 'react-redux';

// reduxState
import { Redirect } from 'react-router-dom';
import { getPosts } from '../../../features/User/userPostsSlice';
import { getUser, selectIsLoggedIn } from '../../../features/User/getUserSlice';

// UI
import Button from '../../Components/Button/Button';
import '../../Components/Button/Button.css';

// custom hooks
import useDynamicForm from '../useDynamicForm';

function Login() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [formState, setFormState] = useState({
    Email: '',
    Password: '',
  });
  const password = formState.Password;
  const email = formState.Email;
  const formElements = ['Email', 'Password'];

  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        getPosts();
        getUser({ email, password });
      }}
    >
      <h1>Login</h1>
      {formElements ? useDynamicForm(formState, formElements, setFormState) : null}
      <section>{'\n'}</section>
      <Button
        type="submit"
        className="login-button"
        value="login"
        name="login-button"
        label="Login"
        onClick={() => {
          dispatch(getPosts());
          dispatch(getUser({ email, password }));
        }}
      >
        Login
      </Button>
      {isLoggedIn && <Redirect to="/" />}
    </form>
  );
}

export default Login;
