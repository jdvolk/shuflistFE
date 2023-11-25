/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';

// UI
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonType } from '../../Components/Button/Button';
import '../../Components/Button/Button.css';

import './SignUpForm.css';
import '../Login/Login.css';

// custom hooks
import useDynamicForm from '../useDynamicForm';
import { useAddUserMutation } from '../../Api/UserApiSlice';
import { selectIsLoggedIn } from '../../Store/User/getUserSlice';

// https://react-dropzone-uploader.js.org/docs/quick-start

// TODO: handle sumbit for entire form, handle image uploader connect the form to a post request
// figure out props for dropzone

export function SignUpForm() {
  // component state
  const [formState, setFormState] = useState({
    Email: '',
    Username: '',
    'Display Name': '',
    Handle: '',
    Password: '',
    'ReType Password': '',
  });

  const formElements = [
    'Email',
    'Username',
    'Display Name',
    'Handle',
    'Password',
    'ReType Password',
  ];
  const mapFormElements = formElements.map((element) => {
    return { name: element };
  });
  const form = useDynamicForm(formState, mapFormElements, setFormState);
  const createUser = useAddUserMutation()[0];
  const { Email, Username, Handle, Password } = formState;
  // setting up mutation request
  const mutationTrigger = () =>
    createUser(
      JSON.stringify({
        emails: [{ address: Email }],
        userName: Username,
        handle: Handle,
        password: Password,
        displayName: formState['Display Name'],
      })
    );

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  // validate bothe passwords

  return (
    <section>
      <form
        className="login-form signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <h1>Sign Up</h1>
        {formElements && form}
        <label>User Image:</label>
        <Dropzone key="image-upload" />
        <Button
          type={ButtonType.SUBMIT}
          className="sign-up-submit"
          label="Sign Up"
          key="button"
          onClick={mutationTrigger}
        />
      </form>
    </section>
  );
}
