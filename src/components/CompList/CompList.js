import React, { Component } from 'react';
import css from './CompList.module.css';
// import elcap from '../../data/database/elcap';
import Comp from '../Comp/Comp';
import Elem from '../Elem/Elem';


class CompList extends Component {

  constructor(props) {
    super(props);
    this.components = this.props.data;
  }

  // getSortProps() {
  //   const arr = this.state.components.map(comp => comp.techData.map(tech => tech.name));
  // }

  render() {

    return (

      <div>

        {/* {this.state.sortProps.map((item, index) => (
          <button key={index}>{item}</button>
        ))} */}

        <table className={css.table}>

          <thead>
            <tr>
              {/* <th>Фото</th> */}
              <th className={css.partnumber}>Наименование</th>
              {/* <th>Инфо</th> */}
              <th>Серия</th>
              <th>Емкость</th>
              <th>Напряжениe</th>
              <th>D, mm</th>
              <th>H, mm</th>
              <th>LS, mm</th>
              <th>Цена</th>
              <th>Заказ</th>
              <th>Сумма</th>
              <th>Корзина</th>
            </tr>
          </thead>

          <tbody>

            {this.components.map((item, index) => (
              <Comp key={index} comp={item} />
            ))}

          </tbody>
        </table >
      </div>
    );
  }
}

export default CompList;
