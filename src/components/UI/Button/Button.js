import React from 'react';
import css from './Button.module.css';

const Button = (props) => {

  const classes = [css.button];
  classes.push(css[props.color]);

  return (
    <button
      onClick={props.onClick}
      className={classes.join(' ')}
    >
      {props.children}
    </button>
  );
}

export default Button;
