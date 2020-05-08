import React from 'react';
import Layout from '../layout/template/layout';
import Sidebar from '../layout/sidebar/sidebar';
import Content from '../layout/content/content';
import CompList from '../components/CompList/CompList';
import components from '../data/database/elcap';


export default () => (
  <Layout>
    <Sidebar side='left'></Sidebar>
    <Content>

      <CompList data={components}/>

    </Content>
  </Layout>
)