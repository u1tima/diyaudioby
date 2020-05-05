import React from 'react';
import css from './ButtonAddToCart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ButtonAddToCart = (props) => {
  return (
    <button onClick={props.onClick}>
      <FontAwesomeIcon
        className={css.icon}
        icon={faCartPlus}
        size="lg" />
        В корзину
    </button>
  );
}

export default ButtonAddToCart;
