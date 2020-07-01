import React from 'react';
import Layout from '../../layout/template/layout';
import Sidebar from '../../layout/sidebar/sidebar';
import Content from '../../layout/content/content';
import Cart from '../../components/Cart/Cart';

export default () => (
  <Layout>
    <Sidebar side="left"></Sidebar>
    <Content>
      <Cart />
    </Content>
  </Layout>
)