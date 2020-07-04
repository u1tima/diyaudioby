import React from 'react';
import Part from '../Part/Part';
import Caption from '../Caption/Caption';
import src from '../../images/projects/psl-3604/psl-3604_view.jpg';
import css from './PartList.module.css';

const PartList = ({ project }) => {

  const { partlist } = project;

  const getPrice = (asmQnt, sellPrice) => {
    let unitPrice = sellPrice[0].unitPrice;
    sellPrice.forEach(item => {
      if (asmQnt >= item.qnt) unitPrice = item.unitPrice;
    });
    return unitPrice;
  }

  const kitPrice = partlist.reduce((acc, val) => {
    if (val.type === "caption") return acc + 0;
    const { asmQnt } = val;
    const { sellPrice } = val.comp;
    const price = getPrice(asmQnt, sellPrice)
    const totalCompPrice = asmQnt * price;
    return acc + totalCompPrice;
  }, 0);

  return (
    <>
      <div className={css.info}>
        <img className={css.projectImage} src={src} alt="" />
        <div className={css.projectData}>
          <h5>Блок питания PSL-3604</h5>
          <div>Описание</div>
          <div>Документация</div>
          <div>PCBWay</div>
          <div>Стоимость кита: {kitPrice} р</div>
        </div>
      </div>
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
    </>
  );
}

export default PartList;
