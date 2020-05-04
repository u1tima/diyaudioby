import React, { Component } from 'react';
import css from './CompList.module.css';
import elcap from '../../data/database/elcap';
import Comp from '../Comp/Comp';


class CompList extends Component {

  constructor() {
    super();
    this.state = {
      components: elcap,
      sortProps: [],
    };
    // this.getSortProps();
  }


  // getSortProps() {
  //   const arr = this.state.components.map(comp => comp.techData.map(tech => tech.name));

  //   // this.setState({ sortProps })
  // }

  render() {

    return (

      <div className={css.compList}>

        {/* {this.state.sortProps.map((item, index) => (
          <button key={index}>{item}</button>
        ))} */}

        <div className={css.table}>

              <div className={css.th}>Фото</div>
              <div className={css.th}>Наименование</div>
              <div className={css.th}>Инфо</div>
              <div className={css.th}>Кол-во</div>
              <div className={css.th}>Цена</div>
              <div className={css.th}>Заказ</div>
              <div className={css.th}>Сумма</div>
              <div className={css.th}>Корзина</div>

            {this.state.components.map((item, index) => (
              <Comp key={index} comp={item} />
            ))}

        </div >
      </div>
    );
  }
}

export default CompList;
