/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
// reduxState
import { getUserInfo, selectUser } from '../../Store/User/getUserSlice';

// UI
import { Button, ButtonType } from '../../Components/Button/Button';
import '../../Components/Button/Button.css';
import './Login.css';

// custom hooks
import useDynamicForm from '../useDynamicForm';
import { useAppDispatch } from '../../Store/storetypes';

export const Login = () => {
  const dispatch = useAppDispatch();
  const userInfo = useSelector(selectUser);

  // component state
  const [formState, setFormState] = useState({
    'User Handle': '',
  });
  const navigate = useNavigate();
  const userHandle = formState['User Handle'];

  const handleClick = () => {
    return userHandle.length ? dispatch(getUserInfo(userHandle)) : alert('bro');
  };
  const formElements = [{ name: 'User Handle', onClick: handleClick }];
  const form = useDynamicForm(formState, formElements, setFormState);

  useEffect(() => {
    if (userInfo.isLoggedIn) navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo.isLoggedIn]);

  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <h1>Login</h1>
      {formElements && form}
      <section>{'\n'}</section>
      <Button
        type={ButtonType.BUTTON}
        className="login-button"
        // value="login"
        // name="login-button"
        label="Login"
        onClick={handleClick}
      />
      {/* Login */}
    </form>
  );
};
