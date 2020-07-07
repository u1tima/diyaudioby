import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  PartNumber,
  TechData,
  PriceData,
  OrderInput,
  TotalPrice,
  ButtonAddToCart,
  ButtonsChangeCart,
} from '../State/StateView';
import { zeroState, getState, getPrice } from '../State/StateActions';
import { addToCart, refreshCart, removeFromCart } from '../../store/cart/actions';

const Comp = ({ cart, comp, onAddToCart, onRefreshCart, onRemoveFromCart }) => {

  const { minOrder, sellPrice, partNumber, manufacture, techData, stockQnt } = comp;
  const initialState = getState(cart, comp);
  const [state, setState] = useState(initialState);

  const onAddToCartHandler = () => {
    if (state.orderQnt > 0) {
      const inCart = true;
      setState(state => ({ ...state, inCart }));
      onAddToCart({ ...comp, ...state, inCart });
    }
  }

  const onRefreshCartHandler = () => {
    if (state.orderQnt > 0)
      onRefreshCart({ ...comp, ...state });
  };

  const onRemoveFromCartHandler = () => {
    setState(zeroState);
    onRemoveFromCart(comp);
  }

  const onQntClick = index => {
    const orderQnt = sellPrice[index].qnt;
    const unitPrice = sellPrice[index].unitPrice;
    const totalPrice = orderQnt * unitPrice;
    setState(state => ({ ...state, orderQnt, unitPrice, totalPrice }))
  }

  const onChangeHandler = value => {
    const orderQnt = (+value <= 0) ? 0 : +value
    const unitPrice = getPrice(orderQnt, sellPrice);
    const totalPrice = orderQnt * unitPrice;
    setState(state => ({ ...state, orderQnt, unitPrice, totalPrice }));
  }

  const onBlurHandler = (event) => {
    const value = +event.target.value;
    const orderQnt = Math.ceil(value / minOrder) * minOrder;
    const unitPrice = getPrice(orderQnt, sellPrice);
    const totalPrice = orderQnt * unitPrice;
    setState(state => ({ ...state, orderQnt, unitPrice, totalPrice }));
  }

  return (
    <tr>

      <PartNumber
        partNumber={partNumber}
        manufacture={manufacture}
      />

      <TechData data={techData} />

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

      <TotalPrice total={state.totalPrice} />

      {state.inCart
        ? <ButtonsChangeCart
          onRefresh={onRefreshCartHandler}
          onRemove={onRemoveFromCartHandler}
        />
        : <ButtonAddToCart
          isActive={stockQnt !== 0}
          onAdd={onAddToCartHandler}
        />}

    </tr>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: comp => dispatch(addToCart(comp)),
    onRefreshCart: comp => dispatch(refreshCart(comp)),
    onRemoveFromCart: comp => dispatch(removeFromCart(comp)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp)