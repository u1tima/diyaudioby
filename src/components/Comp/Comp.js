import React, { Component } from 'react';
import css from './Comp.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

class Comp extends Component {

  state = {
    qnt: 0,
    price: 0,
    total: 0,
  }

  getPrice(qnt) {
    if (qnt <= 0) return 0;
    let price = this.props.comp.sellPrice[0].unitPrice;
    this.props.comp.sellPrice.forEach(item => {
      if (qnt >= item.qnt) price = item.unitPrice;
    });
    return price;
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

  handleChange = (event) => {
    const qnt = +event.target.value;
    const price = this.getPrice(qnt);
    const total = qnt * price;
    this.setState({ qnt, price, total });
  }

  handleBlur = (event) => {
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

  render() {

    return (

      <tr className={css.row}>

        <td className={css.cell}>
          <img className={css.photo} src="" alt="" />
        </td>

        <td className={`${css.cell} ${css.info}`}>
          <div className={css.name}>{this.props.comp.name}</div>
          <div className={css.manufacture}>{this.props.comp.manufacture.name}</div>
          <div className={css.partNumber}>{this.props.comp.partNumber}</div>
        </td>

        {/* <td className={css.cell}>
          <div className={css.details}>Детали</div>
        </td> */}


        <td className={`${css.cell} ${css.qnt}`}>
          {this.props.comp.sellPrice.map((item, index) => (
            <div
              key={index}
              className={css.qntItem}
              onClick={() => this.priceClick(index)}
            >
              {`${item.qnt}+`}
            </div>
          ))}

        </td>

        <td className={`${css.cell} ${css.price}`}>
          {this.props.comp.sellPrice.map((item, index) => (
            <div key={index} className={css.priceItem}>{`${item.unitPrice.toFixed(2)} р`}</div>
          ))}
        </td>


        <td className={`${css.cell} ${css.control}`}>
          <button
            onClick={this.btnMinusClick}>

            -
          </button>
          <input
            type="text"
            value={this.state.qnt}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <button onClick={this.btnPlusClick}>+</button>
        </td>

        <td className={`${css.cell} ${css.total}`}>
          {this.state.total}
        </td>

        <td className={`${css.cell} ${css.cart}`}>
          <button className={css.testBtn}>
            <FontAwesomeIcon
              onClick={() => console.log('click')}
              icon={faCartPlus}
              size="lg"
            />
             В корзину
          </button>
        </td>

      </tr>
    );
  }
}

export default Comp;
