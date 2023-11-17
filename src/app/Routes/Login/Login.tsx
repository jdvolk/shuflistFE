/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';

// reduxState
import { getPosts } from '../../Store/User/userPostsSlice';
import { getUser, loginUser, selectIsLoggedIn, selectUser } from '../../Store/User/getUserSlice';

// UI
import { Button } from '../../Components/Button/Button';
import '../../Components/Button/Button.css';
import './Login.css';

// custom hooks
import useDynamicForm from '../useDynamicForm';
import { useAppDispatch } from '../../Store/store';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const dispatch = useAppDispatch();
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const userInfo = useSelector(selectUser);

  // component state
  const [formState, setFormState] = useState({
    UserHandle: '',
    // Password: '',
  });
  const navigate = useNavigate();
  // rename for readibility
  // const password = formState.Password;
  const Handle = formState.UserHandle;

  const formElements = ['UserHandle'];

  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        // getPosts();
        // getUser({ email, password });
      }}
    >
      <h1>Login</h1>
      {formElements
        ? useDynamicForm(formState, formElements, setFormState)
        : null}
      <section>{'\n'}</section>
      <Button
        type="submit"
        className="login-button"
        value="login"
        name="login-button"
        label="Login"
        onClick={() => {
          loginUser({userHandle: Handle}, dispatch);
          // dispatch(getPosts(Number(userInfo.userInfo.User_Id)));
          // dispatch(getUser({ email, password }));
          navigate('/');
        }}
      >
        Login
      </Button>
    </form>
  );
}

