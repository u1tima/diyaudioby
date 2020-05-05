import React, { Component } from 'react';
import css from './Comp.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faPlus, faMinus, faTools } from '@fortawesome/free-solid-svg-icons';
import src from '../../images/0805-(2012-Metric)_tmb.webp';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';

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

  getTechData() {
    return (
      <>
        {this.props.comp.techData.map((tech, index) => (
          <div key={index}>
            {`${tech.name}: ${tech.value}${tech.units}`}
          </div>
        ))}
      </>
    )
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

        <td className={css.image}>
          <img className={css.photo} src={src} alt="" />
        </td>


        <td className={css.info}>
          {/* <div className={css.name}>{this.props.comp.name}</div> */}

          <Tooltip
            placement="top"
            align={{
              offset: [0, -10]
            }}
            overlay={this.getTechData()}
            arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
          >
            <div>{this.props.comp.name}</div>
          </Tooltip>
          <div className={css.manufacture}>{this.props.comp.manufacture.name}</div>
          <div className={css.partNumber}>{this.props.comp.partNumber}</div>
        </td>

        <td className={css.details}>
          <Tooltip
            placement="right"
            align={{
              offset: [10, 0]
            }}
            overlay={this.getTechData()}
            arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
          >
            <FontAwesomeIcon
              icon={faTools}
              size="lg"
            />
          </Tooltip>
        </td>

        <td className={css.price}>
          {this.props.comp.sellPrice.map((item, index) => {

            const { qnt, unitPrice } = item;
            // const total = qnt * unitPrice;

            return (
              <div className={css.priceRow}>
                <div className={css.qntItem} onClick={() => this.priceClick(index)}>{`${qnt}+`}</div>
                <div className={css.priceItem}>{`${unitPrice.toFixed(2)} р`}</div>
                {/* <div className={css.totalItem}>{`${total.toFixed(2)} р`}</div> */}
              </div>
            )
          })}
        </td>


        {/* <td className={css.qnt}>
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

        <td className={css.price}>
          {this.props.comp.sellPrice.map((item, index) => (
            <div
              key={index}
              className={css.priceItem}
            >
              {`${item.unitPrice.toFixed(2)} р`}
            </div>
          ))}
        </td> */}


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
            onChange={this.handleChange}
            onBlur={this.handleBlur}
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

        <td className={css.total}>
          {this.state.total} р
        </td>

        <td className={css.cart}>
          <button
            onClick={() => console.log('Add to cart')}
          >
            <FontAwesomeIcon
              className={css.icon}
              icon={faCartPlus}
              size="lg" />
            В корзину
          </button>
        </td>

      </tr>
    );
  }
}

export default Comp;
