import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';

const Cart = ({ cart }) => {

  return (
    <table>

      <thead>
        <tr>
          <th>PartNumber</th>
          <th>Инфо</th>
          <th style={{ "width": "100px" }}>Цена</th>
          <th style={{ "width": "85px" }}>Заказ</th>
          <th style={{ "width": "100px" }}>Unit price</th>
          <th style={{ "width": "100px" }}>Сумма</th>
          <th style={{ "width": "105px" }}></th>
        </tr>
      </thead>

      <tbody>

        {cart.map(item => <Product key={item.id} comp={item} />)}

      </tbody>
    </table>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Cart);
