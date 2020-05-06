import React, { Component } from 'react';
import css from './Comp.module.css';
import src from '../../images/0805-(2012-Metric)_tmb.webp';

import Details from '../Details/Details';
import FormOrder from '../UI/FormOrder/FormOrder';
import ButtonAddToCart from '../UI/ButtonAddToCart/ButtonAddToCart';

class Comp extends Component {

  constructor(props) {
    super(props);
    this.priceData = this.renderPriceData();
    this.techData = this.renderTechData();

    this.state = {
      qnt: 0,
      price: 0,
      total: 0,
    }
  }

  getPrice(qnt) {
    if (qnt <= 0) return 0;
    let price = this.props.comp.sellPrice[0].unitPrice;
    this.props.comp.sellPrice.forEach(item => {
      if (qnt >= item.qnt) price = item.unitPrice;
    });
    return price;
  }

  renderTechData() {
    return this.props.comp.techData.map((tech, index) => (
      <div key={index}>
        {`${tech.name}: ${tech.value}${tech.units}`}
      </div>
    ))
  }

  renderPriceData() {
    return this.props.comp.sellPrice.map((item, index) => {
      const { qnt, unitPrice } = item;
      return (
        <div key={index} className={css.priceRow}>
          <div className={css.qntItem} onClick={() => this.priceClick(index)}>{`${qnt}+`}</div>
          <div className={css.priceItem}>{`${unitPrice.toFixed(2)} р`}</div>
        </div>
      )
    })
  }

  priceClick(index) {
    const qnt = this.props.comp.sellPrice[index].qnt;
    const price = this.props.comp.sellPrice[index].unitPrice;
    const total = qnt * price;
    this.setState({ qnt, price, total })
  }

  btnPlusClick = () => {
    const minOrder = this.props.comp.minOrder;
    const qnt = this.state.qnt + minOrder;
    const price = this.getPrice(qnt);
    const total = qnt * price;
    this.setState({ qnt, price, total });

  }

  btnMinusClick = () => {
    const minOrder = this.props.comp.minOrder;
    let qnt = this.state.qnt - minOrder;
    if (qnt <= 0) qnt = 0;
    const price = this.getPrice(qnt);
    const total = qnt * price;
    this.setState({ qnt, price, total });
  }

  handleChange(event) {
    const qnt = +event.target.value;
    const price = this.getPrice(qnt);
    const total = qnt * price;
    this.setState({ qnt, price, total });
  }

  handleBlur(event) {
    const minOrder = this.props.comp.minOrder;
    let qnt = +event.target.value;
    if (qnt < minOrder) {
      qnt = minOrder;
    } else {
      qnt = Math.ceil(qnt / minOrder) * minOrder
    };
    const price = this.getPrice(qnt);
    const total = qnt * price;
    this.setState({ qnt, price, total });
  }

  addToCart = () => console.log('add to cart')

  render() {

    return (

      <tr className={css.row}>

        <td className={css.image}>
          <img className={css.photo} src={src} alt="" />
        </td>


        <td className={css.info}>
          <div className={css.name}>{this.props.comp.name}</div>
          <div className={css.manufacture}>{this.props.comp.manufacture.name}</div>
          <div className={css.partNumber}>{this.props.comp.partNumber}</div>
        </td>

        <td className={css.details}>
          <Details data={this.techData} />
        </td>

        <td className={css.price}>
          {this.priceData}
        </td>

        <td className={css.control}>
          <FormOrder
            value={this.state.qnt}
            btnMinusClick={this.btnMinusClick}
            btnPlusClick={this.btnPlusClick}
            onChange={(e) => this.handleChange(e)}
            onBlur={(e) => this.handleBlur(e)}
          />
        </td>

        <td className={css.total}>
          {this.state.total} р
        </td>

        <td className={css.cart}>
          <ButtonAddToCart onClick={this.addToCart} />
        </td>

      </tr>
    );
  }
}

export default Comp;
