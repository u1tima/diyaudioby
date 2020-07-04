import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Icon, InputNumber, Button, IconButton, Notification } from 'rsuite';
import { addToCart, refreshCart, deleteFromCart } from '../../store/cart/actions';
import css from './Part.module.css';

const Part = ({ cart, part, onAddToCart, onRefreshCart, onDeleteFromCart }) => {

  const { comp, asmQnt } = part;
  const { minOrder, sellPrice } = comp;

  const product = cart.find(product => product.id === comp.id);

  const initialState = {
    orderQnt: product ? product.orderQnt : 0,
    unitPrice: product ? product.unitPrice : 0,
    totalPrice: product ? product.totalPrice : 0,
    inCart: !!product,
  }

  const [state, setState] = useState(initialState);

  const btnAddToCartClick = () => {
    if (state.orderQnt > 0) {
      const inCart = true;
      // setTimeout(() => {
        setState(state => ({ ...state, inCart }));
        onAddToCart({ ...comp, ...state, inCart });
        // Notification.success({
        //   title: "success",
        //   description: 'sdfsfsf'
        // })
      // }, 300);
    }
  }

  const btnRefreshCart = () => {
    if (state.orderQnt > 0)
      onRefreshCart({ ...comp, ...state });
  };

  const btnDeleteFromCart = () => {
    const orderQnt = 0;
    const unitPrice = 0;
    const totalPrice = 0;
    const inCart = false;
    setState({ orderQnt, unitPrice, totalPrice, inCart });
    onDeleteFromCart(comp);
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

  const asmQntClick = () => {
    const orderQnt = asmQnt;
    const unitPrice = getPrice(orderQnt);
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

  return (
    <tr>
      <td>
        {part.position}
      </td>

      <td>
        <div>{comp.name}</div>
        <div>{comp.manufacture.name}</div>
      </td>

      <td>
        <Icon icon="cog" size="lg" />
      </td>

      <td>
        <div className={css.asmQnt} onClick={asmQntClick}>
          {asmQnt}
        </div>
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
        {state.totalPrice} p
      </td>

      {state.inCart ? showRefreshButton() : showAddButton()}

    </tr>
  );
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
    onDeleteFromCart: comp => dispatch(deleteFromCart(comp)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Part);
