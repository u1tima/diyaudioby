import React from 'react';
import css from './sidebar.module.scss';

const Sidebar = (props) => {  

  const cls = `${css.sidebar} ${css[props.side]}`;

  return (
    <div className={cls}>
      {props.children}
    </div>
  );
}

export default Sidebar;
