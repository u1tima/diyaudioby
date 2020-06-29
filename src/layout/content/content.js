import React from 'react';
import css from './Content.module.css';

const Content = (props) => {
  return (
    <div className={css.content}>
      {props.children}
    </div>
  );
}

export default Content;
