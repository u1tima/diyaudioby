import React, { Component } from 'react';
import css from './ElcapList.module.css';

class ElcapList extends Component {

  render() {

    return (

      <table className={css.table}>

        <thead>
          <tr>
            <th className={css.partnumber}>PartNumber</th>
            <th className={css.series}>Series</th>
            <th className={css.cap}>Cap</th>
            <th>Volt</th>
            <th>D, mm</th>
            <th>H, mm</th>
            <th>LS, mm</th>
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
