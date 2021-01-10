/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Button(props) {
  return (
    <button
      className={props.className}
      name="button"
      type={props.type === 'submit' ? 'submit' : 'button'}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default Button;
