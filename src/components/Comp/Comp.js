import React, { Component } from 'react';
import css from './Comp.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faSyncAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';
import src from '../../images/fc-3300-50.jpg';

class Comp extends Component {
  constructor(props) {
    super(props);
    this.comp = this.props.comp;
    this.minOrder = this.props.comp.minOrder;

    this.state = {
      qnt: 0,
      price: 0,
      total: 0,
      isAddedToCart: true
    }
  }

  getPrice(qnt) {
    if (qnt <= 0) return 0;
    let price = this.comp.sellPrice[0].unitPrice;
    this.comp.sellPrice.forEach(item => {
      if (qnt >= item.qnt) price = item.unitPrice;
    });
    return price;
  }

  qntClick(index) {
    const qnt = this.comp.sellPrice[index].qnt;
    const price = this.comp.sellPrice[index].unitPrice;
    const total = qnt * price;
    this.setState({ qnt, price, total })
  }

  btnPlusClick = () => {
    const qnt = this.state.qnt + this.minOrder;
    const price = this.getPrice(qnt);
    const total = qnt * price;
    this.setState({ qnt, price, total });
  }

  btnMinusClick = () => {
    let qnt = this.state.qnt - this.minOrder;
    if (qnt <= 0) qnt = 0;
    const price = this.getPrice(qnt);
    const total = qnt * price;
    this.setState({ qnt, price, total });
  }

  onChange = (event) => {
    const qnt = +event.target.value;
    const price = this.getPrice(qnt);
    const total = qnt * price;
    this.setState({ qnt, price, total });
  }

  onBlur = (event) => {
    let qnt = +event.target.value;
    if (qnt === 0) {
      qnt = 0
    }
    else if (qnt < this.minOrder) {
      qnt = this.minOrder;
    } else {
      qnt = Math.ceil(qnt / this.minOrder) * this.minOrder
    };
    const price = this.getPrice(qnt);
    const total = qnt * price;
    this.setState({ qnt, price, total });
  }

  addToCart = () => {
    this.setState({ isAddedToCart: !this.state.isAddedToCart });
    console.log('works')
  }

  renderPartNumber() {
    return (
      <td className={css.infoPartNumber}>

        <Tooltip
          placement="left"
          align={{
            offset: [-10, 0]
          }}
          overlay={<img className={css.photo} src={src} />}
          arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
        >
          <div className={css.partNumber}>{this.comp.partNumber}</div>
        </Tooltip>

        <div className={css.manufacture}>{this.comp.manufacture.name}</div>

      </td>
    )
  }

  renderPartName() {
    return (
      <td className={css.infoPartName}>

        <Tooltip
          placement="left"
          align={{
            offset: [-10, 0]
          }}
          overlay={<img className={css.photo} src={src} />}
          arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
        >
          <div className={css.partName}>{this.comp.name}</div>
        </Tooltip>

        <div className={css.manufacture}>{this.comp.manufacture.name}</div>

      </td>
    )
  }

  renderPrice() {
    return (
      <td className={css.price}>
        {this.comp.sellPrice.map((item, index) => (
          <div key={index} className={css.priceRow}>
            <div className={css.qntItem} onClick={() => this.qntClick(index)}>{`${item.qnt}+`}</div>
            <div className={css.priceItem}>{`${item.unitPrice.toFixed(2)} р`}</div>
          </div>
        ))}
      </td>
    )
  }

  renderControl() {
    return (
      <td className={css.control}>
        <button
          className={css.btnMinus}
          onClick={this.btnMinusClick}>
          <FontAwesomeIcon
            icon={faMinus}
            size="xs"
          />
        </button>
        <input
          type="text"
          className={css.input}
          value={this.state.qnt}
          onChange={this.onChange}
          onBlur={this.onBlur}
        />
        <button
          className={css.btnPlus}
          onClick={this.btnPlusClick}>
          <FontAwesomeIcon
            icon={faPlus}
            size="xs"
          />
        </button>
      </td>
    )
  }

  renderTotal() {
    return (
      <td className={css.total}>
        {this.state.total} р
      </td>
    )
  }

  renderCartButton() {
    return (
      <td className={css.cart}>

        {
          this.state.isAddedToCart
            ? <button className={css.buttonAdd} onClick={this.addToCart}>В корзину</button>

            : <>
              <button className={css.buttonRefresh} onClick={this.addToCart}>
                <FontAwesomeIcon
                  className={css.icon}
                  icon={faSyncAlt}
                // size="lg"
                />
              </button>

              <button className={css.buttonRemove} onClick={this.addToCart}>
                <FontAwesomeIcon
                  className={css.icon}
                  icon={faTimes}
                // size="lg"
                />
              </button>
            </>
        }
      </td>
    )
  }
}

export default Comp;
