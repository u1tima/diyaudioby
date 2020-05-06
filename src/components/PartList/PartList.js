import React, { Component } from 'react';
import css from './PartList.module.css';
import Part from '../Part/Part';
import PartCaption from '../PartCaption/PartCaption';

class PartList extends Component {

  constructor(props) {
    super(props);
    this.project = this.props.data;
  }

  addToCart = () => console.log('Add to cart')

  render() {

    return (

      <div className={css.partList}>

        <table className={css.table}>

          <thead>
            <tr className={css.row}>
              <th>Позиция</th>
              <th>Наименование</th>
              <th>Кол-во</th>
              <th>Инфо</th>
              <th>Цена</th>
              <th>Заказ</th>
              <th>Сумма</th>
              <th>Корзина</th>
            </tr>
          </thead>

          <tbody>

            {this.project.parts.map((item, index) => (
              item.type === 'part'
                ? <Part key={index} part={item} />
                : <PartCaption key={index} caption={item} />
            ))}

          {/*   <tr className={css.row}>
              <td className={css.caption} colSpan='8'>Конденсаторы SMD 0805 Yageo CC0805 (кратно 10 шт)</td>
            </tr>

           <tr className={css.row}>

              <td className={css.position}>
                OUT: C33, C34
            </td>

              <td className={css.info}>
                <div className={css.name}>RES SMD 0805 47pf 50V 5% NPO</div>
                <div className={css.manufacture}>Yageo</div>
              <div className={css.partNumber}>CC0805</div>
              </td>

              <td className={css.asmQnt}>2</td>

              <td className={css.qnt}>
                <div className={css.qntItem}>10+</div>
                <div className={css.qntItem}>25+</div>
                <div className={css.qntItem}>50+</div>
              </td>

              <td className={css.price}>
                <div className={css.priceItem}>10.00 р</div>
                <div className={css.priceItem}>8.00 р</div>
                <div className={css.priceItem}>5.00 р</div>
              </td>

              <td className={css.control}>
                <FormOrder />
              </td>

              <td className={css.total}> 0 р </td>

              <td className={css.cart}>
                <ButtonAddToCart onClick={this.addToCart} />
              </td>

            </tr> */}

          </tbody>

        </table>
      </div>
    )
  }
}

export default PartList;
