import React from 'react';
import { connect } from 'react-redux';
import Part from '../Part/Part';
import Caption from '../Caption/Caption';

const PartList = ({ cart, project }) => {

  const { partlist } = project;

  //   switch (part.type) {
  //     case "caption":
  //       break;

  //     case "part":
  //       const product = cart.find(item => item.id === part.comp.id);
  //       if (product) {
  //         console.log(part)
  //         part.comp = { ...product };
  //         part = { ...part }
  //       }

  //     default:
  //       break;
  //   }
  //   return part;
  // });

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

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(PartList);
