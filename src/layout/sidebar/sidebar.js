import React from 'react';
import css from './Sidebar.module.css';

const Sidebar = ({side, children}) => {  

  const cls = `${css.sidebar} ${css[side]}`;

  return (
    <div className={cls}>
      {children}
    </div>
  );
}

export default Sidebar;
