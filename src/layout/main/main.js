import React from 'react';
import css from "./Main.module.css";

const Main = (props) => {
  return (
    <main className={css.main}>
      {props.children}      
    </main>
  );
}

export default Main;
