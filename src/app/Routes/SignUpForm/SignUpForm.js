/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import '../../Components/Button/Button.css';
import useDynamicForm from '../useDynamicForm';
import '../Login/Login.css';
// import renderLoginForm from '../Login/renderLoginForm';
import './SignUpForm.css';

function SignUpForm() {
  const [formState, setFormState] = useState({
    Email: '',
    'User-Name': '',
    Password: '',
    'First-Name': '',
    'Last-Name': '',
  });
  const formElements = ['Email', 'User-Name', 'Password', 'First-Name', 'Last-Name'];

  return (
    <section>
      <form
        className="login-form signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          // put the rest of the click handler here
        }}
      >
        <h1>Sign Up</h1>
        {formElements ? useDynamicForm(formState, formElements, setFormState) : null}
        <Button type="submit" className="sign-up-submit" label="Sign Up" />
      </form>
    </section>
  );
}
export default SignUpForm;
