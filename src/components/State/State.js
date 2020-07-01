import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, IconButton, Icon, InputNumber } from 'rsuite';
import { addToCart, refreshCart, deleteFromCart } from '../../store/cart/actions';
import css from './State.module.css';

const State = ({ comp, onAddToCart, onRefreshCart, onDeleteFromCart }) => {

  const { minOrder, sellPrice, orderQnt, unitPrice, totalPrice, inCart } = comp;

  const initialState = {
    orderQnt: orderQnt || 0,
    unitPrice: unitPrice || 0,
    totalPrice: totalPrice || 0,
    inCart: inCart || false,
  }

  const [state, setState] = useState(initialState);

  const btnAddToCartClick = () => {
    if (state.orderQnt > 0) {
      const inCart = true;
      setState(state => ({ ...state, inCart }));
      onAddToCart({ ...comp, ...state, inCart });
    }
  }

  const btnRefreshCart = () => {
    if (state.orderQnt > 0)
      onRefreshCart({ ...comp, ...state });
  };

  const btnDeleteFromCart = () => {
    const inCart = false;
    setState(state => ({ ...state, inCart }));
    onDeleteFromCart({ ...comp, inCart })
  }

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

  const showPrice = () => (
    <td className={css.price}>
      {sellPrice.map((item, index) => (
        <div key={index} className={css.row}>
          <div className={css.item} onClick={() => qntClick(index)}>{`${item.qnt}+`}</div>
          <div>{`${item.unitPrice.toFixed(2)} р`}</div>
        </div>
      ))}
    </td>
  )

  const showInput = () => (
    <td className={css.control}>
      <InputNumber
        size='sm'
        step={minOrder}
        value={state.orderQnt}
        onChange={onChangeHandler}
        onBlur={onBlurHandler} />
    </td>
  )

  const showTotal = () => (
    <td>
      {state.totalPrice} p
    </td>
  );

  const showAddButton = () => (
    <td>
      <Button size='sm' appearance="primary" onClick={btnAddToCartClick}>
        В корзину
      </Button>
    </td>
  )

  const showRefreshButton = () => (
    <td>
      <div className={css.buttons}>
        <IconButton onClick={btnRefreshCart} size='sm' color="green" icon={<Icon icon="refresh" />} />
        <IconButton onClick={btnDeleteFromCart} size='sm' color="red" icon={<Icon icon="close" />} />
      </div>
    </td>
  )

  const showCompView = () => (
    <>
      {showPrice()}
      {showInput()}
      {showTotal()}
      {state.inCart ? showRefreshButton() : showAddButton()}
    </>
  )


  return (
    showCompView()
  )
}

// const mapStateToProps = state => state

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: comp => dispatch(addToCart(comp)),
    onRefreshCart: comp => dispatch(refreshCart(comp)),
    onDeleteFromCart: comp => dispatch(deleteFromCart(comp)),
  }
}

export default connect(null, mapDispatchToProps)(State);