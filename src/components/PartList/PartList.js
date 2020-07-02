import React from 'react';
import Part from '../Part/Part';
import Caption from '../Caption/Caption';

const PartList = ({ project }) => {

  const { partlist } = project;

  return (
    <table>

      <thead>
        <tr>
          <th>Позиция</th>
          <th>Наименование</th>
          <th>Инфо</th>
          <th>Кол-во</th>
          <th style={{ "width": "100px" }}>Цена</th>
          <th style={{ "width": "85px" }}>Заказ</th>
          <th style={{ "width": "60px" }}>Сумма</th>
          <th style={{ "width": "105px" }}></th>
        </tr>
      </thead>

      <tbody>

        {partlist.map((item, index) => (
          item.type === 'part'
            ? <Part part={item} key={index} />
            : <Caption caption={item} key={index} />
        ))}

      </tbody>
    </table>
  );
}

export default PartList;
