import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  PartNumber,
  Info,
  PriceData,
  OrderInput,
  UnitPrice,
  TotalPrice,
  ButtonRemoveFromCart,
} from '../State/StateView';
import { getPrice } from '../State/StateActions';
import { refreshCart, removeFromCart } from '../../store/cart/actions';

const Product = ({ comp, onRemoveFromCart, onRefreshCart }) => {

  const { minOrder, sellPrice, partNumber, manufacture } = comp;
  const { orderQnt, unitPrice, totalPrice } = comp;

  const initialState = {
    orderQnt,
    unitPrice,
    totalPrice,
    inCart: true,
  }

  const [state, setState] = useState(initialState);

  const onQntClick = index => {
    const orderQnt = sellPrice[index].qnt;
    const unitPrice = sellPrice[index].unitPrice;
    const totalPrice = orderQnt * unitPrice;
    setState(state => ({ ...state, orderQnt, unitPrice, totalPrice }))
    onRefreshCart({ ...comp, orderQnt, unitPrice, totalPrice });
  }

  const onChangeHandler = value => {
    const orderQnt = (+value <= 0) ? 0 : +value
    const unitPrice = getPrice(orderQnt, sellPrice);
    const totalPrice = orderQnt * unitPrice;
    setState(state => ({ ...state, orderQnt, unitPrice, totalPrice }));
    onRefreshCart({ ...comp, orderQnt, unitPrice, totalPrice });
  }

  const onBlurHandler = event => {
    const value = +event.target.value;
    const orderQnt = Math.ceil(value / minOrder) * minOrder;
    const unitPrice = getPrice(orderQnt, sellPrice);
    const totalPrice = orderQnt * unitPrice;
    setState(state => ({ ...state, orderQnt, unitPrice, totalPrice }));
    onRefreshCart({ ...comp, orderQnt, unitPrice, totalPrice });
  }

  return (

    <tr>

      <PartNumber
        partNumber={partNumber}
        manufacture={manufacture}
      />

      <Info />

      <PriceData
        data={sellPrice}
        onQntClick={onQntClick}
      />

      <OrderInput
        step={minOrder}
        value={state.orderQnt}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />

      <UnitPrice price={state.unitPrice} />
      <TotalPrice total={state.totalPrice} />
      <ButtonRemoveFromCart onRemove={() => onRemoveFromCart(comp)} />

    </tr>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onRefreshCart: comp => dispatch(refreshCart(comp)),
    onRemoveFromCart: comp => dispatch(removeFromCart(comp)),
  }
}

export default connect(null, mapDispatchToProps)(Product);
