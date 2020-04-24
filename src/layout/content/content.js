import React from 'react';
import css from './content.module.css';

const Content = (props) => {
  return (
    <div className={css.content}>
      {props.children}
    </div>
  );
}

export default Content;
