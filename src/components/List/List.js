import React, { Component } from 'react';
import css from './List.module.css';

class List extends Component {

  render() {

    return (

      <table className={css.table}>

        <thead>
          <tr>
            <th className={css.partnumber}>PartNumber</th>
            {/* {this.renderPartNumberHead()} */}
            {/* <th>Серия</th>
            <th>Емкость</th>
            <th>Напряжениe</th>
            <th>D, mm</th>
            <th>H, mm</th>
            <th>LS, mm</th> */}
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

export default List;
