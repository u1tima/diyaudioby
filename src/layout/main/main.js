import React from 'react';
import css from "./main.module.scss";

const Main = (props) => {
  return (
    <main className={css.main}>
      {props.children}      
    </main>
  );
}

export default Main;
