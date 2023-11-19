/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

// UI
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';

import { Button } from '../../Components/Button/Button';
import '../../Components/Button/Button.css';

import './SignUpForm.css';
import '../Login/Login.css';

// custom hooks
import useDynamicForm from '../useDynamicForm';

// https://react-dropzone-uploader.js.org/docs/quick-start

// TODO: handle sumbit for entire form, handle image uploader connect the form to a post request
// figure out props for dropzone

export function SignUpForm() {
  // component state
  const [formState, setFormState] = useState({
    Email: '',
    Usernname: '',
    Handle: '',
    Password: '',
    'ReType Password': '',
  });

  const formElements = [
    'Email',
    'Username',
    'Handle',
    'Password',
    'ReType Password',
  ];
  const mapFormElements = formElements.map((element) => {
    return { name: element };
  });
  const form = useDynamicForm(formState, mapFormElements, setFormState);

  // validate bothe passwords
  //  set up post request

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
        {formElements && form}
        <label>User Image:</label>
        <Dropzone key="image-upload" />
        <Button
          type="submit"
          className="sign-up-submit"
          label="Sign Up"
          key="button"
        />
      </form>
    </section>
  );
}
