import React from 'react';
import css from './FormOrder.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

// class FormOrder extends Component {
const FormOrder = (props) => {

  // render() {

    return (
      <div className={css.control} >
        <button
          className={css.btnMinus}
          onClick={props.btnMinusClick}>
          <FontAwesomeIcon
            icon={faMinus}
            size="xs"
          />
        </button>
        <input
          type="text"
          className={css.input}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
        <button
          className={css.btnPlus}
          onClick={props.btnPlusClick}>
          <FontAwesomeIcon
            icon={faPlus}
            size="xs"
          />
        </button>
      </div>
    );
  // }
}

export default FormOrder;
