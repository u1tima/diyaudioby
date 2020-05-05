import React from 'react';
import css from './PartList.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faPlus, faMinus, faTools } from '@fortawesome/free-solid-svg-icons';

const PartList = (props) => {
  return (
    <div className={css.partList}>

      <table className={css.table}>

        <thead>
          <tr className={css.row}>
            <th>Позиция</th>
            <th>Наименование</th>
            {/* <th>Инфо</th> */}
            <th>Кол-во</th>
            <th colSpan='2'>Цена</th>
            <th>Заказ</th>
            <th>Сумма</th>
            <th>Корзина</th>
          </tr>
        </thead>

        <tbody>

          <tr className={css.row}>
            <td className={css.caption} colSpan='8'>Конденсаторы SMD 0805 Yageo CC0805 (кратно 10 шт)</td>
          </tr>

          <tr className={css.row}>

            <td className={css.position}>
              OUT: C33, C34
            </td>

            <td className={css.info}>
              <div className={css.name}>RES SMD 0805 47pf 50V 5% NPO</div>
              {/* <div className={css.manufacture}>Yageo</div>
              <div className={css.partNumber}>CC0805</div> */}
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
              <button
                className={css.btnMinus}
              // onClick={this.btnMinusClick}
              >
                <FontAwesomeIcon
                  icon={faMinus}
                  size="xs"
                />
              </button>
              <input
                type="text"
                className={css.input}
              // value={this.state.qnt}
              // onChange={this.handleChange}
              // onBlur={this.handleBlur}
              />
              <button
                className={css.btnPlus}
              // onClick={this.btnPlusClick}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  size="xs"
                />
              </button>
            </td>

            <td className={css.total}>              0 р
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

        </tbody>

      </table>
    </div>
  );
}

export default PartList;
