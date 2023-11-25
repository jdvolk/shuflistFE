/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import React from 'react';

const useDynamicForm = (state: any, elements: any, setState: any) => {
  const typeHandler = (type: any) => {
    if (type === 're type password') {
      console.log('here');
    }
    if (type === 'email' || type === 'password') {
      return type;
    } else {
      return 'text';
    }
  };

  return elements.map((element: any, index: any) => {
    const lowercase = element.name.toLowerCase();
    return (
      <label key={element.name}>
        {`${element.name}: `}
        <input
          id={index}
          key={lowercase}
          type={typeHandler(lowercase)}
          name={`${lowercase}-input`}
          className={`${lowercase}-input text-input`}
          onChange={(e) => {
            setState((prevState: any) => {
              return { ...prevState, [element.name]: e.target.value };
            });
          }}
          value={state[element.name]}
          placeholder={`${element.name}`}
        />
      </label>
    );
  });
};

export default useDynamicForm;
