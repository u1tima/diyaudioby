import React from 'react';
import css from './wrapper.module.scss';

const Wrapper = (props) => {
  return (
    <div className={css.wrapper}>
      {props.children}
    </div>
  );
}

export default Wrapper;
