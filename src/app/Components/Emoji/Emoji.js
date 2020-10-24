import React from 'react';
import "../Emoji/Emoji.css"

function Emoji (props) {
  return (
    <section className="emoji-background">
      <span
        className={props.label ? `emoji ${props.label}` : 'emoji Common' }
        role="img"
        // aria-label={props.label ? props.label : ''}
        // aria-hidden={props.label ? "false" : "true"}
        // onClick={handleClick}
        >
      </span>
    </section>
  )
}

export default Emoji;