import React, { Component } from 'react';
import css from './ElcapList.module.css';

class ElcapList extends Component {

  render() {

    return (

      <table className={css.table}>

        <thead>
          <tr>
            <th className={css.partnumber}>PartNumber</th>
            <th className={css.min}>Серия</th>
            <th className={css.min}>Ёмкость</th>
            <th className={css.min}>Напряжение</th>
            <th className={css.min}>D, mm</th>
            <th className={css.min}>H, mm</th>
            <th className={css.min}>LS, mm</th>
            <th>Цена</th>
            <th>Заказ</th>
            <th>Сумма</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {this.props.children}
        </tbody>
      </table >
    );
  }
}

export default ElcapList;
