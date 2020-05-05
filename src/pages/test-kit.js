import React from 'react';
import Layout from '../layout/template/layout';
import Sidebar from '../layout/sidebar/sidebar';
import Content from '../layout/content/content';
import PartList from '../components/PartList/PartList';

export default () => (
  <Layout>
    <Sidebar side='left'></Sidebar>
    <Content>

      <PartList />

    </Content>
  </Layout>
)