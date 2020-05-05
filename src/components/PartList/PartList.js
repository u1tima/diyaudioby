import React from 'react';
import css from './PartList.module.css';

const PartList = (props) => {
  return (
    <div className={css.partList}>

      <div className={css.table}>

        <thead>
          <tr>
            <th>Фото</th>
            <th>Наименование</th>
            <th>Инфо</th>
            <th>Кол-во</th>
            <th>Цена</th>
            <th>Заказ</th>
            <th>Сумма</th>
            <th>Корзина</th>
          </tr>
        </thead>

        <tbody>
          
        </tbody>

      </div>
    </div>
  );
}

export default PartList;
