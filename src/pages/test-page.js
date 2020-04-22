import React from 'react';
import Layout from '../layout/template/layout';
import Sidebar from '../layout/sidebar/sidebar';
import Content from '../layout/content/content';
import css from './test-page.module.scss';
import logoSrc from "../images/0805-(2012-Metric)_tmb.webp";
import { Button, Table } from 'react-bootstrap';

export default () => (
  <Layout>
    <Sidebar side='left'></Sidebar>
    <Content>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan='4'>
            <div className={css.filter}>
      </div>
      <div className={css.sort}>
        <span className={css.sortLabel}>Сортировка: </span>
        <span className={css.sortBy}>наименование </span>
        <span className={css.sortBy}>сопротивление </span>
        <span className={css.sortBy}>точность</span>

      </div>
      {/* <p>Сортировка</p>
      <div>
        <button>Сопротивление</button>
        <button>Точность</button>
      </div> */}
      <div className={css.row}>
        <img className={css.image} src={logoSrc} alt="" />
        <div className={css.mainData}>
          <div className={css.name}>RES SMD 0805 10k 1/8W 1%</div>
          <span className={css.manufacture}>Yageo</span>
          <span className={css.partNumber}>RC0805</span>
        </div>
        <div className={[css.techData, css.cell].join(' ')}>
          <span>Технические характеристики</span>
        </div>
        <div className={[css.sellQty, css.cell].join(' ')}>
          <div className={css.qty}>10+</div>
          <div className={css.qty}>100+</div>
          <div className={css.qty}>1000+</div>
        </div>
        <div className={[css.sellPrice, css.cell].join(' ')}>
          <div className={css.unitPrice}>1,00 р</div>
          <div className={css.unitPrice}>0,75 р</div>
          <div className={css.unitPrice}>0,50 р</div>
        </div>
        <div className={[css.control, css.cell].join(' ')}>
          <button className={css.btnAdd}>-</button>
          <input type="text" />
          <button>+</button>
        </div>
        <div className={[css.total, css.cell].join(' ')}>2100,00 р</div>
        <button className={css.btnAddToCart}>В корзину</button>
      </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="primary">Primary</Button>
      <div className={css.filter}>
      </div>
      <div className={css.sort}>
        <span className={css.sortLabel}>Сортировка: </span>
        <span className={css.sortBy}>наименование </span>
        <span className={css.sortBy}>сопротивление </span>
        <span className={css.sortBy}>точность</span>

      </div>
      {/* <p>Сортировка</p>
      <div>
        <button>Сопротивление</button>
        <button>Точность</button>
      </div> */}
      <div className={css.row}>
        <img className={css.image} src={logoSrc} alt="" />
        <div className={css.mainData}>
          <div className={css.name}>RES SMD 0805 10k 1/8W 1%</div>
          <span className={css.manufacture}>Yageo</span>
          <span className={css.partNumber}>RC0805</span>
        </div>
        <div className={[css.techData, css.cell].join(' ')}>
          <span>Технические характеристики</span>
        </div>
        <div className={[css.sellQty, css.cell].join(' ')}>
          <div className={css.qty}>10+</div>
          <div className={css.qty}>100+</div>
          <div className={css.qty}>1000+</div>
        </div>
        <div className={[css.sellPrice, css.cell].join(' ')}>
          <div className={css.unitPrice}>1,00 р</div>
          <div className={css.unitPrice}>0,75 р</div>
          <div className={css.unitPrice}>0,50 р</div>
        </div>
        <div className={[css.control, css.cell].join(' ')}>
          <button className={css.btnAdd}>-</button>
          <input type="text" />
          <button>+</button>
        </div>
        <div className={[css.total, css.cell].join(' ')}>2100,00 р</div>
        <button className={css.btnAddToCart}>В корзину</button>
      </div>
    </Content>
  </Layout>
)