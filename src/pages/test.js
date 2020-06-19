import React from 'react';
import Layout from '../layout/template/layout';
import Sidebar from '../layout/sidebar/sidebar';
import Content from '../layout/content/content';

import State from '../components/State/State';
import Comp from '../components/Comp/Comp';
import Part from '../components/Part/Part';
import Caption from '../components/Caption/Caption';

import complist from '../data/database/elcap';
import project from '../data/database/partlist';

// for cart
import { Button, IconButton, Icon, InputNumber } from 'rsuite';


export default () => (
  <Layout>
    <Sidebar side='left'></Sidebar>
    <Content>

      <table style={{ "margin-bottom": "10px" }}>

        <thead>
          <tr>
            <th style={{ "width": "100px" }}>Цена</th>
            <th style={{ "width": "85px" }}>Заказ</th>
            <th style={{ "width": "60px" }}>Сумма</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <State comp={complist[0]} />
          </tr>
        </tbody>
      </table>

      <h4 style={{ "margin-bottom": "10px" }}>Component List</h4>

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
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <Comp comp={complist[0]} />
          </tr>
          <tr>
            <Comp comp={complist[1]} />
          </tr>
        </tbody>
      </table>

      <h4 style={{ "margin-bottom": "10px" }}>Part List</h4>

      <table style={{ "width": "100%" }}>

        <thead>
          <tr>
            <th>Позиция</th>
            <th>Наименование</th>
            <th>Инфо</th>
            <th>Кол-во</th>
            <th style={{ "width": "100px" }}>Цена</th>
            <th style={{ "width": "85px" }}>Заказ</th>
            <th style={{ "width": "60px" }}>Сумма</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

          {project.partlist.map((item, index) => (
            <tr key={index}>
              {item.type === 'part'
                ? <Part part={item} />
                : <Caption caption={item} />}
            </tr>
          ))}

        </tbody>
      </table>

      <h4 style={{ "margin-bottom": "10px" }}>Cart</h4>

      <table style={{ "width": "100%" }}>

        <thead>
          <tr>
            <th>PartNumber</th>
            <th>Инфо</th>
            <th style={{ "width": "85px" }}>Кол-во</th>
            <th>Unit Price</th>
            <th>Сумма</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

          <tr>

            <td>
              <div>EEUFC1C101</div>
              <div>Panasonic</div>
            </td>

            <td>
              <Icon icon="cog" size="lg" />
            </td>

            <td>
              <InputNumber size='sm' />
            </td>

            <td>
              220 р
            </td>

            <td>
              5000 р
            </td>

            <td>
              <IconButton size='sm' color="red" icon={<Icon icon="close" />} />
            </td>

          </tr>

        </tbody>
      </table>

    </Content>
  </Layout>
)