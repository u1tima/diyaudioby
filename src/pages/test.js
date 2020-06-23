import React from 'react';
import Layout from '../layout/template/layout';
import Sidebar from '../layout/sidebar/sidebar';
import Content from '../layout/content/content';

import Comp from '../components/Comp/Comp';
import Part from '../components/Part/Part';
import Caption from '../components/Caption/Caption';
import CartItem from '../components/CartItem/CartItem';

import complist from '../data/database/elcap';
import project from '../data/database/partlist';
import cart from '../data/database/cart';

export default () => (
  <Layout>
    <Sidebar side='left'></Sidebar>
    <Content>

      <h4>Component List</h4>

      <table style={{ "width": "100%" }}>

        <thead>
          <tr>
            <th>PartNumber</th>
            <th>Series</th>
            <th>Cap</th>
            <th>Volt</th>
            <th>D</th>
            <th>H</th>
            <th>LS</th>
            <th style={{ "width": "100px" }}>Цена</th>
            <th style={{ "width": "85px" }}>Заказ</th>
            <th style={{ "width": "60px" }}>Сумма</th>
            <th style={{ "width": "100px" }}></th>
          </tr>
        </thead>

        <tbody>

          <Comp comp={complist[0]} />
          <Comp comp={complist[1]} />

        </tbody>
      </table>

      <h4>Part List</h4>

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
            <th style={{ "width": "100px" }}></th>
          </tr>
        </thead>

        <tbody>

          {project.partlist.map((item, index) => (
            item.type === 'part'
              ? <Part part={item} key={index} view="part" />
              : <Caption caption={item} key={index} />
          ))}

        </tbody>
      </table>

      <h4>Cart</h4>

      <table className="table">

        <thead>
          <tr>
            <th>PartNumber</th>
            <th>Инфо</th>
            <th style={{ "width": "100px" }}>Цена</th>
            <th style={{ "width": "85px" }}>Заказ</th>
            <th style={{ "width": "100px" }}>Unit price</th>
            <th style={{ "width": "100px" }}>Сумма</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

          {cart.map((item, index) => <CartItem key={index} comp={item} view="cart" />)}

        </tbody>
      </table>

    </Content>
  </Layout>
)