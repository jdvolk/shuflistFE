/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Emoji.css';

// render
function Emoji(props) {
  const { label } = props;
  return (
    <section className="emoji-background">
      <span
        className={label ? `emoji ${label}` : 'emoji Common'}
        role="img"
        // aria-label={props.label ? props.label : ''}
        // aria-hidden={props.label ? "false" : "true"}
        // onClick={handleClick}
        >
      </span>
    </section>
  );
}

export default Emoji;
