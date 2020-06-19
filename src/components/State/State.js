import React, { useState } from 'react';
import css from './State.module.css';
import { Button, IconButton, Icon, InputNumber } from 'rsuite';

const CompState = ({ comp, asmQnt }) => {

  const { minOrder, sellPrice } = comp;

  const [state, setState] = useState({
    qnt: 0,
    price: 0,
    total: 0,
    cart: false
  });

  const testClick = () => {
    const test = {...comp, ...state};
    console.log(test)
  }

  const getPrice = (qnt) => {
    if (qnt <= 0) return 0;
    let price = sellPrice[0].unitPrice;
    sellPrice.forEach(item => {
      if (qnt >= item.qnt) price = item.unitPrice;
    });
    return price;
  }

  const qntClick = (index) => {
    const qnt = sellPrice[index].qnt;
    const price = sellPrice[index].unitPrice;
    const total = qnt * price;
    setState({ qnt, price, total })
  }

  const asmQntClick = () => {
    const qnt = asmQnt;
    const price = getPrice(qnt);
    const total = qnt * price;
    setState({ qnt, price, total });
  }

  const onChangeHandler = (value) => {
    const qnt = (+value <= 0) ? 0 : +value
    const price = getPrice(qnt);
    const total = qnt * price;
    setState({ qnt, price, total });
  }

  const onBlurHandler = (event) => {
    const value = +event.target.value;
    const qnt = Math.ceil(value / minOrder) * minOrder;
    const price = getPrice(qnt);
    const total = qnt * price;
    setState({ qnt, price, total });
  }

  const showAsmQnt = () => (
    <td onClick={asmQntClick}>
      <div className={css.asmQnt}>
        {asmQnt}
      </div>
    </td>
  )

  const showPrice = () => (
    <td className={css.price}>
      {/* <td> */}
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
      {/* <td> */}
      <InputNumber
        size='sm'
        step={minOrder}
        value={state.qnt}
        onChange={onChangeHandler}
        onBlur={onBlurHandler} />
    </td>
  )

  const showTotal = () => (
    <td className={css.total}>{state.total} p</td>
    // <td>{state.total} p</td>
  );

  const showAddButton = () => (
    // <td className={css.cart}>
      <td>
      <Button size='sm' appearance="primary">
        В корзину
      </Button>
    </td>
  )

  const showCartButtons = () => (
    <td className={css.cart}>      
      <IconButton onClick={testClick} size='sm' color="green" icon={<Icon icon="refresh" />} />
      <IconButton size='sm' color="red" icon={<Icon icon="close" />} />
    </td>
  )

  return (
    <>
      {asmQnt ? showAsmQnt() : null}
      {showPrice()}
      {showInput()}
      {showTotal()}
      {showAddButton()}
      {/* {showCartButtons()} */}
    </>
  )
}

export default CompState;