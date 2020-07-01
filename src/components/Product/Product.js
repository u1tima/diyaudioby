import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Icon, IconButton, InputNumber } from 'rsuite';
import { deleteFromCart } from '../../store/cart/actions';
import css from './Product.module.css';

const Product = ({ comp, onDeleteFromCart }) => {

  const { minOrder, sellPrice, orderQnt, unitPrice, totalPrice } = comp;

  const initialState = {
    orderQnt,
    unitPrice,
    totalPrice,
  }

  const [state, setState] = useState(initialState);

  const getPrice = (orderQnt) => {
    if (orderQnt <= 0) return 0;
    let unitPrice = sellPrice[0].unitPrice;
    sellPrice.forEach(item => {
      if (orderQnt >= item.qnt) unitPrice = item.unitPrice;
    });
    return unitPrice;
  }

  const qntClick = (index) => {
    const orderQnt = sellPrice[index].qnt;
    const unitPrice = sellPrice[index].unitPrice;
    const totalPrice = orderQnt * unitPrice;
    setState(state => ({ ...state, orderQnt, unitPrice, totalPrice }))
  }

  const onChangeHandler = (value) => {
    const orderQnt = (+value <= 0) ? 0 : +value
    const unitPrice = getPrice(orderQnt);
    const totalPrice = orderQnt * unitPrice;
    setState(state => ({ ...state, orderQnt, unitPrice, totalPrice }));
  }

  const onBlurHandler = (event) => {
    const value = +event.target.value;
    const orderQnt = Math.ceil(value / minOrder) * minOrder;
    const unitPrice = getPrice(orderQnt);
    const totalPrice = orderQnt * unitPrice;
    setState(state => ({ ...state, orderQnt, unitPrice, totalPrice }));
  }

  return (

    <tr>

      <td>
        <div>{comp.partNumber}</div>
        <div>{comp.manufacture.name}</div>
      </td>

      <td>
        <Icon icon="cog" size="lg" />
      </td>

      <td className={css.price}>
        {sellPrice.map((item, index) => (
          <div key={index} className={css.row}>
            <div className={css.item} onClick={() => qntClick(index)}>{`${item.qnt}+`}</div>
            <div>{`${item.unitPrice.toFixed(2)} р`}</div>
          </div>
        ))}
      </td>

      <td className={css.control}>
        <InputNumber
          size='sm'
          step={minOrder}
          value={state.orderQnt}
          onChange={onChangeHandler}
          onBlur={onBlurHandler} />
      </td>

      <td>
        {state.unitPrice} p
      </td>

      <td>
        {state.totalPrice} p
      </td>

      <td>
        <IconButton onClick={() => onDeleteFromCart(comp)} size='sm' color="red" icon={<Icon icon="close" />} />
      </td>

    </tr>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteFromCart: comp => dispatch(deleteFromCart(comp)),
  }
}

export default connect(null, mapDispatchToProps)(Product);
