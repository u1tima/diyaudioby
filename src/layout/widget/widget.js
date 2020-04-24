import React from 'react';
import css from './widget.module.css';

const Widget = (props) => {

  const categories = [
    'Резисторы',
    'Конденсаторы',
    'Микросхемы',
    'Транзисторы',
  ];

  const categoryList = categories.map((category, index) => <li key={index}>{category}</li>);

  return (
    <div className={css.widget}>
      <h2 className={css.title}>{props.title}</h2>
      <ul>{categoryList}</ul>
      
    </div>
  );
}

export default Widget;
