import React from 'react';
import Layout from '../layout/template/layout';
import Sidebar from '../layout/sidebar/sidebar';
import Content from '../layout/content/content';
import CompList from '../components/List/CompList';
import Elcap from '../components/Elements/Elcap';
import components from '../data/database/elcap';
import { Button } from 'rsuite';
// import 'rsuite/dist/styles/rsuite-default.css';

export default () => (
  <Layout>
    <Sidebar side='left'></Sidebar>
    <Content>

    <Button>Hello World</Button>

      <CompList cols={['Series', 'Cap', 'Volt', 'D', 'H', 'LS']}>
        {components.map((item, index) => <Elcap key={index} comp={item} />)}
      </CompList>

    </Content>
  </Layout>
)