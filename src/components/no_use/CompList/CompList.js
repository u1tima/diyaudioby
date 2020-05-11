import React, { Component } from 'react';
import css from './CompList.module.css';
// import elcap from '../../data/database/elcap';
import Comp from '../Comp/Comp';
import Elem from '../../Elem/Elem';
import Elcap from '../../Elcap/Elcap';


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
              <th className={css.partnumber}>PartNumber</th>
              {/* <th>Инфо</th> */}
              {/* <th>Серия</th>
              <th>Емкость</th>
              <th>Напряжениe</th>
              <th>D, mm</th>
              <th>H, mm</th>
              <th>LS, mm</th> */}
              <th>Цена</th>
              <th>Заказ</th>
              <th>Сумма</th>
              <th></th>
            </tr>
          </thead>

          <tbody>

            {this.components.map((item, index) => {
              return (
                <tr className={css.row} key={index}>
                  <Elcap key={index} comp={item} />
                </tr>
              )
            })}

          </tbody>
        </table >
      </div>
    );
  }
}

export default CompList;
