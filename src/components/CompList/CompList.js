import React from 'react';
import { connect } from 'react-redux';
import Comp from '../Comp/Comp';
import css from './CompList.module.css';

const CompList = ({ cart, list, cols }) => {

  const complist = list.map(comp => {
    const product = cart.find(item => item.id === comp.id);
    return product ? product : comp;
  })

  return (

    <table>
      <thead>
        <tr>
          <th>PartNumber</th>
          {cols.map((col, index) => <th key={index}>{col}</th>)}
          <th style={{ "width": "100px" }}>Цена</th>
          <th style={{ "width": "85px" }}>Заказ</th>
          <th style={{ "width": "60px" }}>Сумма</th>
          <th style={{ "width": "105px" }}></th>
        </tr>
      </thead>

      <tbody>

        {complist.map((item) => <Comp key={item.id} comp={item} />)}

      </tbody>
    </table>

  );
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(CompList);
