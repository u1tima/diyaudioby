import React, { Component } from 'react';
import css from './Table.module.css';
import NewPart from '../Part/Part';
import PartCaption from '../PartCaption/PartCaption';

class PartList extends Component {

  constructor(props) {
    super(props);
    this.project = this.props.data;
  }

  render() {

    return (

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
            <th></th>
          </tr>
        </thead>

        <tbody>

          {this.project.parts.map((item, index) => (
            item.type === 'part'
              ? <NewPart key={index} part={item} comp={item.comp} />
              : <PartCaption key={index} caption={item} />
          ))}

        </tbody>

      </table>
    )
  }
}

export default PartList;
