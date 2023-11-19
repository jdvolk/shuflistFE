/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
// reduxState
import { getUserInfo, selectUser } from '../../Store/User/getUserSlice';

// UI
import { Button } from '../../Components/Button/Button';
import '../../Components/Button/Button.css';
import './Login.css';

// custom hooks
import useDynamicForm from '../useDynamicForm';
import { useAppDispatch } from '../../Store/storetypes';
import { useOnEnterKeyDown } from '../../utils/onEnterKeyDown';

export const Login = () => {
  const dispatch = useAppDispatch();
  const userInfo = useSelector(selectUser);

  // component state
  const [formState, setFormState] = useState({
    handle: '',
  });
  const navigate = useNavigate();
  const userHandle = formState.handle;

  const formElements = ['User Handle'];
  const form = useDynamicForm(formState, formElements, setFormState);
  const handleClick = () => dispatch(getUserInfo(userHandle));

  useEffect(() => {
    if (userInfo.isLoggedIn) navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo.isLoggedIn]);

  useOnEnterKeyDown(handleClick);

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
      {formElements && form}
      <section>{'\n'}</section>
      <Button
        type="button"
        className="login-button"
        value="login"
        name="login-button"
        label="Login"
        onClick={handleClick}
      >
        Login
      </Button>
    </form>
  );
};
