import React, { Component } from 'react';
import css from './Part.module.css';
import Details from '../Details/Details';
import FormOrder from '../UI/FormOrder/FormOrder';
import ButtonAddToCart from '../UI/ButtonAddToCart/ButtonAddToCart';

class Part extends Component {

  constructor(props) {
    super(props);
    this.part = this.props.part;
    this.comp = this.props.part.comp;
    this.priceData = this.renderPriceData();
    this.techData = this.renderTechData();

    this.state = {
      qnt: 0,
      price: 0,
      total: 0,
    }
  }

  renderPriceData() {
    return this.comp.sellPrice.map((item, index) => {
      const { qnt, unitPrice } = item;
      return (
        <div key={index} className={css.priceRow}>
          <div className={css.qntItem} onClick={() => this.priceClick(index)}>{`${qnt}+`}</div>
          <div className={css.priceItem}>{`${unitPrice.toFixed(2)} р`}</div>
        </div>
      )
    })
  }

  renderTechData() {
    return this.comp.techData.map((tech, index) => (
      <div key={index}>
        {`${tech.name}: ${tech.value}${tech.units}`}
      </div>
    ))
  }

  render() {
    
    return (
      <tr className={css.row}>

        <td className={css.position}>
          {this.part.position}
        </td>

        <td className={css.info}>
          <div className={css.name}>{this.comp.name}</div>
          <div className={css.manufacture}>{this.comp.manufacture.name}</div>
          {/* <div className={css.partNumber}>{this.comp.partNumber}</div> */}
        </td>

        <td className={css.asmQnt}>
          {this.part.asmQnt}
        </td>

        <td className={css.details}>
          <Details data={this.techData} />
        </td>

        <td className={css.price}>
          {/* {this.priceData} */}
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

export default Part;
