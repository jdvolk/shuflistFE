/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const renderLoginForm = (
  getPosts,
  getUser,
  userName,
  password,
  setUserName,
  setPassword,
  isLoggedIn,
  Redirect,
  dispatch,
) => {
  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        getPosts();
        getUser({ userName, password });
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
          dispatch(getPosts());
          dispatch(getUser({ userName, password }));
        }}
      >
        Login
      </button>
      {isLoggedIn && <Redirect to="/" />}
    </form>
  );
};

export default renderLoginForm;
