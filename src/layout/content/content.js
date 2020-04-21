import React from 'react';
import css from './content.module.scss';

const Content = (props) => {
  return (
    <div className={css.content}>
      {props.children}
    </div>
  );
}

export default Content;
