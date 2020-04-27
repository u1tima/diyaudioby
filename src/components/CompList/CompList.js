import React, { Component } from 'react';
import css from './CompList.module.css';
import elcap from '../../data/database/elcap';
import Comp from '../Comp/Comp';


class CompList extends Component {

  state = {
    components: elcap,
  };

  render() {

    return (
      <table className={css.table}>

        <thead>
          <th></th>
          <th>Наименование</th>
          <th>Характеристики</th>
          <th colSpan='2'>Цена</th>
          {/* <th>Цена</th> */}
          <th>Заказ</th>
          <th>Сумма</th>
          <th>Корзина</th>
        </thead>

        <tbody>

          {this.state.components.map((item, index) => (
            <Comp key={index} comp={item} />
          ))}

        </tbody>
      </table >
    );
  }
}

export default CompList;
