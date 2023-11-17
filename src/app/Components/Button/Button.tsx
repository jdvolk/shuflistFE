/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export function Button(props: any) {
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


